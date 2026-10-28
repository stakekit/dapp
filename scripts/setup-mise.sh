#!/usr/bin/env bash

# Source this script to keep the toolchain on the caller's PATH.
# Every failure exits explicitly: `set -e` is ignored in a subshell tested by `||`.
(
  # The release's install.sh is pinned by checksum and embeds the checksums
  # of that release's mise binaries. Update both values together.
  MISE_VERSION=v2026.10.21
  MISE_INSTALLER_SHA256=06a474f4c64042d2f774f3a3427b165ba0be22f19f4837209ad238ad98d52248
  installer=$(mktemp) || exit 1
  trap 'rm -f "$installer"' EXIT
  curl --fail --silent --show-error --location --output "$installer" \
    "https://github.com/jdx/mise/releases/download/${MISE_VERSION}/install.sh" || exit 1
  if command -v sha256sum >/dev/null 2>&1; then
    actual=$(sha256sum "$installer") || exit 1
  else
    actual=$(shasum -a 256 "$installer") || exit 1
  fi
  if [[ "${actual%% *}" != "$MISE_INSTALLER_SHA256" ]]; then
    echo "mise installer checksum mismatch: got ${actual%% *}" >&2
    exit 1
  fi
  MISE_VERSION="$MISE_VERSION" sh "$installer"
) || return

export PATH="$HOME/.local/share/mise/shims:$HOME/.local/bin:$PATH"

mise install --locked node npm:pnpm || return

if [[ -n "${GITHUB_PATH:-}" ]]; then
  printf '%s\n' "$HOME/.local/bin" "$HOME/.local/share/mise/shims" >> "$GITHUB_PATH"
fi
