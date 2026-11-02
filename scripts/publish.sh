#!/usr/bin/env bash

set -euo pipefail

owner="Adversary-Pivot"
repository="adversarypivot.github.io"
full_repository="${owner}/${repository}"
previous_repository="filipjodoin-ap.github.io"
previous_full_repository="${owner}/${previous_repository}"
domain="adversarypivot.com"
remote_url="https://github.com/${full_repository}.git"
previous_remote_url="https://github.com/${previous_full_repository}.git"

if ! gh auth status --active --hostname github.com >/dev/null 2>&1; then
  echo "GitHub CLI is not authenticated. Run: gh auth login --hostname github.com --web" >&2
  exit 1
fi

if ! gh repo view "${full_repository}" >/dev/null 2>&1; then
  if gh repo view "${previous_full_repository}" >/dev/null 2>&1; then
    echo "Renaming ${previous_full_repository} to ${full_repository}..."
    gh repo rename "${repository}" \
      --repo "${previous_full_repository}" \
      --yes
  else
    echo "Neither ${full_repository} nor ${previous_full_repository} was found." >&2
    echo "Confirm the repository name and your organization access." >&2
    exit 1
  fi
fi

if git remote get-url origin >/dev/null 2>&1; then
  current_remote="$(git remote get-url origin)"
  if [[ "${current_remote}" == "${previous_remote_url}" || "${current_remote}" == "git@github.com:${previous_full_repository}.git" ]]; then
    git remote set-url origin "${remote_url}"
  elif [[ "${current_remote}" != "${remote_url}" && "${current_remote}" != "git@github.com:${full_repository}.git" ]]; then
    echo "Refusing to replace unexpected origin remote: ${current_remote}" >&2
    exit 1
  fi
else
  git remote add origin "${remote_url}"
fi
git push --set-upstream origin main

if ! gh api "repos/${full_repository}/pages" >/dev/null 2>&1; then
  # A first push can enable Pages between the GET and POST requests. Ignore that
  # create-time conflict and let the idempotent update below confirm the state.
  gh api --method POST "repos/${full_repository}/pages" \
    --field build_type=workflow >/dev/null 2>&1 || true
fi

gh api --method PUT "repos/${full_repository}/pages" \
  --field build_type=workflow \
  --field cname="${domain}" >/dev/null

gh workflow run deploy.yml --repo "${full_repository}"

run_id=""
for _ in {1..10}; do
  run_id="$(gh run list \
    --repo "${full_repository}" \
    --workflow deploy.yml \
    --limit 1 \
    --json databaseId \
    --jq '.[0].databaseId // empty')"
  [[ -n "${run_id}" ]] && break
  sleep 2
done

if [[ -z "${run_id}" ]]; then
  echo "Deployment was started, but its workflow run was not visible yet."
  echo "Check: https://github.com/${full_repository}/actions"
  exit 0
fi

gh run watch "${run_id}" --repo "${full_repository}" --exit-status

echo
echo "GitHub Pages deployment completed."
echo "Repository: https://github.com/${full_repository}"
echo "Pages URL: https://adversary-pivot.github.io/${repository}"
echo "Custom domain: https://${domain} (available after DNS and certificate provisioning)"
