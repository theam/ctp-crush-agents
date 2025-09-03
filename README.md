# ctp-crush-agents

This repository contains automation and agent workflows for Crush-based CI tasks.

## Getting Started

Prerequisites:
- GitHub account with access to this repo
- gh (GitHub CLI) installed and authenticated
- Git installed

Setup:
1) Clone the repository
   git clone <repo-url>
   cd ctp-crush-agents
2) Ensure GitHub CLI is authenticated
   gh auth status
3) Review CRUSH.md for CI standing orders

## Development
- Create feature branches from main
- Run CI locally where possible before opening PRs

## React Notes
- React uses a virtual DOM to efficiently update UIs.
- Components can be function components with hooks like useState and useEffect.
- Props are read-only; state updates should be immutable.
- Keys help React identify list item changes for reconciliation.
- Use React.StrictMode in development to highlight potential problems.

## Contributing
1) Open an issue describing the change
2) Create a feature branch
3) Open a pull request with a clear title and description
4) Ensure checks pass and request review

## License
TBD
