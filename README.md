# ctp-crush-agents

This repository contains automation and CI helpers for Crush-based autonomous agents.

## Story
- STORY_ID: SCRUM-10
- TITLE: Create README file

## Overview
This project is configured to run in CI and follows the Standing Orders in CRUSH.md for creating branches and pull requests. It includes:
- GitHub Actions workflow for validation
- Dockerfile for containerized runs
- crush.json for agent configuration
- CRUSH.md for operating procedures

## Getting Started
1) Clone the repository
2) Ensure you have Git and GitHub CLI (gh) installed for PR automation
3) Review CRUSH.md to understand the Standing Orders

## CI
GitHub Actions workflow is located at .github/workflows/crush-test.yaml.

## Contributing
- Create a feature branch using the naming pattern described in CRUSH.md
- Open a pull request using gh after pushing your branch

