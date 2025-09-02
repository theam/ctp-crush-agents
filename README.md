# Crush Test Repository

This repository is used to validate Crush’s end-to-end workflows (branching, committing, PRs, CI). It contains minimal project files and automation.

## Getting Started

- Requirements: Git, GitHub CLI (gh), Docker (optional)
- Clone the repo:
  - git clone <your-fork-or-origin-url>
  - cd crush-test

## Setup

- No application build is required. CI is configured via .github/workflows/crush-test.yaml
- If you add tools that require environment variables, create a .env file in the repo root and document the variables in this README.

## Development

- Create feature branches using the convention: crush/<short-task-slug>
- Open PRs against main. CI will run automatically.
- Do not commit directly to main.

## Testing

- This repository is intentionally minimal and does not include a test suite.
- If adding tests, document how to run them here (e.g., npm test, pytest, go test).

## Linting and Type Checking

- No linters are currently configured.
- If you add a linter or type checker, document the commands here and consider adding them to CRUSH.md so they’re easy to run in CI.

## Contribution Guidelines

- Keep changes small and focused.
- Follow existing file and naming conventions.
- Update this README when you add tooling, commands, or important context.
- Ensure CI passes before merging.

## Repository Structure

- .github/workflows/crush-test.yaml: CI workflow
- CRUSH.md: Standing Orders for Crush agent operations
- Dockerfile: Base container setup (if needed)
- crush.json: Project metadata for Crush

## License

- If a license is needed, add a LICENSE file and reference it here.
