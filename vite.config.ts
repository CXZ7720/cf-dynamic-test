import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as babel from 'unplugin-babel';
import raw from 'vite-raw-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  babel.vitePlugin(),raw({
    fileRegex: /\.graphql$/,
    }),
  ],
  server: {
    port: 3000,
  },
  esbuild: {
    jsx: 'transform',
  },
})
