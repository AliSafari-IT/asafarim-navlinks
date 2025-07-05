# GitHub Pages Deployment Guide for asafarim-navlinks Demo

This document explains how the demo site for `asafarim-navlinks` is deployed to GitHub Pages.

## Automated Deployment

The demo is automatically built and deployed to GitHub Pages using a GitHub Actions workflow whenever changes are pushed to the main branch.

### How It Works

1. The GitHub Actions workflow (`.github/workflows/static.yml`) is triggered on:
   - Push to the main branch
   - Manual run from the Actions tab

2. The workflow:
   - Checks out the repository
   - Sets up Node.js and PNPM
   - Installs dependencies for both the package and demo
   - Builds the package
   - Builds the demo
   - Deploys the demo build to GitHub Pages

## Manual Deployment

You can also manually deploy the demo:

```bash
# Build the package and the demo for GitHub Pages
pnpm run demo:build-gh-pages

# Deploy to GitHub Pages using gh-pages
pnpm run demo:deploy
```

## Configuration Details

### GitHub Actions Workflow

The `.github/workflows/static.yml` file contains the complete GitHub Actions workflow.

### Vite Configuration

The `demo/vite.config.ts` file includes GitHub Pages-specific settings:

```ts
export default defineConfig({
  // ...
  base: './', // Set the base path for GitHub Pages deployment
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // ...
  }
  // ...
})
```

### Asset References

All asset paths in the demo have been updated to use relative paths:

- In `index.html`, favicon path changed to `./assets/favicon.ico`
- In `App.tsx`, logo path changed to `./assets/logoT.svg`

### Special Files

- `demo/public/.nojekyll`: Prevents GitHub Pages from processing the site with Jekyll
- `demo/public/_redirects`: Ensures proper routing for single-page application

## Live Demo URL

The live demo is available at: [https://alisafari-it.github.io/asafarim-navlinks/](https://alisafari-it.github.io/asafarim-navlinks/)

## Troubleshooting

If the deployment fails or the demo doesn't work as expected:

1. Check the GitHub Actions workflow run for error messages
2. Verify that all asset paths are using relative paths (`./` prefix)
3. Make sure the Vite config has `base: './'` set
4. Confirm that the `.nojekyll` file exists in the build output

## Updating the Demo

1. Make your changes to the code
2. Test locally using `pnpm run demo`
3. Push changes to the main branch, which will trigger automatic deployment
4. Or manually deploy with `pnpm run demo:deploy`
