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
      includeAssets: ['favicon.ico', 'vite.svg', 'couple.jpg', 'invitation.jpg', 'icon-192.png', 'icon-512.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,webmanifest}']
      },
      manifest: {
        name: 'Adrianna & Thomas — Wedding & Bridal Party Hub',
        short_name: 'Bridal Hub',
        description: 'Whimsical Powder Blue Bridal Party Hub for Adrianna & Thomas\'s Wedding',
        start_url: './',
        scope: './',
        theme_color: '#5b768e',
        background_color: '#f4f8fc',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: './icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: './icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
