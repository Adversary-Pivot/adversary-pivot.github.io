# Adversary Pivot

Company website for [adversarypivot.com](https://adversarypivot.com), built with React and Vite and deployed through GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Pushes to `main` are built and deployed automatically by GitHub Actions.

## First publication

With GitHub CLI authenticated, run:

```bash
./scripts/publish.sh
```

The script renames the transferred public repository from `Adversary-Pivot/filipjodoin-ap.github.io` to `Adversary-Pivot/adversarypivot.github.io` when needed. It then enables workflow-based GitHub Pages, sets `adversarypivot.com` as the custom domain, and watches the deployment. It will stop instead of creating another repository if neither expected name is found.
