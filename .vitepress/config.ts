import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Luke Stigdon",
  description: "Platform Engineer and Cloud Technology Enthusiast",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
  srcDir: "./src",
  outDir: "./dist",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // fixes compiler warnings until vitepress uses the latest vite version
          api: "modern",
        },
      },
    },
  },
});
