import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Local development port
    host: '0.0.0.0', // Allow external access
  },
  preview: {
    port: 5173, // Convert PORT to number
    host: '0.0.0.0', // Bind to all interfaces
    allowedHosts: ['typescriptreact.onrender.com'],
  }
});
