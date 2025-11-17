<template>
  <div class="system-design-page">
    <div class="interview-layout">
      <!-- Sidebar -->
      <InterviewSidebar />

      <!-- Main Content -->
      <div class="interview-main">
        <div class="container">
          <div class="page-header">
            <h1>Frontend System Design Playbook</h1>
            <p>Master the art of designing scalable front-end systems and architectures</p>
          </div>

          <div class="overview-section">
            <div class="overview-card">
              <h2>What is Frontend System Design?</h2>
              <p>Frontend system design focuses on designing scalable, maintainable, and performant front-end architectures. It involves making decisions about component structure, state management, data flow, performance optimization, and scalability considerations.</p>
            </div>
          </div>

          <div class="topics-grid">
            <div class="topic-card">
              <div class="topic-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3>Component Architecture</h3>
              <p>Design patterns for building reusable and maintainable component systems</p>
              <ul>
                <li>Atomic Design principles</li>
                <li>Composition vs Inheritance</li>
                <li>Component communication patterns</li>
              </ul>
            </div>

            <div class="topic-card">
              <div class="topic-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>State Management</h3>
              <p>Strategies for managing application state at scale</p>
              <ul>
                <li>Local vs Global state</li>
                <li>State management libraries</li>
                <li>Server state management</li>
              </ul>
            </div>

            <div class="topic-card">
              <div class="topic-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3>Performance Optimization</h3>
              <p>Techniques for building fast and efficient front-end applications</p>
              <ul>
                <li>Bundle optimization</li>
                <li>Code splitting strategies</li>
                <li>Runtime performance</li>
              </ul>
            </div>

            <div class="topic-card">
              <div class="topic-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Scalability Patterns</h3>
              <p>Designing systems that grow with your application</p>
              <ul>
                <li>Micro-frontends</li>
                <li>Module federation</li>
                <li>Progressive enhancement</li>
              </ul>
            </div>

            <div class="topic-card">
              <div class="topic-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <h3>Security Considerations</h3>
              <p>Building secure front-end applications</p>
              <ul>
                <li>XSS prevention</li>
                <li>CSRF protection</li>
                <li>Secure data handling</li>
              </ul>
            </div>

            <div class="topic-card">
              <div class="topic-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3>Testing Strategies</h3>
              <p>Comprehensive testing approaches for front-end systems</p>
              <ul>
                <li>Unit testing</li>
                <li>Integration testing</li>
                <li>E2E testing patterns</li>
              </ul>
            </div>
          </div>

          <div class="case-studies-section">
            <h2>Case Studies & Examples</h2>
            <div class="case-studies-grid">
              <div class="case-study-card">
                <h3>Large-Scale E-commerce Platform</h3>
                <p>Designing a component architecture for a complex e-commerce application with thousands of products and multiple user roles.</p>
                <div class="case-study-tags">
                  <span class="tag">Micro-frontends</span>
                  <span class="tag">State Management</span>
                  <span class="tag">Performance</span>
                </div>
              </div>

              <div class="case-study-card">
                <h3>Real-time Collaboration Tool</h3>
                <p>Building a scalable architecture for a collaborative editing platform with real-time updates and offline capabilities.</p>
                <div class="case-study-tags">
                  <span class="tag">WebSockets</span>
                  <span class="tag">CRDTs</span>
                  <span class="tag">Service Workers</span>
                </div>
              </div>

              <div class="case-study-card">
                <h3>Enterprise Dashboard</h3>
                <p>Creating a modular dashboard system that can be customized for different business units and user roles.</p>
                <div class="case-study-tags">
                  <span class="tag">Plugin Architecture</span>
                  <span class="tag">Configuration Management</span>
                  <span class="tag">Accessibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InterviewSidebar from '../../components/InterviewSidebar.vue'
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
}

.page-header p {
  font-size: 1.125rem;
  color: #9ca3af;
}

.overview-section {
  margin-bottom: 3rem;
}

.overview-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 2rem;
}

.overview-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.overview-card p {
  color: #9ca3af;
  line-height: 1.6;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.topic-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.topic-card:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
}

.topic-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  color: #dcee77;
}

.topic-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.topic-card p {
  color: #9ca3af;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.topic-card ul {
  list-style: none;
  padding: 0;
}

.topic-card li {
  color: #d1d5db;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}

.topic-card li::before {
  content: "•";
  color: #dcee77;
  position: absolute;
  left: 0;
}

.case-studies-section h2 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #ffffff;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.case-study-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.case-study-card:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
}

.case-study-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.case-study-card p {
  color: #9ca3af;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.case-study-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #374151;
  color: #d1d5db;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}
</style>