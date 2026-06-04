# Standalone dApp

This is a Vite + React standalone dApp for the StakeKit widget.

## Getting Started

### Installation

Use the project toolchain:

```bash
mise install
```

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
