<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/12meXup34hybOkUG9U9U4KWV1tgRrzcvM

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Deploy to GitHub Pages (GitHub Actions)

This repository is configured to automatically build and publish the site to **GitHub Pages** whenever you push to `main` via a GitHub Actions workflow.

Quick notes:

- The workflow file is at `.github/workflows/pages.yml` and will run on pushes to `main`.
- The workflow runs `npm ci`, `npm run build` and publishes the `dist` folder to GitHub Pages.

How to enable:

1. Push your changes to the `main` branch.
2. Go to the repository's **Actions** tab and monitor the `Deploy to GitHub Pages` workflow.
3. After a successful run, visit **Settings → Pages** to confirm the site URL (it will be published and managed by the Pages deployment).

Local preview of production build:

```bash
npm run build
npm run preview
# open http://localhost:5173
```

If you'd like, I can also add a `homepage` field to `package.json` for a repo-hosted site URL or configure a custom domain. If you want me to add automatic deployment status badges to the README, say the word and I'll add them.