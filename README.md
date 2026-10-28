# Standalone dApp

This is a Vite + React standalone dApp for the StakeKit widget.

## Getting Started

### Installation

Use the project toolchain, pinned to Node.js 24.22.1 and pnpm 12.15.0 in `mise.toml`:

```bash
source ./scripts/setup-mise.sh
```

Run this from the repository root in Bash. Source the script so mise and the toolchain remain on your shell's `PATH`.

Install dependencies:

```bash
pnpm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Set the required public Vite environment variables:

```bash
VITE_API_KEY=
VITE_MIX_PANEL_TOKEN=
```

### Run Development App

```bash
pnpm dev
```

Open [http://localhost:3002](http://localhost:3002) in your browser.

### Run Production App

Create a production build:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm start
```

Open [http://localhost:3002](http://localhost:3002) in your browser.

### Code Quality

Run linting and type checks:

```bash
pnpm lint
```

Format files:

```bash
pnpm format
```

Generated `pnpm-lock.yaml` and `.mise/locks/` files are excluded from Biome. Regenerate them with pnpm or mise rather than formatting them; mise verifies its dependency sidecar digests.

### Dependency Updates

Update to the latest stable packages allowed by the 72-hour release-age policy in `pnpm-workspace.yaml`:

```bash
pnpm update --latest '!@types/node'
pnpm update @types/node
pnpm install --frozen-lockfile
pnpm build
pnpm lint
```

`@stakekit/widget` is exempt from the release-age policy in `pnpm-workspace.yaml`.
`@types/node` stays on the Node major pinned in `mise.toml`, so it is excluded from `--latest` and updated within its `^24` range; Renovate enforces the same major.

For Node/pnpm updates, edit `mise.toml`, run `mise lock`, then source `./scripts/setup-mise.sh`. Update the mise installer version and the SHA-256 of that release's `install.sh` asset only in `scripts/setup-mise.sh`; local setup, CI, and Amplify all share it.
Commit `mise.lock` and its generated `.mise/locks/` dependency sidecars so clean checkouts can install the pinned tools.
Automatic locking is enabled in `mise.toml`. The shared setup enforces locked tool installation and persists the toolchain paths across GitHub Actions steps.
pnpm 12's native installer is approved with mise's `allow_builds = ["pnpm"]`, and application dependency build approvals use `allowBuilds` in `pnpm-workspace.yaml`.
Preview the production build and check the Earn, Manage, and Activity tabs and wallet selection before opening a PR.
