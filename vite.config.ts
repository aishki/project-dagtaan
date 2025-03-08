import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Official Vite React plugin
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
function tailwindcss(): import("vite").PluginOption {
  throw new Error("Function not implemented.");
}
