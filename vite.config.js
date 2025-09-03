import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: '/prabhu.k/',
  plugins: [react()],
});

process.env.BROWSER = "chromium";