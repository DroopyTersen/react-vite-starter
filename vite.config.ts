import { defineConfig } from "vite";
import * as path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { visualizer } from "rollup-plugin-visualizer";
import ssr from "vite-plugin-ssr/plugin";
export const viteAliases = {
  "~common": path.resolve(__dirname, "./src/common"),
  "~features": path.resolve(__dirname, "./src/features"),
  "~global": path.resolve(__dirname, "./src/global"),
  "~ui-toolkit": path.resolve(__dirname, "./src/ui-toolkit"),
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: viteAliases },
  server: {
    open: "/",
  },
  plugins: [reactRefresh(), ssr(), visualizer()],
});
