<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">6</span>
            <span class="reading-time">10 min read</span>
          </div>
          <h1>Designing State in React Interviews</h1>
          <p class="article-subtitle">
            How to think about state in React, detailing best practices for
            structuring, resetting, and updating state to build efficient,
            maintainable, and performant applications
          </p>
        </header>
        <article class="article-content">
          <p class="lead-paragraph">
            State is the backbone of any React application, dictating how
            components behave and render over time. Unlike static data, state
            enables dynamic updates, user interactions, and real-time changes
            without requiring a full page reload.
          </p>

          <p>
            A well-structured state improves code maintainability, enhances
            performance, and prevents unnecessary re-renders. Poor state
            management, on the other hand, can lead to buggy code, sluggish
            applications, and unpredictable behavior.
          </p>

          <section>
            <h2>How to structure state</h2>

            <p>
              When creating a stateful component, you need to decide how many
              state variables to use and how to structure their data. While a
              suboptimal state design can still produce a functioning
              application, following these key principles can help you make
              better decisions and improve maintainability.
            </p>

            <div class="principle-section">
              <h3>Keep state local where possible</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Bad:</strong> Unnecessarily lifting state up when
                    it's only used in one component.
                  </p>
                  <div class="code-block">
                    <pre><code>function App() {
  const [count, setCount] = useState(0);

  return &lt;Child count={count} setCount={setCount} /&gt;;
}

function Child({ count, setCount }) {
  return &lt;button onClick={() => setCount(count + 1)}>Count: {count}&lt;/button&gt;;
}</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Good:</strong> Keep the state inside the
                    component that uses it. When the count changes, only
                    <code>Child</code> needs to be re-rendered.
                  </p>
                  <div class="code-block">
                    <pre><code>function App() {
  return &lt;Child /&gt;;
}

function Child() {
  const [count, setCount] = useState(0);
  return &lt;button onClick={() => setCount(count + 1)}>Count: {count}&lt;/button&gt;;
}</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="principle-section">
              <h3>Group related state together</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Bad:</strong> Using separate
                    <code>useState</code> calls for related values.
                  </p>
                  <p>
                    In this case, <code>x</code> and <code>y</code> represent a
                    single point, meaning they should be managed together. Using
                    separate state variables makes updates more cumbersome.
                  </p>
                  <div class="code-block">
                    <pre><code>function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    &lt;div
      onPointerMove={(e) => {
        setX(e.clientX);
        setY(e.clientY);
      }}>
      &lt;p>
        Point: ({x}, {y})
      &lt;/p>
    &lt;/div>
  );
}</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Good:</strong> Use an object to group related
                    state. Since <code>x</code> and <code>y</code> together
                    define a single point, they should be managed as a unit.
                  </p>
                  <div class="code-block">
                    <pre><code>function App() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  return (
    &lt;div
      onPointerMove={(e) =>
        setPoint({ x: e.clientX, y: e.clientY })
      }>
      &lt;p>
        Point: ({point.x}, {point.y})
      &lt;/p>
    &lt;/div>
  );
}</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="principle-section">
              <h3>Avoid possible contradictions in state</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Bad:</strong> Separate
                    <code>isSubmitting</code> and <code>isSubmitted</code> state
                  </p>
                  <div class="code-block">
                    <pre><code>function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    fetch('/api/submit', { method: 'POST' })
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      })
      .catch(() => {
        setIsSubmitting(false);
        setIsError(true);
      });
  }

  return (
    &lt;form onSubmit={handleSubmit}>
      &lt;button type="submit" disabled={isSubmitting}>
        Submit
      &lt;/button>
      {isSubmitted && &lt;p>Form submitted successfully!&lt;/p>}
    &lt;/form>
  );
}</code></pre>
                  </div>
                  <p>
                    In this example, contradictory states are possible given
                    there are 3 state values used to represent the state of the
                    form. If new code somehow accidentally does
                    <code>setIsSubmitting(true); setIsSubmitted(true);</code>
                    then the component is both submitting and submitted, which
                    does not make sense.
                  </p>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Good:</strong> Using a single
                    <code>status</code> state
                  </p>
                  <div class="code-block">
                    <pre><code>function ContactForm() {
  const [status, setStatus] = useState('idle'); // "idle", "submitting", "success", "error"

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');

    fetch('/api/submit', { method: 'POST' })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  }

  return (
    &lt;form onSubmit={handleSubmit}>
      &lt;button type="submit" disabled={status === 'submitting'}>
        Submit
      &lt;/button>
      {status === 'success' && &lt;p>Form submitted successfully!&lt;/p>}
      {status === 'error' && &lt;p>Submission failed. Please try again.&lt;/p>}
    &lt;/form>
  );
}</code></pre>
                  </div>
                  <p>Why is this better?</p>
                  <ul class="bullet-list">
                    <li>
                      <strong>Prevents contradictions:</strong> The form can
                      only be in one state at a time
                    </li>
                    <li>
                      <strong>Handles errors properly:</strong> The UI can react
                      to errors without incorrectly marking the form as
                      "submitted"
                    </li>
                    <li>
                      <strong>Simpler logic:</strong> No need to sync multiple
                      boolean states manually
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="principle-section">
              <h3>Derive state instead of storing redundant values</h3>

              <div class="code-comparison">
                <div class="bad-example">
                  <p>
                    <strong>❌ Bad:</strong> Storing both the list and a count
                    when count can be derived.
                  </p>
                  <div class="code-block">
                    <pre><code>const [todos, setTodos] = useState(['Task 1', 'Task 2']);
const [count, setCount] = useState(2); // Unnecessary state that needs to be synced

useEffect(() => {
  setCount(todos.length);
}, [todos]);</code></pre>
                  </div>
                </div>

                <div class="good-example">
                  <p>
                    <strong>✅ Good:</strong> Derive count from the
                    <code>todos</code> array.
                  </p>
                  <div class="code-block">
                    <pre><code>const [todos, setTodos] = useState(['Task 1', 'Task 2']);
const count = todos.length; // No need to store it separately</code></pre>
                  </div>
                </div>
              </div>

              <p>
                There are other
                <a
                  href="https://react.dev/learn/choosing-the-state-structure#principles-for-structuring-state"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >good principles for structuring state</a
                >
                such as
                <a
                  href="https://react.dev/learn/choosing-the-state-structure#avoid-duplication-in-state"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >"Avoid duplication in state"</a
                >
                and
                <a
                  href="https://react.dev/learn/choosing-the-state-structure#avoid-deeply-nested-state"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >"Avoid deeply nested state"</a
                >
                but they aren't too relevant for interviews.
              </p>
            </div>
          </section>

          <section>
            <h2>Resetting state</h2>

            <p>
              The simplest way to reset state is by setting it back to its
              initial value. However, when there are multiple state values, it
              can be troublesome to have to call multiple setters to reset to
              the initial state. You might miss out certain state fields. That's
              why it's important to group state and also define functions for
              each possible action.
            </p>

            <p>
              One way of doing a full reset of a component is to change the
              <code>key</code> property when rendering. When the
              <code>key</code> changes, React will discard the element and
              recreate it from scratch. <code>key</code>s are useful beyond
              rendering lists.
            </p>

            <div class="code-block">
              <pre><code>function Form() {
  return (
    &lt;form>
      &lt;input type="text" placeholder="John Doe"/>
      &lt;button>Submit&lt;/button>
    &lt;/form>
  );
}

function App() {
  const [key, setKey] = useState(0);

  return (
    &lt;div>
      &lt;Form key={key} />
      &lt;button onClick={() => setKey((prev) => prev + 1)}>Reset form&lt;/button>
    &lt;/div>
  );
}</code></pre>
            </div>

            <p>How it works:</p>
            <ul class="bullet-list">
              <li>
                Changing the <code>key</code> forces React to unmount and
                remount the <code>Form</code> component
              </li>
              <li>
                <code>&lt;form&gt;</code>s have built-in ways to reset its state
                (e.g. <code>formElement.reset()</code>), but the
                <code>key</code> approach works for any component
              </li>
            </ul>

            <p>
              Further reading on react.dev:
              <a
                href="https://react.dev/learn/preserving-and-resetting-state"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >Preserving and Resetting State</a
              >
            </p>
          </section>

          <section>
            <h2>Controlled vs uncontrolled components</h2>

            <p>
              In React, a component can be described as controlled or
              uncontrolled based on how its state is managed. These terms are
              not strict technical definitions but rather a way to understand
              how components interact with their parents.
            </p>

            <p>
              Note: the legacy definition of uncontrolled components was
              restricted to form <code>&lt;input&gt;</code> elements and whether
              the state lived within the DOM or was controlled by React. The
              <a
                href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >modern definition</a
              >
              expands the definition of uncontrolled to be more than form
              <code>&lt;input&gt;</code> elements.
            </p>

            <div class="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Controlled</th>
                    <th>Uncontrolled</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>State location</strong></td>
                    <td>Parent via props</td>
                    <td>Component itself via local state</td>
                  </tr>
                  <tr>
                    <td><strong>Advantages</strong></td>
                    <td>Flexible, easily coordinated with other components</td>
                    <td>Simpler to use, fewer props needed</td>
                  </tr>
                  <tr>
                    <td><strong>Disadvantages</strong></td>
                    <td>Requires more props/configuration</td>
                    <td>Less flexible, harder to coordinate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              A controlled component is one where its behavior is fully
              determined by its props rather than its own local state. This
              allows the parent component to have full control over how the
              component behaves.
            </p>

            <p>
              An uncontrolled component manages its own state internally, making
              it independent of the parent component. The parent cannot directly
              modify the state of an uncontrolled component.
            </p>

            <p>
              Most components are not strictly controlled or uncontrolled, they
              often use a mix of both. A good practice is to start with local
              state (uncontrolled) and lift state up when needed.
            </p>

            <p>
              Example: An example of a common component where both controlled or
              uncontrolled are viable is accordions. On marketing pages,
              accordions tend to be used for FAQ sections and uncontrolled
              versions is sufficient. On dashboards and detail pages, accordions
              items might expand or collapse depending on user actions and it is
              necessary for these accordions to be controlled.
            </p>
          </section>

          <section>
            <h2>Context</h2>

            <p>
              React context is used for managing global or shared data that
              needs to be accessible to its descendants without passing props
              manually through each level of the component tree.
            </p>

            <p>
              Context is commonly paired with state and used at the top of the
              app to make app-level data available to the entire app such as
              theming and authentication. Whenever the context provider value
              changes, all descendants consuming the context
              (<code>useContext(...)</code>) will be re-rendered.
            </p>

            <div class="code-block">
              <pre><code>const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    &lt;ThemeContext.Provider value={{ theme, setTheme }}>
      &lt;Child />
    &lt;/ThemeContext.Provider>
  );
}

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    &lt;div>
      &lt;p>Current theme: {theme}&lt;/p>
      &lt;button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      &lt;/button>
    &lt;/div>
  );
}</code></pre>
            </div>

            <div class="subsection">
              <h3>Pitfalls of context</h3>

              <p>
                Context is an easier (but not necessarily best) way to make data
                available to multiple components because of the following
                pitfalls:
              </p>

              <ul class="bullet-list">
                <li>
                  <strong>Not statically analyzable:</strong> Unlike props,
                  which are explicitly passed down to components, context is
                  dynamically provided at runtime. This means you can't easily
                  determine at build time whether a component has access to the
                  necessary context, leading to potential errors that only
                  appear when the app is running
                </li>
                <li>
                  <strong>May cause unnecessary re-renders:</strong> When a
                  context value updates, all consuming components re-render,
                  even if they don't use the changed part of the context. This
                  can lead to performance issues, especially when the provider
                  holds a large object or updates frequently. Splitting context
                  or memoizing values can help mitigate this
                </li>
                <li>
                  <strong>Easy to add but hard to remove:</strong> Context is
                  convenient for managing global state, but once added, removing
                  it or refactoring can be difficult, especially in large
                  applications. Child components could be relying on a removed
                  context provider but static analysis will not be able to flag
                  the issue
                </li>
                <li>
                  <strong>Should not be used for frequent updates:</strong>
                  Context is not optimized for state that updates frequently,
                  such as form input, animations, or rapidly changing data
                  (e.g., typing in a search bar). Instead, use
                  <code>useState</code> or <code>useReducer</code> locally and
                  only update context when necessary to avoid unnecessary
                  renders
                </li>
                <li>
                  <strong
                    >Do not put too much data into a single provider:</strong
                  >
                  If too much unrelated data is stored in one context provider,
                  it increases the likelihood of unnecessary re-renders and
                  makes the state harder to manage. Instead, split context into
                  multiple providers, each handling a specific concern (e.g.,
                  separate providers for authentication, theme, and
                  notifications)
                </li>
              </ul>
            </div>

            <div class="subsection">
              <h3>Use cases for context</h3>

              <ul class="bullet-list">
                <li>
                  <strong>Theming:</strong> If your app allows users to switch
                  themes (e.g., dark mode, high contrast mode), you can place a
                  context provider at the top level and use that context in
                  components that need to adjust their styling. This avoids prop
                  drilling and ensures a consistent appearance across the app.
                </li>
                <li>
                  <strong>Current user (Authentication):</strong> Many
                  components might need access to the currently logged-in user's
                  information. Storing this in context makes it easy to read and
                  update anywhere in the app. If your app supports multiple
                  active user sessions (e.g., commenting as different users),
                  you can wrap parts of the UI in a nested provider with
                  different user values.
                </li>
                <li>
                  <strong>Language and localization:</strong> If your app
                  supports multiple languages, a context provider can store the
                  currently selected language and provide translations to
                  components without manually passing language settings down the
                  tree. This makes it easy to build a fully localized
                  experience.
                </li>
                <li>
                  <strong>Routing:</strong> Most routing libraries use context
                  internally to keep track of the current route. This allows
                  components like navigation links to determine whether they are
                  active. If you're building a custom router, using context can
                  help manage and propagate navigation state throughout the app.
                </li>
                <li>
                  <strong>Notifications and alerts:</strong> Toasts, success
                  messages, and error alerts often need to be triggered from
                  different parts of the app. A notification context can
                  centralize the logic for showing and dismissing alerts, making
                  it easy to manage and display messages consistently.
                </li>
                <li>
                  <strong>Global modals and dialogs:</strong> If you have modal
                  dialogs that can be triggered from multiple locations (e.g., a
                  confirmation dialog or a settings modal), storing their
                  open/close state in context allows any component to show or
                  hide them without passing down handlers manually.
                </li>
                <li>
                  <strong>Saving user preferences:</strong> If your app needs to
                  store UI preferences (e.g., sidebar open/closed state, default
                  sorting options), placing them in context allows different
                  parts of the UI to stay synchronized while keeping logic
                  centralized.
                </li>
                <li>
                  <strong>Managing complex state with reducers:</strong> As your
                  app grows, you might accumulate a lot of state at the top
                  level. Many deeply nested components may need to update this
                  state. Using <code>useReducer</code> with context allows
                  components to dispatch actions to modify global state without
                  requiring complex prop drilling.
                </li>
              </ul>

              <p>
                Further reading on react.dev:
                <a
                  href="https://react.dev/learn/passing-data-deeply-with-context"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Passing Data Deeply with Context</a
                >
              </p>
            </div>
          </section>

          <section>
            <h2>Reducers</h2>

            <p>
              As an app grows, the amount of state in the app increases and
              these things happen:
            </p>

            <ul class="bullet-list">
              <li>
                <strong>Complex state transitions:</strong> The number of ways
                state can change increases proportionately or even exponentially
              </li>
              <li>
                <strong>Multiple origins for transitions:</strong> State updates
                can be triggered from multiple places (e.g. various places in
                the UI, background events, command palette, etc.)
              </li>
              <li>
                <strong>Inconsistent state transitions:</strong> It becomes
                harder to see at a glance all the different ways a component's
                state can get updated. As a result, certain state values should
                be modified together (e.g. request state and error message) but
                the logic might not be consistent in various parts of the UI
              </li>
            </ul>

            <p>
              One way to manage state at a larger scale is to consolidate the
              possible changes into "actions" and consolidate the logic for how
              state should change in response to these actions.
            </p>

            <p>
              A reducer in React is a function that manages complex state logic
              by taking the current state and an action, then returning a new
              state based on that action. It follows the Redux pattern and is
              commonly used with the <code>useReducer</code> hook, which makes
              state updates more predictable and easier to debug. All changes to
              the state have to be made through an action, the state should not
              be modified directly.
            </p>

            <div class="code-block">
              <pre><code>const newState = reducer(currentState, action);</code></pre>
            </div>

            <p>A reducer function follows this structure:</p>

            <div class="code-block">
              <pre><code>function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state; // Return current state if action is unknown
  }
}</code></pre>
            </div>

            <ul class="bullet-list">
              <li><code>state</code>: Represents the current state</li>
              <li>
                <code>action</code>: An object describing the update (e.g.,
                <code>{ type: "INCREMENT" }</code> with an optional payload
                field)
              </li>
              <li>
                <code>reducer</code>: Pure function that takes in the current
                <code>state</code> and <code>action</code> and returns a new
                state based on the action
              </li>
            </ul>

            <p>Here's an example of a counter implemented using reducers:</p>

            <div class="code-block">
              <pre><code>function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    &lt;div>
      &lt;p>Count: {state.count}&lt;/p>
      &lt;button
        aria-label="Increment"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        +
      &lt;/button>
      &lt;button
        aria-label="Decrement"
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        -
      &lt;/button>
      &lt;button onClick={() => dispatch({ type: 'RESET' })}>Reset&lt;/button>
    &lt;/div>
  );
}</code></pre>
            </div>

            <ol class="numbered-list">
              <li>
                <code>useReducer(reducer, initialState)</code> initializes state
                using the <code>reducer</code> function
              </li>
              <li>
                <code>dispatch({ type: "INCREMENT" })</code> triggers the
                reducer, updating state accordingly
              </li>
              <li>
                State updates do not mutate the previous state but return a new
                object
              </li>
            </ol>

            <div class="subsection">
              <h3>Use cases of reducers</h3>

              <p>
                <code>useReducer</code> is useful for managing complex state
                updates where multiple actions modify the state in a structured
                way. Here's how reducers help in different use cases:
              </p>

              <ol class="numbered-list">
                <li>
                  <strong>Complex multi-step forms:</strong> Forms with multiple
                  steps or dependent fields can be hard to manage with useState.
                  Reducers help reduce repetitive state updates by centralizing
                  form logic. Keeps form submission, validation, and step
                  navigation logic clean
                </li>
                <li>
                  <strong
                    >State-driven UI (e.g. Handling modals, notifications,
                    dropdown menus):</strong
                  >
                  Managing modals, notifications, dropdown menus, with only
                  <code>useState</code> can get messy. Multiple UI elements
                  (e.g., opening modals, dismissing notifications) share state,
                  making it harder to track
                </li>
                <li>
                  <strong
                    >Finite state machines and flows requiring
                    transition:</strong
                  >
                  Flows with well-defined behavior (e.g., authentication,
                  multi-step processes) follow a finite number of states. Using
                  <code>useState</code> for each authentication step results in
                  too many independent state variables.
                  <code>useReducer</code> helps to structure state transitions
                  so that they are predictable
                </li>
              </ol>
            </div>

            <div class="subsection">
              <h3>Benefits of reducers</h3>

              <ul class="bullet-list">
                <li>
                  <strong>Readability:</strong> Reducers centralize state logic
                  changes and this separation of actions vs. reducers improves
                  readability
                </li>
                <li>
                  <strong>Debugging:</strong> Easier to debug with
                  <code>useReducer</code> as you can add a
                  <code>console.log</code> at the top to see every state update
                  and which action caused it
                </li>
                <li>
                  <strong>Complex state changes:</strong> Use reducers when
                  state changes involve multiple steps or dependencies
                </li>
                <li>
                  <strong>State management:</strong> Reducers work well with
                  React Context for non-local state management. However, there
                  are better alternatives like Redux, Zustand, and Jotai
                </li>
                <li>
                  <strong>Pure:</strong> Reducers should not have side effects,
                  return the same output for the same input, and always return a
                  new state object, as React depends on immutability for
                  re-renders
                </li>
                <li>
                  <strong>Testing:</strong> Reducers don't depend on the UI and
                  being pure functions, they don't require a React environment
                  or much set up to be tested
                </li>
              </ul>

              <p>
                Further reading on react.dev:
                <a
                  href="https://react.dev/learn/extracting-state-logic-into-a-reducer"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Extracting State Logic into a Reducer</a
                >
              </p>
            </div>
          </section>

          <section>
            <h2>What you need to know for interviews</h2>

            <p>
              Given the close-ended and limited nature of UI coding questions
              during interviews, bear the following in mind:
            </p>

            <ul class="bullet-list">
              <li>
                <strong>State design is crucial:</strong> Since the question is
                small, there are usually not many fields needed and hence
                limited in the ways state can be structured. You absolutely have
                to come up with the most efficient and minimal state for the
                question. Remember the suggested practice – derive state where
                you can, avoid possible contradictions in state, and group state
                fields appropriately.
              </li>
              <li>
                <strong>State lives at the top level:</strong> Given that most
                questions will be small, it is highly likely that the state
                should live at the top level / app level and most children
                should be stateless, receiving data as props. The few cases
                where state should live within children are ephemeral state in
                form inputs or state that isn't needed across the whole app.
              </li>
              <li>
                <strong>You probably won't need context:</strong> Most interview
                questions are small and prop passing will probably not be deeper
                than two or three levels in the worst case. Stick with prop
                passing since it's simpler.
              </li>
              <li>
                <strong>You probably won't need reducers:</strong> Most UI
                coding questions are small and will not require that many
                different state changes. You can consolidate state updates
                within action functions without the need for
                <code>useReducer</code>. The exception being games since game
                logic can get pretty complex.
              </li>
            </ul>
          </section>

          <section>
            <h2>Practice questions</h2>

            <p><strong>Quiz:</strong></p>

            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-controlled-and-uncontrolled-react-components?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the difference between controlled and uncontrolled
                  React Components?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-are-some-pitfalls-about-using-context-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What are some pitfalls about using context in React?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/how-do-you-reset-a-components-state-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >How do you reset a component's state in React?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/how-do-you-decide-between-using-react-state-context-and-external-state-managers?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >How do you decide between using React state, context, and
                  external state managers?</a
                >
              </li>
            </ul>

            <p><strong>Coding:</strong></p>

            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/data-table/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Data Table</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/data-table-ii/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Data Table II</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/todo-list/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Todo List</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/traffic-light/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Traffic Light</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/tic-tac-toe/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Tic-tac-toe</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/connect-four/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Connect Four</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/image-carousel/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Image Carousel</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/pixel-art/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Pixel Art</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/transfer-list/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Transfer List</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/undoable-counter/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Undoable Counter</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/users-database/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Users Database</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/whack-a-mole/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Whack-A-Mole</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/memory-game/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Memory Game</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/nested-checkboxes/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Nested Checkboxes</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/wordle/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Wordle</a
                >
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/react/declarative-thinking"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">Thinking Declaratively in React</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/hooks"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">React Hooks for Interviews</span>
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
