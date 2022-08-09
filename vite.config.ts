import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import WindiCSS from "vite-plugin-windicss";
console.log(path.resolve(__dirname + "src"));
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@":path.resolve(__dirname+'src')
    }
  },
  plugins: [react(), WindiCSS()],
});
