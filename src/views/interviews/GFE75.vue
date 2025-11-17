<template>
  <div class="gfe75-page">
    <div class="interview-layout">
      <!-- Sidebar -->
      <InterviewSidebar />

      <!-- Main Content -->
      <div class="interview-main">
        <div class="container">
          <div class="page-header">
            <h1>GFE 75</h1>
            <p>Most important 75 questions for front-end interviews. The smallest list of practice questions that gets you the most mileage in your preparation.</p>

            <div class="gfe-description">
              <div class="description-item">
                <div class="desc-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span>Code in browser</span>
              </div>
              <div class="description-item">
                <div class="desc-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span>Official solutions</span>
              </div>
              <div class="description-item">
                <div class="desc-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span>Test cases</span>
              </div>
            </div>
          </div>

          <div class="questions-section">
            <div class="section-header">
              <h2>All Practice Questions</h2>
              <div class="filters">
                <select v-model="selectedCategory" class="filter-select">
                  <option value="all">All Categories</option>
                  <option value="javascript">JavaScript functions</option>
                  <option value="ui">User interface coding</option>
                  <option value="system-design">System design</option>
                  <option value="quiz">Quiz</option>
                </select>
                <select v-model="selectedDifficulty" class="filter-select">
                  <option value="all">All Difficulties</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>

            <div class="questions-list">
              <div
                v-for="question in filteredQuestions"
                :key="question.id"
                class="question-item"
                @click="goToQuestion(question)"
              >
                <div class="question-number">{{ question.id }}</div>
                <div class="question-content">
                  <div class="question-header">
                    <h3>{{ question.title }}</h3>
                    <div class="question-meta">
                      <span class="category">{{ question.category }}</span>
                      <span :class="`difficulty ${question.difficulty.toLowerCase()}`">
                        {{ question.difficulty }}
                      </span>
                    </div>
                  </div>
                  <p class="question-description">{{ question.description }}</p>
                  <div class="question-tags">
                    <span v-for="tag in question.tags" :key="tag" class="tag">{{ tag }}</span>
                    <span v-if="question.frameworks" class="frameworks">
                      Available frameworks: {{ question.frameworks.join(', ') }}
                    </span>
                  </div>
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import InterviewSidebar from '../../components/InterviewSidebar.vue'

const router = useRouter()
const selectedCategory = ref('all')
const selectedDifficulty = ref('all')

const questions = ref([
  {
    id: 1,
    title: 'Debounce',
    description: 'Implement a function to limit how many times a function can be executed by delaying the execution of the function until after a specified time after its last execution attempt',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
  },
  {
    id: 2,
    title: 'Array.prototype.reduce',
    description: 'Implement the Array.prototype.reduce() method',
    category: 'JavaScript functions',
    difficulty: 'Easy',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 3,
    title: 'Classnames',
    description: 'Implement a function that conditionally joins CSS class names together',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 4,
    title: 'Flatten',
    description: 'Implement a function that recursively flattens an array into a single level deep',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 5,
    title: 'Throttle',
    description: 'Implement a function to control the execution of a function by limiting how many times it can execute over time',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 6,
    title: 'Todo List',
    description: 'Build a Todo list that lets users add new tasks and delete existing tasks',
    category: 'User interface coding',
    difficulty: 'Medium',
    tags: ['User interface coding', 'UI coding'],
    frameworks: ['React', 'Vanilla JS', 'Angular', 'Vue', 'Svelte']
  },
  {
    id: 7,
    title: 'Contact Form',
    description: 'Build a contact form which submits user feedback and contact details to a back end API',
    category: 'User interface coding',
    difficulty: 'Easy',
    tags: ['User interface coding', 'UI coding'],
    frameworks: ['React', 'Vanilla JS', 'Angular', 'Vue', 'Svelte']
  },
  {
    id: 8,
    title: 'Holy Grail',
    description: 'Build the famous holy grail layout consisting of a header, 3 columns, and a footer',
    category: 'User interface coding',
    difficulty: 'Easy',
    tags: ['User interface coding', 'UI coding'],
    frameworks: ['React', 'Vanilla JS', 'Angular', 'Vue', 'Svelte']
  },
  {
    id: 9,
    title: 'Tabs',
    description: 'Build a tabs component that displays a list of tab elements and one associated panel of content at a time',
    category: 'User interface coding',
    difficulty: 'Medium',
    tags: ['User interface coding', 'UI coding'],
    frameworks: ['React', 'Vanilla JS', 'Angular', 'Vue']
  },
  {
    id: 10,
    title: 'Job Board',
    description: 'Build a job board that displays the latest job postings from Hacker News',
    category: 'User interface coding',
    difficulty: 'Medium',
    tags: ['User interface coding', 'UI coding'],
    frameworks: ['React', 'Vanilla JS', 'Angular', 'Vue', 'Svelte']
  },
  {
    id: 11,
    title: 'Accordion',
    description: 'Build an accordion component that a displays a list of vertically stacked sections with each containing a title and content snippet',
    category: 'User interface coding',
    difficulty: 'Easy',
    tags: ['User interface coding', 'UI coding'],
    frameworks: ['React', 'Vanilla JS']
  },
  {
    id: 12,
    title: 'News Feed (e.g. Facebook)',
    description: 'Design a news feed user interface similar to Facebook and Twitter',
    category: 'System design',
    difficulty: 'Medium',
    tags: ['System design', 'System design'],
    frameworks: null
  },
  {
    id: 13,
    title: 'Autocomplete',
    description: 'Design an autocomplete component seen on Google and Facebook search',
    category: 'System design',
    difficulty: 'Medium',
    tags: ['System design', 'System design'],
    frameworks: null
  },
  {
    id: 14,
    title: 'Type Utilities II',
    description: 'Implement utilities to determine non-primitive variable types in JavaScript',
    category: 'JavaScript functions',
    difficulty: 'Easy',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 15,
    title: 'Promise.all',
    description: 'Implement the Promise.all() function that resolves to an array of results if all the input elements are resolved or rejects otherwise',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 16,
    title: 'Data Merging',
    description: 'Implement a function to merge rows of data from the same user',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 17,
    title: 'Deep Clone',
    description: 'Implement a function that performs a deep copy of a value',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 18,
    title: 'Event Emitter',
    description: 'Implement a class that can subscribe to and emit events that trigger attached callback functions',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 19,
    title: 'getElementsByStyle',
    description: 'Implement a function to get all DOM elements that are rendered using the specified style',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 20,
    title: 'Function.prototype.call',
    description: 'Implement the Function.prototype.call() function that calls the function with a given `this` value and provided arguments',
    category: 'JavaScript functions',
    difficulty: 'Easy',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 21,
    title: 'List Format',
    description: 'Implement a function that formats a list of items into a single readable string',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 22,
    title: 'Map Async Limit',
    description: 'Implement a function that maps an array of items with an asynchronous mapping function while not exceeding the concurrency limit',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 23,
    title: 'Deep Equal',
    description: 'Implement a function that determines if two values are equal',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 24,
    title: 'Promise.any',
    description: 'Implement the Promise.any() function that resolves when any of the input elements are resolved',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 25,
    title: 'Deep Omit',
    description: 'Implement a function that removes specified keys and their corresponding values from an object, including nested objects or arrays',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 26,
    title: 'Promisify',
    description: 'Implement a function that takes a function following the common error-first callback style and returns a version that returns promises',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 27,
    title: 'Memoize',
    description: 'Implement a function that returns a memoized version of a function which accepts a single argument',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 28,
    title: 'Squash Object',
    description: 'Implement a function that returns a new object after squashing the input object into a single level of depth',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 29,
    title: 'getElementsByClassName',
    description: 'Implement a function to get all DOM elements that contain the specified classes',
    category: 'JavaScript functions',
    difficulty: 'Medium',
    tags: ['JavaScript functions', 'JS functions'],
    frameworks: null
  },
  {
    id: 30,
    title: 'Describe the difference between a cookie, sessionStorage and localStorage in browsers',
    description: 'Quiz question about browser storage mechanisms',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 31,
    title: 'Describe the difference between <script>, <script async> and <script defer>',
    description: 'Quiz question about script loading strategies',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 32,
    title: 'Explain the concept of "hoisting" in JavaScript',
    description: 'Quiz question about JavaScript hoisting',
    category: 'Quiz',
    difficulty: 'Hard',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 33,
    title: 'What are the differences between JavaScript variables created using let, var or const?',
    description: 'Quiz question about variable declarations',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 34,
    title: 'What is a closure in JavaScript, and how/why would you use one?',
    description: 'Quiz question about JavaScript closures',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 35,
    title: 'Describe event bubbling in JavaScript and browsers',
    description: 'Quiz question about event bubbling',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 36,
    title: 'Explain event delegation in JavaScript',
    description: 'Quiz question about event delegation',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 37,
    title: 'What\'s the difference between a JavaScript variable that is: null, undefined or undeclared?',
    description: 'Quiz question about null vs undefined vs undeclared',
    category: 'Quiz',
    difficulty: 'Easy',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 38,
    title: 'Explain the differences between CommonJS modules and ES modules in JavaScript',
    description: 'Quiz question about module systems',
    category: 'Quiz',
    difficulty: 'Hard',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 39,
    title: 'What is the event loop in JavaScript runtimes?',
    description: 'Quiz question about the event loop',
    category: 'Quiz',
    difficulty: 'Hard',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 40,
    title: 'What are the pros and cons of using Promises instead of callbacks in JavaScript?',
    description: 'Quiz question about Promises vs callbacks',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 41,
    title: 'Describe Block Formatting Context (BFC) and how it works.',
    description: 'Quiz question about CSS BFC',
    category: 'Quiz',
    difficulty: 'Hard',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 42,
    title: 'Describe z-index and how stacking context is formed.',
    description: 'Quiz question about CSS z-index',
    category: 'Quiz',
    difficulty: 'Hard',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 43,
    title: 'Explain how a browser determines what elements match a CSS selector.',
    description: 'Quiz question about CSS selector matching',
    category: 'Quiz',
    difficulty: 'Hard',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 44,
    title: 'Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.',
    description: 'Quiz question about CSS box model',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 45,
    title: 'Is there any reason you\'d want to use translate() instead of absolute positioning, or vice-versa? And why?',
    description: 'Quiz question about CSS transforms vs positioning',
    category: 'Quiz',
    difficulty: 'Hard',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 46,
    title: 'What does * { box-sizing: border-box; } do?',
    description: 'Quiz question about box-sizing',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 47,
    title: 'What is the CSS display property and can you give a few examples of its use?',
    description: 'Quiz question about CSS display property',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 48,
    title: 'What\'s the difference between a relative, fixed, absolute, sticky and static-ally positioned element?',
    description: 'Quiz question about CSS positioning',
    category: 'Quiz',
    difficulty: 'Medium',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 49,
    title: 'What kind of things must you be wary of when designing or developing for multilingual sites?',
    description: 'Quiz question about internationalization',
    category: 'Quiz',
    difficulty: 'Hard',
    tags: ['Quiz'],
    frameworks: null
  },
  {
    id: 50,
    title: 'What\'s the difference between block, inline, and inline-block?',
    description: 'Quiz question about CSS display values',
    category: 'Quiz',
    difficulty: 'Easy',
    tags: ['Quiz'],
    frameworks: null
  }
])

const filteredQuestions = computed(() => {
  return questions.value.filter(question => {
    const categoryMatch = selectedCategory.value === 'all' || question.category.toLowerCase().includes(selectedCategory.value)
    const difficultyMatch = selectedDifficulty.value === 'all' || question.difficulty.toLowerCase() === selectedDifficulty.value
    return categoryMatch && difficultyMatch
  })
})

const goToQuestion = (question) => {
  // Navigate to question detail page
  router.push(`/interviews/questions/${question.id}`)
}
</script>

<style scoped>
.gfe75-page {
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
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
}

.page-header p {
  font-size: 1.25rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.gfe-description {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.description-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.desc-icon {
  width: 2rem;
  height: 2rem;
  color: #dcee77;
}

.description-item span {
  font-size: 0.875rem;
  color: #9ca3af;
}

.questions-section {
  margin-top: 3rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #ffffff;
}

.filters {
  display: flex;
  gap: 1rem;
}

.filter-select {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-size: 0.875rem;
}

.filter-select option {
  background: #1f2937;
  color: #ffffff;
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.question-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.question-item:hover {
  border-color: #4b5563;
  transform: translateY(-1px);
}

.question-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: #dcee77;
  color: #000000;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.question-content {
  flex: 1;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.question-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  line-height: 1.4;
}

.question-meta {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.category {
  background: #374151;
  color: #9ca3af;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.difficulty {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
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

.question-description {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.question-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.tag {
  background: #374151;
  color: #9ca3af;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.frameworks {
  color: #dcee77;
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .filters {
    width: 100%;
    justify-content: space-between;
  }

  .filter-select {
    flex: 1;
  }

  .gfe-description {
    flex-direction: column;
    gap: 1rem;
  }

  .question-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .question-meta {
    align-self: flex-start;
  }
}
</style>