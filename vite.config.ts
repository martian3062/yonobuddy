import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/yonobuddy/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          icons: ["lucide-react"]
        }
      }
    }
  },
  server: {
    port: 5173,
    strictPort: false
  }
});
