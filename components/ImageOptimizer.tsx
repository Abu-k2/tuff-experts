import React, { useState, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "eager" | "lazy";
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  loading = "lazy" 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      setImageError(true);
    };
    
    // If image is already cached
    if (img.complete) {
      setImageLoaded(true);
    }
  }, [src]);

  // For critical images (like hero background), we might want to preload
  useEffect(() => {
    if (loading === "eager") {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = src;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, loading]);

  return (
    <>
      {!imageLoaded && !imageError && (
        <div 
          className={`bg-gray-200 animate-pulse ${className}`} 
          style={style}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imageLoaded ? 'block' : 'hidden'}`}
        style={style}
        loading={loading}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
      {imageError && (
        <div 
          className={`bg-gray-300 flex items-center justify-center ${className}`} 
          style={style}
        >
          <span className="text-gray-500">Image failed to load</span>
        </div>
      )}
    </>
  );
};

export default ImageOptimizer;