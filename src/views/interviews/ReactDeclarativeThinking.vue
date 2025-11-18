<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">5</span>
            <span class="reading-time">8 min read</span>
          </div>
          <h1>Thinking Declaratively in React</h1>
          <p class="article-subtitle">
            Guide on thinking in declarative and state-driven approaches in
            React, featuring practical examples like a todo list to illustrate
            building dynamic, maintainable UIs
          </p>
        </header>
        <article class="article-content">
          <p class="lead-paragraph">
            One of the core principles of React is its declarative nature.
            Instead of manually updating the DOM step by step (imperative
            programming), React allows you to define what the UI should look
            like based on the current state, and it takes care of the updates
            for you. This approach makes UI development more predictable,
            scalable, and easier to reason about.
          </p>

          <section>
            <h2>Declarative UI vs imperative UI</h2>

            <p>
              In imperative programming, you give explicit instructions on how
              things should happen. DOM APIs are inherently imperative. When
              manipulating the DOM, this often means selecting elements and
              modifying them manually.
            </p>

            <div class="code-block">
              <pre><code>const button = document.createElement('button');
button.textContent = 'Click me';
button.style.backgroundColor = 'blue';
document.body.appendChild(button);

button.addEventListener('click', () => {
  button.style.backgroundColor = 'red';
  alert('Button clicked!');
});</code></pre>
            </div>

            <p>
              See that every single action is explicitly defined: creating the
              button, setting styles, appending it to the DOM, and changing
              properties in response to an event.
            </p>

            <p>
              Declarative programming, on the other hand, focuses on describing
              the desired outcome rather than detailing how to achieve it. React
              components allow us to declare what the UI should look like, and
              React takes care of updating it when state changes.
            </p>

            <div class="code-block">
              <pre><code>function App() {
  const [color, setColor] = React.useState('blue');

  return (
    &lt;button style={ { backgroundColor: color } } onClick={ () => setColor('red') }>
      Click me
    &lt;/button>
  );
}</code></pre>
            </div>

            <p>
              In this example, we define the button's UI based on
              <code>color</code> state. When the state changes, React
              automatically updates the DOM without us having to manage it
              manually.
            </p>

            <div class="analogy-section">
              <h3>Analogy: Imperative vs Declarative</h3>

              <p>Think of making a cup of coffee:</p>

              <ul class="bullet-list">
                <li>
                  <strong>Imperative:</strong> "Take a mug, pour hot water, add
                  coffee, stir, and serve"
                </li>
                <li><strong>Declarative:</strong> "I want a cup of coffee"</li>
              </ul>

              <p>
                In a declarative approach, the details of execution are
                abstracted away. You describe the final outcome, and a system
                (e.g. a coffee machine, a barista, or React) ensures it happens
                correctly.
              </p>

              <p>
                The benefit of declarative programming might not be too obvious
                in the button example above because it is small.
              </p>

              <p>
                Let's use a slightly more complex example of a todo list that
                allows adding, deleting, and completing of tasks. The UI should
                show the task list and the total number of tasks as well as
                completed tasks.
              </p>

              <p>
                Using an imperative approach (e.g., using vanilla JavaScript and
                the DOM API), every interaction requires manually finding,
                updating, and re-rendering elements.
              </p>

              <p>
                The following user actions will require these DOM operations:
              </p>

              <div class="numbered-list">
                <div class="numbered-item">
                  <span class="number">1.</span>
                  <span class="content"><strong>Adding a task:</strong></span>
                  <ul class="sub-list">
                    <li>Append the new task to the existing list</li>
                    <li>Clear the contents of the input</li>
                    <li>
                      Add event listener to the newly-added task for task
                      completion
                    </li>
                    <li>Increment the number of total tasks</li>
                  </ul>
                </div>

                <div class="numbered-item">
                  <span class="number">2.</span>
                  <span class="content"
                    ><strong>Completing a task:</strong></span
                  >
                  <ul class="sub-list">
                    <li>Update the task to show completed state</li>
                    <li>Modify the number of completed tasks</li>
                  </ul>
                </div>

                <div class="numbered-item">
                  <span class="number">3.</span>
                  <span class="content"><strong>Deleting a task:</strong></span>
                  <ul class="sub-list">
                    <li>Remove the task from the list</li>
                    <li>Decrement the number of total tasks</li>
                    <li>
                      Decrement the number of completed tasks if the task was
                      completed
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                Using an imperative approach, it is much tougher to keep the UI
                in-sync with state as you have to remember the relevant areas to
                modify. When new features are introduced, imperatively-written
                logic becomes harder to read and trace. That's bad for
                maintainability!
              </p>

              <p>
                Using a declarative approach such as React, you can simply
                describe the UI that should be shown based on the updated tasks
                state, and React will figure out the necessary imperative DOM
                operations to evolve the current UI into the intended UI.
              </p>

              <p>
                There can be infinitely many possible current UIs – how does
                React figure out the right imperative DOM operations to make?
                That's where React's virtual DOM and reconciliation process
                comes in. React compares/diffs the current UI representation
                with the new UI representation, and generates the necessary list
                of DOM operations.
              </p>

              <p>
                Declarative UI is the approach taken by virtually any modern UI
                framework due to its overwhelming advantages over the imperative
                approach.
              </p>

              <p>
                Further reading on react.dev:
                <a
                  href="https://react.dev/learn/reacting-to-input-with-state#how-declarative-ui-compares-to-imperative"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >How declarative UI compares to imperative</a
                >
              </p>
            </div>
          </section>

          <section>
            <h2>How to think about UI declaratively</h2>

            <p>
              Thinking declaratively requires shifting your focus from how to
              update the UI to what the UI should be at any given moment.
            </p>

            <p>
              Let's use the same todo list example above and demonstrate how
              declarative programming is better. Instead of manually
              manipulating the DOM (imperative programming), we define how the
              UI should look based on state and let React take care of the
              rendering.
            </p>

            <p>
              To make things a bit more complex, the todo list supports
              filtering (All, Complete, Incomplete).
            </p>

            <div class="step-section">
              <h3>1. Identify visual states in the components</h3>

              <p>A todo list has several possible UI states:</p>

              <ul class="bullet-list">
                <li>Input field that can accept text input from the user</li>
                <li>A list of tasks, which can be empty or non-empty</li>
                <li>Each task can be completed or incomplete</li>
                <li>Selector for task filters and the selected option</li>
                <li>
                  The list of tasks can be filtered (All, Active, Completed)
                </li>
              </ul>
            </div>

            <div class="step-section">
              <h3>2. Determine the actions that trigger state changes</h3>

              <p>Next, we define the actions that affect state:</p>

              <ul class="bullet-list">
                <li>Adding a task</li>
                <li>Completing a task</li>
                <li>Deleting a task</li>
                <li>Filtering tasks (show All, Active, or Completed)</li>
              </ul>

              <p>
                These actions will modify state, and React will automatically
                re-render the UI accordingly.
              </p>
            </div>

            <div class="step-section">
              <h3>3. Design a minimal structure to represent the state</h3>

              <p>
                Next, we need to design a structure to capture the state data in
                the UI.
              </p>

              <p>Here's one possible design:</p>

              <div class="code-block">
                <pre><code>const [tasks, setTasks] = useState([
  { id: 1, title: 'Learn React' },
  { id: 2, title: 'Build a project' },
]);
const [completedTasks, setCompletedTasks] = useState([
  { id: 1, title: 'Learn React' },
]);
const [incompleteTasks, setIncompleteTasks] = useState([
  { id: 2, title: 'Build a project' },
]);
const [filter, setFilter] = useState('all'); // all | active | completed</code></pre>
              </div>

              <p>
                However, in this design, there's some duplication of data. Tasks
                are part of both <code>tasks</code> and either
                <code>completedTasks</code> or <code>incompleteTasks</code>, and
                adding/remove tasks will involve modifying multiple tasks
                arrays. This state design is not great.
              </p>

              <p>Some ways to improve it:</p>

              <ol class="numbered-list">
                <li>
                  The <code>incompleteTasks</code> state is redundant since if a
                  task is not within <code>completedTasks</code>, then it is
                  incomplete. However, it would be inefficient when linear
                  scanning the <code>completedTasks</code> array for every task
                  to check if a task is completed
                </li>
                <li>
                  We can use a <code>Set</code> for
                  <code>completedTasks</code> that stores only the task ID. This
                  way, the task titles don't have to be repeated and looking up
                  a task's completion status is efficient. However, we still
                  need to remember to modify two places when a completed task is
                  being deleted.
                </li>
              </ol>

              <p>
                Instead of storing multiple independent pieces of state that
                require syncing, we can track completion status on the task
                itself. Here's a minimal and structured state representation:
              </p>

              <div class="code-block">
                <pre><code>const [tasks, setTasks] = useState([
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build a project', completed: true },
]);

const [filter, setFilter] = useState('all'); // all | active | completed</code></pre>
              </div>

              <p>Using this structure:</p>

              <ul class="bullet-list">
                <li>
                  <code>tasks</code> is an array where each task has an
                  <code>id</code>, <code>title</code>, and
                  <code>completed</code> status
                </li>
                <li><code>filter</code> determines which tasks to display</li>
              </ul>

              <p>
                To avoid redundant state, instead of keeping a separate
                <code>completedTasks</code> array, we can derive completed tasks
                from <code>tasks</code>.
              </p>

              <p>
                There are tradeoffs to consider here. Although state is now
                consolidated, toggling tasks completion will now require cloning
                of the entire <code>tasks</code> array when there wasn't a need
                to if we use a <code>Set</code> for <code>completedTasks</code>.
              </p>
            </div>

            <div class="step-section">
              <h3>4. Call actions within event handlers</h3>

              <p>Actions are triggered in response to two kinds of events:</p>

              <ul class="bullet-list">
                <li>
                  <strong>User events:</strong> Actions directly performed by
                  the user, such as clicking a button, typing in an input field,
                  or selecting an option from a dropdown
                </li>
                <li>
                  <strong>Background events:</strong> Actions triggered without
                  direct user interaction such as API responses, timers and
                  intervals, WebSocket real-time updates
                </li>
              </ul>

              <p>
                For the todo list at hand, we only need to care about user
                events.
              </p>

              <p>
                However, it is advisable to write a function for each of these
                actions, and call the state setters within each action function.
                This is because the same operation can be triggered from many
                places on the UI, or even in the background. An example is a
                video player, where, to pause the video, users can either press
                the "Pause" button or press the spacebar.
              </p>

              <p>
                Centralizing state update logic within these action functions
                will help to keep the code maintainable.
              </p>
            </div>

            <div class="step-section">
              <h3>Full example</h3>

              <p>Now, let's implement what we have learnt above.</p>

              <div class="code-block">
                <pre><code>import { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [taskInput, setTaskInput] = useState('');

  // Add a task
  function addTask() {
    if (taskInput.trim() === '') {
      return;
    }
    const newTask = { id: Date.now(), text: taskInput, completed: false };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  }

  // Toggle task completion
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  // Delete a task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Get tasks based on filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed;
    }

    if (filter === 'completed') {
      return task.completed;
    }

    return true; // "all" case
  });

  return (
    &lt;div>
      &lt;h2>Todo List&lt;/h2>
      &lt;input
        value={taskInput}
        onChange={ (e) => setTaskInput(e.target.value) }
        placeholder="Add a new task..."
      />
      &lt;button onClick={addTask}>Add&lt;/button>
      &lt;div>
        &lt;button onClick={ () => setFilter('all') }>All&lt;/button>
        &lt;button onClick={ () => setFilter('active') }>Active&lt;/button>
        &lt;button onClick={ () => setFilter('completed') }>Completed&lt;/button>
      &lt;/div>
      &lt;ul>
        {filteredTasks.map((task) => (
          &lt;li
            key={task.id}
            style={ {
              textDecoration: task.completed ? 'line-through' : 'none',
            } }
          >
            {task.text}
            &lt;button onClick={ () => toggleTask(task.id) }>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            &lt;/button>
            &lt;button onClick={ () => deleteTask(task.id) }>Delete&lt;/button>
          &lt;/li>
        ))}
      &lt;/ul>
    &lt;/div>
  );
}

export default TodoApp;</code></pre>
              </div>

              <p>This todo list is declarative because:</p>

              <ul class="bullet-list">
                <li>
                  <strong>UI updates automatically:</strong> When
                  <code>tasks</code> or <code>filter</code> changes, React
                  re-renders the UI accordingly
                </li>
                <li>
                  <strong>No manual DOM manipulation:</strong> No need to select
                  elements, manually remove tasks, or update styles via
                  <code>document.querySelector</code>.
                </li>
                <li>
                  <strong>Minimal and structured state:</strong> The UI is
                  derived from a single source of truth (<code>tasks</code> and
                  <code>filter</code>)
                </li>
                <li>
                  <strong>Event handlers update state, not the DOM:</strong> The
                  functions <code>addTask</code>, <code>toggleTask</code>, and
                  <code>deleteTask</code> only update state, React handles the
                  re-rendering.
                </li>
              </ul>

              <p>
                This example shows how thinking declaratively simplifies UI
                development in React:
              </p>

              <ol class="numbered-list">
                <li>Identify UI states</li>
                <li>Determine state-changing actions/operations</li>
                <li>Design a minimal state structure</li>
                <li>Use event handlers to update state</li>
              </ol>

              <p>
                Instead of micromanaging DOM updates, we let React react to
                state changes – making our code cleaner, scalable, and easier to
                maintain.
              </p>
            </div>
          </section>

          <section>
            <h2>What you need to know for interviews</h2>

            <ul class="bullet-list">
              <li>
                <strong>Think declaratively and design the component:</strong>
                Given a UI and the requirements, you should be able to think in
                a declarative fashion to define the various necessary
                components, props, state, operations that change the state, and
                connect all of them together.
              </li>
            </ul>
          </section>

          <section>
            <h2>Practice questions</h2>

            <p><strong>Coding:</strong></p>

            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/tweet/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Tweet</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/progress-bar/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Progress Bar</a
                >
              </li>
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
                  href="https://www.greatfrontend.com/questions/user-interface/file-explorer/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >File Explorer</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/file-explorer-ii/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >File Explorer II</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/file-explorer-iii/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >File Explorer III</a
                >
              </li>
            </ul>
          </section>

          <div class="note-box">
            <p>
              Thinking declaratively in React means shifting from a
              step-by-step, command-driven mindset to a state-driven approach.
              By focusing on defining what the UI should be based on state, you
              create components that are more readable, predictable, and
              maintainable.
            </p>

            <p>
              Embracing this paradigm makes it easier to manage complex UIs and
              lets React do the heavy lifting of figuring out how to update the
              DOM efficiently.
            </p>
          </div>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/react/basic-concepts"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">Basic React Concepts for Interviews</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/state-design"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Designing State in React Interviews</span>
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

.note-box {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 20px;
  margin: 24px 0;
}

.note-box p {
  margin: 0 0 16px 0;
  color: #d1d5db;
  line-height: 1.6;
}

.note-box p:last-child {
  margin-bottom: 0;
}

.analogy-section {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
}

.analogy-section h3 {
  font-size: 18px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.step-section {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
}

.step-section h3 {
  font-size: 18px;
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

.sub-list {
  margin-top: 8px;
  padding-left: 36px;
}

.sub-list li {
  margin-bottom: 4px;
  color: #d1d5db;
}

.lead-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 2rem;
}
</style>
