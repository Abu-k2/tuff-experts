import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.NODE_ENV': JSON.stringify(mode)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'framer-motion': ['framer-motion'],
              'react-vendor': ['react', 'react-dom'],
            },
          },
        },
        chunkSizeWarningLimit: 1000,
        // Optimize images and assets
        assetsInlineLimit: 4096, // Inline assets smaller than 4kb
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion']
      }
    };
});