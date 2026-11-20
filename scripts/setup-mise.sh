#!/usr/bin/env bash

# Source this script to keep the toolchain on the caller's PATH.
# Every failure exits explicitly: `set -e` is ignored in a subshell tested by `||`.
(
  # The release's install.sh is pinned by checksum and embeds the checksums
  # of that release's mise binaries. Update both values together.
  MISE_VERSION=v2026.11.10
  MISE_INSTALLER_SHA256=e25c67bc84805424e30b8e7a8fe34f3329050848cb283efc7f5b19bc72c15d44
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
