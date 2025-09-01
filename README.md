# Crush Test Repository

This repository is used to validate Crush's autonomous software engineering workflows in CI.

## Project Overview

- Purpose: Provide a minimal repo to exercise branching, committing, and PR flows.
- Tech: Generic, language-agnostic. Contains GitHub Actions workflow for CI.

## Getting Started

1. Prerequisites
   - Git
   - GitHub CLI (gh) if you plan to create PRs from the command line

2. Clone the repository

   git clone https://github.com/braisgonzalez/crush-test
   cd crush-test

3. Inspect the workflow
   - .github/workflows/crush-test.yaml contains CI configuration used by Crush during tests.

## Development Workflow

We follow a lightweight workflow optimized for CI experiments:

- Create feature branches using the pattern `crush/<short-task-slug>`
- Open small, focused pull requests
- Avoid committing directly to `main`

Example:

   git checkout -b crush/my-task
   # make changes
   git add -A
   git commit -m "my concise commit message"
   git push --set-upstream origin HEAD
   gh pr create --fill --base main

## Contribution Guidelines

- Keep changes small and self-contained
- Write clear commit messages that explain the why, not just the what
- Do not commit secrets or credentials
- Respect .gitignore and any project-specific Standing Orders

## Repository Structure

- CRUSH.md: Standing Orders for automated contributions in CI
- .github/workflows/: GitHub Actions workflows
- Dockerfile: Minimal container setup used in some scenarios
- crush.json: Configuration used by Crush

## Support

This repository is maintained for automated testing. For issues, open a GitHub issue with a concise description and reproduction steps.