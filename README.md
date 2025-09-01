# Crush Test Repository

This repository is used to validate Crush, an autonomous software engineering agent. It contains minimal scaffolding to exercise common workflows like branching, editing files, committing changes, and opening pull requests in CI.

## Getting Started

- Requirements:
  - GitHub account with access to this repo
  - gh CLI authenticated (for PR workflows)
  - Git installed

### Clone the repository

```
git clone <your-fork-or-repo-url>
cd crush-test
```

### Typical workflow with Crush

Crush operates via Standing Orders in CRUSH.md. At a high level, when asked to make a change, Crush will:

1) Create a new branch named `crush/<short-task-slug>`
2) Implement the requested changes
3) Commit with a concise message
4) Push the branch
5) Open a pull request

## Project Structure

- CRUSH.md — Standing Orders for CI automation
- .github/workflows — CI workflows used for validation
- Dockerfile — Minimal environment for running checks

## Development

This repo is intentionally simple. Add files and tests as needed for your scenarios.

- Linting/formatting: not enforced by default. Add your preferred tools.
- Testing: add a framework (e.g., pytest, npm test, etc.) according to your language choice.

## Contribution Guidelines

- Open an issue describing your change
- Follow the Standing Orders for branch naming: `crush/<short-task-slug>`
- Keep commits focused and messages concise, explaining the why
- Ensure CI passes
- Be mindful not to commit secrets

## React Notes

- React components should be pure functions of props when possible.
- Prefer hooks (useState, useEffect, useMemo) over class lifecycle methods in modern React.
- Co-locate component-specific styles and tests with the component for easier maintenance.
- Use keys when rendering lists to help React identify elements.
- Lift state up to the nearest common ancestor to avoid prop drilling complexity.

## License

This repository is provided for testing and demonstration purposes. Add a license if required by your project needs.
