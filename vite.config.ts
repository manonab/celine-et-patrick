import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "0.0.0.0",
    },
    define: {
      "process.env": {},
    },
    build: {
      outDir: "dist",
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
    ],
  };
});
