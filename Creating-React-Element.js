/*
React is a JavaScript library used to build user interfaces, especially single-page applications (SPAs). It was created by Facebook and is widely used in modern web development.

Instead of manually manipulating the DOM, React lets developers describe what the UI should look like, and React efficiently updates the DOM when data changes.

Key Concepts in React:

Component-based architecture – UI is broken into reusable pieces

Virtual DOM – React uses a lightweight copy of the DOM for better performance

Declarative UI – You describe the UI, React handles updates

Unidirectional data flow – Data flows in one direction, making apps predictable

Before using JSX, it’s important to understand how React works internally using
React.createElement, which is what JSX compiles into.

🧠 Understanding React.createElement

"React.createElement" creates a React element, which is a plain JavaScript object that describes a UI node.

--> React.createElement(type, props, children)

React later converts these elements into real DOM nodes.
*/


// Creating a React element (not actual DOM yet)
// This represents: <h1 id="heading">React is here!</h1>
let heading = React.createElement(
  "h1",
  { id: "heading" },
  "React is here!"
);

// Creating a React root using React 18 API
// React will control everything inside the div with id="root"
let root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Creating a nested React element structure
// This represents a parent div with a child div inside it
let parent = React.createElement(
  "div",
  { id: "parent" },

  // Child div
  React.createElement(
    "div",
    { id: "child" },

    // Multiple children must be passed as an array
    [
      // First heading element
      React.createElement(
        "h1",
        {},
        "second heading"
      ),

      // Second heading element
      React.createElement(
        "h2",
        {},
        "second heading"
      )
    ]
  )
);

// Rendering the React element tree into the DOM
root.render(parent);

// Logging the React element to understand its structure
// This shows a plain JavaScript object (Virtual DOM representation)
console.log(parent);
