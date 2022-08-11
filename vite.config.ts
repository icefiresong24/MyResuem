import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
// import autoImport from 'unplugin-auto-import/vite'
import WindiCSS from "vite-plugin-windicss";
console.log(path.resolve(__dirname + "src"));
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@":path.resolve(__dirname+'src')
    }
  },
  server: {
    port: 3000,
    open:true
  },
  plugins: [react(), WindiCSS()],
});
