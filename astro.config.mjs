import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  //   integrations: [tailwind(),partytown({
  // 	config: {
  // 	  forward: ["dataLayer.push"],
  // 	},
  // })],
  prefetch: true,
  output: "server",
  site: "https://www.empleoemprende.es/",
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  adapter: vercel(),
  experimental: {
    rewriting: true,
  },
});
