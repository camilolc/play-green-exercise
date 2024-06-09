import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({ 
      registerType: 'autoUpdate',   
      includeAssets: ['likeButton.png'],
      manifest: {
        name: 'Sports PWA',
        short_name: 'Sports',
        start_url: '/',   
      },
      
      workbox: {
        // globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            // Almacena en caché los datos de un endpoint específico
            urlPattern: 'https://dff6kz4nmb.execute-api.us-east-1.amazonaws.com/development/test-front',
            handler: 'CacheFirst',
            options: {
              cacheName: 'sportList',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24, // 1 día
              },
            },
          },        
         
        ],
      }
    
    })

  ],
})
