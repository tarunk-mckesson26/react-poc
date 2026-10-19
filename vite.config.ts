import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    tailwindcss()
  ],
});