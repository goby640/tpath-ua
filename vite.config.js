import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// export default defineConfig({
//   base: "/tpath-ua/",
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
// });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    define: {
      'process.env': env // Only exposes `VITE_` variables
    },
    base: env.VITE_BASE_URL,
    plugins: [
      react(),
      tailwindcss(),
    ],
  };
});

