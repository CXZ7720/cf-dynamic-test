import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as babel from 'unplugin-babel';
import raw from 'vite-raw-plugin'
import legacy from '@vitejs/plugin-legacy'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  babel.vitePlugin(),raw({
    fileRegex: /\.graphql$/,
    }),
    legacy({
      targets: ['and_chr >= 66', 'ios_saf >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: true

    })
  ],
  server: {
    port: 3000,
  },
  esbuild: {
    jsx: 'transform',
  },
})
