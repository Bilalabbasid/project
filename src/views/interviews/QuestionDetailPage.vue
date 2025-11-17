<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const question = ref(null);

// In a real app, you would fetch this from an API
const questionsDb = {
  "todo-list": {
    id: "todo-list",
    title: "Todo List",
    category: "UI Components",
    difficulty: "Easy",
    content:
      "Build a todo list application that allows users to add, edit, delete, and mark tasks as complete. Include features like filtering by status and local storage persistence.",
  },
  "debounce-hook": {
    id: "debounce-hook",
    title: "useDebounce Hook",
    category: "React Hooks",
    difficulty: "Medium",
    content:
      "Implement a custom React hook called useDebounce that delays updating a value until after a specified delay has passed since the last time the value was changed.",
  },
  typeahead: {
    id: "typeahead",
    title: "Typeahead Component",
    category: "UI Components",
    difficulty: "Hard",
    content:
      "Create a typeahead/autocomplete component that shows suggestions as the user types. Include features like keyboard navigation, highlighting, and API integration for fetching suggestions.",
  },
  "star-rating": {
    id: "star-rating",
    title: "Star Rating Component",
    category: "UI Components",
    difficulty: "Easy",
    content:
      "Build a star rating component that allows users to select a rating from 1 to 5 stars. Include hover effects and the ability to display the current rating.",
  },
  "virtualized-list": {
    id: "virtualized-list",
    title: "Virtualized List",
    category: "Performance",
    difficulty: "Hard",
    content:
      "Implement a virtualized list component that efficiently renders large lists by only rendering visible items. Handle scrolling, dynamic item heights, and smooth performance.",
  },
  accordion: {
    id: "accordion",
    title: "Accordion Component",
    category: "UI Components",
    difficulty: "Easy",
    content:
      "Create an accordion component that allows multiple sections to be expanded/collapsed. Only one section should be open at a time, and include smooth animations.",
  },
  modal: {
    id: "modal",
    title: "Modal Component",
    category: "UI Components",
    difficulty: "Medium",
    content:
      "Build a modal dialog component with proper accessibility features, backdrop click to close, ESC key handling, and focus management.",
  },
  tabs: {
    id: "tabs",
    title: "Tabs Component",
    category: "UI Components",
    difficulty: "Easy",
    content:
      "Implement a tabs component that switches between different content panels. Include keyboard navigation and URL hash support for deep linking.",
  },
  "progress-bar": {
    id: "progress-bar",
    title: "Progress Bar Component",
    category: "UI Components",
    difficulty: "Medium",
    content:
      "Create a progress bar component that can display determinate and indeterminate progress. Include animations and customizable styling.",
  },
  "image-carousel": {
    id: "image-carousel",
    title: "Image Carousel",
    category: "UI Components",
    difficulty: "Medium",
    content:
      "Build an image carousel component with navigation arrows, indicators, autoplay functionality, and touch/swipe support for mobile devices.",
  },
  "form-validation": {
    id: "form-validation",
    title: "Form Validation",
    category: "Forms",
    difficulty: "Medium",
    content:
      "Implement client-side form validation with real-time feedback, custom validation rules, error messages, and accessibility considerations.",
  },
  counter: {
    id: "counter",
    title: "Counter Component",
    category: "UI Components",
    difficulty: "Easy",
    content:
      "Create a counter component with increment/decrement buttons, minimum/maximum value constraints, and step size configuration.",
  },
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
        <span :class="`difficulty-tag ${question.difficulty.toLowerCase()}`">{{
          question.difficulty
        }}</span>
        <h1>{{ question.title }}</h1>
        <p class="category-badge">Category: {{ question.category }}</p>
      </div>

      <div data-ms-content="!members">
        <div class="content-gate">
          <h2>Want to see the full question and solution?</h2>
          <p>
            This content is for members only. Sign up today to get access to all
            our practice questions, playbooks, and more.
          </p>
          <router-link to="/pricing" class="btn-primary"
            >View Plans</router-link
          >
        </div>
      </div>

      <div data-ms-content="members">
        <div class="question-content">
          <h2>Question</h2>
          <p>{{ question.content }}</p>

          <h2>Solution / Guide</h2>
          <p>
            The solution and a step-by-step guide will be displayed here for
            logged-in members.
          </p>

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

.difficulty-tag.easy {
  background-color: #10b981;
}
.difficulty-tag.medium {
  background-color: #f59e0b;
}
.difficulty-tag.hard {
  background-color: #ef4444;
}

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
