import { defineConfig } from "vite";
import { resolve } from "node:path";
import * as glob from "glob";
import HandlebarsPlugin from "vite-plugin-handlebars";
import { getData } from "./data/index.js";

function obtenerEntradas() {
  return Object.fromEntries(
    glob.sync("./**/*.html", {
      ignore: ["./dist/**", "./node_modules/**"]
    }).map((file) => [
      file.slice(0, file.length - file.split(".").pop().length - 1),
      resolve(__dirname, file)
    ])
  );
}

export default defineConfig({
  appType: "mpa",
  build: {
    rollupOptions: {
      input: obtenerEntradas()
    }
  },
  plugins: [
    HandlebarsPlugin({
      partialDirectory: resolve(__dirname, "components"),
      context: (page) => getData(page)
    })
  ]
});