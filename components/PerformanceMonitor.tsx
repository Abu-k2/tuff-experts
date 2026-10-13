import React, { useEffect, useState } from 'react';

const PerformanceMonitor: React.FC = () => {
  const [performanceData, setPerformanceData] = useState<any>(null);

  useEffect(() => {
    // Only run in browser
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            setPerformanceData({
              loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              requestCount: performance.getEntriesByType('resource').length,
            });
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);

  if (!performanceData) return null;

  return (
    <div className="fixed top-20 right-4 bg-black bg-opacity-70 text-white p-3 rounded text-xs z-50">
      <div>Load Time: {performanceData.loadTime}ms</div>
      <div>Resources: {performanceData.requestCount}</div>
    </div>
  );
};

export default PerformanceMonitor;