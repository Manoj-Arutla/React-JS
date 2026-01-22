# 1️⃣ Virtual DOM

- Definition: The Virtual DOM (VDOM) is a lightweight, in-memory representation of the real DOM.

- Purpose: It allows React to update the UI efficiently without touching the real DOM unnecessarily.

# How it works:

- React renders a Virtual DOM tree instead of updating the real DOM directly.

- When state or props change, a new VDOM tree is created.

- React compares the new tree with the previous one (diffing) and updates only the necessary parts of the real DOM.

- Benefit: Improves performance by minimizing expensive DOM operations.

# 2️⃣ Reconciliation Algorithm

- Definition: Reconciliation is React’s process of updating the real DOM efficiently when the Virtual DOM changes.

- Key idea: React decides which parts of the DOM need to change and which can stay the same.

# How it works:

- React compares the old VDOM and new VDOM.

- Updates are batched and applied only where differences exist.

# Rules:

- Elements with the same type are updated.

- Elements with different type are replaced entirely.

- Keys are used to track elements in lists for optimal updates.

# 3️⃣ React Router

- Definition: React Router is a library for handling navigation in React apps.

- Purpose: It allows single-page applications (SPA) to have multiple URLs and views without full page reloads.

# Key features:

- <BrowserRouter>: Uses HTML5 history API for navigation.

- <Route>: Defines which component renders for a URL.

- <Link> / <NavLink>: Navigate without reloading the page.

- Dynamic routing and nested routes support.

- Benefit: Makes React apps behave like traditional multi-page apps, but faster.

# 4️⃣ Diff Algorithm

- Definition: The diff algorithm is React’s method of comparing two Virtual DOM trees to find differences efficiently.

- Purpose: To determine minimal changes to apply to the real DOM.

# Key points:

- React compares nodes by type and key.

- Updates only changed elements, attributes, or text.

- Uses heuristics (e.g., only reorders elements with keys in lists).

- Benefit: Optimizes UI updates and prevents unnecessary re-renders.