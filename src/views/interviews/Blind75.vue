<template>
  <div class="blind75-page">
    <div class="interview-layout">
      <!-- Sidebar -->
      <InterviewSidebar />

      <!-- Main Content -->
      <div class="interview-main">
        <div class="container">
          <div class="page-header">
            <h1>Blind 75</h1>
            <p>
              The most frequently asked LeetCode questions in technical
              interviews
            </p>
          </div>

          <div class="stats-section">
            <div class="stat-card">
              <div class="stat-number">75</div>
              <div class="stat-label">Questions</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">3</div>
              <div class="stat-label">Difficulty Levels</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">Must Know</div>
              <div class="stat-label">Interview Prep</div>
            </div>
          </div>

          <div class="difficulty-sections">
            <div class="difficulty-section">
              <h2>Easy (17 questions)</h2>
              <div class="question-grid">
                <div
                  class="question-card"
                  v-for="question in easyQuestions"
                  :key="question.id"
                >
                  <div class="question-header">
                    <h3>{{ question.title }}</h3>
                    <span class="difficulty easy">Easy</span>
                  </div>
                  <p>{{ question.description }}</p>
                  <div class="question-tags">
                    <span v-for="tag in question.tags" :key="tag" class="tag">{{
                      tag
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="difficulty-section">
              <h2>Medium (44 questions)</h2>
              <div class="question-grid">
                <div
                  class="question-card"
                  v-for="question in mediumQuestions"
                  :key="question.id"
                >
                  <div class="question-header">
                    <h3>{{ question.title }}</h3>
                    <span class="difficulty medium">Medium</span>
                  </div>
                  <p>{{ question.description }}</p>
                  <div class="question-tags">
                    <span v-for="tag in question.tags" :key="tag" class="tag">{{
                      tag
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="difficulty-section">
              <h2>Hard (14 questions)</h2>
              <div class="question-grid">
                <div
                  class="question-card"
                  v-for="question in hardQuestions"
                  :key="question.id"
                >
                  <div class="question-header">
                    <h3>{{ question.title }}</h3>
                    <span class="difficulty hard">Hard</span>
                  </div>
                  <p>{{ question.description }}</p>
                  <div class="question-tags">
                    <span v-for="tag in question.tags" :key="tag" class="tag">{{
                      tag
                    }}</span>
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
import { ref } from "vue";
import InterviewSidebar from "../../components/InterviewSidebar.vue";

const easyQuestions = ref([
  {
    id: 1,
    title: "Two Sum",
    description: "Find two numbers in an array that add up to a target sum",
    tags: ["Array", "Hash Table"],
  },
  {
    id: 2,
    title: "Valid Parentheses",
    description: "Check if a string of parentheses is valid",
    tags: ["String", "Stack"],
  },
  {
    id: 3,
    title: "Merge Two Sorted Lists",
    description: "Merge two sorted linked lists into one",
    tags: ["Linked List"],
  },
]);

const mediumQuestions = ref([
  {
    id: 4,
    title: "Add Two Numbers",
    description: "Add two numbers represented as linked lists",
    tags: ["Linked List", "Math"],
  },
  {
    id: 5,
    title: "Longest Substring Without Repeating Characters",
    description:
      "Find the length of the longest substring without repeating characters",
    tags: ["String", "Sliding Window"],
  },
  {
    id: 6,
    title: "3Sum",
    description: "Find all triplets that sum to zero",
    tags: ["Array", "Two Pointers"],
  },
]);

const hardQuestions = ref([
  {
    id: 7,
    title: "Median of Two Sorted Arrays",
    description: "Find the median of two sorted arrays",
    tags: ["Array", "Binary Search"],
  },
  {
    id: 8,
    title: "Regular Expression Matching",
    description:
      "Implement regular expression matching with support for . and *",
    tags: ["String", "Dynamic Programming"],
  },
  {
    id: 9,
    title: "Merge k Sorted Lists",
    description: "Merge k sorted linked lists and return as one sorted list",
    tags: ["Linked List", "Heap"],
  },
]);
</script>

<style scoped>
.blind75-page {
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

.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #dcee77;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #9ca3af;
  font-size: 0.875rem;
}

.difficulty-sections {
  space-y: 3rem;
}

.difficulty-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.question-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.question-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 1.5rem;
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
  margin-bottom: 0.75rem;
}

.question-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.difficulty {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
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
  margin-bottom: 1rem;
  line-height: 1.5;
}

.question-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #374151;
  color: #d1d5db;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}
</style>
