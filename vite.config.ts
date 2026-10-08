import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  // server: {
  //   port: 8080,
  // },
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss()
  ],
});