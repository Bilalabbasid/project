<template>
  <div class="playbook-page">
    <div class="interview-layout">
      <!-- Sidebar -->
      <InterviewSidebar />

      <!-- Main Content -->
      <div class="interview-main">
        <!-- Header Section -->
        <section class="playbook-header">
          <div class="container">
            <div class="header-content">
              <h1>Front End Interview Playbook</h1>
              <p>
                The definitive guide to front end interviews. From algorithms to
                system design, we cover everything you need to know to land your
                dream job.
              </p>

              <div class="header-features">
                <div class="feature-item">
                  <div class="feature-icon">📖</div>
                  <span>End-to-end guide</span>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">🎯</div>
                  <span>Tips for all question types</span>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">💡</div>
                  <span>500+ practice questions</span>
                </div>
              </div>

              <div class="header-description">
                <p>
                  Tackle your next interview with confidence using this focused,
                  no-nonsense front end prep guide. Created by the author of the
                  Front End Interview Handbook, it's filled with practical
                  strategies and insider tips you won't find anywhere else.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Content Sections -->
        <section class="playbook-content">
          <div class="container">
            <!-- Introduction -->
            <div class="playbook-section">
              <div class="section-header">
                <h2>Introduction</h2>
                <div class="section-meta">
                  <span class="article-count">1 article</span>
                  <span class="reading-time"
                    >Reading time 10 minutes total</span
                  >
                </div>
              </div>
              <div class="articles-list">
                <router-link
                  to="/interviews/playbook/introduction"
                  class="article-card"
                >
                  <div class="article-number">1</div>
                  <div class="article-content">
                    <h3>Front End Interviews: An Introduction</h3>
                    <p>
                      Everything you need to know - from types of questions to
                      preparation tactics
                    </p>
                    <div class="article-meta">
                      <span class="reading-time">10 min read</span>
                    </div>
                  </div>
                  <div class="article-arrow">→</div>
                </router-link>
              </div>
            </div>

            <!-- Coding interviews -->
            <div class="playbook-section">
              <div class="section-header">
                <h2>Coding interviews</h2>
                <div class="section-meta">
                  <span class="article-count">3 articles</span>
                  <span class="reading-time"
                    >Reading time 24 minutes total</span
                  >
                </div>
              </div>
              <div class="articles-list">
                <router-link
                  to="/interviews/playbook/coding"
                  class="article-card"
                >
                  <div class="article-number">2</div>
                  <div class="article-content">
                    <h3>Front End Coding Interviews</h3>
                    <p>
                      Question types to expect, handy coding tips and the best
                      resources to use
                    </p>
                    <div class="article-meta">
                      <span class="reading-time">7 min read</span>
                    </div>
                  </div>
                  <div class="article-arrow">→</div>
                </router-link>
                <router-link
                  to="/interviews/playbook/javascript"
                  class="article-card"
                >
                  <div class="article-number">3</div>
                  <div class="article-content">
                    <h3>JavaScript Coding Interviews</h3>
                    <p>
                      Question types to expect, important concepts to know and
                      top practice questions to do
                    </p>
                    <div class="article-meta">
                      <span class="reading-time">8 min read</span>
                    </div>
                  </div>
                  <div class="article-arrow">→</div>
                </router-link>
                <router-link
                  to="/interviews/playbook/algorithms"
                  class="article-card"
                >
                  <div class="article-number">4</div>
                  <div class="article-content">
                    <h3>Data Structures and Algorithms Interviews</h3>
                    <p>
                      Front end engineer's guide to DSA - important concepts to
                      know, top practice questions to do and other tips
                    </p>
                    <div class="article-meta">
                      <span class="reading-time">6 min read</span>
                    </div>
                  </div>
                  <div class="article-arrow">→</div>
                </router-link>
              </div>
            </div>

            <!-- User interface interviews -->
            <div class="playbook-section">
              <div class="section-header">
                <h2>User interface interviews</h2>
                <div class="section-meta">
                  <span class="article-count">3 articles</span>
                  <span class="reading-time"
                    >Reading time 34 minutes total</span
                  >
                </div>
              </div>
              <div class="articles-list">
                <router-link
                  to="/interviews/playbook/user-interface"
                  class="article-card"
                >
                  <div class="article-number">5</div>
                  <div class="article-content">
                    <h3>User Interface Coding Interviews</h3>
                    <p>
                      Best practices while interviewing, important concepts to
                      know and critical practice questions to do
                    </p>
                    <div class="article-meta">
                      <span class="reading-time">12 min read</span>
                    </div>
                  </div>
                  <div class="article-arrow">→</div>
                </router-link>
                <router-link
                  to="/interviews/playbook/ui-cheatsheet"
                  class="article-card"
                >
                  <div class="article-number">6</div>
                  <div class="article-content">
                    <h3>Cheatsheet for UI Interview Questions</h3>
                    <p>
                      A cheatsheet you can use to improve the user interfaces
                      you have to build or design during front end interviews
                    </p>
                    <div class="article-meta">
                      <span class="reading-time">15 min read</span>
                    </div>
                  </div>
                  <div class="article-arrow">→</div>
                </router-link>
                <router-link
                  to="/interviews/playbook/api-design"
                  class="article-card"
                >
                  <div class="article-number">7</div>
                  <div class="article-content">
                    <h3>API design principles for UI components</h3>
                    <p>
                      Best practices for designing developer interface
                      components APIs, useful for UI components coding and
                      system design interviews
                    </p>
                    <div class="article-meta">
                      <span class="reading-time">7 min read</span>
                    </div>
                  </div>
                  <div class="article-arrow">→</div>
                </router-link>
              </div>
            </div>

            <!-- System design interviews -->
            <div class="playbook-section">
              <div class="section-header">
                <h2>System design interviews</h2>
                <div class="section-meta">
                  <span class="article-count">1 article</span>
                  <span class="reading-time">Reading time 2 minutes total</span>
                </div>
              </div>
              <div class="articles-list">
                <router-link
                  to="/interviews/playbook/system-design"
                  class="article-card"
                >
                  <div class="article-number">8</div>
                  <div class="article-content">
                    <h3>Front End System Design Interviews - Quick Start</h3>
                    <p>
                      A quick overview to all the best resources you can
                      leverage for your front end system design interviews
                    </p>
                    <div class="article-meta">
                      <span class="reading-time">2 min read</span>
                    </div>
                  </div>
                  <div class="article-arrow">→</div>
                </router-link>
              </div>
            </div>

            <!-- Quiz interviews -->
            <div class="playbook-section">
              <div class="section-header">
                <h2>Quiz interviews</h2>
                <div class="section-meta">
                  <span class="article-count">1 article</span>
                  <span class="reading-time">Reading time 4 minutes total</span>
                </div>
              </div>
              <div class="articles-list">
                <router-link
                  to="/interviews/playbook/quiz"
                  class="article-card"
                >
                  <div class="article-number">9</div>
                  <div class="article-content">
                    <h3>Front End Quiz Interview Questions</h3>
                    <p>
                      Quiz-style front end interview questions — What to expect,
                      concepts to learn, and 100+ important practice questions
                    </p>
                    <div class="article-meta">
                      <span class="reading-time">4 min read</span>
                    </div>
                  </div>
                  <div class="article-arrow">→</div>
                </router-link>
              </div>
            </div>

            <!-- Resume preparation -->
            <div class="playbook-section">
              <div class="section-header">
                <h2>Resume preparation</h2>
                <div class="section-meta">
                  <span class="article-count">1 article</span>
                  <span class="reading-time">Reading time 7 minutes total</span>
                </div>
              </div>
              <div class="articles-list">
                <router-link
                  to="/interviews/playbook/resume"
                  class="article-card"
                >
                  <div class="article-number">10</div>
                  <div class="article-content">
                    <h3>Ultimate Guide to Front End Engineer Resumes</h3>
                    <p>
                      Get writing tips, samples, and best practices to help you
                      get shortlisted for your next front end job
                    </p>
                    <div class="article-meta">
                      <span class="reading-time">7 min read</span>
                    </div>
                  </div>
                  <div class="article-arrow">→</div>
                </router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import InterviewSidebar from "../../components/InterviewSidebar.vue";

// No reactive data needed for this static playbook page
</script>

<style scoped>
.playbook-page {
  background: #18181b;
  color: #ffffff;
}

.interview-layout {
  display: flex;
  min-height: 100vh;
}

.interview-main {
  flex: 1;
  background: #18181b;
}

/* Header Section */
.playbook-header {
  padding: 80px 0 60px;
  text-align: center;
  border-bottom: 1px solid #374151;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.playbook-header h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.playbook-header p {
  font-size: 1.25rem;
  color: #9ca3af;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.header-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #d1d5db;
  font-weight: 500;
}

.feature-icon {
  font-size: 1.25rem;
}

.header-description {
  max-width: 600px;
  margin: 0 auto;
}

.header-description p {
  font-size: 1.125rem;
  color: #9ca3af;
  line-height: 1.7;
}

/* Content Sections */
.playbook-content {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Headers */
.playbook-section {
  margin-bottom: 4rem;
}

.section-header {
  margin-bottom: 2rem;
}

.playbook-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.section-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #9ca3af;
}

.article-count {
  color: #dcee77;
  font-weight: 600;
}

/* Articles List */
.articles-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.article-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.article-card:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.article-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #dcee77;
  color: #000000;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.article-content {
  flex: 1;
}

.article-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.article-content p {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.reading-time {
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 500;
}

.article-arrow {
  color: #dcee77;
  font-size: 1.25rem;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.article-card:hover .article-arrow {
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .playbook-header {
    padding: 60px 0 40px;
  }

  .playbook-header h1 {
    font-size: 2.5rem;
  }

  .playbook-header p {
    font-size: 1.125rem;
  }

  .header-features {
    flex-direction: column;
    gap: 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .article-card {
    padding: 1rem;
    gap: 1rem;
  }

  .article-number {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }

  .article-content h3 {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .playbook-header h1 {
    font-size: 2rem;
  }

  .article-card {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .article-arrow {
    align-self: center;
  }
}
</style>
