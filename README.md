# Crush Test

A minimal repository used to validate Crush's CI agent behaviors. This project is intentionally small and focused on exercising end-to-end workflows like branching, committing, pushing, and opening pull requests.

## Contents
- CI workflow using GitHub Actions
- Basic Dockerfile for containerized steps
- CRUSH.md with Standing Orders for the agent

## Prerequisites
- Git
- GitHub CLI (gh)
- Docker (optional, only if you plan to build the image)

## Getting Started
1. Clone the repository
   - gh: `gh repo clone braisgonzalez/crush-test`
   - git: `git clone https://github.com/braisgonzalez/crush-test.git`
2. Change into the project directory
   - `cd crush-test`
3. Verify CI
   - Open `.github/workflows/crush-test.yaml` to review the CI pipeline
4. Optional: Build the Docker image
   - `docker build -t crush-test:latest .`

## Development
- Create feature branches off `main`
- Keep changes small and focused
- Ensure no secrets are added to the repo

## Contribution Guidelines
1. Fork or branch from `main`
2. Write clear commit messages
3. Open a Pull Request with:
   - A concise title
   - A brief description of the "why"
   - Any relevant screenshots or logs
4. Ensure the CI checks pass

## Project Structure
- `.github/workflows/` – CI configuration
- `Dockerfile` – Container build recipe
- `CRUSH.md` – Standing Orders for the agent
- `crush.json` – Agent configuration

## License
This repository may not include a license file and is used for internal testing. If you intend to reuse code from this repository, please verify licensing requirements first.
