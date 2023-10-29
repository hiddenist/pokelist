import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import Unfonts from "unplugin-fonts/vite"

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL ?? "/", // for GitHub Pages
  plugins: [
    react(),
    Unfonts({
      google: {
        families: ["Encode Sans", "Roboto"],
      },
    }),
  ],
})
