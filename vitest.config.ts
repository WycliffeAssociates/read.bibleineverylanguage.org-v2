/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    uiBase: "http://localhost:4321",
    
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
    // environment: "jsdom",
    // transformMode: {
    //   web: [/\.jsx?$/]
    // },
    // deps: {
    //   inline: [/solid-js/]
    // },
    include: ["./tests/unit/*"]
  }
});
