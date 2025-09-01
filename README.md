# Crush Test Repository

This repository is used to validate Crush’s autonomous software-engineering workflows in CI.

## Getting Started

- Requirements:
  - GitHub CLI (gh)
  - Git 2.40+
  - Docker (optional, for containerized runs)

### Local Setup

1. Clone the repo
   - git clone <your-fork-or-repo-url>
   - cd crush-test
2. (Optional) Build the Docker image
   - docker build -t crush-test .
3. Run CI checks locally (if available)
   - Refer to CRUSH.md for standard workflows used by Crush.

## Project Structure

- CRUSH.md — Standing orders for Crush in CI
- .github/workflows/ — CI workflows
- Dockerfile — Container image for running tasks in CI
- crush.json — Configuration used by Crush tests

## React Notes

- React components are pure functions of props and state; prefer composition over inheritance.
- Use hooks like useState and useEffect to manage local state and side effects in function components.
- Keys help React identify which items have changed; use stable, unique keys for lists.
- Lift state up to the closest common ancestor to keep data flow predictable.
- For performance, memoize expensive computations with useMemo and event handlers with useCallback when needed.

## Contribution Guidelines

- Create a feature branch: git switch -c <feature-branch>
- Follow existing code style and do not add comments unless requested
- Do not commit to main; always open a Pull Request
- Ensure linting/type checks and tests pass (if present)
- PRs should include a concise title and description of the why

## License

This repository is for testing/demo purposes. License terms may be updated by the maintainers.
