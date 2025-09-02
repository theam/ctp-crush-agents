# Crush Test Repository

This repository is used to validate Crush’s CI automation and agent workflows.

## Getting Started

- Requirements: Git, GitHub CLI (gh)
- Clone the repo:
  - git clone <your-fork-or-repo-url>
  - cd crush-test

## Development

- Create branches using the convention: crush/<short-task-slug>
- Never commit directly to main
- Use non-interactive commands in CI only: git and gh

## Setup

- No external services are required
- Optional: create a .env for local placeholders

## Running Checks

- No tests are defined in this repo; add tests as needed
- If you add lint/typecheck, document commands in CRUSH.md

## Contribution Guidelines

- Small, focused pull requests
- Write clear commit messages that explain the why
- Follow existing code style and conventions

## Opening a Pull Request

- Push your branch: git push --set-upstream origin HEAD
- Create a PR: gh pr create --fill --base main

## License

This repository is for testing/CI demonstration purposes.