<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">1</span>
            <span class="reading-time">15 min read</span>
          </div>
          <h1>React Interviews: An Introduction</h1>
          <p class="article-subtitle">
            A comprehensive guide to mastering React interviews by covering
            essential concepts, question types, and tailored strategies for
            front end engineers
          </p>
        </header>
        <article class="article-content">
          <p class="lead-paragraph">
            React has firmly established itself as the de facto standard for
            modern front end development. It powers everything from small web
            applications to massive enterprise platforms used by millions of
            people. Whether you're building interactive dashboards, e-commerce
            websites, or social media platforms, chances are you're using React
            or something inspired by it.
          </p>

          <p>
            Many companies use React to build user interfaces and their
            technical interview process will assess a candidate's React
            knowledge and skills. This guide is for anyone preparing for
            technical interviews where React skills are relevant and focuses on
            the important concepts and knowledge for interviews. It is not meant
            to teach you React, or replace the excellent
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              class="external-link"
              >React documentation website</a
            >.
          </p>

          <p>
            The content is pretty light and you should be able to complete
            reading cover to cover within an afternoon.
          </p>

          <div class="note-box">
            <p>
              However, if time permits and especially if you haven't visited the
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >official React documentation website</a
              >
              in a while, we recommend you read through the entire
              <a
                href="https://react.dev/learn"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >"Learn React"</a
              >
              section while skimming through the examples within each page as
              well as the latest
              <a
                href="https://react.dev/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >blog posts</a
              >. React is evolving at a pretty fast pace and it's good for you
              to read the official docs every now and then to catch up on the
              latest updates. It should not take longer than two afternoons.
            </p>
          </div>

          <section>
            <h2>Who this guide is for</h2>

            <p>
              Whether you're applying for a front end engineering position, a
              full-stack role, or a React-specific job, if you're in one of the
              following categories, this guide will be useful to you:
            </p>

            <ul>
              <li>
                <strong>Front end engineers:</strong> If you're aiming for roles
                that heavily focus on React, JavaScript, and UI development,
                this guide will give you a structured way to prepare.
              </li>
              <li>
                <strong>Full stack developers:</strong> If React is just one
                part of your job, but you still need to prove your expertise in
                building UI components and managing front end state, this guide,
                along with
                <a
                  href="https://www.greatfrontend.com/questions/react-interview-questions"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >our practice questions</a
                >
                will hone your React skills.
              </li>
              <li>
                <strong>Experienced engineers looking for a refresher:</strong>
                If you already use React heavily at work but want to prepare
                specifically for React interviews, this guide will fill in the
                gaps.
              </li>
            </ul>

            <p>
              Whether you're targeting an entry-level job or a senior position,
              the React Interview guide will help you systematically prepare for
              technical interviews by covering everything from fundamentals to
              advanced concepts.
            </p>

            <h3>This guide is not for:</h3>

            <ul>
              <li>
                <strong>Complete beginners to React:</strong> This guide assumes
                familiarity and prior hands on experience with using React for
                building user interfaces; start with the
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >official React docs</a
                >
              </li>
              <li>
                <strong
                  >Developers looking to dive into React internals:</strong
                >
                Focuses on practical interview prep, not React's internal source
                code; check out
                <a
                  href="https://jser.dev/series/react-source-code-walkthrough/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >JSer's React Internals Deep Dive series</a
                >,
                <a
                  href="https://pomb.us/build-your-own-react/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Rodrigo Pombo's Build your own React</a
                >,
                <a
                  href="https://github.com/tigerabrodi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Tiger Abrodi's GitHub projects</a
                >, and
                <a
                  href="https://github.com/codecrafters-io/build-your-own-x?tab=readme-ov-file#build-your-own-front-end-framework--library"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Build your own X</a
                >
              </li>
              <li>
                <strong
                  >Those preparing for general software engineering
                  interviews:</strong
                >
                This guide does not cover data structures, general system
                design, or algorithms in depth; try
                <a
                  href="https://www.techinterviewhandbook.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Tech Interview Handbook</a
                >
                and
                <a
                  href="https://neetcode.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >NeetCode</a
                >
              </li>
              <li>
                <strong>React Native developers:</strong> While a lot of
                relevant React concepts will be covered, the guide does not
                touch on mobile-specific topics
              </li>
              <li>
                <strong
                  >People just looking for a list of questions and
                  answers:</strong
                >
                The guide explains concepts and teaches you the patterns
                relevant in React interviews, not just provide answers for you
                to memorize; For a list of React interview questions, check out
                <a
                  href="https://www.greatfrontend.com/questions/react-interview-questions"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >GreatFrontEnd's React interview questions</a
                >
              </li>
            </ul>

            <p class="highlight-text">
              If you already know React and want to excel in interviews, this
              guide is for you! 🚀
            </p>
          </section>

          <section>
            <h2>Types of companies and their interview processes</h2>

            <div class="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Company Type</th>
                    <th>Examples</th>
                    <th>Interview Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Big tech (FAANG & similar)</td>
                    <td>Meta, Apple, Amazon, Netflix, Google, Microsoft</td>
                    <td>
                      Highly structured, multiple rounds including system
                      design, algorithms, and front end expertise
                    </td>
                  </tr>
                  <tr>
                    <td>Mid-sized</td>
                    <td>
                      Airbnb, Pinterest, Dropbox, Stripe, Shopify, DoorDash
                    </td>
                    <td>
                      Similar to big tech but more focused on product
                      engineering and front end performance
                    </td>
                  </tr>
                  <tr>
                    <td>High-growth startups (Unicorns & Pre-IPO)</td>
                    <td>Notion, Figma, Ramp, Brex, Databricks, OpenAI</td>
                    <td>
                      Mix of system design, practical front end coding, and
                      culture fit. May include take-home assignments
                    </td>
                  </tr>
                  <tr>
                    <td>Early-stage startups</td>
                    <td>Seed to Series A startups</td>
                    <td>
                      Flexible, often just 2-3 rounds, focused on
                      problem-solving, UI/UX intuition, and shipping quickly
                    </td>
                  </tr>
                  <tr>
                    <td>Enterprise</td>
                    <td>Oracle, Cisco, SAP, Salesforce, Workday</td>
                    <td>
                      Structured but often less algorithm-intensive than FAANG
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Big tech companies like Meta and Google focus on fundamentals and
              all coding has to be done using Vanilla JavaScript; React is
              hardly relevant. It's crucial for you to find out from the
              recruiters what sort of questions to expect so that you optimize
              your preparation!
            </p>

            <p>
              Here's a breakdown of React's relevance, key topics, and example
              questions for each type of React interview question.
            </p>
          </section>

          <section>
            <h2>Types of React interview questions</h2>

            <p>
              React knowledge can be tested in (but are not limited to) the
              following question formats.
            </p>

            <div class="question-type">
              <h3 class="question-type-title">Quiz / trivia</h3>
              <p>
                Quiz-style questions test fundamental React knowledge, helping
                interviewers quickly assess a candidate's familiarity with
                React's concepts, APIs, and best practices.
              </p>

              <p>
                While it is possible to clear this type of questions purely by
                memorizing the answers, we wouldn't recommend as the concepts
                can also be tested in the other question types and it is more
                important to understand and apply the relevant concepts when the
                situation arises.
              </p>

              <h4 class="question-subsection">Important topics</h4>
              <ul class="bullet-list">
                <li>
                  Fundamentals: JSX, components, rendering (virtual DOM,
                  reconciliation)
                </li>
                <li>
                  Component design: Thinking declaratively, props, state,
                  structure
                </li>
                <li>
                  React hooks: Common hooks (e.g. <code>useState</code>,
                  <code>useEffect</code>), rules of hooks, best practices
                </li>
                <li>
                  Differences between controlled and uncontrolled components
                </li>
                <li>Event handling in React</li>
                <li>
                  Common pitfalls (e.g., stale closures, unnecessary re-renders)
                </li>
                <li>
                  Performance optimizations: memoization, lazy loading, React
                  Profiler
                </li>
              </ul>

              <h4 class="question-subsection">Example questions</h4>
              <ul class="bullet-list">
                <li>
                  What is the difference between controlled and uncontrolled
                  components?
                </li>
                <li>How does React's reconciliation algorithm work?</li>
                <li>
                  Explain the difference between <code>useEffect</code> and
                  <code>useLayoutEffect</code>
                </li>
                <li>What happens when the state is updated in React?</li>
                <li>How does <code>React.memo</code> help with performance?</li>
                <li>
                  Why should you use a <code>key</code> prop when rendering a
                  list?
                </li>
              </ul>

              <p>
                Check out the
                <a
                  href="https://www.greatfrontend.com/questions/react-interview-questions/quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >full list of React quiz questions</a
                >.
              </p>
            </div>

            <div class="question-type">
              <h3 class="question-type-title">
                User interface coding questions
              </h3>
              <p>
                These questions assess a candidate's ability to implement UI
                components with React, focusing on creating interactive and
                visually accurate components.
              </p>

              <h4 class="question-subsection">Important topics</h4>
              <ul class="bullet-list">
                <li>Prop design and component composition</li>
                <li>State design and state management</li>
                <li>Event handling</li>
                <li>
                  Styling approaches (CSS Modules, Styled Components, Tailwind)
                </li>
                <li>Conditional rendering and rendering list of items</li>
                <li>Accessibility (a11y best practices)</li>
              </ul>

              <h4 class="question-subsection">Example questions</h4>
              <ul class="bullet-list">
                <li>Implement a tabs component</li>
                <li>Implement an autocomplete component</li>
                <li>Implement a basic sign up form</li>
                <li>
                  Build a reusable modal component with an overlay and close
                  functionality
                </li>
                <li>Build a memory game</li>
              </ul>

              <p>
                Check out the
                <a
                  href="https://www.greatfrontend.com/questions/react-interview-questions"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >full list of React user interface coding questions</a
                >.
              </p>
            </div>

            <div class="question-type">
              <h3 class="question-type-title">Implement React hooks</h3>
              <p>
                Hooks are a core part of modern React development. These
                questions test a candidate's understanding of hooks, their use
                cases, and their ability to manage state and side effects.
              </p>

              <h4 class="question-subsection">Important topics</h4>
              <ul class="bullet-list">
                <li>
                  <code>useState</code>, <code>useEffect</code>,
                  <code>useMemo</code>, <code>useCallback</code>,
                  <code>useRef</code>
                </li>
                <li>Custom hooks and reusability</li>
                <li>Handling side effects properly</li>
                <li>Dependency arrays and stale closures</li>
                <li>Performance optimizations with hooks</li>
                <li>
                  Handling async operations in hooks (e.g.,
                  <code>useEffect</code> with fetch)
                </li>
              </ul>

              <h4 class="question-subsection">Example questions</h4>
              <ul class="bullet-list">
                <li>
                  Implement <code>useWindow</code>, a custom hook that tracks
                  the window size and returns <code>width</code> and
                  <code>height</code>
                </li>
                <li>
                  Implement <code>useDebounce</code>, a hook that delays the
                  execution of a function
                </li>
                <li>
                  Implement <code>usePrevious</code>, a hook to track the
                  previous state value
                </li>
                <li>
                  Implement <code>useLocalStorage</code>, a hook that reads and
                  writes values to <code>localStorage</code>
                </li>
              </ul>
            </div>

            <div class="question-type">
              <h3 class="question-type-title">Take-home assignments</h3>
              <p>
                Take-home assignments evaluate a candidate's ability to build a
                real-world React application within a given timeframe, with a
                focus on code quality, maintainability, and best practices.
              </p>

              <p>
                Most take-home assignments involve fetching data from an
                endpoint and filtering + sorting of that data.
              </p>

              <h4 class="question-subsection">Important topics</h4>
              <ul class="bullet-list">
                <li>Component architecture and reusability</li>
                <li>State management (Context API, Redux, Zustand)</li>
                <li>API fetching and error handling</li>
                <li>Performance optimizations</li>
                <li>UI/UX considerations</li>
                <li>Code structuring and readability</li>
              </ul>

              <h4 class="question-subsection">Example take-home assignments</h4>
              <ul class="bullet-list">
                <li>
                  Build a simple task management app where users can add, edit,
                  and delete tasks
                </li>
                <li>
                  Implement a e-commerce product listings page that allows for
                  searching, filtering, and sorting
                </li>
                <li>
                  Create a weather app that fetches data from an API and
                  displays weather conditions dynamically
                </li>
                <li>
                  Design and implement a dashboard with charts using React and a
                  charting library
                </li>
              </ul>
            </div>

            <div class="question-type">
              <h3 class="question-type-title">System design</h3>
              <p>
                System design questions test a candidate's ability to architect
                scalable, maintainable, and performant front end applications.
              </p>

              <p>
                System design questions can broadly be classified into two
                types:
              </p>

              <ul class="bullet-list">
                <li>
                  <strong>Application design:</strong> App design questions
                  aren't specific to any front end technology but sometimes
                  interviewers might ask you how you would implement a specific
                  section and you would have to mention concrete
                  libraries/approaches using React/Vue/Angular/Svelte/etc and
                  which of their APIs you'd use.
                </li>
                <li>
                  <strong>Component design:</strong> Component design questions
                  are about implementing a reusable, extensible, and accessible
                  component for a specific purpose using a specific JavaScript
                  framework of your choice or Vanilla JavaScript if you're
                  adventurous enough. Hence mastery of the JavaScript framework
                  is essential and component design in order to design the right
                  props and composition mechanisms.
                </li>
              </ul>

              <h4 class="question-subsection">Important topics</h4>
              <ul class="bullet-list">
                <li>Component hierarchy and modularization</li>
                <li>State management strategies (global vs local state)</li>
                <li>
                  Server-side rendering (SSR) vs client-side rendering (CSR)
                </li>
                <li>
                  Performance optimizations (lazy loading, memoization, list
                  virtualization)
                </li>
                <li>
                  Data fetching mechanisms and how to implement them (e.g.
                  caching, debouncing, retries, optimistic mutations)
                </li>
                <li>Error handling and fallback UI strategies</li>
              </ul>

              <h4 class="question-subsection">Example questions</h4>
              <ul class="bullet-list">
                <li>
                  How would you implement infinite scrolling within a news feed?
                </li>
                <li>
                  How would you design the component hierarchy within a music
                  player?
                </li>
                <li>
                  How would you implement a modal dialog component in React?
                </li>
                <li>
                  How would you implement a dropdown menu component in React?
                </li>
              </ul>

              <p>
                Check out the
                <a
                  href="https://www.greatfrontend.com/questions/formats/system-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >full list of front end system design questions</a
                >.
              </p>
            </div>
          </section>

          <section>
            <h2>Scope of the guide</h2>

            <p>
              Preparing for a React interview can feel overwhelming. There's a
              lot to cover, and not all topics are as important for interviews.
              This guide cuts through the noise and focuses on the topics that
              matter the most.
            </p>

            <p>
              This guide is structured to help you master React interviews in a
              systematic way. Each section builds on the previous one to help
              you understand not just what React does, but why it works the way
              it does, and what you absolutely need to know for interviews.
            </p>

            <p>
              We do not recommend memorizing answers; it's better to gain a good
              understanding of React so you can confidently tackle any question
              or variants that comes your way. You'll probably even learn new
              things along the way that will make you more skillful in using
              React!
            </p>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link to="/interviews/playbook/react" class="nav-link prev">
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Back to</span>
              <span class="nav-title">React Playbook</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/landscape"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Landscape and History</span>
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

.question-type {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
}

.question-type-title {
  font-size: 18px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.question-type p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 16px;
}

.question-subsection {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 20px 0 8px 0;
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

.highlight-text {
  background: #dcee77;
  color: #000000;
  padding: 16px 20px;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  margin: 24px 0;
}

.note-box {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 20px;
  margin: 24px 0;
}

.note-box p {
  margin: 0;
  color: #d1d5db;
  line-height: 1.6;
}
</style>
