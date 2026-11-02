#!/usr/bin/env bash

set -euo pipefail

owner="Adversary-Pivot"
repository="adversary-pivot.github.io"
full_repository="${owner}/${repository}"
previous_repositories=("adversarypivot.github.io" "filipjodoin-ap.github.io")
domain="adversarypivot.com"
remote_url="https://github.com/${full_repository}.git"

if ! gh auth status --active --hostname github.com >/dev/null 2>&1; then
  echo "GitHub CLI is not authenticated. Run: gh auth login --hostname github.com --web" >&2
  exit 1
fi

if ! gh repo view "${full_repository}" >/dev/null 2>&1; then
  repository_to_rename=""
  for previous_repository in "${previous_repositories[@]}"; do
    previous_full_repository="${owner}/${previous_repository}"
    if gh repo view "${previous_full_repository}" >/dev/null 2>&1; then
      repository_to_rename="${previous_full_repository}"
      break
    fi
  done

  if [[ -z "${repository_to_rename}" ]]; then
    echo "The target repository and its expected previous names were not found." >&2
    echo "Confirm the repository name and your organization access." >&2
    exit 1
  fi

  echo "Renaming ${repository_to_rename} to ${full_repository}..."
  gh repo rename "${repository}" \
    --repo "${repository_to_rename}" \
    --yes
fi

if git remote get-url origin >/dev/null 2>&1; then
  current_remote="$(git remote get-url origin)"
  expected_previous_remote=false
  for previous_repository in "${previous_repositories[@]}"; do
    if [[ "${current_remote}" == "https://github.com/${owner}/${previous_repository}.git" || "${current_remote}" == "git@github.com:${owner}/${previous_repository}.git" ]]; then
      expected_previous_remote=true
      break
    fi
  done

  if [[ "${expected_previous_remote}" == true ]]; then
    git remote set-url origin "${remote_url}"
  elif [[ "${current_remote}" != "${remote_url}" && "${current_remote}" != "git@github.com:${full_repository}.git" ]]; then
    echo "Refusing to replace unexpected origin remote: ${current_remote}" >&2
    exit 1
  fi
else
  git remote add origin "${remote_url}"
fi

local_sha="$(git rev-parse HEAD)"
remote_sha="$(gh api "repos/${full_repository}/git/ref/heads/main" \
  --jq '.object.sha' 2>/dev/null || true)"
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

if [[ "${remote_sha}" == "${local_sha}" ]]; then
  expected_event="workflow_dispatch"
  gh workflow run deploy.yml --repo "${full_repository}"
else
  expected_event="push"
fi

run_id=""
for _ in {1..10}; do
  run_id="$(gh run list \
    --repo "${full_repository}" \
    --workflow deploy.yml \
    --commit "${local_sha}" \
    --event "${expected_event}" \
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
echo "Pages URL: https://adversary-pivot.github.io"
echo "Custom domain: https://${domain} (available after DNS and certificate provisioning)"
