#!/usr/bin/env bash
set -euo pipefail

# Purges leaked secrets from git history using git-filter-repo.
# Usage:
#   scripts/purge-secrets.sh --yes [--push]
#
# - Requires git-filter-repo: https://github.com/newren/git-filter-repo
# - This REWRITES HISTORY. Ensure collaborators are aware.
# - After running, you must force-push to remote and have all contributors rebase.

print_help() {
  cat <<'EOF'
Usage: scripts/purge-secrets.sh --yes [--push]

This script:
  1) Removes .env and .env.example from ALL history
  2) Replaces known leaked keys anywhere in history using scripts/replacements.txt

Prereqs:
  - git-filter-repo installed (brew install git-filter-repo OR pipx/pip install git-filter-repo)

Flags:
  --yes   Confirm you understand this rewrites git history
  --push  Force-push all branches and tags to 'origin' after rewrite

After completion, teammates must:
  - Re-clone OR run: git fetch --all --prune && git reset --hard origin/<branch>
EOF
}

CONFIRM=no
PUSH=no
for arg in "$@"; do
  case "$arg" in
    --yes) CONFIRM=yes ;;
    --push) PUSH=yes ;;
    -h|--help) print_help; exit 0 ;;
    *) echo "Unknown arg: $arg"; print_help; exit 1 ;;
  esac
done

if [[ "$CONFIRM" != "yes" ]];
then
  echo "Refusing to run without --yes. Read the help carefully." >&2
  print_help
  exit 1
fi

if ! command -v git-filter-repo >/dev/null 2>&1; then
  echo "git-filter-repo is not installed." >&2
  echo "Install with: brew install git-filter-repo  (macOS)" >&2
  echo "or: pipx install git-filter-repo  (Python/pipx)" >&2
  exit 1
fi

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Not inside a git repository." >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree not clean. Commit or stash changes first." >&2
  exit 1
fi

if [[ ! -f scripts/replacements.txt ]]; then
  echo "Missing scripts/replacements.txt with replacement patterns." >&2
  exit 1
fi

echo "[1/2] Rewriting history to remove .env and .env.example..."
git-filter-repo \
  --force \
  --invert-paths \
  --path .env \
  --path .env.example

echo "[2/2] Rewriting history to replace known leaked keys..."
git-filter-repo \
  --force \
  --replace-text scripts/replacements.txt

echo "History rewrite complete. Next steps:"
echo "  - Verify repository looks correct."
echo "  - Coordinate with team before force pushing."
if [[ "$PUSH" == "yes" ]]; then
  echo "Force-pushing all branches and tags to origin..."
  git push --force --all origin
  git push --force --tags origin
  echo "Force-push complete."
else
  echo "  - To publish, run:"
  echo "      git push --force --all origin"
  echo "      git push --force --tags origin"
fi

echo "After publishing, teammates must re-clone or hard reset to the new history."

