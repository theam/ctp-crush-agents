# ctp-crush-agents — Guide to AGENTS.md

This repository holds agents and related automation for the CRUSH workflow. This README explains what AGENTS.md covers, how to use it, and where to find related configuration in this repo.

## Purpose of AGENTS.md
- Serves as the single source of truth for all agents in this repo
- Describes each agent’s purpose, capabilities, inputs/outputs, and tool access
- Explains how agents integrate with CI and developer workflows
- Documents configuration knobs and operational limits

## How to Use AGENTS.md
- New users: start with the Overview and Quick Start sections in AGENTS.md
- Operators: review the Configuration and Execution sections to run agents locally or in CI
- Contributors: follow the Development and Conventions sections when adding or updating agents

## What You’ll Find in AGENTS.md
- Overview
  - Project intent and how agents support the CRUSH workflow
- Agent Catalog
  - One subsection per agent, including:
    - Name and short description
    - Triggers and entry points
    - Inputs/outputs and expected side effects
    - Tools and permissions (shell, git, gh, etc.)
    - Constraints and limits
- Configuration
  - Keys and structure in `crush.json`
  - Required environment variables and how to provide them (locally and in CI)
- Execution
  - How to run agents locally (and via Docker, see `Dockerfile`)
  - How agents are executed in CI (see `.github/workflows/*`)
- Development
  - Coding and prompt conventions
  - Testing strategies and validation steps
- Examples
  - End-to-end flows and sample invocations
- Troubleshooting & FAQs

## Repo Pointers
- CRUSH standing orders: `CRUSH.md`
- Agent configuration: `crush.json`
- Container build/runtime: `Dockerfile`
- CI workflows: `.github/workflows/crush-test.yaml`, `.github/workflows/jira-on-merge.yaml`

## Quick Start
1. Review `crush.json` to understand available agents and defaults
2. Consult AGENTS.md for details on each agent and how to invoke them
3. Build and run using your preferred method (e.g., Dockerfile)
4. Validate behavior in CI via the provided workflows

## Contributing
- When adding or modifying an agent:
  - Update AGENTS.md with the new/changed agent’s entry
  - Adjust `crush.json` configuration as needed
  - Update or add CI checks if the agent impacts pipelines
- Follow concise, purpose-driven commit messages and link to your story/issue (e.g., SCRUM-25)

## FAQs
- Where do I document a new agent?
  - In AGENTS.md under the Agent Catalog; include purpose, I/O, tools, and constraints
- How do I run agents locally?
  - Use the settings in `crush.json` and the `Dockerfile` as a reference for the runtime environment
- How does CI use agents?
  - See `.github/workflows/crush-test.yaml` and `.github/workflows/jira-on-merge.yaml` for invocation patterns

If AGENTS.md is missing, create it alongside your changes and populate it with the sections described above.