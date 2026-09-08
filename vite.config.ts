import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    manifest: !isSsrBuild,
    emptyOutDir: !isSsrBuild,
    rollupOptions: {
      input: path.resolve(__dirname, "src/server/client.tsx"),
    },
  },
}));
