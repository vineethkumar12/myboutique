import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/myboutique/",
  server: {
    host: "localhost", // Strictly use localhost
    port: 5173,
    strictPort: true,
    open: true, // Automatically open browser
    cors: false, // Block external network access
  },
});
