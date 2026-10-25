# Sanchit Saini · Portfolio

Personal portfolio built with Next.js, live at **https://sanchitks.github.io**.

## Edit the content

All text (bio, skills, services, experience, education, certifications, contact) is in
[`src/data/profile.ts`](src/data/profile.ts). Change it, save, and the live site updates within a few minutes.

- **Add a résumé download:** put the PDF at `public/resume.pdf` and set `resumeUrl: "/resume.pdf"`.
- **Make a certificate clickable:** fill in its `link`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
