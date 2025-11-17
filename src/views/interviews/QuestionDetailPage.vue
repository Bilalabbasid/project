<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const question = ref(null);

// In a real app, you would fetch this from an API
const questionsDb = {
  '1': { id: 1, title: 'Implement a Debounce Function', category: 'JavaScript', difficulty: 'Medium', content: '...Detailed question content for Debounce...' },
  '2': { id: 2, title: 'Center a Div', category: 'CSS', difficulty: 'Easy', content: '...Detailed question content for Centering a Div...' },
  '3': { id: 3, title: 'Explain the Event Loop', category: 'JavaScript', difficulty: 'Hard', content: '...Detailed question content for Event Loop...' },
};

onMounted(() => {
  const questionId = route.params.id;
  question.value = questionsDb[questionId];
});
</script>

<template>
  <div class="question-detail-page" v-if="question">
    <div class="container">
      <div class="question-header">
        <span :class="`difficulty-tag ${question.difficulty.toLowerCase()}`">{{ question.difficulty }}</span>
        <h1>{{ question.title }}</h1>
        <p class="category-badge">Category: {{ question.category }}</p>
      </div>

      <div data-ms-content="!members">
        <div class="content-gate">
          <h2>Want to see the full question and solution?</h2>
          <p>This content is for members only. Sign up today to get access to all our practice questions, playbooks, and more.</p>
          <router-link to="/pricing" class="btn-primary">View Plans</router-link>
        </div>
      </div>

      <div data-ms-content="members">
        <div class="question-content">
          <h2>Question</h2>
          <p>{{ question.content }}</p>
          
          <h2>Solution / Guide</h2>
          <p>The solution and a step-by-step guide will be displayed here for logged-in members.</p>
          
          <div class="code-editor-placeholder">
            <p>A live code editor would be embedded here.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <p>Loading question...</p>
  </div>
</template>

<style scoped>
.question-detail-page {
  padding: 4rem 0;
  background-color: #18181b;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.question-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #374151;
}

.question-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #ffffff;
}

.difficulty-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #000000;
}

.difficulty-tag.easy { background-color: #10b981; }
.difficulty-tag.medium { background-color: #f59e0b; }
.difficulty-tag.hard { background-color: #ef4444; }

.category-badge {
  color: #9ca3af;
  font-size: 1rem;
}

.content-gate {
  text-align: center;
  padding: 3rem;
  background-color: #111827;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.content-gate h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.btn-primary {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #efff94;
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #d4e66a;
}

.question-content {
  background-color: #111827;
  padding: 2rem;
  border-radius: 8px;
}

.code-editor-placeholder {
  margin-top: 2rem;
  padding: 2rem;
  background-color: #1e1e1e;
  color: #d4d4d4;
  border-radius: 8px;
  text-align: center;
}
</style>
