# Crush Test Repository

This repository is used to validate Crush agent workflows in CI.

## Overview

- Language/Stack: General CI testbed
- CI: GitHub Actions (see .github/workflows)
- Container: Dockerfile provided for reproducible runs

## Getting Started

Prerequisites:
- Git
- Docker (optional, for containerized runs)
- GitHub CLI (gh) (optional, for PRs)

Clone the repo:

```
git clone <this-repo-url>
cd crush-test
```

Run the workflow locally (optional):
- GitHub Actions doesn’t run locally by default. Use act or your own scripts if needed.

Build Docker image:

```
docker build -t crush-test:latest .
```

## Development

- Branching: Use feature branches, e.g., `crush/<short-task-slug>`.
- Do not commit to main directly.
- Follow repository Standing Orders in CRUSH.md when working in CI.

## Contribution Guidelines

1. Create a new branch from main.
2. Make your changes with clear, small commits.
3. Ensure CI passes.
4. Open a Pull Request with a clear title and description.

## Project Structure

- CRUSH.md: Standing Orders for CI tasks
- Dockerfile: Container build
- .github/workflows/: CI pipeline definitions
- crush.json: Crush agent configuration

## License

This repository may be subject to the parent project’s license. If none is specified, assume internal/testing use only.
