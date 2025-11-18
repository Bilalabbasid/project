<template>
  <div class="frameworks-page">
    <div class="interview-layout">
      <!-- Sidebar -->
      <InterviewSidebar />

      <!-- Main Content -->
      <div class="interview-main">
        <div class="container">
          <div class="page-header">
            <h1>Frameworks & Languages</h1>
            <p>
              Practice questions organized by technology stack and programming
              language.
            </p>
          </div>

          <div class="frameworks-grid">
            <div class="framework-card">
              <h3>JavaScript</h3>
              <p>Core language fundamentals and advanced concepts</p>
              <div class="question-count">45 questions</div>
            </div>

            <div class="framework-card">
              <h3>React</h3>
              <p>Component lifecycle, hooks, state management</p>
              <div class="question-count">32 questions</div>
            </div>

            <div class="framework-card">
              <h3>Vue.js</h3>
              <p>Reactivity, composition API, component communication</p>
              <div class="question-count">28 questions</div>
            </div>

            <div class="framework-card">
              <h3>Angular</h3>
              <p>Dependency injection, modules, services</p>
              <div class="question-count">24 questions</div>
            </div>

            <div class="framework-card">
              <h3>Node.js</h3>
              <p>Server-side JavaScript, APIs, databases</p>
              <div class="question-count">31 questions</div>
            </div>

            <div class="framework-card">
              <h3>TypeScript</h3>
              <p>Type system, interfaces, generics</p>
              <div class="question-count">26 questions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Placeholder component for frameworks/languages page
import InterviewSidebar from "../../components/InterviewSidebar.vue";
</script>

<style scoped>
.frameworks-page {
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
  padding-top: 160px;
  margin-left: 240px;
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

.frameworks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.framework-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.framework-card:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
}

.framework-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.framework-card p {
  color: #9ca3af;
  margin-bottom: 1rem;
}

.question-count {
  color: #dcee77;
  font-weight: 600;
  font-size: 0.875rem;
}
</style>
