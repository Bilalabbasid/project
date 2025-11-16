<template>
  <div class="questions-page">
    <div class="questions-header">
      <div class="container">
        <h1>Practice Questions</h1>
        <p>Sharpen your skills with our collection of real-world interview questions.</p>
      </div>
    </div>
    
    <div class="container">
      <div class="questions-content">
        <div class="questions-list">
          <div v-for="question in questions" :key="question.id" class="question-card">
            <div class="question-info">
              <h3>{{ question.title }}</h3>
              <div class="question-meta">
                <span class="difficulty-badge" :class="`difficulty-${question.difficulty.toLowerCase()}`">
                  {{ question.difficulty }}
                </span>
                <span v-if="question.isPremium" class="premium-badge">
                  Premium
                </span>
              </div>
            </div>
            <router-link :to="`/interviews/questions/${question.id}`" class="btn btn-outline">
              View Question
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const questions = ref([
  {
    id: 'todo-list',
    title: 'Todo List',
    difficulty: 'Easy',
    isPremium: false
  },
  {
    id: 'debounce-hook',
    title: 'useDebounce Hook',
    difficulty: 'Medium',
    isPremium: true
  },
  {
    id: 'typeahead',
    title: 'Typeahead Component',
    difficulty: 'Hard',
    isPremium: true
  },
  {
    id: 'star-rating',
    title: 'Star Rating Component',
    difficulty: 'Easy',
    isPremium: false
  },
  {
    id: 'virtualized-list',
    title: 'Virtualized List',
    difficulty: 'Hard',
    isPremium: true
  }
])
</script>

<style scoped>
.questions-page {
  background: #f8fafc;
  min-height: calc(100vh - 144px);
}

.questions-header {
  background: white;
  padding: 64px 0;
  border-bottom: 1px solid #e5e7eb;
  text-align: center;
}

.questions-header h1 {
  font-size: 48px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.questions-header p {
  font-size: 20px;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto;
}

.questions-content {
  padding: 64px 0;
}

.questions-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.question-card {
  background: white;
  padding: 24px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.question-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.question-info h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
}

.question-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.difficulty-badge {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.difficulty-easy {
  background: #dcfce7;
  color: #166534;
}

.difficulty-medium {
  background: #fef3c7;
  color: #92400e;
}

.difficulty-hard {
  background: #fee2e2;
  color: #991b1b;
}

.premium-badge {
  padding: 4px 12px;
  background: #fff7ed;
  color: #ea580c;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .questions-header h1 {
    font-size: 36px;
  }
  
  .question-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>