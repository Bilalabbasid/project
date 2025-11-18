<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <PlaybookArticleSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">8</span>
            <span class="reading-time">2 min read</span>
          </div>
          <h1>Front End System Design Interviews - Quick Start</h1>
          <p class="article-subtitle">
            A quick overview to all the best resources you can leverage for your
            front end system design interviews
          </p>
        </header>
        <article class="article-content">
          <p>
            System Design interviews can come in many forms and covers the
            entire development stack. GreatFrontEnd focuses on Front End System
            Design, aka system design and architecture of client applications
            and UI components rather than back end distributed systems.
          </p>

          <p>
            We have written a comprehensive
            <a href="/front-end-system-design-playbook" target="_blank"
              >Front End System Design guide</a
            >
            which you should definitely check out.
          </p>

          <section>
            <h2>Design your system with best practices</h2>

            <p>
              When going about the system design interview, regardless whether
              you are asked to design apps, games, or UI components, there are
              some things to pay special attention to. Incorporate the tips from
              our
              <a
                href="/front-end-interview-playbook/user-interface-questions-cheatsheet"
                target="_blank"
                >User Interface Questions Cheatsheet</a
              >
              and elevate your front end interview game.
            </p>
          </section>

          <section>
            <h2>What is Front End System Design?</h2>

            <p>
              Front End System Design focuses on the architecture, scalability,
              and user experience of client-side applications. Unlike
              traditional system design interviews that focus on back-end
              distributed systems, front end system design emphasizes:
            </p>

            <ul>
              <li>
                <strong>Component Architecture:</strong> How to structure
                reusable UI components
              </li>
              <li>
                <strong>State Management:</strong> How data flows through your
                application
              </li>
              <li>
                <strong>Performance:</strong> Optimizing rendering, loading, and
                user interactions
              </li>
              <li>
                <strong>Scalability:</strong> How the system grows with more
                users and features
              </li>
              <li>
                <strong>User Experience:</strong> Accessibility, responsiveness,
                and usability
              </li>
            </ul>
          </section>

          <section>
            <h2>Common Front End System Design Topics</h2>

            <h3>Component Design Patterns</h3>
            <ul>
              <li>
                <strong>Atomic Design:</strong> Breaking down UI into atoms,
                molecules, organisms, templates, and pages
              </li>
              <li>
                <strong>Compound Components:</strong> Related components that
                work together as a cohesive unit
              </li>
              <li>
                <strong>Render Props:</strong> Sharing code between components
                using a prop whose value is a function
              </li>
              <li>
                <strong>Higher-Order Components:</strong> Functions that take a
                component and return a new component
              </li>
            </ul>

            <h3>State Management</h3>
            <ul>
              <li>
                <strong>Local State:</strong> Component-level state using
                useState or reactive variables
              </li>
              <li>
                <strong>Global State:</strong> Application-wide state management
                (Redux, Zustand, Context API)
              </li>
              <li>
                <strong>Server State:</strong> Data fetching and caching (React
                Query, SWR)
              </li>
              <li>
                <strong>State Synchronization:</strong> Keeping UI in sync with
                server state
              </li>
            </ul>

            <h3>Performance Optimization</h3>
            <ul>
              <li>
                <strong>Code Splitting:</strong> Loading only the code needed
                for the current page
              </li>
              <li>
                <strong>Virtual Scrolling:</strong> Rendering only visible items
                in large lists
              </li>
              <li>
                <strong>Image Optimization:</strong> Lazy loading, responsive
                images, modern formats
              </li>
              <li>
                <strong>Bundle Analysis:</strong> Identifying and reducing
                bundle size
              </li>
            </ul>
          </section>

          <section>
            <h2>How to Approach Front End System Design</h2>

            <ol>
              <li>
                <strong>Clarify Requirements:</strong> Understand the scope,
                constraints, and success criteria
              </li>
              <li>
                <strong>Define the API:</strong> What props, events, and
                callbacks will the system expose?
              </li>
              <li>
                <strong>Sketch the Architecture:</strong> High-level component
                structure and data flow
              </li>
              <li>
                <strong>Identify Key Components:</strong> Break down into
                smaller, manageable pieces
              </li>
              <li>
                <strong>Consider Edge Cases:</strong> Error states, loading
                states, empty states
              </li>
              <li>
                <strong>Think About Performance:</strong> How will this scale?
                What are the bottlenecks?
              </li>
              <li>
                <strong>Plan for Testing:</strong> How will you ensure quality
                and prevent regressions?
              </li>
            </ol>
          </section>

          <section>
            <h2>Practice questions</h2>

            <p>
              GreatFrontEnd includes many front end system design case studies
              and real world examples including and more:
            </p>

            <ul>
              <li>
                <a
                  href="/questions/system-design/news-feed-facebook"
                  target="_blank"
                  >News Feed (e.g. Facebook)</a
                >
              </li>
              <li>
                <a href="/questions/system-design/autocomplete" target="_blank"
                  >Autocomplete Component</a
                >
              </li>
              <li>
                <a
                  href="/questions/system-design/e-commerce-amazon"
                  target="_blank"
                  >E-commerce Website (e.g. Amazon)</a
                >
              </li>
              <li>
                <a
                  href="/questions/system-design/image-carousel"
                  target="_blank"
                  >Image Carousel</a
                >
              </li>
              <li>
                <a
                  href="/questions/system-design/collaborative-editor-google-docs"
                  target="_blank"
                  >Google Docs</a
                >
              </li>
            </ul>

            <p>
              GreatFrontEnd has a
              <a href="/questions/formats/system-design" target="_blank"
                >comprehensive list of front end system design questions</a
              >
              that you can practice. Each question comes with detailed solutions
              and architectural considerations.
            </p>
          </section>

          <section>
            <h2>Recommended Resources</h2>

            <ul>
              <li>
                <strong>Front End System Design Playbook:</strong> Our
                comprehensive guide covering all aspects of front end system
                design
              </li>
              <li>
                <strong>React Documentation:</strong> Official docs on advanced
                patterns and performance
              </li>
              <li>
                <strong>Web.dev:</strong> Google's guide to modern web
                development best practices
              </li>
              <li>
                <strong>MDN Web Docs:</strong> Comprehensive reference for web
                technologies
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/api-design"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">API Design Principles</span>
            </div>
          </router-link>
          <router-link to="/interviews/playbook/quiz" class="nav-link next">
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Quiz Interview Questions</span>
            </div>
            <span class="nav-arrow">→</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import PlaybookArticleSidebar from "../../components/PlaybookArticleSidebar.vue";
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
</style>
