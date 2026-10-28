import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Vite configuration with PWA support & relative base for GitHub Pages
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'couple.jpg', 'invitation.jpg'],
      manifest: {
        name: 'Adrianna & Thomas — Wedding & Bridal Party Hub',
        short_name: 'Adrianna & Thomas',
        description: 'Whimsical Powder Blue Bridal Party Hub for Adrianna & Thomas\'s Wedding',
        theme_color: '#3978af',
        background_color: '#f4f8fc',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: './icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
