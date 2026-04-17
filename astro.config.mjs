// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Lato",
      cssVariable: "--font-lato",
      weights: [300, 400, 600]
    },
    {
      provider: fontProviders.google(),
      name: "Bebas Neue",
      cssVariable: "--font-bebas-neue",
    },
  ]
});