import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
  plugins: [
    VitePWA({
      manifest: {
        name: "App",
        short_name: "App",
        start_url: "index.html",
        display: "standalone",
        icons: [],
        background_color: "#31d53d",
        theme_color: "#31d53d",
      },
    }),
  ],
});
