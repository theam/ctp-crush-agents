# Crush Test Repository

This repository is used to validate Crush's end-to-end workflow in CI. It contains minimal scaffolding and automation to exercise branching, committing, pushing, and opening pull requests.

## Getting Started

Prerequisites:
- GitHub account with access to this repository
- Git and GitHub CLI (gh) installed and authenticated
- Docker (optional) if you plan to build using the provided Dockerfile

Clone the repo:

```
git clone <your-fork-or-repo-url>
cd crush-test
```

Recommended environment variables:
- None required for basic operations

## Project Structure

- CRUSH.md — Standing Orders used by Crush in CI
- .github/workflows/crush-test.yaml — CI workflow
- Dockerfile — Example container build file
- crush.json — Crush configuration

## Development

Create a feature branch:

```
git switch -c feat/<short-description>
```

Run checks (if applicable):
- There are no build or test scripts defined in this repository. Add them as needed for your project.

## Using Crush in CI

Crush runs non-interactively following the Standing Orders in CRUSH.md:
1. Create and switch to a branch named `crush/<short-task-slug>` (with numeric suffix if needed)
2. Implement changes
3. Commit with a concise message
4. Push to origin and create a PR via `gh`

## Contributing Guidelines

- Use small, focused pull requests
- Write clear commit messages that explain the why
- Follow the repository’s branching model: `main` is protected, feature branches are required
- Ensure CI passes before requesting review

## License

This repository is for testing and demonstration purposes. Add a license if using beyond internal validation.