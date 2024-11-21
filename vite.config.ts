import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: './build',
  },
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
      include: '**/*.tsx',
    }),
    tsconfigPaths(),
    svgr(),
  ],
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
  esbuild: {
    define: {
      this: 'window',
    },
    jsxFactory: `jsx`,
  },
});
