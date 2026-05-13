#!/usr/bin/env zsh
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo 'Usage: scripts/checkin-prod.sh "type(scope): commit message" [archive-date]' >&2
  exit 2
fi

commit_message="$1"
archive_date="${2:-}"
repo_root="$(git rev-parse --show-toplevel)"
remote="${PROD_REMOTE:-origin}"
branch="${PROD_BRANCH:-main}"

cd "$repo_root"

if [[ -n "$archive_date" ]]; then
  npm --prefix storybook run archive:new -- "$archive_date"
else
  npm --prefix storybook run archive:new
fi

npm --prefix storybook run build-storybook
npm --prefix storybook run build-storybook:archive

git fetch "$remote"
git add -u
git add storybook/stories/archive

if git diff --cached --quiet; then
  echo 'No staged changes to commit after archive entry creation.' >&2
  exit 1
fi

git commit -m "$commit_message"
git push "$remote" "$branch"