import convertPath from "@stdlib/utils-convert-path";
import react from "@vitejs/plugin-react";
import path from "path";
import stringHash from "string-hash";
import { defineConfig, UserConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import pkg from "./package.json";

export default defineConfig(async ({ mode }) => {
  return {
    server: {
      port: 3000,
    },

    plugins: [
      react(),
      tsconfigPaths(),
      dts({
        insertTypesEntry: true,
        tsconfigPath: "./tsconfig.build.json",
      }),
    ],

    base: mode === "production" ? "/ui" : "/",

    css: {
      modules: {
        generateScopedName: (name, filename, css) => {
          const i = css.indexOf(`.${name}`);
          const lineNumber = css.substring(0, i).split(/[\r\n]/).length;
          const hash = stringHash(css).toString(36).substring(0, 5);
          const component = path.posix
            .basename(convertPath(filename, "posix"))
            .split(".")
            .shift();

          return `${component}_${name}_${hash}_${lineNumber}`;
        },
      },

      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },

    build: {
      lib: {
        entry: "src/index.ts",
        name: "index",
        fileName: "index",
        formats: ["es"],
      },

      rollupOptions: {
        external: Object.keys(pkg.dependencies)
          .map((name) => [name, new RegExp(`${name}/(.*)`)])
          .flat(),
      },
    },
  } satisfies UserConfig;
});
