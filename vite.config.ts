import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import Unfonts from "unplugin-fonts/vite"

const baseUrl = process.env.BASE_URL ?? "/"

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl.startsWith("/") ? baseUrl : `/${baseUrl}`, // for GitHub Pages
  plugins: [
    react(),
    Unfonts({
      google: {
        families: ["Encode Sans", "Roboto"],
      },
    }),
  ],
})
