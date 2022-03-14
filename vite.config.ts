import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      ...reactRefresh(),
      apply: 'serve', // Disable this plugin when build
    },
    tsconfigPaths(),
    {
      ...viteSingleFile(),
      apply: 'build', // Disable this plugin when dev
    },
  ],
  build: {
    outDir: 'build',
    assetsDir: 'static',
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => 'everything.js',
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
