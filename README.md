# Crush Test Repository

This repository is used to validate Crush's end-to-end workflows in CI, including branching, committing, pushing, and opening pull requests.

## Getting Started

Prerequisites:
- GitHub account and access to this repository
- Git installed locally (or use GitHub Codespaces/CI)
- gh (GitHub CLI) installed if you plan to create PRs from the command line

Clone the repository:

```
git clone https://github.com/braisgonzalez/crush-test.git
cd crush-test
```

Install tools (optional):
- GitHub CLI: https://cli.github.com/

## Development Workflow

This project follows an automated workflow driven by Crush. Standing Orders are defined in CRUSH.md to standardize CI operations:
- Create a feature branch named `crush/<short-task-slug>`
- Commit changes with a concise message
- Push the branch to origin
- Open a pull request targeting `main`

You can also work locally using a similar flow.

## Project Structure

- CRUSH.md — Standing Orders for CI automation
- .github/workflows — CI workflows
- Dockerfile — Container configuration for CI tasks

## React Notes

- React components should be pure functions of props and state. Prefer function components with hooks over class components for new code.
- Use useEffect for side effects and cleanup; avoid placing asynchronous logic directly in render paths.
- Co-locate component styles and tests alongside the component for better maintainability.
- Lift state up only when multiple components need to share it; otherwise keep state as local as possible.
- Memoize expensive computations with useMemo and event handlers with useCallback when profiling shows benefits.

## Contributing

1. Create a new branch off `main`:
   - Branch name convention: `crush/<short-task-slug>`
2. Make your changes.
3. Ensure your changes do not modify files ignored by `.gitignore` or `.crushignore`.
4. Commit with a clear, concise message that focuses on the "why".
5. Push your branch and open a pull request.

## Code Style & Quality

- Keep changes minimal and focused.
- Do not commit secrets or credentials.
- Prefer small, testable commits and descriptive PRs.

## License

Unless otherwise noted, this repository is intended for internal testing and demonstration purposes.
