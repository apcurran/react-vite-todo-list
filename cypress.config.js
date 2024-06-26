import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173/", // URL of Vite react todo app
    },
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
});
