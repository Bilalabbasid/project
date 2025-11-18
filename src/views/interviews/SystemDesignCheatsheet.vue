<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <SystemDesignSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">6</span>
            <span class="reading-time">5 min read</span>
          </div>
          <h1>Cheatsheet for Front End System Design Interviews</h1>
          <p class="article-subtitle">
            Summary of the most important things you should take note of during
            front end system design interviews.
          </p>
        </header>
        <article class="article-content">
          <section>
            <h2>RADIO framework</h2>

            <ol>
              <li>
                <strong>Requirements exploration:</strong> Understand the
                problem thoroughly and determine the scope by asking a number of
                clarifying questions.
              </li>
              <li>
                <strong>Architecture / High-level design:</strong> Identify the
                key components of the product and how they are related to each
                other.
              </li>
              <li>
                <strong>Data model:</strong> Describe the various data entities,
                the fields they contain and which component(s) they belong to.
              </li>
              <li>
                <strong>Interface definition (API):</strong> Define the
                interface (API) between components in the product, functionality
                of each APIs, their parameters and responses.
              </li>
              <li>
                <strong>Optimizations and deep dive:</strong> Discuss about
                possible optimization opportunities and specific areas of
                interest when building the product.
              </li>
            </ol>
          </section>

          <section>
            <h2>Evaluation axes</h2>

            <ol>
              <li>
                <strong>Problem exploration:</strong> Demonstrated understanding
                of the problem, asked clarifying questions to reduce ambiguities
                and gathered sufficient requirements.
              </li>
              <li>
                <strong>Architecture:</strong> Broke down the problem into
                smaller independent parts, defined their responsibilities and
                how these components can work together.
              </li>
              <li>
                <strong>Technical proficiency:</strong> Demonstrated technical
                knowledge and proficiency of front end domain fundamentals (e.g.
                performance, networking, accessibility, i18n, security, etc),
                relevant technologies and APIs.
              </li>
              <li>
                <strong>Exploration and tradeoffs:</strong> Suggested various
                possible approaches on how to achieve certain functionality,
                explained the pros and cons and made recommendations.
              </li>
              <li>
                <strong>Product and UX sense:</strong> Showed consideration for
                user experience and decisions to make the product a great one.
              </li>
              <li>
                <strong>Communication and collaboration:</strong> Conveyed
                thoughts and ideas clearly and concisely, receptive to feedback
                and collaborated with the interviewer.
              </li>
            </ol>
          </section>

          <section>
            <h2>Common mistakes</h2>

            <ul>
              <li>
                Jumping into answering the question immediately without first
                asking questions and gathering requirements.
              </li>
              <li>
                Approaching the question in an unstructured manner, going all
                over the place and missing out on important areas.
              </li>
              <li>
                Insisting on only one solution or the best solution without
                realizing that each solution has tradeoffs.
              </li>
              <li>
                Remaining silent the entire time and only thinking in their
                head.
              </li>
              <li>
                Going down a rabbit hole and spending too much time on
                unimportant areas.
              </li>
              <li>Using buzzwords without being able to explain them.</li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/system-design/common-mistakes"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">Common Mistakes</span>
            </div>
          </router-link>
          <router-link to="/interviews/system-design" class="nav-link next">
            <div>
              <span class="nav-label">Back to</span>
              <span class="nav-title">System Design Overview</span>
            </div>
            <span class="nav-arrow">→</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import SystemDesignSidebar from "../../components/SystemDesignSidebar.vue";
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

.article-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
  color: #d1d5db;
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
</style>
