import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: './',
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react(), WindiCSS(), autoImport({ imports: ['react'], dts: 'src/auto-imports.d.ts' })],
})
