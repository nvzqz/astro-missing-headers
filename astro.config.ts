import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: nodejs({
        mode: "standalone",
    }),
    server: {
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
        },
    },
});
