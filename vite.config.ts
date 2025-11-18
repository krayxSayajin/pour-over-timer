import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// IMPORTANT: Change 'pour-over-timer' to match your GitHub repository name
const REPO_NAME = 'pour-over-timer';

export default defineConfig({
  // Set base path for GitHub Pages
  base: process.env.GITHUB_ACTIONS ? `/${REPO_NAME}/` : '/',
  
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  
  root: path.resolve(import.meta.dirname, "client"),
  
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
