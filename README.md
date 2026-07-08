# React Portfolio 

This project is a React + Vite portfolio website inspired by the dark, polished, futuristic look of the provided HTML portfolio. It now includes a more personal profile story, richer motion, and a deployment-ready setup for GitHub Pages.

> Portfolio: [Link](https://siddhushkya.github.io/my-portfolio/)

## Features
- Modern glassmorphism-inspired UI
- Responsive single-page portfolio layout
- Dark cinematic color palette with motion and hover effects
- Personalized profile sections for experience, work, testimonials, and contact
- GitHub Pages deployment workflow

## Project Structure
```text
src/
  App.jsx          # Main content, profile story, work highlights, timeline, and testimonials
  main.jsx         # React entry point that mounts the app into the browser
  styles.css       # Global theme, layout, colors, spacing, responsive design, and animations
index.html         # Vite HTML shell that loads the React app
package.json       # Scripts, dependencies, and deployment metadata
vite.config.js    # Vite configuration with the GitHub Pages base path
.github/workflows/deploy.yml  # GitHub Actions workflow for automatic deployment
```

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal (usually http://localhost:3000).

## Production Build
```bash
npm run build
```

## GitHub Pages Deployment
1. Create a GitHub repository and push the project to the main branch.
2. In the repository settings, enable GitHub Pages and choose the GitHub Actions deployment source.
3. The included workflow will build and publish the site automatically on each push to main.

### Manual deploy
```bash
npm run deploy
```

> If your repository name is different from my-portfolio, update the base path in vite.config.js before deploying.
