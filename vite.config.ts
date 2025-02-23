import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Task-Landing_Page/",  // 👈 Important for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
