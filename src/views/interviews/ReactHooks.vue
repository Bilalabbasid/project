<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">7</span>
            <span class="reading-time">12 min read</span>
          </div>
          <h1>React Hooks for Interviews</h1>
          <p class="article-subtitle">
            Master React hooks for interviews, covering key hooks like useState,
            useEffect, useContext, common pitfalls, and best practices for
            building reusable logic
          </p>
        </header>
        <article class="article-content">
          <p class="lead-paragraph">
            React hooks are special functions that start with <code>use</code>.
            Introduced in React 16.8, they allow developers to use state and
            lifecycle features in function components. This simplifies code
            organization, reduce boilerplate, and enable better logic reuse.
            This guide will help you to tackle React hooks interview questions.
          </p>

          <p>
            Familiarize yourself with the common hooks: <code>useState</code>,
            <code>useEffect</code>, <code>useContext</code>,
            <code>useRef</code>, <code>useId</code>, you will probably have to
            use some of them during interviews.
          </p>

          <section>
            <h2>useState</h2>

            <p>
              <code>useState</code> enables function components to track state
              within component instances. State is isolated and private. Use
              <code>useState</code> when a component needs local state that is
              contained within the component instance and not meant to be shared
              with siblings/parents. If you render a component in two separate
              places, each instance gets its own state.
            </p>

            <div class="code-block">
              <pre><code>const [state, setState] = useState(initialState);</code></pre>
            </div>

            <p><strong>Parameters</strong></p>
            <ul class="bullet-list">
              <li>
                <code>initialState</code> (Required): The initial value of the
                state. If it is a function, that function will be called to
                lazily initialize the state.
              </li>
            </ul>

            <p>
              When updating based on the previous state, use the function
              version of <code>setState</code>:
            </p>

            <div class="code-block">
              <pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;button onClick={() => setCount((prevCount) => prevCount + 1)}>
      Count: {count}
    &lt;/button>
  );
}</code></pre>
            </div>

            <p><strong>Pitfalls:</strong></p>
            <ul class="bullet-list">
              <li>
                Directly mutating state instead of using the setter function
                (<code>setState</code>) or not passing a new object to the
                setter function
              </li>
              <li>
                Referencing stale values in closures and updating with stale
                values; use the function version of <code>setState</code> if
                possible
              </li>
              <li>
                Using <code>useState</code> when a value doesn't affect
                rendering; use useRef instead
              </li>
            </ul>

            <div class="subsection">
              <h3>Common mistake: mutating state directly</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Bad:</strong> Directly mutating state won't
                    trigger a re-render.
                  </p>
                  <div class="code-block">
                    <pre><code>const [user, setUser] = useState({ name: 'Alice', age: 25 });
user.age = 26; // ❌ This won't trigger a re-render</code></pre>
                  </div>
                  <p>Also not a good practice to re-use state objects:</p>
                  <div class="code-block">
                    <pre><code>function onClick() {
  user.age = 26;
  setUser(user); // ❌ Calling setter with the same object
}</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p><strong>✅ Good:</strong> Create a new object.</p>
                  <div class="code-block">
                    <pre><code>setUser((prevUser) => ({ ...prevUser, age: 26 }));</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="subsection">
              <h3>
                Common mistake: updating state without considering previous
                state
              </h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Bad:</strong> Potential stale state issue if used
                    within intervals or async functions.
                  </p>
                  <div class="code-block">
                    <pre><code>setCount(count + 1); // Potential stale state issue</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Good:</strong> Use the functional update form.
                  </p>
                  <div class="code-block">
                    <pre><code>setCount((prevCount) => prevCount + 1);</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <p>
              Further reading on react.dev:
              <a
                href="https://react.dev/reference/react/useState"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >useState - React</a
              >
            </p>
          </section>

          <section>
            <h2>useEffect</h2>

            <p>
              <code>useEffect</code> is a hook primarily for synchronizing a
              component with an external system. It can be used for executing
              side effects, such as fetching data, subscribing to events, or
              interacting with the DOM.
            </p>

            <div class="code-block">
              <pre><code>useEffect(effectFunction, dependencyArray);</code></pre>
            </div>

            <p><strong>Parameters</strong></p>
            <ol class="numbered-list">
              <li>
                <code>effectFunction</code> (Required): A function that contains
                the side effect logic
              </li>
              <li>
                <code>dependencies</code> (Optional): An array of values that
                determine when the effect runs
              </li>
            </ol>

            <p>
              Depending on when the effect should run, the
              <code>dependencies</code> array is defined accordingly:
            </p>

            <div class="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>When</th>
                    <th>Dependencies</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>After every render</td>
                    <td>None</td>
                    <td><code>useEffect(() => {...});</code></td>
                  </tr>
                  <tr>
                    <td>Once on mount</td>
                    <td>[] (empty)</td>
                    <td><code>useEffect(() => {...}, []);</code></td>
                  </tr>
                  <tr>
                    <td>When any dependency changes</td>
                    <td>[var1, var2]</td>
                    <td><code>useEffect(() => {...}, [var1, var2]);</code></td>
                  </tr>
                  <tr>
                    <td>
                      Cleaning up (runs on unmount or before effect re-runs)
                    </td>
                    <td>Varies</td>
                    <td>
                      <code>useEffect(() => { return () => {...}; }, []);</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <code>useEffect</code> is primarily for side effects / interacting
              with external services and that isn't too common during
              interviews. If you find yourself reaching for
              <code>useEffect</code> in your solutions, consider if there are
              alternatives.
            </p>

            <div class="code-block">
              <pre><code>import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then(setData);
  }, []);

  return &lt;div>{data ? JSON.stringify(data) : 'Loading...'}&lt;/div>;
}</code></pre>
            </div>

            <p><strong>Pitfalls:</strong></p>
            <ul class="bullet-list">
              <li>
                Not adding dependencies in the dependency array leading to stale
                closures
              </li>
              <li>
                Causing infinite loops by updating state inside
                <code>useEffect</code> without proper dependency management
              </li>
              <li>
                Unnecessary re-renders due to using objects/arrays in the
                dependency array
              </li>
              <li>
                Not cleaning up side effects such as clearing timers and
                unsubscribing from events
              </li>
            </ul>

            <div class="subsection">
              <h3>Read the manual</h3>

              <p>
                The unfortunate truth is that <code>useEffect</code> is just
                full of footguns and is hard to use, even for experienced
                engineers.
              </p>

              <p>
                The <code>useEffect</code> hook is especially hard to get right,
                even for seasoned developers. Our recommendation is to avoid
                using <code>useEffect</code> in interviews if there are
                alternatives.
              </p>

              <p>
                Given that interview questions are mostly self-contained,
                <code>useEffect</code>s aren't too commonly needed. Hence you
                will find that the official solutions by GreatFrontEnd's React
                user interface questions do not have too much
                <code>useEffect</code> usage. If you are using
                <code>useEffect</code> in your code, compare with the official
                solutions to see how you can possibly avoid using it.
              </p>

              <p>
                Either way, it's best to read the following pages of the React
                documentation to understand <code>useEffect</code> better:
              </p>

              <ol class="numbered-list">
                <li>
                  <a
                    href="https://react.dev/learn/synchronizing-with-effects"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Synchronizing with Effects</a
                  >
                </li>
                <li>
                  <a
                    href="https://react.dev/learn/you-might-not-need-an-effect"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >You Might Not Need an Effect</a
                  >
                </li>
                <li>
                  <a
                    href="https://react.dev/learn/lifecycle-of-reactive-effects"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Lifecycle of Reactive Effects</a
                  >
                </li>
                <li>
                  <a
                    href="https://react.dev/learn/separating-events-from-effects"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Separating Events from Effects</a
                  >
                </li>
                <li>
                  <a
                    href="https://react.dev/learn/removing-effect-dependencies"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Removing Effect Dependencies</a
                  >
                </li>
              </ol>
            </div>

            <div class="subsection">
              <h3>
                Common mistake: missing dependencies leading to stale closures
              </h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Bad:</strong> Missing dependencies can lead to
                    stale closures.
                  </p>
                  <div class="code-block">
                    <pre><code>useEffect(() => {
  fetchData(); // What if fetchData depends on props?
}, []); // Missing dependencies</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p><strong>✅ Good:</strong> Include all dependencies.</p>
                  <div class="code-block">
                    <pre><code>useEffect(() => {
  fetchData(someProp); // Explicitly pass dependencies
}, [someProp]); // Include dependencies</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="subsection">
              <h3>
                Common mistake: unnecessary effect invocations due to
                object/array dependency in useEffect
              </h3>

              <p>
                In the following example the effect should only run when
                <code>filteredTodos</code> change, but effect still runs when
                the "Force re-render" button is triggered. This is because a new
                <code>filteredTodos</code> array is recreated on every render,
                causing <code>useEffect</code> to run unnecessarily.
              </p>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Bad:</strong> New array created on every render.
                  </p>
                  <div class="code-block">
                    <pre><code>function TodoList({ todos }) {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('in_progress');
  const filteredTodos = todos.filter((todo) => todo.status === status);

  useEffect(() => {
    console.log('filteredTodos have changed');
  }, [filteredTodos]); // Effect runs on every render

  return (
    &lt;div>
      &lt;button onClick={() => setCount(count + 1)}>Force re-render&lt;/button>
      &lt;button onClick={() => setStatus('complete')}>Change status&lt;/button>
    &lt;/div>
  );
}</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Good:</strong> Use <code>useMemo</code> to
                    memoize the array.
                  </p>
                  <div class="code-block">
                    <pre><code>function TodoList({ todos }) {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('in_progress');
  const filteredTodos = useMemo(
    () => todos.filter((todo) => todo.status === status),
    [todos, status],
  );

  useEffect(() => {
    console.log('filteredTodos have changed');
  }, [filteredTodos]); // Effect only runs when todos or status change

  return (
    &lt;div>
      &lt;button onClick={() => setCount(count + 1)}>Force re-render&lt;/button>
      &lt;button onClick={() => setStatus('complete')}>Change status&lt;/button>
    &lt;/div>
  );
}</code></pre>
                  </div>
                  <p>
                    Use <code>useMemo</code> to memoize the object, ensuring
                    that <code>filteredTodos</code> retain the same reference
                    unless the <code>todos</code> or <code>status</code> change.
                    Even though <code>todos</code> is an array, it is a prop
                    received from the parent and its still the same object
                    reference when <code>TodoList</code> re-renders.
                  </p>
                </div>
              </div>
            </div>

            <div class="subsection">
              <h3>Common mistake: memory leaks due to missing cleanup</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p><strong>❌ Bad:</strong> No cleanup function.</p>
                  <div class="code-block">
                    <pre><code>useEffect(() => {
  const interval = setInterval(() => {
    console.log('Running...');
  }, 1000);
}, []); // No cleanup</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p><strong>✅ Good:</strong> Return a cleanup function.</p>
                  <div class="code-block">
                    <pre><code>useEffect(() => {
  const interval = setInterval(() => {
    console.log('Running...');
  }, 1000);

  return () => clearInterval(interval); // Cleanup
}, []);</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <p>
              Further reading on react.dev:
              <a
                href="https://react.dev/reference/react/useEffect"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >useEffect - React</a
              >
            </p>
          </section>

          <section>
            <h2>useContext</h2>

            <p>
              <code>useContext</code> provides a way to share state across
              components without prop drilling. It's useful for global state
              like themes, authentication, or user settings.
            </p>

            <div class="code-block">
              <pre><code>import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  return (
    &lt;ThemeContext.Provider value={theme}>
      &lt;button
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}>
        Toggle theme
      &lt;/button>
      &lt;ThemeComponent />
    &lt;/ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return (
    &lt;div style={ { backgroundColor: theme === 'dark' ? '#000' : '#fff' } }>
      Theme: {theme}
    &lt;/div>
  );
}</code></pre>
            </div>

            <p>
              Note that in React 19, Context providers can use
              <code>&lt;ThemeContext&gt;</code> directly without doing
              <code>&lt;ThemeContext.Provider&gt;</code>.
            </p>

            <p>
              React automatically re-renders all the children that use a
              particular context starting from the provider that receives a
              different value.
            </p>

            <p><strong>Pitfalls:</strong></p>
            <ul class="bullet-list">
              <li>
                Using objects/functions as context values without memoization,
                leading to unnecessary re-renders
              </li>
              <li>
                Overusing <code>useContext</code> for deeply nested state that
                might be better managed with a state management library
              </li>
            </ul>

            <div class="subsection">
              <h3>
                Common mistake: using objects/functions as context values
                without memoization
              </h3>

              <p>
                Here the context value is a list of todos. Whenever
                <code>TodoListContainer</code> re-renders (for example, on a
                route update), this will be a new array created thanks to the
                filtering, so React will also have to re-render all components
                deep in the tree that call
                <code>useContext(TodoListContext)</code>.
              </p>

              <p>
                <code>filteredTodos</code> is recomputed on every render and
                creates a new array instance, even if <code>todos</code> or
                <code>status</code> haven't changed. This can cause unnecessary
                re-renders.
              </p>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Bad:</strong> New array created on every render.
                  </p>
                  <div class="code-block">
                    <pre><code>function TodoListContainer() {
  const [todos, setTodos] = useState([
    { title: 'Fix bug', status: 'in_progress' },
    { title: 'Add button', status: 'completed' },
  ]);
  const [status, setStatus] = useState('in_progress');
  const filteredTodos = todos.filter((todo) => todo.status === status);

  return (
    &lt;TodoListContext.Provider value={filteredTodos}>
      &lt;TodoList />
    &lt;/TodoListContext.Provider>
  );
}</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Good:</strong> Use <code>useMemo</code> to
                    memoize the array.
                  </p>
                  <div class="code-block">
                    <pre><code>function TodoListContainer() {
  const [todos, setTodos] = useState([
    { title: 'Fix bug', status: 'in_progress' },
    { title: 'Add button', status: 'completed' },
  ]);
  const [status, setStatus] = useState('in_progress');
  const filteredTodos = useMemo(
    () => todos.filter((todo) => todo.status === status),
    [todos, status],
  );

  return (
    &lt;TodoListContext.Provider value={filteredTodos}>
      &lt;TodoList />
    &lt;/TodoListContext.Provider>
  );
}</code></pre>
                  </div>
                  <p>
                    We can use <code>useMemo</code> to memoize
                    <code>filteredTodos</code>, so it's only recalculated when
                    <code>todos</code> or <code>status</code> change. This
                    optimization can be significant for large lists.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Further reading on react.dev:
              <a
                href="https://react.dev/reference/react/useContext"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >useContext - React</a
              >
            </p>
          </section>

          <section>
            <h2>useRef</h2>

            <p>
              <code>useRef</code> stores a mutable reference that persists
              across renders, commonly used for:
            </p>

            <ul class="bullet-list">
              <li>
                References data that is specific to the component instance
              </li>
              <li>Storing references to the DOM</li>
              <li>
                Storing data that does not affect the UI of the component (e.g.
                timeout or interval IDs). Mutating the ref values does not cause
                re-renders
              </li>
            </ul>

            <div class="code-block">
              <pre><code>import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  return (
    &lt;div>
      &lt;input ref={inputRef} />
      &lt;button onClick={() => inputRef.current.focus()}>Focus Input&lt;/button>
    &lt;/div>
  );
}</code></pre>
            </div>

            <p><strong>Pitfalls:</strong></p>
            <ul class="bullet-list">
              <li>
                Overusing <code>useRef</code> for state instead of useState
              </li>
            </ul>

            <p>
              Further reading on react.dev:
              <a
                href="https://react.dev/reference/react/useRef"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >useRef - React</a
              >
            </p>
          </section>

          <section>
            <h2>useId</h2>

            <p>
              <code>useId</code> is a hook introduced in React 18 that generates
              unique IDs for accessibility attributes and form elements. It
              ensures that the IDs are unique within a component tree, even when
              server-rendering.
            </p>

            <div class="code-block">
              <pre><code>import { useId } from 'react';

function Form() {
  const id = useId();

  return (
    &lt;div>
      &lt;label htmlFor={id}>Name:&lt;/label>
      &lt;input id={id} type="text" />
    &lt;/div>
  );
}</code></pre>
            </div>

            <p><strong>Use cases:</strong></p>
            <ul class="bullet-list">
              <li>
                Primarily design system components where IDs are used for
                accessibility attributes (like <code>aria-labelledby</code>) yet
                they need to have unique values because there can be multiple
                component instances on the page
              </li>
              <li>
                Generating unique IDs for form inputs, especially in
                server-rendered applications
              </li>
              <li>
                Avoiding having to manually generating unique IDs with libraries
                or global counters
              </li>
            </ul>

            <p><strong>Pitfalls:</strong></p>
            <ul class="bullet-list">
              <li>
                Do not use <code>useId</code> for keys in lists. Use stable
                values like database IDs instead
              </li>
              <li>
                It is only useful for generating static IDs and should not be
                used to track dynamic state
              </li>
            </ul>

            <p>
              Further reading on react.dev:
              <a
                href="https://react.dev/reference/react/useId"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >useId - React</a
              >
            </p>
          </section>

          <section>
            <h2>Rules of hooks</h2>

            <p>
              React hooks follow a strict set of rules to ensure they function
              correctly and maintain state consistency across renders. Violating
              these rules can lead to bugs, unintended behavior, or broken
              components.
            </p>

            <ol class="numbered-list">
              <li>
                Only call hooks at the top level: Do not call hooks inside
                loops, conditions, nested functions, or
                <code>try</code>/<code>catch</code>/<code>finally</code> blocks
              </li>
              <li>
                Only call hooks from React function components or custom hooks:
                Avoid using hooks in regular JavaScript functions
              </li>
            </ol>

            <p>Examples of incorrect vs correct hooks usage:</p>

            <div class="subsection">
              <h3>Do not call hooks inside conditions</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Wrong:</strong> Call hooks inside a condition.
                  </p>
                  <div class="code-block">
                    <pre><code>if (someCondition) {
  // ❌ Wrong: Hook inside a condition
  const [count, setCount] = useState(0);
}</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Correct:</strong> Call hooks at the top level.
                  </p>
                  <div class="code-block">
                    <pre><code>const [count, setCount] = useState(0);

if (someCondition) {
  console.log(count);
}</code></pre>
                  </div>
                  <p>
                    Hooks must be called in the same order on every render.
                    Conditional hooks may cause React to misalign state updates.
                  </p>
                </div>
              </div>
            </div>

            <div class="subsection">
              <h3>Only call hooks within React components or custom hooks</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Wrong:</strong> Call a hook outside a component.
                  </p>
                  <div class="code-block">
                    <pre><code>// ❌ Wrong: Outside of the component
const count = useState(0);

function App() {
  // ...
}</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Correct:</strong> Call hooks inside functional
                    components or custom hooks.
                  </p>
                  <div class="code-block">
                    <pre><code>function App() {
  const [count, setCount] = useState(0);
  return &lt;p>{count}&lt;/p>;
}

function useCounter() {
  const [count, setCount] = useState(0);

  return [count, () => setCount((x) => x + 1)];
}</code></pre>
                  </div>
                  <p>
                    Hooks rely on React's render cycle and component state.
                    Calling hooks outside a component prevents React from
                    tracking state.
                  </p>
                </div>
              </div>
            </div>

            <div class="subsection">
              <h3>Do not call hooks after a conditional return</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p><strong>❌ Wrong:</strong> Call hooks conditionally.</p>
                  <div class="code-block">
                    <pre><code>function Counter({ hidden }) {
  if (hidden) {
    return;
  }

  // ❌ Wrong: After a conditional return
  const [count, setCount] = useState(0);
  // ...
}</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Correct:</strong> Call hooks without a condition.
                  </p>
                  <div class="code-block">
                    <pre><code>function Counter({ hidden }) {
  const [count, setCount] = useState(0);

  if (hidden) {
    return;
  }
  // ...
}</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="subsection">
              <h3>Do not calling hooks within loops</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p><strong>❌ Wrong:</strong> Call hooks inside a loop.</p>
                  <div class="code-block">
                    <pre><code>for (let i = 0; i < 2; i++) {
  // ❌ Wrong: Hook inside a loop
  const [count, setCount] = useState(0);
}</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p><strong>✅ Correct:</strong> Call hooks without a loop.</p>
                  <div class="code-block">
                    <pre><code>const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);</code></pre>
                  </div>
                  <p>
                    React assumes hooks are called in the same order every
                    render. Calling them in a different order or different
                    number of calls can break React's internal state tracking.
                  </p>
                </div>
              </div>
            </div>

            <div class="subsection">
              <h3>Do not call in event handlers</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Wrong:</strong> Call hooks inside an event
                    handler.
                  </p>
                  <div class="code-block">
                    <pre><code>function Counter() {
  function handleClick() {
    // ❌ Wrong: Inside an event handler
    const theme = useContext(ThemeContext);
  }
  // ...
}</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Correct:</strong> Call hooks outside event
                    handler.
                  </p>
                  <div class="code-block">
                    <pre><code>function Counter() {
  const theme = useContext(ThemeContext);

  function handleClick() {
    // ...
  }
  // ...
}</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <p>
              Further reading on react.dev:
              <a
                href="https://react.dev/reference/rules/rules-of-hooks"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >Rules of Hooks</a
              >
            </p>
          </section>

          <section>
            <h2>Custom hooks</h2>

            <p>
              Custom hooks in React allow you to extract reusable logic from
              components while maintaining state and side effects using built-in
              hooks like <code>useState</code>, <code>useEffect</code>,
              <code>useMemo</code>, and others.
            </p>

            <p>
              They follow the same rules as React hooks but enable better code
              reuse, abstraction, and separation of concerns in a clean and
              maintainable way.
            </p>

            <ul class="bullet-list">
              <li>
                <strong>Code reusability:</strong> Instead of duplicating logic
                across components, a custom Hook encapsulates the logic and
                makes it reusable
              </li>
              <li>
                <strong>Separation of concerns:</strong> Components should focus
                on UI rendering, while custom hooks handle logic (state
                management, fetching data, event listeners, etc.)
              </li>
              <li>
                <strong>Cleaner & more readable components:</strong> Extracting
                logic into a Hook makes components less cluttered and more
                focused on presentation
              </li>
              <li>
                <strong>Encapsulation of side effects:</strong> Custom hooks
                allow managing side effects (like API calls) separately, making
                debugging and testing easier
              </li>
            </ul>

            <p>A custom hook:</p>
            <ul class="bullet-list">
              <li>
                Is a JavaScript function that starts with
                <code>use</code> (e.g., <code>useCounter</code>,
                <code>useFetch</code>)
              </li>
              <li>
                Must call other React hooks (e.g., <code>useState</code>,
                <code>useEffect</code>). If a custom hook does not call any
                React hooks, then it doesn't need to be a hook
              </li>
              <li>Keep them focused – one purpose per hook</li>
              <li>
                Optionally, returns state or functions that components can use
              </li>
            </ul>

            <p>
              Here's an example of a <code>useCounter</code> custom hook. The
              value of such a hook is that it does not expose the
              <code>setCount</code> function and users of the hook are
              restricted to the exposed operations, they can only increment,
              decrement, or reset the value.
            </p>

            <div class="code-block">
              <pre><code>import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    &lt;div>
      &lt;p>Count: {count}&lt;/p>
      &lt;button onClick={increment}>+&lt;/button>
      &lt;button onClick={decrement}>-&lt;/button>
      &lt;button onClick={reset}>Reset&lt;/button>
    &lt;/div>
  );
}</code></pre>
            </div>

            <p>
              Further reading on react.dev:
              <a
                href="https://react.dev/learn/reusing-logic-with-custom-hooks"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >Reusing Logic with Custom Hooks</a
              >
            </p>
          </section>

          <section>
            <h2>What you need to know for interviews</h2>

            <ol class="numbered-list">
              <li>
                <strong>Explain the purpose of hooks:</strong> Why React
                introduced hooks and how they replace class component lifecycle
                methods
              </li>
              <li>
                <strong>Know the common hooks:</strong> Understand when and why
                to use <code>useState</code>, <code>useEffect</code>,
                <code>useContext</code>, and <code>useRef</code>.
                <ul class="bullet-list">
                  <li>
                    <code>useState</code>: Use the functional update form of
                    <code>setState</code> when state depends on the previous
                    state e.g.
                    <code>setCount((prevCount) => prevCount + 1)</code>. This
                    also eliminates the problem of stale closures within the
                    event handlers
                  </li>
                </ul>
              </li>
              <li>
                <strong>Understand re-rendering issues:</strong> Recognize how
                dependency arrays impact performance and how
                <code>useMemo</code>/<code>useCallback</code> optimize rendering
              </li>
              <li>
                <strong>Implement a custom hook:</strong> Be able to write and
                explain a reusable custom hook in an interview
              </li>
              <li>
                <strong>Debug common hook pitfalls:</strong> Identify and fix
                common mistakes like missing dependencies in
                <code>useEffect</code> or unnecessary state updates causing
                re-renders
              </li>
            </ol>
          </section>

          <section>
            <h2>Practice questions</h2>

            <p><strong>Quiz:</strong></p>

            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-are-the-benefits-of-using-hooks-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What are the benefits of using hooks in React?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-are-the-rules-of-react-hooks?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What are the rules of React hooks?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-useeffect-and-uselayouteffect-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the difference between useEffect and useLayoutEffect
                  in React?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-purpose-of-callback-function-argument-format-of-setstate-in-react-and-when-should-it-be-used?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the purpose of callback function argument format of
                  setState() in React and when should it be used?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-does-the-dependency-array-of-useeffect-affect?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What does the dependency array of useEffect affect?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-useref-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the useRef hook in React and when should it be
                  used?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-usecallback-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the useCallback hook in React and when should it be
                  used?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-usememo-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the useMemo hook in React and when should it be
                  used?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-usereducer-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the useReducer hook in React and when should it be
                  used?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-useid-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the useId hook in React and when should it be
                  used?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-forwardref-in-react-used-for?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is forwardRef() in React used for?</a
                >
              </li>
            </ul>

            <p><strong>Coding:</strong></p>

            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/progress-bars/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Progress Bars</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/tabs/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Tabs</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/analog-clock/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Analog Clock</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/digital-clock/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Digital Clock</a
                >
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/react/state-design"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">Designing State in React</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/event-handling"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Event Handling in React</span>
            </div>
            <span class="nav-arrow">→</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import ReactPlaybookSidebar from "../../components/ReactPlaybookSidebar.vue";
</script>

<style scoped>
.playbook-article-page {
  background: #18181b;
  color: #ffffff;
  min-height: 100vh;
}

.article-layout {
  display: flex;
  min-height: 100vh;
}

.article-main {
  flex: 1;
  padding: 40px 0;
  padding-top: 120px;
  margin-left: 300px;
}

.article-header {
  max-width: 800px;
  margin: 0 auto 40px;
  padding: 0 2rem;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #9ca3af;
}

.article-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: #dcee77;
  color: #000000;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
}

.article-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.article-subtitle {
  font-size: 1.125rem;
  color: #9ca3af;
  line-height: 1.6;
  margin: 0;
}

.article-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  line-height: 1.7;
}

.article-content p {
  margin-bottom: 1.5rem;
  color: #d1d5db;
}

.article-content h2 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #ffffff;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #374151;
}

.article-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 1.5rem 0 1rem;
}

.article-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
  color: #d1d5db;
}

.article-content a {
  color: #dcee77;
  text-decoration: none;
  transition: color 0.2s ease;
}

.article-content a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.article-navigation {
  max-width: 800px;
  margin: 60px auto 0;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1;
}

.nav-link:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.nav-link.prev {
  text-align: left;
}

.nav-link.next {
  text-align: right;
  flex-direction: row-reverse;
}

.nav-label {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 0.25rem;
}

.nav-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
}

.nav-arrow {
  font-size: 1.25rem;
  color: #dcee77;
  font-weight: bold;
}

@media (max-width: 768px) {
  .article-header {
    padding: 0 1rem;
  }

  .article-content {
    padding: 0 1rem;
  }

  .article-header h1 {
    font-size: 2rem;
  }

  .article-navigation {
    padding: 0 1rem;
    flex-direction: column;
  }
}

.article-content code {
  background: #2a2a2e;
  color: #e5e7eb;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  font-size: 0.9em;
}

.code-block {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.code-block code {
  background: none;
  color: #e5e7eb;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.5;
}

.bullet-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.bullet-list li {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.bullet-list li::before {
  content: "•";
  color: #dcee77;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.bullet-list li strong {
  color: #ffffff;
}

.external-link {
  color: #dcee77;
  text-decoration: none;
  transition: color 0.2s ease;
}

.external-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.principle-section {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
}

.principle-section h3 {
  font-size: 18px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.code-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 16px 0;
}

.bad-example,
.good-example {
  background: #1f2937;
  border-radius: 8px;
  padding: 16px;
}

.bad-example p:first-child {
  color: #ef4444;
  font-weight: 600;
  margin-bottom: 12px;
}

.good-example p:first-child {
  color: #10b981;
  font-weight: 600;
  margin-bottom: 12px;
}

.comparison-table {
  margin: 2rem 0;
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #374151;
}

.comparison-table th {
  background: #374151;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
}

.comparison-table td {
  color: #d1d5db;
  font-size: 0.875rem;
  vertical-align: top;
}

.comparison-table tr:nth-child(even) {
  background: #2a2a2e;
}

.comparison-table tr:hover {
  background: #374151;
}

.comparison-table td:first-child {
  font-weight: 600;
  color: #ffffff;
}

.subsection {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.subsection h3 {
  font-size: 16px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.numbered-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.numbered-item {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: flex-start;
}

.numbered-item:last-child {
  margin-bottom: 0;
}

.number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #dcee77;
  color: #000000;
  border-radius: 50%;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
  margin-top: 2px;
}

.content {
  flex: 1;
  font-weight: 600;
  color: #ffffff;
}

.lead-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 2rem;
}
</style>
