# useEffect in React

- Definition:
useEffect is a React Hook that lets you perform side effects in functional components. Side effects include operations like data fetching, DOM manipulation, setting up subscriptions, timers, or logging.

# Syntax:

useEffect(() => {
  // Code for the side effect
  return () => {
    // Optional cleanup code
  };
}, [dependencies]);


# Parameters:

- Effect function: A function containing the code for the side effect. It can optionally return a cleanup function to run before the effect is re-executed or the component unmounts.

- Dependency array: An array of variables that the effect depends on. The effect runs only when these variables change.

# Behavior:

- If no dependency array is provided, the effect runs after every render.

- If an empty array [] is provided, the effect runs only once after the initial render (like componentDidMount).

- If the array contains variables [var1, var2], the effect runs only when these variables change.

<!-- Example:

import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is ${count}`);
    return () => {
      console.log(`Cleaning up for count ${count}`);
    };
  }, [count]); // Runs when 'count' changes

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
} -->


# Key Points:

- Helps handle side effects in functional components.

- Can prevent unnecessary executions by using the dependency array.

- Cleanup function prevents memory leaks, especially for subscriptions or timers.