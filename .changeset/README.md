# Changesets

This repository uses [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.

## Workflow

### 1. Adding a Changeset

When you make changes that should be released, add a changeset:

```bash
pnpm changeset
```

This will prompt you to:
- Select which packages are affected
- Choose the semver bump type (major/minor/patch)
- Write a summary of the changes

A markdown file will be created in `.changeset/` describing the change.

### 2. Versioning

When ready to release, version the packages:

```bash
pnpm version
```

This consumes all changesets, updates package versions, and generates CHANGELOG.md entries.

### 3. Publishing

Build and publish the packages to npm:

```bash
pnpm release
```

## Configuration

See `.changeset/config.json` for configuration options.

## Documentation

- [Changesets Documentation](https://github.com/changesets/changesets/tree/main/docs)
- [Common Questions](https://github.com/changesets/changesets/blob/main/docs/common-questions.md)
