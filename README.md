# Crush Test Repository

This repository is used to validate Crush agent workflows in CI.

## Overview
- Language/stack: Generic; minimal scaffolding for CI-driven tasks
- Primary goal: Exercise automated branching, commits, and PR creation
- Workflow: See .github/workflows/crush-test.yaml

## Prerequisites
- GitHub account with access to this repository
- Git and GitHub CLI (gh) configured locally if running outside CI

## Getting Started
1. Clone the repository
   - git clone <repo-url>
   - cd crush-test
2. Install prerequisites if needed
   - Ensure gh is authenticated: gh auth status
3. Run CI locally (optional)
   - Use GitHub Actions or a local runner to execute .github/workflows/crush-test.yaml

## Development
- Follow the Standing Orders in CRUSH.md
- Never commit directly to main; use feature branches prefixed with crush/
- Keep changes minimal and focused per task

## Contributing
- Create a branch for your change
- Commit with a clear, concise message focused on the "why"
- Open a pull request against main, filling in title and body
- Ensure checks pass before merging

## Project Structure
- CRUSH.md: Standing Orders for the CI automation workflow
- .github/workflows/crush-test.yaml: GitHub Actions workflow used in tests
- Dockerfile: Minimal container definition for tasks that require it
- crush.json: Configuration for the Crush agent test harness

## React Notes
- React components should remain pure; derive UI from props/state and avoid side effects inside render.
- Prefer function components with hooks (useState, useEffect, useMemo) over legacy class components.
- Co-locate component, styles, and tests to improve maintainability; use meaningful prop types.
- Keys in lists must be stable and unique to prevent unnecessary re-renders and state mismatches.
- Lift state up only when multiple children need to share it; otherwise keep state local for simplicity.

## License
This repository is for testing/demo purposes. Use as-is.
