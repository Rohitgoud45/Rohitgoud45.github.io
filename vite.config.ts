import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' so the same build works on Vercel (root) and GitHub Pages (/repo-name/)
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    // browsers block module scripts on file://, so ship the single bundle as a classic deferred script
    // shortcut: only valid while the build is one chunk with no dynamic imports; drop this if code-splitting is added
    {
      name: 'classic-script',
      apply: 'build',
      transformIndexHtml: (html) =>
        html.replace(/<script type="module" crossorigin/g, '<script defer').replace(/(<link rel="stylesheet") crossorigin/g, '$1'),
    },
  ],
  build: { modulePreload: false },
})
