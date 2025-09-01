# Crush Test Repository

This repository is used to validate Crush’s CI workflows and autonomous agent behavior.

## Getting Started

- Requirements:
  - GitHub CLI (gh)
  - Git 2.35+
  - Docker (optional, for containerized runs)

### Clone

```
git clone <this-repo-url>
cd crush-test
```

### Build and Test

This repo is intentionally minimal. If workflows or examples are added, document commands here.

- Lint/Format: none configured
- Tests: none configured
- CI: see .github/workflows/crush-test.yaml

### Run in Docker (optional)

```
docker build -t crush-test .
```

## Contributing

- Create a feature branch: `git checkout -b feat/<short-slug>`
- Make changes with small, focused commits
- Open a Pull Request to `main`
- Follow conventional, descriptive commit messages

## Project Structure

- CRUSH.md: Standing Orders for CI-driven tasks executed by Crush
- .github/workflows/crush-test.yaml: CI configuration
- Dockerfile: Example container build

## License

Add license information here if/when applicable.