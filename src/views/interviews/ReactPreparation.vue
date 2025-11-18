<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">3</span>
            <span class="reading-time">8 min read</span>
          </div>
          <h1>How to Prepare for React Interviews</h1>
          <p class="article-subtitle">
            A strategic guide offering a step-by-step plan to prepare for React
            interviews by outlining essential study steps, core concepts, and
            topics that are most critical for success
          </p>
        </header>
        <article class="article-content">
          <section>
            <h2>Recommended preparation strategy</h2>

            <p>
              Although everyone's mastery of React is different, this
              preparation plan can be used by most people that have a React
              interview coming up.
            </p>

            <ol class="numbered-list">
              <li>
                <strong
                  >Read
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >react.dev</a
                  >:</strong
                >
                Read the
                <a
                  href="https://react.dev/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >"Learn" section of react.dev</a
                >
                cover-to-cover. It's not extremely long and can be completed in
                a day
              </li>
              <li>
                <strong>Read this guidebook:</strong> Read this "React Interview
                Playbook" cover-to-cover. It's also not very long and can be
                completed in two hours
              </li>
              <li>
                <strong>Practice:</strong> Practice makes perfect, get your
                hands dirty and start studying!
                <ul class="bullet-list">
                  <li>
                    Quiz questions: Practice
                    <a
                      href="https://www.greatfrontend.com/questions/react-interview-questions/quiz"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="external-link"
                      >React quiz questions on GreatFrontEnd</a
                    >
                  </li>
                  <li>
                    Coding questions: Practice building
                    <a
                      href="https://www.greatfrontend.com/questions/react-interview-questions"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="external-link"
                      >UI questions using React on GreatFrontEnd</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <strong
                  >Read
                  <a
                    href="https://www.greatfrontend.com/questions/formats/system-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >GreatFrontEnd's front end system design questions</a
                  ></strong
                >
                if targeting for a senior role or expecting system design rounds
              </li>
            </ol>
          </section>

          <section>
            <h2>Important concepts for interviews</h2>

            <p>
              Although by now React is a vast library by with many concepts to
              master and APIs to learn, not all concepts are important for
              interviews. This guidebook covers the most important concepts that
              candidates are expected to know during interviews as well as the
              various key points.
            </p>

            <div class="concept-section">
              <h3>Basic concepts</h3>
              <p>
                Understanding the basic concepts in React is crucial for any
                front end interview, as they form the foundation of building and
                reasoning about React applications. This includes core concepts
                like components, JSX, props, state, and how rendering happens.
                Mastery of these basics enables engineers to construct modular,
                reusable UI components and efficiently manage application state.
                Without a solid grasp of these fundamentals, tackling more
                advanced topics such as hooks, performance optimizations, or
                state management becomes significantly more challenging.
              </p>
              <p>
                Interviewers often test these concepts to gauge a candidate's
                ability to build and reason about React applications
                effectively.
                <a
                  href="https://www.greatfrontend.com/react-interview-playbook/react-basic-concepts"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Read more about the basic concepts in React</a
                >.
              </p>
            </div>

            <div class="concept-section">
              <h3>Thinking declaratively</h3>
              <p>
                React encourages a declarative programming style, where UI logic
                is expressed in terms of "what to render" rather than "how to
                render it". This approach makes code more predictable, easier to
                debug, and more maintainable. Instead of manually manipulating
                the DOM, React developers describe the UI in terms of components
                and state, letting React handle updates efficiently.
              </p>
              <p>
                Understanding declarative patterns is crucial in interviews, as
                it reflects a candidate's ability to write clean, maintainable,
                and idiomatic React code.
                <a
                  href="https://www.greatfrontend.com/react-interview-playbook/react-basic-concepts"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Read more about thinking declaratively in React</a
                >.
              </p>
            </div>

            <div class="concept-section">
              <h3>State design</h3>
              <p>
                State design is a critical part of building scalable React
                applications, as poor state management can lead to unnecessary
                re-renders, hard-to-maintain code, and performance issues. A
                well-structured state design considers factors like co-locating
                state where it is needed, lifting state up when necessary, and
                minimizing unnecessary state variables. Interviewers assess
                candidates on their ability to decide where state should live
                and how to structure it for clarity and efficiency.
              </p>
              <p>
                Mastery of state design principles is key to building robust
                React applications that remain performant and scalable as
                complexity grows.
                <a
                  href="https://www.greatfrontend.com/react-interview-playbook/react-state-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Read more about state design in React</a
                >.
              </p>
            </div>

            <div class="concept-section">
              <h3>React hooks</h3>
              <p>
                React hooks, introduced in React 16.8, revolutionized state and
                side effect management in function components. Hooks like
                <code>useState</code>, <code>useEffect</code>, and
                <code>useContext</code> enable developers to handle state and
                lifecycle events without needing class components. More advanced
                hooks like <code>useMemo</code> and
                <code>useCallback</code> help optimize performance.
                Understanding hooks is crucial in front end interviews, as they
                are the primary way React developers manage state, side effects,
                and component logic in modern applications.
              </p>
              <p>
                Candidates are often tested on their ability to use hooks
                correctly while avoiding common pitfalls like excessive
                re-renders and dependency array misconfigurations.
                <a
                  href="https://www.greatfrontend.com/react-interview-playbook/react-hooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Read more hooks in React</a
                >.
              </p>
            </div>

            <div class="concept-section">
              <h3>Event handling</h3>
              <p>
                Event handling in React differs from vanilla JavaScript, as it
                uses synthetic events for cross-browser consistency and
                performance optimizations. Understanding how to work with event
                handlers, pass event data, and optimize event-driven logic is
                essential in React development. Candidates should be familiar
                with common patterns like preventing default behavior, handling
                input changes, and efficiently binding event handlers to avoid
                unnecessary re-renders.
              </p>
              <p>
                Since UI interactions are central to front end applications,
                interviewers often test a candidate's ability to handle events
                in a structured and efficient manner.
                <a
                  href="https://www.greatfrontend.com/react-interview-playbook/react-event-handling"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Read more about event handling in React</a
                >.
              </p>
            </div>

            <div class="concept-section">
              <h3>Forms</h3>
              <p>
                Forms are a fundamental part of many web applications, handling
                user inputs and interactions. In React, managing forms involves
                controlled and uncontrolled components, state updates, and form
                validation. A strong understanding of form handling ensures a
                seamless user experience while maintaining performance and
                scalability. Interviewers frequently assess a candidate's
                ability to manage form state, implement validations, and handle
                form submissions efficiently.
              </p>
              <p>
                Mastering forms in React is crucial for developing data-driven
                applications where user inputs play a central role.
                <a
                  href="https://www.greatfrontend.com/react-interview-playbook/react-forms"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Read more about writing forms in React</a
                >.
              </p>
            </div>

            <div class="concept-section">
              <h3>Data fetching</h3>
              <p>
                Fetching and managing data efficiently is a key aspect of React
                applications. Whether using <code>fetch</code>,
                <code>Axios</code>, or React Query, candidates need to
                understand how to handle asynchronous operations, caching,
                pagination, error handling, and performance optimizations like
                debouncing and memoization. Many interview questions revolve
                around fetching data efficiently while avoiding common pitfalls
                such as excessive re-renders and race conditions.
              </p>
              <p>
                Since many React applications interact with external APIs,
                strong data fetching skills demonstrate an ability to build
                real-world applications that perform well and handle data
                gracefully.
                <a
                  href="https://www.greatfrontend.com/react-interview-playbook/react-data-fetching"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Read more about data fetching in React</a
                >.
              </p>
            </div>

            <div class="concept-section">
              <h3>Design patterns</h3>
              <p>
                React development benefits from common design patterns that
                enhance code reusability, maintainability, and scalability.
                Patterns like higher-order components (HOCs), render props, and
                compound components enable developers to create flexible,
                modular components. More modern patterns, like hooks-based
                composition and context-based state management, simplify complex
                logic. Interviewers often test candidates on their understanding
                of these patterns to gauge their ability to write scalable and
                maintainable React code.
              </p>
              <p>
                Strong knowledge of React design patterns showcases an ability
                to architect large applications in a clean, efficient manner.
                <a
                  href="https://www.greatfrontend.com/react-interview-playbook/react-design-patterns"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Read more about design patterns in React</a
                >.
              </p>
            </div>

            <div class="concept-section">
              <h3>Performance optimization strategies</h3>
              <p>
                Performance optimization is a key skill in React development, as
                poorly optimized applications can suffer from slow renders,
                excessive re-renders, and sluggish user experiences. Strategies
                like memoization (<code>useMemo</code>,
                <code>useCallback</code>), virtualization (e.g., React
                Virtualized), lazy loading (<code>React.lazy</code>), and
                optimizing state updates help improve application performance.
                Front end interviews frequently assess a candidate's ability to
                recognize and address performance bottlenecks, ensuring smooth
                and efficient applications.
              </p>
              <p>
                Demonstrating strong optimization techniques highlights a
                developer's ability to build high-performance React applications
                that scale effectively.
              </p>
            </div>
          </section>

          <section>
            <h2>Concepts that you probably won't need</h2>

            <p>
              These concepts are either still quite new, not mature yet, or not
              used directly by developers, hence they aren't that relevant for
              interviews.
            </p>

            <div class="concept-section">
              <h3>Suspense</h3>
              <p>
                <a
                  href="https://react.dev/reference/react/Suspense"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Suspense</a
                >
                is a React feature designed for handling asynchronous operations
                like data fetching, code splitting, and lazy loading components
                in a more declarative way.
              </p>
              <p>
                While it's a useful tool for improving user experience, it is
                not commonly tested in front end interviews because there are
                usually higher level abstractions to use for data fetching and
                code splitting. Most interviewers focus on fundamental data
                fetching patterns (e.g., <code>useEffect</code>, TanStack Query,
                or SWR) rather than <code>&lt;Suspense&gt;</code>-based
                solutions.
              </p>
            </div>

            <div class="concept-section">
              <h3>Server components</h3>
              <p>
                <a
                  href="https://react.dev/reference/rsc/server-components"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >React Server Components (RSC)</a
                >
                are a major shift in React's architecture, allowing developers
                to render components on the server while reducing client-side
                JavaScript bundle sizes. While they offer significant
                performance benefits, they are still relatively new and mainly
                relevant for projects using frameworks like Next.js.
              </p>
              <p>
                Since many front end interviews focus on React fundamentals and
                client-side rendering, RSCs are unlikely to be a priority in
                interviews. Most companies are still transitioning to these
                patterns, making them less relevant for assessing a candidate's
                core React skills.
              </p>
            </div>

            <div class="concept-section">
              <h3>Server functions</h3>
              <p>
                <a
                  href="https://react.dev/reference/rsc/server-functions"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Server functions</a
                >, such as those found in Next.js (API routes) or other
                serverless architectures, enable handling business logic on the
                server rather than the client.
              </p>
              <p>
                While they are important for full-stack applications, front end
                interviews typically emphasize client-side concerns like
                component structure, state management, and UI performance.
                Unless interviewing for a full-stack role, knowledge of server
                functions is not a key evaluation criterion, as they fall
                outside the core responsibilities of a front end engineer
                focused on React.
              </p>
            </div>

            <div class="concept-section">
              <h3>Changes in React 19</h3>
              <p>
                <a
                  href="https://react.dev/blog/2024/12/05/react-19"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >React 19</a
                >
                introduces several updates, such as improvements to Suspense,
                server actions, new hooks, etc.
              </p>
              <p>
                While these changes are valuable for developers staying up to
                date with the ecosystem, they are not typically the focus of
                front end interviews. Most companies prioritize a candidate's
                ability to work with widely adopted React patterns rather than
                the latest experimental features. Since React 19 is still being
                adopted, interviewers are unlikely to expect deep knowledge of
                its updates unless specifically mentioned in a job description.
              </p>
            </div>

            <div class="concept-section">
              <h3>React compiler</h3>
              <p>
                <a
                  href="https://react.dev/learn/react-compiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >React Compiler</a
                >
                is an upcoming optimization tool that aims to improve
                performance by automatically optimizing React code at build
                time.
              </p>
              <p>
                While it promises efficiency gains, it has not yet been widely
                adopted and remains in an early phase. Since front end
                interviews typically focus on hands-on problem-solving and
                existing optimization techniques (<code>useMemo</code>,
                <code>useCallback</code>, etc.), the React Compiler is not a
                crucial topic for candidates to study.
              </p>
              <p>
                Until it becomes a standard part of the React ecosystem, it is
                unlikely to appear in most front end interviews.
              </p>
            </div>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/react/landscape"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">Landscape and History</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/basic-concepts"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Basic React Concepts</span>
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

.numbered-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.numbered-list li {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 16px;
  padding-left: 32px;
  position: relative;
  counter-increment: step-counter;
}

.numbered-list li::before {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  background: #dcee77;
  color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
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

.concept-section {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
}

.concept-section h3 {
  font-size: 18px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.concept-section p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 16px;
}

.concept-section p:last-child {
  margin-bottom: 0;
}
</style>
