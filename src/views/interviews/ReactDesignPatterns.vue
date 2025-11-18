<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">12</span>
            <span class="reading-time">10 min read</span>
          </div>
          <h1>Design Patterns for React Interviews</h1>
          <p class="article-subtitle">
            An exploration of React design patterns, including higher-order
            components, render props, and container/presentational patterns, to
            help you build clean, reusable, and scalable applications
          </p>
        </header>
        <article class="article-content">
          <p class="lead-paragraph">
            React encourages component-based architecture, but as applications
            grow, maintaining clean, reusable, and scalable code becomes
            essential. The following are some of the most common design patterns
            in React and when to use them.
          </p>

          <section>
            <h2>Higher-order components (HOC)</h2>

            <p>
              A Higher-order component (HOC) is a function that takes a
              component and returns an enhanced component with additional props
              or logic. It promotes code reuse across multiple components.
            </p>

            <div class="code-block">
              <pre><code>function withAuth(Component) {
  return function WrappedComponent(props) {
    const isAuthenticated = localStorage.getItem('token'); // Check auth status
    return isAuthenticated ? &lt;Component {...props} /&gt; : &lt;p&gt;Access Denied&lt;/p&gt;;
  };
}

function Dashboard() {
  return &lt;h1&gt;Dashboard&lt;/h1&gt;;
}

const ProtectedDashboard = withAuth(Dashboard);</code></pre>
            </div>

            <p>HOCs are useful for:</p>

            <ul class="bullet-list">
              <li>
                Reusing logic across multiple components (e.g., authentication,
                analytics, logging, fetching data)
              </li>
              <li>Adding behavior without modifying original components</li>
              <li>
                Scenarios where hooks aren't an option, such as class components
              </li>
            </ul>

            <p>
              Higher-order components were more useful in the pre-hooks era for
              adding functionality to components. Now that we have React hooks
              and the ability to create custom hooks, HOCs are no longer that
              widespread.
            </p>

            <p>
              Further reading on react.dev:
              <a
                href="https://www.patterns.dev/react/hoc-pattern/"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >Higher-Order Components – React</a
              >
            </p>
          </section>

          <section>
            <h2>Render props</h2>

            <p>
              Render props involves passing a function that renders an element
              as a prop to a component. The component calls the prop with
              certain parameters, which is usually its own state.
            </p>

            <p>
              This allows the parent to the component to render based on the the
              component state still allowing the parent to customize the
              behavior/appearance from outside.
            </p>

            <div class="code-block">
              <pre><code>function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

function App() {
  return (
    &lt;MouseTracker
      render={(position) => (
        &lt;p&gt;
          Mouse: {position.x}, {position.y}
        &lt;/p&gt;
      )}
    /&gt;
  );
}</code></pre>
            </div>

            <p>Render props are useful for:</p>

            <ul class="bullet-list">
              <li>
                Sharing logic between components while keeping UI flexible
              </li>
              <li>
                Scenarios where hooks aren't an option, such as class components
              </li>
              <li>
                Headless components that provide logic and behavior while
                allowing customization of appearance
              </li>
            </ul>

            <p>
              Further reading on react.dev:
              <a
                href="https://www.patterns.dev/react/render-props-pattern/"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >Render Props - React</a
              >
            </p>
          </section>

          <section>
            <h2>Container/presentational pattern</h2>

            <p>
              The Container/presentational pattern is a design pattern used in
              React to separate state management (logic) from UI rendering
              (presentation). It helps in making components reusable,
              maintainable, and testable by ensuring a clear separation of
              concerns.
            </p>

            <p>
              On the client, data can come from the user's input, fetched from
              an API, <code>localStorage</code>, WebSockets, etc. Not assuming
              where the data comes from is a good way to structure your
              components.
            </p>

            <p><strong>Presentational components:</strong></p>

            <ul class="bullet-list">
              <li>Focus only on rendering the UI</li>
              <li>Do not contain state (except local UI state like toggles)</li>
              <li>
                Receive all data via props and use event handlers (e.g.
                <code>onClick</code>, <code>onChange</code>)
              </li>
              <li>
                Reusable and easy to test because they are independent of
                business logic
              </li>
              <li>Does not assume how data is fetched</li>
            </ul>

            <div class="code-block">
              <pre><code>function UserList({ users }) {
  return (
    &lt;ul&gt;
      {users.map((user) => (
        &lt;li key={user.id}&gt;
          {user.name} - {user.email}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
            </div>

            <p><strong>Container components:</strong></p>

            <ul class="bullet-list">
              <li>Manage state, API calls, and business logic</li>
              <li>
                Pass data and functions as props to presentational components
              </li>
              <li>
                Do not contain UI code (minimal JSX except for wrapping
                presentational components)
              </li>
            </ul>

            <div class="code-block">
              <pre><code>function UserListContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return &lt;UserList users={users} /&gt;;
}</code></pre>
            </div>

            <p>This pattern allows:</p>

            <ul class="bullet-list">
              <li>Reusing UI components with different data sources</li>
              <li>A clear separation between UI and state logic</li>
              <li>Making UI components easier to test</li>
            </ul>

            <div class="subsection">
              <h3>Alternative approaches</h3>

              <ul class="bullet-list">
                <li>
                  <strong>Custom hooks</strong> (e.g. <code>useUser</code> hook
                  for fetching users): A more modern approach that keeps logic
                  reusable across multiple components
                </li>
                <li>
                  <strong>State management libraries</strong> (Redux, Zustand):
                  Handle global state separately without needing explicit
                  container components
                </li>
              </ul>

              <p>
                Further reading on react.dev:
                <a
                  href="https://www.patterns.dev/react/presentational-container-pattern"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Container/Presentational Pattern</a
                >
              </p>
            </div>
          </section>

          <section>
            <h2>What you need to know for interviews</h2>

            <ul class="bullet-list">
              <li>
                <strong>Use hooks first:</strong> While HOCs and render props
                were once popular patterns for code reuse in React, they have
                largely been replaced by hooks. However, they are still useful
                in certain scenarios where Hooks alone may not be sufficient or
                usable, such as in legacy code bases still using class
                components.
              </li>
              <li>
                <strong>Container/presentation goes beyond front end:</strong>
                The key idea behind the container/presentational pattern is to
                separate presentation from the source of data. Separating data
                fetching from presentation is a powerful concept that is useful
                beyond front end engineering. When building back end systems,
                data can be fetched from other services, loaded from a database,
                read from a filesystem, etc. By doing such a separation, code
                will be easier to reuse and test.
              </li>
            </ul>
          </section>

          <section>
            <h2>Practice questions</h2>

            <p><strong>Quiz:</strong></p>

            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-are-higher-order-components-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  What are higher order components in React?
                </a>
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-flux-pattern-and-what-are-its-benefits?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  What is the Flux pattern and what are its benefits?
                </a>
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/explain-the-presentational-vs-container-component-pattern-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  Explain the presentational vs container component pattern in
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-are-render-props-in-react-and-what-are-they-for?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  What are render props in React and what are they for?
                </a>
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/explain-the-composition-pattern-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  Explain the composition pattern in React
                </a>
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/react/data-fetching"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">Data Fetching in React Interviews</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/introduction"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">React Interviews: An Introduction</span>
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

.lead-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 2rem;
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
</style>
