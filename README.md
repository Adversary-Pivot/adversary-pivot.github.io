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

The script renames the transferred public repository to `Adversary-Pivot/adversary-pivot.github.io` when needed, including from the prior `adversarypivot.github.io` or `filipjodoin-ap.github.io` names. It then enables workflow-based GitHub Pages, sets `adversarypivot.com` as the custom domain, and watches the deployment. It will stop instead of creating another repository if none of the expected names is found.
