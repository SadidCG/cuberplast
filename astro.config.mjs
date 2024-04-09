import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


import db from "@astrojs/db";
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db()],
  output: 'server',
  adapter: vercel(),
});
