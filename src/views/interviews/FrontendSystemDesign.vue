<template>
  <div class="system-design-page">
    <div class="interview-layout">
      <!-- Sidebar -->
      <SystemDesignSidebar />

      <!-- Main Content -->
      <div class="interview-main">
        <div class="container">
          <div class="page-header">
            <h1>Front End System Design Playbook</h1>
            <p>
              The only guide you need for Front End System Design interviews
            </p>
          </div>

          <div class="hero-section">
            <div class="hero-content">
              <p>
                System design interviews are often reserved for mid-to-senior
                roles, focusing on your ability to design complex, scalable, and
                maintainable systems. With few resources out there specifically
                for front end system design, we've crafted the Front End System
                Design Guide—the most comprehensive resource available.
              </p>
            </div>
            <div class="hero-features">
              <div class="feature-item">
                <div class="feature-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                    />
                  </svg>
                </div>
                <span>Robust framework</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <span>10+ solved questions</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    />
                  </svg>
                </div>
                <span>Deep-dives into real-world applications</span>
              </div>
            </div>
          </div>

          <div class="techniques-section">
            <h2>Techniques and guides</h2>
            <div class="stats-bar">
              <span class="stats-item">6 articles</span>
              <span class="stats-item">37 minutes total</span>
            </div>

            <div class="guides-grid">
              <div class="guide-card">
                <div class="guide-image">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <div class="guide-content">
                  <h3>Front End System Design: An Introduction</h3>
                  <p>
                    Learn useful techniques and how to approach top front end
                    system design questions. Written by ex-interviewers at
                    FAANG.
                  </p>
                  <a
                    href="/interviews/system-design/introduction"
                    class="guide-link"
                    >Read article →</a
                  >
                </div>
              </div>

              <div class="guide-card">
                <div class="guide-image">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                    />
                  </svg>
                </div>
                <div class="guide-content">
                  <h3>Types of Front End System Design Questions</h3>
                  <p>
                    Question formats you can expect in a front end system design
                    interview.
                  </p>
                  <a
                    href="/interviews/system-design/types-of-questions"
                    class="guide-link"
                    >Read article →</a
                  >
                </div>
              </div>

              <div class="guide-card">
                <div class="guide-image">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    />
                  </svg>
                </div>
                <div class="guide-content">
                  <h3>The RADIO Framework</h3>
                  <p>
                    Approach your front end system design interviews in a
                    structured fashion. A good structure is half the battle won.
                  </p>
                  <a
                    href="/interviews/system-design/framework"
                    class="guide-link"
                    >Read article →</a
                  >
                </div>
              </div>

              <div class="guide-card">
                <div class="guide-image">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    />
                  </svg>
                </div>
                <div class="guide-content">
                  <h3>
                    Evaluation Criteria for Front End System Design Interviews
                  </h3>
                  <p>
                    Specific behaviors and signals interviewers look out for in
                    front end system design interviews.
                  </p>
                  <a
                    href="/interviews/system-design/evaluation-axes"
                    class="guide-link"
                    >Read article →</a
                  >
                </div>
              </div>

              <div class="guide-card">
                <div class="guide-image">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                    />
                  </svg>
                </div>
                <div class="guide-content">
                  <h3>
                    Common Mistakes to Avoid for Front End System Design
                    Interviews
                  </h3>
                  <p>
                    Know the mistakes candidates often make during front end
                    system design interviews and how to avoid them.
                  </p>
                  <a
                    href="/interviews/system-design/common-mistakes"
                    class="guide-link"
                    >Read article →</a
                  >
                </div>
              </div>

              <div class="guide-card">
                <div class="guide-image">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
                    />
                  </svg>
                </div>
                <div class="guide-content">
                  <h3>Cheatsheet for Front End System Design Interviews</h3>
                  <p>
                    Summary of the most important things you should take note of
                    during front end system design interviews.
                  </p>
                  <a
                    href="/interviews/system-design/cheatsheet"
                    class="guide-link"
                    >Read article →</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="practice-section">
            <h2>Practice questions</h2>
            <div class="practice-stats">
              <div class="stat-item">
                <span class="stat-number">19</span>
                <span class="stat-label">questions</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">11</span>
                <span class="stat-label">hours total</span>
              </div>
            </div>

            <div class="questions-grid">
              <div class="question-card">
                <div class="question-header">
                  <h3>News Feed (e.g. Facebook)</h3>
                  <span class="difficulty easy">Easy</span>
                </div>
                <p>
                  Design a news feed user interface similar to Facebook and
                  Twitter
                </p>
                <div class="question-tags">
                  <span class="tag">Accessibility</span>
                  <span class="tag">Performance</span>
                  <span class="tag">Users completed: 2.67k</span>
                </div>
                <a
                  href="/questions/system-design/news-feed-facebook"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Autocomplete</h3>
                  <span class="difficulty medium">Medium</span>
                </div>
                <p>
                  Design an autocomplete component seen on Google and Facebook
                  search
                </p>
                <div class="question-tags">
                  <span class="tag">Accessibility</span>
                  <span class="tag">UI component</span>
                  <span class="tag">Users completed: 2.28k</span>
                </div>
                <a
                  href="/questions/system-design/autocomplete"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Poll Widget</h3>
                  <span class="difficulty easy">Easy</span>
                </div>
                <p>Design a poll widget that can be embedded on websites</p>
                <div class="question-tags">
                  <span class="tag">UI component</span>
                  <span class="tag">Users completed: 1.33k</span>
                </div>
                <a
                  href="/questions/system-design/poll-widget"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Travel Booking (e.g. Airbnb)</h3>
                  <span class="difficulty medium">Medium</span>
                </div>
                <p>Design a travel booking website like Airbnb and Expedia</p>
                <div class="question-tags">
                  <span class="tag">Performance</span>
                  <span class="tag">SEO</span>
                  <span class="tag">Users completed: 768</span>
                </div>
                <a
                  href="/questions/system-design/travel-booking-airbnb"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Photo Sharing (e.g. Instagram)</h3>
                  <span class="difficulty medium">Medium</span>
                </div>
                <p>Design a photo sharing application like Instagram</p>
                <div class="question-tags">
                  <span class="tag">Accessibility</span>
                  <span class="tag">Networking</span>
                  <span class="tag">Performance</span>
                  <span class="tag">Users completed: 656</span>
                </div>
                <a
                  href="/questions/system-design/photo-sharing-instagram"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Dropdown Menu</h3>
                  <span class="difficulty medium">Medium</span>
                </div>
                <p>
                  Design a dropdown menu component that reveals a menu
                  containing a list of actions
                </p>
                <div class="question-tags">
                  <span class="tag">Accessibility</span>
                  <span class="tag">UI component</span>
                  <span class="tag">Users completed: 613</span>
                </div>
                <a
                  href="/questions/system-design/dropdown-menu"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Image Carousel</h3>
                  <span class="difficulty medium">Medium</span>
                </div>
                <p>Design a horizontally-scrolling image carousel component</p>
                <div class="question-tags">
                  <span class="tag">Accessibility</span>
                  <span class="tag">Performance</span>
                  <span class="tag">UI component</span>
                  <span class="tag">Users completed: 1.09k</span>
                </div>
                <a
                  href="/questions/system-design/image-carousel"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Modal Dialog</h3>
                  <span class="difficulty medium">Medium</span>
                </div>
                <p>
                  Design a modal/dialog component that shows a window overlaying
                  the contents on the page
                </p>
                <div class="question-tags">
                  <span class="tag">Accessibility</span>
                  <span class="tag">UI component</span>
                  <span class="tag">Users completed: 638</span>
                </div>
                <a
                  href="/questions/system-design/modal-dialog"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Email Client (e.g. Microsoft Outlook)</h3>
                  <span class="difficulty medium">Medium</span>
                </div>
                <p>
                  Design a desktop email client like Microsoft Outlook and Apple
                  Mail
                </p>
                <div class="question-tags">
                  <span class="tag">Users completed: 175</span>
                </div>
                <a
                  href="/questions/system-design/email-client-outlook"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>E-commerce Marketplace (e.g. Amazon)</h3>
                  <span class="difficulty medium">Medium</span>
                </div>
                <p>
                  Design an e-commerce marketplace website like Amazon and eBay
                </p>
                <div class="question-tags">
                  <span class="tag">SEO</span>
                  <span class="tag">Users completed: 902</span>
                </div>
                <a
                  href="/questions/system-design/e-commerce-amazon"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Pinterest</h3>
                  <span class="difficulty hard">Hard</span>
                </div>
                <p>Design Pinterest homepage, focusing on the masonry layout</p>
                <div class="question-tags">
                  <span class="tag">Accessibility</span>
                  <span class="tag">Networking</span>
                  <span class="tag">Performance</span>
                  <span class="tag">Users completed: 446</span>
                </div>
                <a
                  href="/questions/system-design/pinterest"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Chat App (e.g. Messenger)</h3>
                  <span class="difficulty hard">Hard</span>
                </div>
                <p>Design a chat application like Messenger and Slack</p>
                <div class="question-tags">
                  <span class="tag">Networking</span>
                  <span class="tag">Users completed: 574</span>
                </div>
                <a
                  href="/questions/system-design/chat-application-messenger"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Rich Text Editor</h3>
                  <span class="difficulty hard">Hard</span>
                </div>
                <p>
                  Design a rich text editor component used on websites like
                  Medium and Gmail
                </p>
                <div class="question-tags">
                  <span class="tag">Performance</span>
                  <span class="tag">UI component</span>
                  <span class="tag">Users completed: 192</span>
                </div>
                <a
                  href="/questions/system-design/rich-text-editor"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Google Docs</h3>
                  <span class="difficulty hard">Hard</span>
                </div>
                <p>Design a collaborative editor like Google Docs and Notion</p>
                <div class="question-tags">
                  <span class="tag">Networking</span>
                  <span class="tag">Users completed: 227</span>
                </div>
                <a
                  href="/questions/system-design/collaborative-editor-google-docs"
                  class="question-link"
                  >Solve question →</a
                >
              </div>

              <div class="question-card">
                <div class="question-header">
                  <h3>Video Streaming (e.g. Netflix)</h3>
                  <span class="difficulty hard">Hard</span>
                </div>
                <p>
                  Design a video streaming application like Netflix and YouTube
                </p>
                <div class="question-tags">
                  <span class="tag">Networking</span>
                  <span class="tag">Performance</span>
                  <span class="tag">Users completed: 332</span>
                </div>
                <a
                  href="/questions/system-design/video-streaming-netflix"
                  class="question-link"
                  >Solve question →</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SystemDesignSidebar from "../../components/SystemDesignSidebar.vue";
</script>

<style scoped>
.system-design-page {
  min-height: 100vh;
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
  padding: 80px 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
}

.page-header p {
  font-size: 1.125rem;
  color: #9ca3af;
}

.hero-section {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 3rem;
  margin-bottom: 3rem;
}

.hero-content p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #d1d5db;
  margin-bottom: 2rem;
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d1d5db;
}

.feature-icon {
  width: 2rem;
  height: 2rem;
  color: #dcee77;
  flex-shrink: 0;
}

.techniques-section h2,
.practice-section h2 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.stats-bar {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stats-item {
  color: #9ca3af;
  font-size: 0.875rem;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.guide-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.guide-card:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
}

.guide-image {
  width: 3rem;
  height: 3rem;
  color: #dcee77;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.guide-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.guide-content p {
  color: #9ca3af;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.guide-link {
  color: #dcee77;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.guide-link:hover {
  color: #ffffff;
}

.practice-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #dcee77;
}

.stat-label {
  font-size: 0.875rem;
  color: #9ca3af;
}

.questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.question-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.question-card:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.question-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  flex: 1;
  margin-right: 1rem;
}

.difficulty {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  flex-shrink: 0;
}

.difficulty.easy {
  background: #dcfce7;
  color: #166534;
}

.difficulty.medium {
  background: #fef3c7;
  color: #92400e;
}

.difficulty.hard {
  background: #fee2e2;
  color: #991b1b;
}

.question-card p {
  color: #9ca3af;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.question-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: #374151;
  color: #d1d5db;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.question-link {
  color: #dcee77;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.question-link:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  .hero-features {
    flex-direction: column;
    align-items: center;
  }

  .guides-grid,
  .questions-grid {
    grid-template-columns: 1fr;
  }

  .question-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .stats-bar,
  .practice-stats {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
