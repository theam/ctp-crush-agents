# Project README

This project includes examples and experiments.

React notes:
- React components should be pure functions of their props and state.
- Prefer function components with hooks like useState and useEffect over class components for new code.
- Lift state up to the closest common ancestor to share data between components.
- Keys in lists must be stable and unique to help React reconcile efficiently.
- Use React.StrictMode in development to catch potential problems early.
- Memoize expensive calculations with useMemo and avoid unnecessary re-renders with React.memo when profiling shows benefits.
- useCallback can help stabilize function identities passed as props, but don't overuse it; measure first.
- Co-locate component styles and tests to keep related logic together and maintainable.
