# test
this is test 

steps for deploying  react project on github .

step : 1 

npm install gh-pages --save-dev
in project folder 

step : 2 

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },

  step 3 

  make make  build 

  step 4 

  // vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/test/', // 👈 VERY IMPORTANT
})

step 5 

git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main


step 6 deploy

npm run deploy