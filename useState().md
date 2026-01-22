# useState() Hook (React)

useState() is a React Hook that allows functional components to store and manage state. Before hooks, state was only available in class components; useState() makes state management simple and declarative in functions.

# What useState() does

- Holds a state value

- Provides a setter function to update that value

- Triggers a re-render when the state changes

# Basic syntax
-> const [state, setState] = useState(initialValue);


- state → current state value

- setState → function to update the state

initialValue → value used on the first render only

# Example
- const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Increment
</button>


# When setCount is called:

- React updates the state

- The component re-renders

- UI reflects the new value

# Important rules

- Hooks must be called at the top level of a component

- Hooks must be called inside React function components

- State updates are asynchronous

- Never mutate state directly

❌ Wrong:

count++;


✅ Correct:

setCount(count + 1);

Functional updates (recommended when using previous state)
setCount(prev => prev + 1);


Prevents bugs caused by stale state.

# When to use useState()

- UI state (buttons, toggles, modals)

- Form inputs

- Filters, search text

- Counters, flags, local component data

# Key takeaway

- useState() lets React remember data between renders and update the UI when that data changes.