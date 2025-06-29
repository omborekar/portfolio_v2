  import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/portfolio_v2/', // <-- Add this line with your repo name
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
});
