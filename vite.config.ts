import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      ...reactRefresh(),
      apply: 'serve', // Disable this plugin when build
    },
    tsconfigPaths(),
  ],
  build: {
    outDir: 'build',
    assetsDir: 'static',
    minify: false,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
