import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      devOptions: {
        enabled: true, // або false, якщо не хочеш PWA в dev
        suppressWarnings: true, // <--- головне
      }, // Delete on prd
      registerType: "autoUpdate",
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icons/*.png'],
      injectRegister: 'auto',
      manifest: {
        name: "Drunk Cards",
        short_name: "Drunk Cards",
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/icons/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icons/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      },
    }),
  ],
});
