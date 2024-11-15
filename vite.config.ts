import convertPath from "@stdlib/utils-convert-path";
import react from "@vitejs/plugin-react";
import path from "path";
import stringHash from "string-hash";
import { defineConfig, UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(async ({ mode }) => {
  return {
    server: {
      port: 3000,
    },

    plugins: [react(), tsconfigPaths()],

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
    },
  } satisfies UserConfig;
});
