import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import path from "path"

const options = { pretty: true } // fix: pug pretty is deprecated!
const locals = { name: "My Pug" }

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [pugPlugin(options, locals)],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use '@/styles/helpers' as *;`,
      },
    },
  },
  // customLogger: {
  //   info: (msg) => {
  //     if (!msg.startsWith("pug's not hot")) {
  //       console.info(msg)
  //     }
  //   },
  //   warn: console.warn,
  //   error: console.error,
  // },
})
