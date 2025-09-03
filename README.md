# ctp-crush-agents

US-001

## Overview
This repository contains automation and agents for Crush tasks in CI. It includes workflows and configuration to run agents that implement user stories and open PRs automatically.

## Getting Started
- Prerequisites: Git, GitHub CLI (gh), Docker (optional)
- Clone: `git clone <repo-url>` and `cd ctp-crush-agents`
- Install GitHub CLI and authenticate: `gh auth login`

## Development
- Create a feature branch per user story
- Follow Standing Orders in CRUSH.md
- Keep commits small and start messages with the story id

## Running in CI
- GitHub Actions workflow is in `.github/workflows/`
- See `crush.json` and `CRUSH.md` for automation behavior

## Contributing
- Open an issue describing the change
- Create a feature branch and open a PR to `main`
- Ensure PR title and body include the story ID when applicable
- Follow repository conventions; do not commit secrets

## License
TBD