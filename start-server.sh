#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8080}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Starting Unity Global Tape Catalogue on http://localhost:${PORT}"
echo "Press Ctrl+C to stop."

if command -v python3 >/dev/null 2>&1; then
  cd "$DIR"
  exec python3 -m http.server "$PORT"
fi

if command -v npx >/dev/null 2>&1; then
  cd "$DIR"
  exec npx --yes serve . -l "$PORT"
fi

echo "Error: install Python 3 or Node.js to run a local server." >&2
exit 1
