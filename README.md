# Project

This repository contains example assets for CI testing.

Additional notes about React:
- React components should be pure functions of their props.
- Use hooks like useState and useEffect to manage state and side effects.
- Prefer composition over inheritance when structuring components.
- Keep components small and focused; lift state up when needed.
- Keys help React identify list items; use stable, unique keys.
- Use React.memo to avoid unnecessary re-renders for pure components.
- Derive data from props/state instead of duplicating it; avoid derived state when possible.
- Lazy-load heavy components with React.lazy and Suspense to improve initial load time.
- Co-locate component styles and tests to keep modules cohesive.
