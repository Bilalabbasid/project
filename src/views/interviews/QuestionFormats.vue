<template>
  <div class="formats-page">
    <div class="interview-layout">
      <!-- Sidebar -->
      <InterviewSidebar />

      <!-- Main Content -->
      <div class="interview-main">
        <div class="container">
          <div class="page-header">
            <h1>Question Formats</h1>
            <p>Practice different types of interview questions to prepare for various assessment styles.</p>
          </div>

          <div class="formats-grid">
            <div class="format-card">
              <div class="format-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3>Coding Challenges</h3>
              <p>Hands-on coding problems that test your ability to write clean, efficient code</p>
              <div class="question-count">89 questions</div>
            </div>

            <div class="format-card">
              <div class="format-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>System Design</h3>
              <p>Architectural questions that test your ability to design scalable systems</p>
              <div class="question-count">34 questions</div>
            </div>

        <div class="format-card">
          <div class="format-icon">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.128 9.155a7.37 7.37 0 00.917-1.176l.792-1.186A.75.75 0 0110.525 7h3.696a.75.75 0 01.618.411l.792 1.186c.26.39.603.73.917 1.176.357.637.98 1.02 1.67 1.02a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75 2.25 2.25 0 00-2.25 2.25c0 .818-.393 1.544-1 2.038v2.962a.75.75 0 01-.546.721l-1.116.349a.75.75 0 01-.83-.67l-.032-2.032a2.25 2.25 0 00-1.5-2.122v-1.388c.608-.494 1-1.22 1-2.038a2.25 2.25 0 00-2.25-2.25.75.75 0 01-.75-.75V9.75a.75.75 0 011.67-1.02z"/>
            </svg>
          </div>
          <h3>Algorithm Problems</h3>
          <p>Data structures and algorithms questions with time/space complexity analysis</p>
          <div class="question-count">67 questions</div>
        </div>

            <div class="format-card">
              <div class="format-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15"/>
                </svg>
              </div>
              <h3>Conceptual Questions</h3>
              <p>Theoretical questions about web development concepts and best practices</p>
              <div class="question-count">52 questions</div>
            </div>

            <div class="format-card">
              <div class="format-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.376c0 .418-.113.836-.349 1.003-.215.283-.401.604-.401.959 0 .332.291.599.683.718a4 4 0 01-.643 2.766c-.135.197-.54.197-.675 0a4 4 0 01-.643-2.766c.392-.119.683-.386.683-.718zM9 6.768a3 3 0 00-.614 5.814 2.25 2.25 0 001.5 2.5c.818 0 1.5-.682 1.5-1.5a2.25 2.25 0 002.25-2.25c0-.818-.682-1.5-1.5-1.5a3 3 0 00-3-3z"/>
                </svg>
              </div>
              <h3>Debugging Scenarios</h3>
              <p>Real-world bug fixing and troubleshooting challenges</p>
              <div class="question-count">38 questions</div>
            </div>

            <div class="format-card">
              <div class="format-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 2.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.588m0 0a3.996 3.996 0 10-5.058-2.773 3.996 3.996 0 005.058 2.773zm-5.058-2.773a1 1 0 11-2 0 1 1 0 012 0z"/>
                </svg>
              </div>
              <h3>Pair Programming</h3>
              <p>Collaborative coding exercises that simulate real development workflows</p>
              <div class="question-count">29 questions</div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Placeholder component for question formats page
import InterviewSidebar from '../../components/InterviewSidebar.vue'
</script>

<style scoped>
.formats-page {
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

.formats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.format-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  text-align: center;
}

.format-card:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
}

.format-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  color: #dcee77;
}

.format-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.format-card p {
  color: #9ca3af;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.question-count {
  color: #dcee77;
  font-weight: 600;
  font-size: 0.875rem;
}
</style>