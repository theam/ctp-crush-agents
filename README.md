# Crush Test Repository

This repository is used to validate Crush CI workflows and automation behaviors.

## Getting Started

- Requirements:
  - Git
  - GitHub CLI (gh)
  - Docker (optional, for containerized runs)

### Clone and Setup

- Clone the repo:
  - git clone <your-fork-or-repo-url>
  - cd crush-test
- Verify tooling:
  - gh --version
  - git --version

### Local Development

- Make changes in a feature branch following the convention: feature/<ticket>-<short-slug>
- Ensure no secrets are committed. Respect .gitignore and .crushignore.

## Running in CI

CI is configured via .github/workflows/crush-test.yaml.

- Pull requests should target main
- All checks must pass before merging

## Contribution Guidelines

- Branch naming: feature/<ticket>-<short-slug>
- Commit messages: <TICKET>: <concise summary>
- Open PRs with a clear title and description that reference the ticket
- Follow existing code style; do not add comments unless requested

## License

This project is for testing purposes.