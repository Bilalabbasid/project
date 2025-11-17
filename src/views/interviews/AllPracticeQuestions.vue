<template>
  <div class="all-questions-page">
    <div class="interview-layout">
      <!-- Sidebar -->
      <InterviewSidebar />

      <!-- Main Content -->
      <div class="interview-main">
        <!-- Header Section -->
        <section class="questions-header">
          <div class="container">
            <div class="header-content">
              <h1>All Practice Questions</h1>
              <p>Master front-end development through hands-on coding challenges. From JavaScript fundamentals to advanced React patterns.</p>

              <!-- Stats -->
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-number">200+</div>
                  <div class="stat-label">Questions</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">15</div>
                  <div class="stat-label">Topics</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">3</div>
                  <div class="stat-label">Difficulty Levels</div>
                </div>
              </div>
            </div>
          </div>
        </section>

    <!-- Filters and Search -->
    <section class="filters-section">
      <div class="container">
        <div class="filters-bar">
          <!-- Search -->
          <div class="search-box">
            <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search questions..."
              v-model="searchQuery"
              class="search-input"
            >
          </div>

          <!-- Filters -->
          <div class="filter-buttons">
            <button
              v-for="difficulty in difficulties"
              :key="difficulty"
              @click="setDifficultyFilter(difficulty)"
              :class="['filter-btn', { active: activeDifficulty === difficulty }]"
              class="filter-btn"
            >
              {{ difficulty }}
            </button>
          </div>

          <!-- Sort -->
          <div class="sort-dropdown">
            <select v-model="sortBy" class="sort-select">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="difficulty">Difficulty</option>
              <option value="popularity">Most Popular</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Questions Grid -->
    <section class="questions-section">
      <div class="container">
        <div class="questions-grid">
          <div
            v-for="question in filteredQuestions"
            :key="question.id"
            class="question-card"
            @click="goToQuestion(question.id)"
          >
            <div class="question-header">
              <div class="question-title">{{ question.title }}</div>
              <div class="question-difficulty" :class="`difficulty-${question.difficulty.toLowerCase()}`">
                {{ question.difficulty }}
              </div>
            </div>

            <div class="question-description">
              {{ question.description }}
            </div>

            <div class="question-footer">
              <div class="question-tags">
                <span
                  v-for="tag in question.tags"
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="question-stats">
                <div class="stat">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {{ question.completions }}
                </div>
                <div class="stat">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                  </svg>
                  {{ question.likes }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div class="load-more">
          <button class="btn btn-primary" @click="loadMoreQuestions">
            Load More Questions
          </button>
        </div>
      </div>
    </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import InterviewSidebar from '../../components/InterviewSidebar.vue'

const router = useRouter()

// Reactive data
const searchQuery = ref('')
const activeDifficulty = ref('All')
const sortBy = ref('newest')

// Sample questions data
const questions = ref([
  {
    id: 'todo-list',
    title: 'Todo List Application',
    description: 'Build a complete todo list with add, edit, delete, and toggle functionality. Include local storage persistence.',
    difficulty: 'Easy',
    tags: ['JavaScript', 'DOM', 'LocalStorage'],
    completions: 1247,
    likes: 89
  },
  {
    id: 'debounce-hook',
    title: 'Custom useDebounce Hook',
    description: 'Implement a React hook that delays updating a value until after a specified delay has passed.',
    difficulty: 'Medium',
    tags: ['React', 'Hooks', 'Performance'],
    completions: 892,
    likes: 156
  },
  {
    id: 'typeahead',
    title: 'Typeahead/Autocomplete Component',
    description: 'Create a typeahead component with keyboard navigation, highlighting, and API integration.',
    difficulty: 'Hard',
    tags: ['React', 'UI Components', 'API'],
    completions: 654,
    likes: 203
  },
  {
    id: 'star-rating',
    title: 'Star Rating Component',
    description: 'Build an interactive star rating component with hover effects and accessibility features.',
    difficulty: 'Easy',
    tags: ['JavaScript', 'CSS', 'Accessibility'],
    completions: 987,
    likes: 67
  },
  {
    id: 'virtualized-list',
    title: 'Virtualized List Component',
    description: 'Implement a virtualized list that efficiently renders large datasets with smooth scrolling.',
    difficulty: 'Hard',
    tags: ['React', 'Performance', 'UI'],
    completions: 432,
    likes: 178
  },
  {
    id: 'accordion',
    title: 'Accordion Component',
    description: 'Create a collapsible accordion component with smooth animations and keyboard support.',
    difficulty: 'Medium',
    tags: ['JavaScript', 'CSS', 'Animation'],
    completions: 756,
    likes: 134
  }
])

const difficulties = ['All', 'Easy', 'Medium', 'Hard']

// Computed properties
const filteredQuestions = computed(() => {
  let filtered = questions.value

  // Filter by search query
  if (searchQuery.value) {
    filtered = filtered.filter(q =>
      q.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      q.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      q.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
  }

  // Filter by difficulty
  if (activeDifficulty.value !== 'All') {
    filtered = filtered.filter(q => q.difficulty === activeDifficulty.value)
  }

  // Sort
  switch (sortBy.value) {
    case 'newest':
      // Assuming questions are already in newest order
      break
    case 'oldest':
      filtered = [...filtered].reverse()
      break
    case 'difficulty':
      const order = { 'Easy': 1, 'Medium': 2, 'Hard': 3 }
      filtered = [...filtered].sort((a, b) => order[a.difficulty] - order[b.difficulty])
      break
    case 'popularity':
      filtered = [...filtered].sort((a, b) => b.likes - a.likes)
      break
  }

  return filtered
})

// Methods
const setDifficultyFilter = (difficulty) => {
  activeDifficulty.value = difficulty
}

const goToQuestion = (questionId) => {
  router.push(`/interviews/questions/${questionId}`)
}

const loadMoreQuestions = () => {
  // In a real app, this would fetch more questions from an API
  console.log('Loading more questions...')
}

onMounted(() => {
  // Any initialization logic
})
</script>

<style scoped>
.all-questions-page {
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
}

/* Header Section */
.questions-header {
  background: linear-gradient(135deg, #18181b 0%, #1f2937 100%);
  padding: 80px 0 60px;
  border-bottom: 1px solid #374151;
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.header-content h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #d1d5db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-content p {
  font-size: 1.25rem;
  color: #9ca3af;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #dcee77;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Filters Section */
.filters-section {
  padding: 40px 0;
  border-bottom: 1px solid #374151;
}

.filters-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 300px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
}

.search-input:focus {
  outline: none;
  border-color: #dcee77;
  box-shadow: 0 0 0 3px rgba(220, 238, 119, 0.1);
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  color: #d1d5db;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  background: #374151;
  border-color: #4b5563;
}

.filter-btn.active {
  background: #dcee77;
  color: #000000;
  border-color: #dcee77;
}

.sort-dropdown {
  min-width: 150px;
}

.sort-select {
  width: 100%;
  padding: 0.5rem 1rem;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  color: #d1d5db;
  font-size: 0.875rem;
  cursor: pointer;
}

.sort-select:focus {
  outline: none;
  border-color: #dcee77;
}

/* Questions Grid */
.questions-section {
  padding: 60px 0;
}

.questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.question-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  height: fit-content;
}

.question-card:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.question-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.4;
  flex: 1;
  margin-right: 1rem;
}

.question-difficulty {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.difficulty-easy {
  background: #10b981;
  color: #ffffff;
}

.difficulty-medium {
  background: #f59e0b;
  color: #ffffff;
}

.difficulty-hard {
  background: #ef4444;
  color: #ffffff;
}

.question-description {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.question-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.question-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.5rem;
  background: #374151;
  color: #d1d5db;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.question-stats {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #9ca3af;
  font-size: 0.875rem;
}

.stat svg {
  width: 1rem;
  height: 1rem;
}

/* Load More */
.load-more {
  text-align: center;
  margin-top: 3rem;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content h1 {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .filters-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    min-width: auto;
  }

  .filter-buttons {
    justify-content: center;
  }

  .questions-grid {
    grid-template-columns: 1fr;
  }

  .question-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .question-title {
    margin-right: 0;
  }

  .question-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>