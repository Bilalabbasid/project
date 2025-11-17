<template>
  <div class="focus-areas-page">
    <InterviewSidebar />
    <main class="main-content">
      <div class="content-wrapper">
        <header class="page-header">
          <h1 class="page-title">Focus areas</h1>
          <p class="page-subtitle">Premium</p>
          <p class="page-description">
            Deep-dive into topical focus areas critical for front end interviews.
          </p>
          <div class="premium-features">
            <div class="feature-item">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              10 topical deep-dives
            </div>
            <div class="feature-item">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Code in browser
            </div>
            <div class="feature-item">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Official solutions and tests
            </div>
          </div>
          <div class="intro-text">
            <p>The vast breadth of topics that could come up during a front end interview can be daunting.</p>
            <p>To simplify your preparation, we've carefully organized the entire front end domain into 10 critical focus areas, each covering the most frequently tested topics in interviews.</p>
          </div>
        </header>

        <section class="focus-section">
          <h2 class="section-title">JavaScript Engineering</h2>
          <div class="focus-areas-grid">
            <div class="focus-card">
              <h3 class="focus-title">JavaScript Polyfills</h3>
              <p class="focus-description">
                Gain proficiency in front end fundamentals by implementing JavaScript and DOM APIs from scratch
              </p>
              <div class="focus-meta">
                <span class="question-count">26 questions</span>
                <span class="topics">Topics: JavaScript, Closure</span>
              </div>
              <button class="focus-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Practice
              </button>
            </div>

            <div class="focus-card">
              <h3 class="focus-title">Async Operations</h3>
              <p class="focus-description">
                Sharpen your skills in asynchronous programming by practicing the use of async/await, Promises, and callback functions.
              </p>
              <div class="focus-meta">
                <span class="question-count">33 questions</span>
                <span class="topics">Topics: Async, Closure</span>
              </div>
              <button class="focus-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Practice
              </button>
            </div>

            <div class="focus-card">
              <h3 class="focus-title">Lodash Functions</h3>
              <p class="focus-description">
                Strengthen your proficiency in JavaScript through writing Lodash functions from scratch.
              </p>
              <div class="focus-meta">
                <span class="question-count">28 questions</span>
                <span class="topics">Topics: Closure, JavaScript</span>
              </div>
              <button class="focus-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Practice
              </button>
            </div>
          </div>
        </section>

        <section class="focus-section">
          <h2 class="section-title">User Interface Development</h2>
          <div class="focus-areas-grid">
            <div class="focus-card">
              <h3 class="focus-title">DOM Manipulation</h3>
              <p class="focus-description">
                Familiarize with selecting elements using CSS selectors, traverse the DOM hierarchy, and manipulate their properties, content, and styles.
              </p>
              <div class="focus-meta">
                <span class="question-count">10 questions</span>
                <span class="topics">Topics: Browser, Web APIs, Tree</span>
              </div>
              <button class="focus-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Practice
              </button>
            </div>

            <div class="focus-card">
              <h3 class="focus-title">Forms</h3>
              <p class="focus-description">
                Master the art of building interactive and user-friendly forms.
              </p>
              <div class="focus-meta">
                <span class="question-count">10 questions</span>
                <span class="topics">Topics: Accessibility, Browser</span>
              </div>
              <button class="focus-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Practice
              </button>
            </div>

            <div class="focus-card">
              <h3 class="focus-title">React Hooks</h3>
              <p class="focus-description">
                Practice building custom React Hooks for interviews
              </p>
              <div class="focus-meta">
                <span class="question-count">23 questions</span>
                <span class="topics">Topics: React, Async</span>
              </div>
              <button class="focus-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Practice
              </button>
            </div>

            <div class="focus-card">
              <h3 class="focus-title">Design System Components</h3>
              <p class="focus-description">
                Elevate your front-end skills by practicing the creation of front end design system components.
              </p>
              <div class="focus-meta">
                <span class="question-count">15 questions</span>
                <span class="topics">Topics: UI component, Accessibility, CSS</span>
              </div>
              <button class="focus-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Practice
              </button>
            </div>

            <div class="focus-card">
              <h3 class="focus-title">State Management</h3>
              <p class="focus-description">
                Train your skills in designing complex state and implementing operations to manipulate state.
              </p>
              <div class="focus-meta">
                <span class="question-count">17 questions</span>
                <span class="topics">Topics: UI component, OOP</span>
              </div>
              <button class="focus-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Practice
              </button>
            </div>

            <div class="focus-card">
              <h3 class="focus-title">Accessibility</h3>
              <p class="focus-description">
                Practice developing inclusive and accessible web experiences.
              </p>
              <div class="focus-meta">
                <span class="question-count">12 questions</span>
                <span class="topics">Topics: Accessibility, UI component</span>
              </div>
              <button class="focus-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Practice
              </button>
            </div>
          </div>
        </section>

        <section class="focus-section">
          <h2 class="section-title">Computer Science Foundations</h2>
          <div class="focus-areas-grid">
            <div class="focus-card">
              <h3 class="focus-title">Data Structures & Algorithms</h3>
              <p class="focus-description">
                Hone your computer science fundamentals by implementing important data structures and algorithms from scratch.
              </p>
              <div class="focus-meta">
                <span class="question-count">22 questions</span>
                <span class="topics">Topics: Graph, Tree, Recursion</span>
              </div>
              <button class="focus-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Practice
              </button>
            </div>
          </div>
        </section>

        <section class="details-section">
          <h2 class="section-title">Focus Areas for Front End Interviews</h2>
          <div class="details-content">
            <p class="details-description">
              Front end interviews cover such a vast range of possible topics that it can be hard to wrap your head around. In an ideal world, you should start with the topics that are most likely to come up and where you're weakest.
            </p>
            <p class="details-description">
              To make your preparation more focused, we have meticulously organized the entire front end interview domain into 10 critical focus areas. These bite-sized lists of practice questions are designed to help you deep-dive into the key topics that are most frequently tested in front end interviews.
            </p>

            <h3 class="details-subtitle">Key Features</h3>
            <ul class="features-list">
              <li class="feature-item">
                <strong>Quality materials by credible engineers:</strong> All the materials on the platform—including every question, solution, test case, and focus area—have been written and curated by big tech ex-interviewers who have conducted numerous interviews at top tech companies. We strive in every piece to deliver streamlined, high quality content.
              </li>
              <li class="feature-item">
                <strong>Deep dive into essential topics:</strong> Our focus areas provide in-depth coverage of the 10 most critical topics for front end interviews. These include everything from JavaScript engineering to UI development and computer science foundations.
              </li>
              <li class="feature-item">
                <strong>Streamlined preparation:</strong> By breaking down the front end domain into manageable sections, our focus areas simplify your preparation process. You can prioritize the topics where you're weaker first and then tackle the other areas if time permits.
              </li>
              <li class="feature-item">
                <strong>Mock interview environment:</strong> Practice makes perfect, and it doesn't have to be a hassle. Our platform allows you to code directly in your browser. Moreover, our coding workspace is built to be a realistic environment that closely replicates actual interview conditions. This setup helps you get accustomed to the tools and situations you'll face in your interviews.
              </li>
              <li class="feature-item">
                <strong>Official solutions and tests for every question:</strong> Each practice question within our focus areas comes with official solutions and tests. These solutions are crafted by experienced engineers and are designed to provide clear, detailed explanations that help you understand the best approach to each problem.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import InterviewSidebar from '../../components/InterviewSidebar.vue'
</script>

<style scoped>
.focus-areas-page {
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
  margin-bottom: 8px;
  color: #ffffff;
}

.page-subtitle {
  font-size: 18px;
  color: #dcee77;
  font-weight: 600;
  margin-bottom: 16px;
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

.intro-text {
  max-width: 800px;
  margin: 0 auto;
}

.intro-text p {
  font-size: 18px;
  line-height: 1.6;
  color: #9ca3af;
  margin-bottom: 16px;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #ffffff;
}

.focus-section {
  margin-bottom: 64px;
}

.focus-areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
}

.focus-card {
  background: #1f2937;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #374151;
  transition: all 0.3s ease;
}

.focus-card:hover {
  border-color: #dcee77;
  transform: translateY(-2px);
}

.focus-title {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 12px;
}

.focus-description {
  color: #9ca3af;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.focus-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.question-count {
  color: #dcee77;
  font-weight: 600;
  font-size: 14px;
}

.topics {
  color: #6b7280;
  font-size: 14px;
}

.focus-button {
  width: 100%;
  background: #dcee77;
  color: #000000;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.focus-button:hover:not(.locked) {
  background: #c4d647;
}

.focus-button.locked {
  background: #374151;
  color: #6b7280;
  cursor: not-allowed;
}

.lock-icon {
  width: 16px;
  height: 16px;
}

.details-section {
  margin-bottom: 64px;
}

.details-content {
  max-width: 800px;
  margin: 0 auto;
}

.details-description {
  font-size: 18px;
  line-height: 1.6;
  color: #9ca3af;
  margin-bottom: 24px;
}

.details-subtitle {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 24px;
}

.features-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  margin-bottom: 20px;
  padding-left: 24px;
  position: relative;
  color: #9ca3af;
  line-height: 1.6;
}

.feature-item::before {
  content: "•";
  color: #dcee77;
  font-size: 24px;
  position: absolute;
  left: 0;
  top: -2px;
}

.feature-item strong {
  color: #ffffff;
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

  .focus-areas-grid {
    grid-template-columns: 1fr;
  }

  .focus-card {
    padding: 20px;
  }

  .intro-text p {
    font-size: 16px;
  }
}
</style>