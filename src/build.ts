// Note: This script builds the preview app for deploy to https://samples.jsx.email against
// apps/demo/emails

import { join, resolve } from "path";

import { build } from "vite";

process.chdir(join(__dirname, "../node_modules/@jsx-email/cli/dist/app"));

(async () => {
  const { default: config } = await import(
    "../node_modules/@jsx-email/cli/dist/app/vite.config"
  );
  await build({
    ...config,
    build: {
      outDir: "./dist",
      target: "esnext",
    },
    configFile: false,
    define: {
      "process.platform": null,
      "process.version": null,
    },
    resolve: {
      alias: {
        "@": resolve("../../../../../src/templates"),
        ...config.resolve?.alias,
      },
    },
  });
})();
