# Crush Test Repository

This repository is used to validate Crush’s autonomous software engineering workflows in CI.

## Overview
- Language/tooling: generic; tasks may vary per exercise
- Branching: feature branches prefixed with `crush/`
- CI: GitHub Actions (see .github/workflows)

## Getting Started
1. Prerequisites
   - Git 2.30+
   - GitHub CLI (`gh`) if you plan to create PRs from CI or locally
   - Docker (optional) if you want to run within a container

2. Clone the repo
   - Using SSH: `git clone git@github.com:<org>/<repo>.git`
   - Using HTTPS: `git clone https://github.com/<org>/<repo>.git`

3. Navigate to the project directory
   - `cd <repo>`

4. Environment variables
   - If the project needs secrets, create a `.env` file in the root and add placeholders. Do not commit real secrets.

5. Run checks
   - Refer to CRUSH.md for any standing commands. If a Makefile or package scripts exist, use them accordingly.

## Development Workflow
- Create a new branch for your change: `git checkout -b crush/<short-task-slug>`
- Commit early and often with concise messages that explain the "why"
- Push your branch and open a PR

## Testing & Linting
- If test or lint commands exist, run them locally before opening a PR
- Common examples (adjust to the repository):
  - `npm test` / `pnpm test` / `yarn test`
  - `pytest`
  - `go test ./...`
  - `ruff` / `eslint`

## Contribution Guidelines
- Keep changes focused and small
- Update documentation when behavior changes
- Follow existing code style and conventions
- Avoid committing secrets or credentials

## Repository Structure
- `.github/workflows/` — CI workflows
- `CRUSH.md` — Standing Orders for autonomous tasks
- `Dockerfile` — Container setup (optional)
- Other files and directories vary per exercise

## Support
If you encounter issues, open an issue or a pull request with a clear description, reproduction steps, and expected behavior.
