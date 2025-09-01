# Crush Test Repository

This repository is used to validate Crush's CI automation and development workflows.

## Overview

- Purpose: Provide a minimal project to exercise branching, committing, pushing, and opening pull requests automatically.
- Tech: Generic repository with a Dockerfile and GitHub Actions workflow.

## Getting Started

Prerequisites:
- GitHub account and access to this repo
- Git installed locally
- GitHub CLI (gh) if you plan to interact via CLI
- Docker (optional) if you want to build/run the provided Dockerfile

Clone the repo:

```
git clone <repo-url>
cd crush-test
```

Create a feature branch:

```
git switch -c feature/your-change
```

Install dependencies:
- This repo has no runtime dependencies. If you add a language/tooling, document the steps here.

## Development

- Use conventional, concise commit messages focused on the "why".
- Prefer small, incremental changes.
- Keep CI green; fix failing checks before merging.

### React notes
- React components are pure functions of props and state.
- Prefer function components with hooks over class components.
- Use useEffect for side effects and cleanup to avoid memory leaks.
- Memoize expensive computations with useMemo and stable callbacks with useCallback.
- Co-locate component styles and tests next to the component.

Run CI locally (optional):
- Use the GitHub Actions workflow file as reference: .github/workflows/crush-test.yaml
- If you add language-specific tooling, include commands here to lint/test/build.

## Docker

Build the Docker image:

```
docker build -t crush-test:local .
```

Run a container (example):

```
docker run --rm crush-test:local
```

## Contributing

1. Fork the repo or create a new branch in this repository.
2. Create a focused branch name (e.g., feature/add-x, fix/bug-y, docs/readme).
3. Make changes, add tests where appropriate.
4. Run linters/tests if applicable and ensure CI passes.
5. Open a pull request to main with a clear title and description:
   - What changed
   - Why it changed
   - Any risks or follow-ups

### Code Style
- Follow patterns established in the codebase.
- Avoid committing secrets. Use environment variables and .env files that are gitignored.

### Issue Reporting
- Provide steps to reproduce, expected behavior, and screenshots/logs if relevant.

## License

This repository is for testing and demonstration purposes. Add a specific license here if required by your project.
