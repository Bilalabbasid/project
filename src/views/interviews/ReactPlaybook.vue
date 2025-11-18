<template>
  <div class="react-playbook-page">
    <ReactPlaybookSidebar />
    <main class="main-content">
      <div class="content-wrapper">
        <header class="page-header">
          <h1 class="page-title">React Interview Playbook</h1>
          <p class="page-description">
            A comprehensive React interview guide that covers core concepts and
            interview-specific React tips
          </p>
          <div class="premium-features">
            <div class="feature-item">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              End-to-end guide
            </div>
            <div class="feature-item">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Tips for all questions types
            </div>
            <div class="feature-item">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              100+ practice questions
            </div>
          </div>
          <div class="playbook-intro">
            <p>
              Ace your React interviews with confidence with this comprehensive
              guide. Created by the author of the Front End Interview Handbook,
              the guide emphasizes on the concepts that are important for
              interviews using plenty of code examples. For each concept, learn
              the best practices and practice a variety of questions to help you
              truly master it.
            </p>
          </div>
        </header>

        <section class="articles-section">
          <div class="section-header">
            <h2 class="section-title">Overview</h2>
            <div class="section-meta">
              <span class="meta-item">3 articles</span>
              <span class="meta-item">25 minutes total</span>
            </div>
          </div>

          <div class="articles-grid">
            <article class="article-card">
              <div class="article-number">1</div>
              <div class="article-content">
                <h3 class="article-title">React Interviews: An Introduction</h3>
                <p class="article-description">
                  A comprehensive guide to mastering React interviews by
                  covering essential concepts, question types, and tailored
                  strategies for front end engineers
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>

            <article class="article-card">
              <div class="article-number">2</div>
              <div class="article-content">
                <h3 class="article-title">Landscape and History of React</h3>
                <p class="article-description">
                  An overview of React's evolution, from its Facebook origins to
                  its current dominance as a versatile, battle-tested library
                  with a vast ecosystem of tools and innovations
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>

            <article class="article-card">
              <div class="article-number">3</div>
              <div class="article-content">
                <h3 class="article-title">
                  How to Prepare for React Interviews
                </h3>
                <p class="article-description">
                  A strategic guide offering a step-by-step plan to prepare for
                  React interviews by outlining essential study steps, core
                  concepts, and topics that are most critical for success
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>
          </div>
        </section>

        <section class="articles-section">
          <div class="section-header">
            <h2 class="section-title">Essential topics</h2>
            <div class="section-meta">
              <span class="meta-item">9 articles</span>
              <span class="meta-item">96 minutes total</span>
            </div>
          </div>

          <div class="articles-grid">
            <article class="article-card">
              <div class="article-number">4</div>
              <div class="article-content">
                <h3 class="article-title">
                  Basic React Concepts for Interviews
                </h3>
                <p class="article-description">
                  Get familiar with core React concepts – components, JSX,
                  props, state, and rendering
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>

            <article class="article-card">
              <div class="article-number">5</div>
              <div class="article-content">
                <h3 class="article-title">Thinking Declaratively in React</h3>
                <p class="article-description">
                  Guide on thinking in declarative and state-driven approaches
                  in React, featuring practical examples like a todo list to
                  illustrate building dynamic, maintainable UIs
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>

            <article class="article-card">
              <div class="article-number">6</div>
              <div class="article-content">
                <h3 class="article-title">
                  Designing State in React Interviews
                </h3>
                <p class="article-description">
                  How to think about state in React, detailing best practices
                  for structuring, resetting, and updating state to build
                  efficient, maintainable, and performant applications
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>

            <article class="article-card">
              <div class="article-number">7</div>
              <div class="article-content">
                <h3 class="article-title">React Hooks for Interviews</h3>
                <p class="article-description">
                  Master React hooks for interviews, covering key hooks like
                  useState, useEffect, useContext, common pitfalls, and best
                  practices for building reusable logic
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>

            <article class="article-card">
              <div class="article-number">8</div>
              <div class="article-content">
                <h3 class="article-title">
                  Event Handling in React Interviews
                </h3>
                <p class="article-description">
                  Guide to React's synthetic event system, covering best
                  practices for handling, intercepting, and optimizing mouse,
                  input, form, focus, and keyboard events for interview success
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>

            <article class="article-card">
              <div class="article-number">9</div>
              <div class="article-content">
                <h3 class="article-title">Forms in React Interviews</h3>
                <p class="article-description">
                  Guide to building interactive React forms, covering controlled
                  vs uncontrolled components, diverse input types, complex state
                  management, and robust error handling and validation
                  strategies
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>

            <article class="article-card">
              <div class="article-number">10</div>
              <div class="article-content">
                <h3 class="article-title">Signup Form Example in React</h3>
                <p class="article-description">
                  A step-by-step guide to building an accessible React signup
                  form with uncontrolled inputs, proper labeling, browser
                  validation, and client-side submission
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>

            <article class="article-card">
              <div class="article-number">11</div>
              <div class="article-content">
                <h3 class="article-title">Data Fetching in React Interviews</h3>
                <p class="article-description">
                  A comprehensive guide to efficiently fetching data in React,
                  covering client-side and server-side techniques, dynamic
                  queries, error handling, caching, and advanced optimizations
                  with query libraries
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>

            <article class="article-card">
              <div class="article-number">12</div>
              <div class="article-content">
                <h3 class="article-title">
                  Design Patterns for React Interviews
                </h3>
                <p class="article-description">
                  An exploration of React design patterns, including
                  higher-order components, render props, and
                  container/presentational patterns, to help you build clean,
                  reusable, and scalable applications
                </p>
                <button class="article-button locked">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read Article
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import ReactPlaybookSidebar from "../../components/ReactPlaybookSidebar.vue";
</script>

<style scoped>
.react-playbook-page {
  display: flex;
  min-height: 100vh;
  background: #18181b;
  color: #ffffff;
}

.main-content {
  flex: 1;
  padding: 24px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 48px;
}

.page-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #ffffff;
}

.page-description {
  font-size: 20px;
  color: #9ca3af;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.premium-features {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #dcee77;
  font-size: 16px;
}

.feature-icon {
  width: 20px;
  height: 20px;
  color: #dcee77;
}

.playbook-intro {
  max-width: 800px;
  margin: 0 auto;
}

.playbook-intro p {
  font-size: 18px;
  line-height: 1.6;
  color: #9ca3af;
}

.articles-section {
  margin-bottom: 64px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}

.section-meta {
  display: flex;
  gap: 16px;
}

.meta-item {
  color: #6b7280;
  font-size: 14px;
  background: #1f2937;
  padding: 4px 12px;
  border-radius: 20px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.article-card {
  background: #1f2937;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #374151;
  transition: all 0.3s ease;
  display: flex;
  gap: 16px;
}

.article-card:hover {
  border-color: #dcee77;
  transform: translateY(-2px);
}

.article-number {
  width: 32px;
  height: 32px;
  background: #dcee77;
  color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
}

.article-content {
  flex: 1;
}

.article-title {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 8px;
}

.article-description {
  color: #9ca3af;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
}

.article-button {
  background: #dcee77;
  color: #000000;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.article-button:hover:not(.locked) {
  background: #c4d647;
}

.article-button.locked {
  background: #374151;
  color: #6b7280;
  cursor: not-allowed;
}

.lock-icon {
  width: 14px;
  height: 14px;
}

@media (max-width: 768px) {
  .main-content {
    padding: 16px;
  }

  .page-title {
    font-size: 36px;
  }

  .premium-features {
    flex-direction: column;
    gap: 16px;
  }

  .section-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .article-card {
    padding: 20px;
  }
}
</style>
