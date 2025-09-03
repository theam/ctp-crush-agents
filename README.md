# Crush Test Repository

This repository is used to validate Crush agent workflows in CI.

## Getting Started

- Requirements:
  - GitHub CLI (gh)
  - Git
  - Docker (optional)

### Setup

1) Clone the repository
   - git clone <repo-url>
   - cd crush-test
2) Ensure you are on the correct branch when developing features
3) Use the provided GitHub Actions workflow for CI validation

### Local Development

- Make your changes on a feature branch
- Open a Pull Request to main
- Ensure commit messages follow the repository conventions

## Project Structure

- .github/workflows: CI workflows
- Dockerfile: Container configuration for CI checks
- CRUSH.md: Standing Orders for automated agents

## Contribution Guidelines

- Fork the repo or create a feature branch
- Keep PRs small and focused
- Write clear commit messages
- Add context in PR descriptions, including related story IDs when applicable

## License

This repository is intended for internal testing and demo purposes.