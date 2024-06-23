import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5171
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.js'),
      name: 'VueTwind',
      fileName: (format) => `vue-twind.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'twind'],
      output: {
        globals: {
          vue: 'Vue',
          twind: 'twind'
        }
      }
    }
  }
})
