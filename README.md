# Crush Test Repository

This repository is used to validate Crush CI automation and workflows.

## Getting Started

- Prerequisites: Git, GitHub CLI (gh), Docker (optional)
- Clone: git clone https://github.com/braisgonzalez/crush-test
- Install: No installation required
- Run tests: See CI status in GitHub Actions

## Development

- Create feature branches using the convention: feature/<ticket>-<short-slug>
- Open pull requests to the main branch with a clear title and description

## Project Structure

- .github/workflows: CI workflows
- Dockerfile: Container setup
- CRUSH.md: Standing orders for automation

## React Notes

- React is a library for building user interfaces
- Components should be small and composable; prefer function components with hooks
- The virtual DOM enables efficient UI updates and reconciliation
- Props are read-only; manage local state with useState and side effects with useEffect
- Keys help React identify list items for reconciliation; keep them stable
- Context helps avoid prop drilling; use sparingly and colocate providers
- Lift state up only when multiple components need to share it; otherwise keep state local
- Derive data where possible instead of storing computed values in state to avoid inconsistencies

## Contributing

- Fork the repo and create a feature branch
- Make your changes and open a PR
- Ensure your PR description explains the motivation and changes
- Follow commit message conventions required by the project

## License

This project is for testing purposes.
