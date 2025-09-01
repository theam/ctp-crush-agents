# Crush Test Repository

This repository is used to validate Crush’s autonomous software engineering workflows in CI.

## Project Overview

- Purpose: Exercise and verify automated tasks (branching, commits, PRs, and code changes) performed by Crush.
- Tech/Artifacts present:
  - Dockerfile for containerized workflows
  - GitHub Actions workflow under .github/workflows/
  - CRUSH.md with Standing Orders

## Getting Started

Prerequisites:
- Git 2.30+
- GitHub CLI (gh) 2.0+
- Docker (optional, for container builds)

Clone the repository:

```
git clone <your-fork-or-repo-url>
cd crush-test
```

Build a container image (optional):

```
docker build -t crush-test:latest .
```

## CI

This repo uses GitHub Actions. See .github/workflows/crush-test.yaml for the pipeline definition.

## Contribution Guidelines

- Branch naming: use the pattern `crush/<short-task-slug>` when acting via Crush or similar descriptive branches for manual work.
- Commit messages: concise and focused on the why.
- Pull Requests:
  - Keep PRs small and focused
  - Provide a clear summary and test plan
  - Ensure CI checks pass

## Local Development

Typical workflow:
- Create a new branch
- Make your changes
- Run linters and tests if available
- Open a PR against main

## License

Unless otherwise specified, this repository is intended for internal testing and demonstration. Review repository settings or accompanying LICENSE file if one is added later.