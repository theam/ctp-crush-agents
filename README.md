# Project README

This project includes examples and experiments.

React notes:
- React components should be pure functions of their props and state.
- Prefer function components with hooks like useState and useEffect over class components for new code.
- Lift state up to the closest common ancestor to share data between components.
- Keys in lists must be stable and unique to help React reconcile efficiently.
- Use React.StrictMode in development to catch potential problems early.
- Memoize expensive computations with useMemo and event handlers with useCallback to avoid unnecessary re-renders.
- Use React DevTools Profiler to identify performance bottlenecks in component trees.
- Keep effects idempotent and specify accurate dependencies to prevent stale closures and infinite loops.
