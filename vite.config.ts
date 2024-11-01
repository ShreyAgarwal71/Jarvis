import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import babel from '@rollup/plugin-babel'; // Import the babel plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      // Include necessary Babel presets here
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    }),
  ],
});
