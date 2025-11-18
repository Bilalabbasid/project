<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">4</span>
            <span class="reading-time">18 min read</span>
          </div>
          <h1>Basic React Concepts for Interviews</h1>
          <p class="article-subtitle">
            Get familiar with core React concepts – components, JSX, props,
            state, and rendering
          </p>
        </header>
        <article class="article-content">
          <section>
            <h2>Components</h2>

            <p>
              At its core, React is built around components. Components are the
              foundation of modern UI development because they make interfaces
              modular, reusable, and scalable.
            </p>

            <p>
              Some key reasons why components are the way to build user
              interfaces:
            </p>

            <ul class="bullet-list">
              <li>
                <strong>Reusability:</strong> Components encapsulate UI logic
                and styling, making it easy to reuse them across different parts
                of an application. This reduces redundancy and improves
                maintainability.
              </li>
              <li>
                <strong>Modularity:</strong> Components encouraging breaking
                down complex UIs into smaller, manageable parts. Each component
                should focus on specific functionality, making debugging and
                updates easier.
              </li>
              <li>
                <strong>Maintainability:</strong> Changes to a component affect
                only that component and its children, reducing unintended side
                effects. Code is easier to read and understand, improving
                long-term maintainability.
              </li>
              <li>
                <strong>Declarative UI:</strong> React and similar frameworks
                use a declarative approach, where the UI reflects the current
                application state. This makes UI development more predictable
                and easier to debug compared to imperative approaches.
              </li>
              <li>
                <strong>Encapsulation:</strong> Components encapsulate their
                styles, logic, and structure, preventing conflicts and making
                the UI more modular. Components manage their own state, making
                it easier to reason about UI behavior. While styling is not a
                concern of React, React paired together with encapsulated styles
                (e.g., CSS Modules, Styled Components) prevent unintended
                overrides. This results in a component-based architecture which
                scale well in large applications by encouraging separation of
                concerns. Teams can work on different components independently
                without breaking the entire application.
              </li>
              <li>
                <strong>Composition:</strong> Components can be composed
                together to build complex UIs from smaller building blocks.
              </li>
              <li>
                <strong>Easier testing:</strong> The encapsulated nature of
                components make them easily testable in isolation using unit and
                integration tests. This makes it easier to verify UI behavior
                without relying on the entire application.
              </li>
            </ul>

            <p>
              Components have revolutionized UI development by making it more
              scalable, maintainable, predictable, and efficient. Every modern
              JavaScript framework is built on the concept of components, props,
              and state.
            </p>

            <p>
              Just like how programs are built from stacks of function calls,
              modern apps are built using components nested within components,
              as deeply as the app requires.
            </p>

            <p>
              In fact, the idea of components is so great that even the mobile
              development ecosystem hopped onto the components bandwagon. iOS
              and Android have developed their own "React" – Swift UI and
              Jetpack Compose respectively.
            </p>
          </section>

          <section>
            <h2>Ways of writing React components</h2>

            <p>There are two ways of writing React components:</p>

            <div class="component-type">
              <h3>Function components (modern standard)</h3>
              <p>
                The modern recommended way is to write JavaScript functions that
                return JSX. React hooks (e.g. <code>useState</code>,
                <code>useEffect</code>, etc.) was introduced in React 16.8 and
                are used for state and side effects. Prior to the introduction
                of hooks, function components could only be used for components
                that didn't contain any state.
              </p>

              <p>
                Function components require less boilerplate and preferred over
                class components.
              </p>

              <div class="code-block">
                <pre><code>function Greeting({ name }) {
  return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
}</code></pre>
              </div>
            </div>

            <div class="component-type">
              <h3>Class components (legacy)</h3>
              <p>
                The legacy way of writing components uses ES6 classes that
                extend <code>React.Component</code>. These class components use
                lifecycle methods (e.g. <code>componentDidMount()</code>,
                <code>componentDidUpdate()</code>) instead of hooks. This was
                the approach taken when React was first released and still
                appears in older codebases.
              </p>

              <p>
                Class components can still be used in the latest React versions.
              </p>

              <div class="code-block">
                <pre><code>class Greeting extends React.Component {
  render() {
    return &lt;h1&gt;Hello, {this.props.name}!&lt;/h1&gt;;
  }
}</code></pre>
              </div>

              <p>
                Although class components can still be asked in interviews, you
                shouldn't be faulted for not having experience with class
                components since it has been over half a decade that functions
                components have been the de facto way of writing components. If
                you haven't used class components before, there's no need to
                learn about it and you can just tell your interviewer.
              </p>
            </div>
          </section>

          <section>
            <h2>JSX</h2>

            <p>
              The HTML-like syntax (<code>&lt;h1&gt;</code>) within the
              components looks like HTML but is not actually HTML, it's JSX. JSX
              (JavaScript XML) is a syntax extension for JavaScript that allows
              you to write HTML-like code within JavaScript. It is not a
              requirement for React but is widely used because it makes UI code
              more readable and expressive.
            </p>

            <p>
              JSX provides a more intuitive and ergonomic way to define React
              components by visually structuring the UI. Browsers do not
              actually recognize JSX syntax, so compilers like
              <a
                href="https://babeljs.io/"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >Babel</a
              >
              or
              <a
                href="https://www.typescriptlang.org/tsconfig/#jsx"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >TypeScript Compiler</a
              >
              are needed to convert the JSX syntax into something that browsers
              can recognize before the code the browser runs it. Under the hood,
              JSX is transformed into
              <code>React.createElement()</code> function calls (the exact
              function can be configured by the compiler).
            </p>

            <p>To produce the following HTML:</p>

            <div class="code-block">
              <pre><code>&lt;div&gt;
  &lt;h1&gt;Hello world!&lt;/h1&gt;
  &lt;p&gt;Goodbye earth!&lt;/p&gt;
&lt;/div&gt;</code></pre>
            </div>

            <p>
              Without JSX, using <code>React.createElement()</code> function
              calls:
            </p>

            <div class="code-block">
              <pre><code>const element = React.createElement('div', null, [
  React.createElement('h1', null, 'Hello world!'),
  React.createElement('p', null, 'Goodbye earth!'),
]);</code></pre>
            </div>

            <p>With JSX, it is easier to read and write markup:</p>

            <div class="code-block">
              <pre><code>const element = (
  &lt;div&gt;
    &lt;h1&gt;Hello world!&lt;/h1&gt;
    &lt;p&gt;Goodbye earth!&lt;/p&gt;
  &lt;/div&gt;
);</code></pre>
            </div>

            <p>
              This looks almost exactly like the HTML that it is meant to
              produce! Instead of writing complex
              <code>React.createElement()</code> calls, JSX allows you to write
              components in a simpler way.
            </p>

            <p>
              Under the hood, <code>React.createElement()</code> creates a
              lightweight representation of the UI and displays it in the
              browser using DOM APIs like <code>document.createElement()</code>,
              <code>document.appendChild()</code>. This process will be covered
              in more detail in the Rendering section.
            </p>

            <p>Take note of the following key points:</p>

            <ul class="bullet-list">
              <li>
                JSX is syntactic sugar for
                <code>React.createElement()</code> and converted before running
                in the browser
              </li>
              <li>Components must return a single root element</li>
              <li>
                JavaScript can be written inside JSX using curly braces
                (<code>{}</code>)
              </li>
              <li>
                Know the differences between JSX and HTML (className, style,
                self-closing tags, etc.)
              </li>
            </ul>
          </section>

          <section>
            <h2>Props vs State</h2>

            <p>
              Props and state are data used by the components when rendering.
            </p>

            <div class="props-state-section">
              <h3>Props</h3>
              <p>
                Props is short for "properties" and represents the data that a
                component receives from its parents. Props are analogous to a
                function's parameters.
              </p>

              <ul class="bullet-list">
                <li>Passed from parent to child</li>
                <li>
                  Immutable (cannot be modified by the component receiving them)
                </li>
                <li>Used for configuration and data sharing</li>
              </ul>

              <div class="code-block">
                <pre><code>function Welcome({ name }) {
  return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
}</code></pre>
              </div>

              <p>
                Further reading on react.dev:
                <a
                  href="https://react.dev/learn/passing-props-to-a-component"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Passing Props to a Component</a
                >
              </p>
            </div>

            <div class="props-state-section">
              <h3>State</h3>
              <p>
                State can be viewed as the "memory" of a component instance.
                Each component instance's state is isolated and cannot be
                directly modified from external.
              </p>

              <ul class="bullet-list">
                <li>Managed within the component</li>
                <li>Triggers a re-render when updated</li>
              </ul>

              <div class="code-block">
                <pre><code>function Counter() {
  const [count, setCount] = useState(0);
  return (
    &lt;button onClick={() => setCount(count + 1)}&gt;
      Clicked {count} times
    &lt;/button&gt;
  );
}</code></pre>
              </div>

              <p>
                Further reading on react.dev:
                <a
                  href="https://react.dev/learn/state-a-components-memory"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >State: A Component's Memory</a
                >
              </p>
            </div>
          </section>

          <section>
            <h2>Rendering</h2>

            <p>
              Traditionally, rendering in the context of the browser is the
              process by which a web browser takes the raw code of a webpage –
              primarily HTML, CSS, and JavaScript – and converts it into the
              visual, interactive page you see on your screen. However in React
              also uses the term "rendering" to describe how React converts
              components into actual DOM elements to be shown on the screen.
            </p>

            <p>
              To avoid confusion, in this guide, "rendering" will refer to
              React's definition and "browser rendering" will be referred to as
              "browser painting".
            </p>

            <p>
              Rendering a component in React involves several steps, from
              writing JSX to updating the DOM. Below is a detailed breakdown of
              how React renders a component, including the internal processes
              and optimizations.
            </p>

            <div class="rendering-step">
              <h3>1. JSX transformation to JavaScript</h3>
              <p>
                React components are written using JSX (JavaScript XML), which
                is syntactic sugar over <code>React.createElement</code>. JSX is
                not directly understood by the browser, hence JSX has to be
                compiled into JavaScript using compilers like Babel or
                TypeScript compiler.
              </p>

              <div class="code-block">
                <pre><code>function Greeting({ name }) {
  return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
}</code></pre>
              </div>

              <p>
                The JSX is transformed into
                <code>React.createElement</code> calls:
              </p>

              <div class="code-block">
                <pre><code>function Greeting({ name }) {
  return React.createElement('h1', null, `Hello, ${name}!`);
}</code></pre>
              </div>
            </div>

            <div class="rendering-step">
              <h3>2. React.createElement() generates a virtual DOM object</h3>
              <p>
                Once JSX is transformed,
                <code>React.createElement</code> produces a lightweight
                in-memory representation of the component called the virtual
                DOM.
              </p>

              <div class="code-block">
                <pre><code>const vdom = {
  type: 'h1',
  props: { children: 'Hello, John!' },
};</code></pre>
              </div>
            </div>

            <div class="rendering-step">
              <h3>3. React reconciles the virtual DOM</h3>
              <p>When a component is rendered for the first time:</p>

              <ol class="numbered-list">
                <li>React creates the initial virtual DOM</li>
                <li>
                  React then mounts the component into the actual DOM using DOM
                  methods like <code>document.createElement()</code> and
                  <code>document.appendChild()</code>
                </li>
              </ol>

              <p>
                When a component's props or state changes, the component is
                re-rendered:
              </p>

              <ol class="numbered-list">
                <li>React creates a new virtual DOM tree</li>
                <li>
                  React compares the new virtual DOM tree with the previous
                  virtual DOM
                </li>
                <li>
                  Only changed elements (added, removed, different HTML
                  attributes) are updated in the real DOM. This is called
                  reconciliation
                </li>
              </ol>
            </div>

            <div class="rendering-step">
              <h3>Recap</h3>
              <p>
                A React component does not directly modify the DOM. Instead:
              </p>

              <ol class="numbered-list">
                <li>
                  JSX is compiled into <code>React.createElement()</code> calls
                </li>
                <li>
                  Virtual DOM is generated as a lightweight representation
                </li>
                <li>
                  During updates, React reconciles the new virtual DOM with the
                  previous virtual DOM
                </li>
                <li>
                  Only the minimal, necessary updates are made to the real DOM
                </li>
              </ol>

              <p>
                Further reading on react.dev:
                <a
                  href="https://react.dev/learn/render-and-commit"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Render and Commit</a
                >
              </p>
            </div>
          </section>

          <section>
            <h2>What you need to know for interviews</h2>

            <ul class="bullet-list">
              <li>
                Components: Writing functional components, reading from props,
                and adding state
              </li>
              <li>JSX: What is JSX</li>
              <li>Rendering: How React renders components</li>
              <li>Virtual DOM: What virtual DOM is and what it is for</li>
              <li>
                Reconciliation: Be able to explain the reconciliation process
              </li>
            </ul>
          </section>

          <section>
            <h2>Practice questions</h2>

            <p><strong>Quiz:</strong></p>
            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-react-describe-the-benefits-of-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is React? Describe the benefits of React</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-state-and-props-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the difference between state and props in React?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-react-node-react-element-and-a-react-component?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the difference between React Node, React Element, and
                  a React Component?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-jsx-and-how-does-it-work?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is JSX and how does it work?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-purpose-of-the-key-prop-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the purpose of the key prop in React?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-the-consequence-of-using-array-indices-as-the-value-for-key-s-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is the consequence of using array indices as the value
                  for keys in React?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-are-react-fragments-used-for?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What are React Fragments used for?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-react-strict-mode-and-what-are-its-benefits?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is React strict mode and what are its benefits?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/explain-one-way-data-flow-of-react-and-its-benefits?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Explain one-way data flow of React and its benefits</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/explain-what-happens-when-setstate-is-called-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Explain what happens when setState is called in React</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/why-does-react-recommend-against-mutating-state?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Why does React recommend against mutating state?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-does-re-rendering-mean-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What does re-rendering mean in React?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-virtual-dom-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is virtual DOM in React?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >How does virtual DOM in React work? What are its benefits and
                  downsides?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is React Fiber and how is it an improvement over the
                  previous approach?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-is-reconciliation-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What is reconciliation in React?</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-are-some-react-anti-patterns?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >What are some React anti-patterns?</a
                >
              </li>
            </ul>

            <p><strong>Coding:</strong></p>
            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/counter/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Counter</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/holy-grail/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Holy Grail</a
                >
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/react/preparation"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">How to Prepare for React Interviews</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/declarative-thinking"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Thinking Declaratively in React</span>
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

.bullet-list li code {
  background: #374151;
  color: #dcee77;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 14px;
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

.component-type {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
}

.component-type h3 {
  font-size: 18px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.component-type p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 16px;
}

.code-block {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  color: #e5e7eb;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  font-size: 14px;
  line-height: 1.5;
}

.code-block code {
  background: none;
  padding: 0;
  border-radius: 0;
  font-size: inherit;
}

.props-state-section {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
}

.props-state-section h3 {
  font-size: 18px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.props-state-section p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 16px;
}

.rendering-step {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
}

.rendering-step h3 {
  font-size: 18px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.rendering-step p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 16px;
}

.numbered-list {
  list-style: decimal;
  padding-left: 1.5rem;
  margin: 16px 0;
  color: #d1d5db;
}

.numbered-list li {
  margin-bottom: 8px;
  line-height: 1.6;
}
</style>
