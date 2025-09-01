# Example App

This repository is a minimal scaffold used for CI testing with Crush.

User story: As a user, I want to login to the application so that I can access my dashboard.

Scope in this repository:
- Provide a simple specification and placeholder endpoints to fulfill the story at a planning level.

## Spec

- Endpoint: POST /api/login
  - Accepts JSON: { "email": string, "password": string }
  - Returns on success: 200 { "token": string }
  - Returns on failure: 401 { "error": string }

- Endpoint: GET /api/dashboard
  - Requires Authorization: Bearer <token>
  - Returns on success: 200 { "widgets": [] }
  - Returns on failure: 401 { "error": "unauthorized" }

Implementation is intentionally omitted; this repo is used to validate automation flow. 