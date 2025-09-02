# Crush Test Repository

This repository is used to validate Crush CI behaviors and workflows.

## Project Overview

Crush is an autonomous software engineering agent designed to assist with coding tasks, automate common repository workflows, and maintain high-quality standards via CI. This repository contains minimal scaffolding to exercise those behaviors.

## Prerequisites

- Git 2.30+
- GitHub CLI (gh) 2.0+
- Docker (optional, for containerized workflows)
- Make (optional)

## Quick Start

1. Clone the repository
   - SSH: `git clone [email protected]:<org>/<repo>.git`
   - HTTPS: `git clone https://github.com/<org>/<repo>.git`
2. Change into the directory
   - `cd crush-test`
3. Inspect available workflows
   - `.github/workflows/`
4. Run CI locally (optional)
   - Use `gh workflow run` to trigger workflows from your branch

## Development Setup

This project intentionally has minimal dependencies. If you extend it, consider documenting the following:

- Language/runtime version(s)
- Package manager commands
- Linting/formatting tools
- Test commands

Example structure you can adopt:

- Install deps: `npm ci` or `pip install -r requirements.txt`
- Lint: `npm run lint` or `ruff .`
- Test: `npm test` or `pytest`

If you standardize on commands, add them to CRUSH.md so agents can run them automatically.

## Contribution Guidelines

- Create a feature branch from `main` using the convention `crush/<short-task-slug>`.
- Keep changes focused and atomic; follow repository conventions.
- Ensure CI passes before requesting review.
- Do not commit secrets. Prefer environment variables and `.env` placeholders.
- Follow conventional, concise commit messages focused on the "why".

## Pull Requests

- Open PRs against `main`.
- Provide a clear summary that explains the motivation and outcome.
- Include a brief test plan or verification steps.

## Repository Conventions

- Standing Orders are defined in CRUSH.md and govern automation in CI.
- Never commit directly to `main`.
- Respect ignore rules in `.gitignore` and any `.crushignore` if present.

## License

Unless otherwise noted, this repository is for internal testing and does not include a public license. Add one if needed for distribution.
