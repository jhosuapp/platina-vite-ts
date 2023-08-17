import path from "path";
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        root: path.join(__dirname, "src"),
        outDir: path.join(__dirname, "public"),
        sourcemap: true,
        manifest: true,
    },
    publicDir: 'public/assets'
});