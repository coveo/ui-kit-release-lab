# Release Lab

Laboratory monorepo to validate and experiment with the UI Kit CI/CD and CDN release strategy before production rollout.

## Structure

This monorepo mirrors the [coveo/ui-kit](https://github.com/coveo/ui-kit) structure:

```
packages/
├── bueno/      # Base validation package (no dependencies)
├── headless/   # Headless engine (depends on bueno)
├── atomic/     # Web components (depends on headless)
└── shopify/    # Shopify integration (depends on headless)
```

## Dependency Graph

```
bueno
  └── headless
        ├── atomic
        └── shopify
```

## Install

```bash
pnpm install
```

## Build

```bash
pnpm run build
```

## Release

```bash
pnpm run release
```

## Tech Stack

- **Package Manager**: pnpm (workspace protocol)
- **Build Orchestration**: Turborepo
- **Language**: TypeScript
