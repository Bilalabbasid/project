<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <!-- Sidebar -->
      <PlaybookArticleSidebar />

      <!-- Main Content -->
      <div class="article-main">
        <!-- Article Header -->
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">2</span>
            <span class="reading-time">7 min read</span>
          </div>
          <h1>Front End Coding Interviews</h1>
          <p class="article-subtitle">
            Question types to expect, handy coding tips and the best resources
            to use
          </p>
        </header>

        <!-- Article Content -->
        <article class="article-content">
          <p>
            Front end coding interviews test your ability to solve problems
            using code. Unlike traditional software engineering interviews that
            focus heavily on data structures and algorithms, front end coding
            interviews emphasize practical skills relevant to front end
            development.
          </p>

          <h2>Types of Coding Questions</h2>

          <h3>Algorithmic Coding</h3>
          <p>
            Solve algorithmic problems that test your understanding of data
            structures, algorithms, and time complexity. These are less common
            in pure front end roles but may appear in full-stack or generalist
            positions.
          </p>

          <h3>JavaScript Coding</h3>
          <p>
            Implement functions or utilities commonly used in front end
            development. These questions test your knowledge of JavaScript
            fundamentals and front end-specific concepts.
          </p>

          <h3>User Interface Coding</h3>
          <p>
            Build interactive UI components using HTML, CSS, and JavaScript.
            These questions assess your ability to create functional and
            well-designed user interfaces.
          </p>

          <h2>Preparation Tips</h2>

          <ul>
            <li>
              Practice regularly on platforms like LeetCode, HackerRank, and
              CodeSignal
            </li>
            <li>
              Focus on JavaScript fundamentals: closures, prototypes, async
              programming
            </li>
            <li>
              Learn common front end algorithms: debounce, throttle, deep clone
            </li>
            <li>Practice building UI components with vanilla JavaScript</li>
            <li>Understand browser APIs and DOM manipulation</li>
          </ul>

          <h2>Best Resources</h2>

          <ul>
            <li>
              <a href="/interviews/questions"
                >GreatFrontend Practice Questions</a
              >
            </li>
            <li><a href="https://leetcode.com" target="_blank">LeetCode</a></li>
            <li>
              <a href="https://javascript.info" target="_blank"
                >JavaScript.info</a
              >
            </li>
            <li>
              <a href="https://developer.mozilla.org" target="_blank"
                >MDN Web Docs</a
              >
            </li>
          </ul>
        </article>

        <!-- Article Navigation -->
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/introduction"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title"
                >Front End Interviews: An Introduction</span
              >
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/javascript"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">JavaScript Coding Interviews</span>
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

.concepts-table table {
  width: 100%;
  border-collapse: collapse;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  margin: 1.5rem 0;
}

.concepts-table th,
.concepts-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #374151;
  vertical-align: top;
}

.concepts-table th {
  background: #2a2a2e;
  color: #ffffff;
  font-weight: 600;
}

.concepts-table td {
  color: #d1d5db;
}

.concepts-table tr:last-child td {
  border-bottom: none;
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
