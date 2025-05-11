// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Other config options...
  site: "http://localhost:4321/",
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },
});
