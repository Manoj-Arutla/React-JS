# Why React is Fast?

React is fast because it minimizes direct manipulations of the real DOM using its Virtual DOM. When the state or props change, React updates a lightweight Virtual DOM first, then uses a diffing algorithm to identify exactly what has changed, and finally applies only the necessary updates to the real DOM. This batching of updates and re-rendering only affected components reduces expensive DOM operations, making React applications highly efficient. Additionally, features like keys in lists and memoization (React.memo, useMemo) further optimize rendering performance.

# Key points to mention in an interview:

- Virtual DOM for in-memory representation.

- Diffing algorithm to update only changed nodes.

- Batching updates to avoid unnecessary reflows/repaints.

- Component-level updates (only affected components re-render).

- Optional optimizations: React.memo, useMemo, useCallback.