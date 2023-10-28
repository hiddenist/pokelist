import { defineConfig } from 'vite'
import Unfonts from 'unplugin-fonts/vite'

export default defineConfig({
  plugins: [
    Unfonts({
      google: {
        families: ['Encode Sans', 'Roboto']
      }
    })
  ],
})
