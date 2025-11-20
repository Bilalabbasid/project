<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import CodingDemo from "@/components/CodingDemo.vue";

let observer = null;

onMounted(() => {
  // small delay to ensure DOM nodes are present
  setTimeout(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
  }, 100);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const activeTab = ref("code");
const demoTabs = [
  { id: "code", label: "Code" },
  { id: "analysis", label: "Analysis" },
  { id: "solution", label: "Solution" },
];

const demoCode = computed(() => {
  // simple demo lines; could be expanded per tab
  if (activeTab.value === "analysis") {
    return [
      '<span class="kw">// Analysis</span>',
      "Consider edge cases and optimise for time/space.",
    ];
  }
  if (activeTab.value === "solution") {
    return ["export default function solution() {", "  return true;", "}"];
  }
  return [
    "function flatten(arr) {",
    "  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);",
    "}",
  ];
});

const stats = {
  questions: 1242,
  engineers: 5124,
};

const topics = [
  "Accessibility",
  "JavaScript Functions",
  "React",
  "Networking",
  "Data structures & algorithms",
  "Front end system design",
  "DOM manipulation",
  "Internationalization",
  "User interfaces",
  "Performance",
];

const sampleQuestions = [
  {
    id: 1,
    title: "Contact Form",
    description:
      "Build a contact form which submits user feedback and contact details to a back end API",
    type: "UI coding",
    difficulty: "Easy",
    frameworks: "Vanilla / React",
  },
  {
    id: 2,
    title: "Digital Clock",
    description: "Build a 7-segment digital clock that shows the current time",
    type: "UI coding",
    difficulty: "Medium",
    frameworks: "Vanilla / React",
  },
  {
    id: 3,
    title: "File Explorer",
    description:
      "Build a file explorer component to navigate files and directories in a tree-like hierarchical viewer",
    type: "UI coding",
    difficulty: "Medium",
    frameworks: "Vanilla / React",
  },
];

const solutions = [
  { id: "flatten", name: "Flatten" },
  { id: "deepClone", name: "Deep Clone" },
  { id: "likeButton", name: "Like Button" },
];

const activeSolution = ref("flatten");

const currentSolution = computed(() => {
  const solutionMap = {
    flatten: {
      name: "Flatten",
      code: `/**\n * @param {Array<*|Array>} value\n * @return {Array}\n */\nexport default function flatten(value) {\n  return value.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []);\n}`,
    },
    deepClone: {
      name: "Deep Clone",
      code: `export default function deepClone(value) {\n  if (value === null || typeof value !== 'object') return value;\n  const cloned = {};\n  for (const key in value) cloned[key] = deepClone(value[key]);\n  return cloned;\n}`,
    },
    likeButton: {
      name: "Like Button",
      code: `// Simple example (non-JSX) of a like toggle\nfunction LikeButton() {\n  let liked = false;\n  function toggle() { liked = !liked; return liked; }\n  return { toggle, isLiked: () => liked };\n}\nexport default LikeButton;`,
    },
  };
  return solutionMap[activeSolution.value] || solutionMap.flatten;
});

const companies = [
  { id: 1, name: "OpenAI", questions: 15 },
  { id: 2, name: "Google", questions: 34 },
  { id: 3, name: "Amazon", questions: 61 },
  { id: 4, name: "TikTok", questions: 35 },
  { id: 5, name: "ByteDance", questions: 27 },
  { id: 6, name: "Apple", questions: 13 },
  { id: 7, name: "Microsoft", questions: 19 },
  { id: 8, name: "Atlassian", questions: 17 },
  { id: 9, name: "LinkedIn", questions: 18 },
];
</script>

<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-left animate-on-scroll">
            <h1>Navigate front end interviews with ease</h1>
            <p class="hero-subtitle">
              Meet the front end interview prep platform built to make your
              interviews much easier. By Big Tech ex-interviewers at
            </p>
            <div class="company-logos">
              <div class="logo-item">Google</div>
              <div class="logo-item">Amazon</div>
              <div class="logo-item">Meta</div>
            </div>
            <div class="hero-cta">
              <router-link to="/signup" class="btn btn-primary">
                Get started now
              </router-link>
              <p class="cta-note">
                {{ stats.questions }} questions are free to do
              </p>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number">{{ stats.engineers }}</span>
                <span class="stat-label">engineers already on board</span>
              </div>
            </div>
          </div>

          <div class="hero-right animate-on-scroll">
            <CodingDemo />
          </div>
        </div>
      </div>
    </section>

    <!-- Question Demo Section -->
    <section class="question-demo animate-on-scroll">
      <div class="container">
        <h2 class="section-title">Question demo</h2>
        <div class="demo-tabs">
          <button
            v-for="tab in demoTabs"
            :key="tab.id"
            :class="['demo-tab', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="demo-content">
          <div class="code-editor">
            <div class="editor-header">
              <div class="editor-controls">
                <span class="control red"></span>
                <span class="control yellow"></span>
                <span class="control green"></span>
              </div>
              <span class="editor-title">techmade.com</span>
            </div>
            <div class="editor-body">
              <div class="code-line" v-for="(line, idx) in demoCode" :key="idx">
                <span class="line-number">{{ idx + 1 }}</span>
                <span class="code-text" v-html="line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder's Foreword -->
    <section class="founder-section animate-on-scroll">
      <div class="container">
        <h2 class="section-title">Founder's foreword</h2>
        <p class="section-subtitle">
          We're crafting Techmade with passion, precision and quality.
        </p>
        <div class="founder-content">
          <div class="founder-quote">
            <blockquote>
              "Over my career, I have conducted over hundreds of interviews at
              Meta and have personally received offers from companies like Meta,
              Google, OpenAI, xAI, Airbnb, Lyft, Dropbox, etc. and I understand
              the challenges that front end engineers face when preparing for
              interviews.
              <br /><br />
              Techmade is the culmination of my experience and knowledge in the
              front end domain to help fellow engineers efficiently and
              adequately prepare for front end interviews.
              <br /><br />
              The best part about Techmade is that all users emerge as better
              Front End Engineers after using the platform."
            </blockquote>
            <div class="founder-info">
              <div class="founder-name">Yangshun Tay</div>
              <div class="founder-title">Founder, CEO of Techmade</div>
              <div class="founder-credentials">
                Ex-Staff Engineer, Meta. Author of Blind 75 and Docusaurus 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Study Plans and Topics -->
    <section class="study-plans animate-on-scroll">
      <div class="container">
        <h2 class="section-title">Study plans and topics</h2>
        <p class="section-subtitle">
          A simple yet comprehensive plan to follow
        </p>
        <p class="study-description">
          Front end interviews are even broader in scope than traditional
          software engineering interviews. On top of the wide range of front end
          topics that could be asked, some companies still include standard DSA
          questions for front end roles.
        </p>
        <p class="study-description">
          We've condensed everything into a simple strategy you can use to
          conquer essential interview patterns.
        </p>
        <div class="topics-list">
          <span v-for="(topic, index) in topics" :key="index" class="topic-tag">
            {{ topic }}
          </span>
        </div>
      </div>
    </section>

    <!-- Question Bank -->
    <section class="question-bank animate-on-scroll">
      <div class="container">
        <h2 class="section-title">Huge question bank</h2>
        <p class="section-subtitle">
          A practice question bank with everything you'd ever need
        </p>
        <div class="bank-stats">
          <div class="bank-stat">
            <div class="stat-number">2424</div>
            <div class="stat-label">questions</div>
          </div>
          <div class="bank-stat">
            <div class="stat-number">99</div>
            <div class="stat-label">hours total</div>
          </div>
        </div>
        <div class="question-filters">
          <div class="filter-group">
            <h3>Topics</h3>
            <div class="filter-tags">
              <span
                v-for="tag in questionTopics"
                :key="tag"
                class="filter-tag"
                >{{ tag }}</span
              >
            </div>
          </div>
        </div>
        <div class="sample-questions">
          <div
            v-for="question in sampleQuestions"
            :key="question.id"
            class="question-card"
          >
            <div class="question-header">
              <h3>{{ question.title }}</h3>
              <span class="question-type">{{ question.type }}</span>
            </div>
            <p class="question-description">{{ question.description }}</p>
            <div class="question-meta">
              <span class="question-difficulty">{{ question.difficulty }}</span>
              <span class="question-frameworks">{{ question.frameworks }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Example Solutions -->
    <section class="example-solutions animate-on-scroll">
      <div class="container">
        <h2 class="section-title">Example solutions</h2>
        <p class="section-subtitle">
          Every question answered by ex-interviewers
        </p>
        <div class="solutions-tabs">
          <button
            v-for="solution in solutions"
            :key="solution.id"
            :class="[
              'solution-tab',
              { active: activeSolution === solution.id },
            ]"
            @click="activeSolution = solution.id"
          >
            {{ solution.name }}
          </button>
        </div>
        <div class="solution-content">
          <div class="code-block">
            <div class="code-header">
              <span class="code-title">{{ currentSolution.name }}</span>
            </div>
            <pre><code>{{ currentSolution.code }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Guides -->
    <section class="company-guides animate-on-scroll">
      <div class="container">
        <h2 class="section-title">Company guides and tips</h2>
        <p class="section-subtitle">
          Leverage insider tips from leading companies
        </p>
        <div class="companies-grid">
          <div
            v-for="company in companies"
            :key="company.id"
            class="company-card"
          >
            <div class="company-logo">{{ company.name }}</div>
            <div class="company-questions">
              {{ company.questions }} questions
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.landing-page {
  background: #18181b;
  color: #ffffff;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

.landing-page::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
  pointer-events: none;
  z-index: -1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
}

/* Scroll Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Hero Section */
.hero {
  background: #18181b;
  padding: 140px 0 100px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(5px) rotate(-1deg);
  }
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-left h1 {
  font-size: 64px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 32px;
  background: linear-gradient(135deg, #ffffff 0%, #dcee77 50%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  animation: slideInFromLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-subtitle {
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #d1d5db;
  opacity: 0.9;
  animation: fadeIn 1.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.company-logos {
  display: flex;
  gap: 40px;
  margin-bottom: 48px;
  flex-wrap: wrap;
  animation: fadeIn 1.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-item {
  font-size: 20px;
  font-weight: 700;
  color: #9ca3af;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-item:hover {
  color: #dcee77;
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.hero-cta {
  margin-bottom: 56px;
  animation: fadeIn 1.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn {
  display: inline-block;
  padding: 16px 40px;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 18px;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  color: #000000;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #c4d66a 0%, #b8d05e 100%);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
}

.cta-note {
  margin-top: 16px;
  font-size: 16px;
  color: #9ca3af;
  opacity: 0.8;
}

.hero-stats {
  display: flex;
  gap: 64px;
  animation: fadeIn 2s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-item {
  text-align: center;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
}

.stat-number {
  display: block;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 8px;
  color: #dcee77;
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 16px;
  color: #9ca3af;
  font-weight: 500;
}

/* Section Titles */
.section-title {
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 64px;
  background: linear-gradient(135deg, #ffffff 0%, #dcee77 50%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 24px;
  text-align: center;
  margin-bottom: 64px;
  color: #d1d5db;
  opacity: 0.9;
  line-height: 1.6;
}

/* Question Demo Section */
.question-demo {
  padding: 120px 0;
  background: #18181b;
  position: relative;
  overflow: hidden;
}

.question-demo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
}

.demo-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.demo-tab {
  padding: 16px 32px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #d1d5db;
  backdrop-filter: blur(10px);
  font-size: 16px;
}

.demo-tab:hover {
  border-color: #dcee77;
  color: #dcee77;
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.demo-tab.active {
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  color: #000000;
  border-color: #dcee77;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}

.demo-content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  position: relative;
  z-index: 1;
}

.code-editor {
  background: #18181b;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.editor-header {
  background: #18181b;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.editor-controls {
  display: flex;
  gap: 12px;
}

.control {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.control.red {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}
.control.yellow {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}
.control.green {
  background: #6b7280;
}

.editor-title {
  color: #e2e8f0;
  font-size: 16px;
  font-family: "SF Mono", Monaco, monospace;
  font-weight: 600;
}

.editor-body {
  padding: 24px;
  font-family: "SF Mono", Monaco, monospace;
  font-size: 15px;
  line-height: 1.7;
}

.code-line {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.line-number {
  color: #64748b;
  margin-right: 20px;
  user-select: none;
  min-width: 28px;
  font-weight: 600;
}

.code-text {
  color: #e2e8f0;
}

.code-text :deep(.keyword) {
  color: #c084fc;
  font-weight: 600;
}
.code-text :deep(.function) {
  color: #64748b;
  font-weight: 600;
}
.code-text :deep(.tag) {
  color: #f87171;
  font-weight: 600;
}
.code-text :deep(.attr) {
  color: #34d399;
  font-weight: 600;
}
.code-text :deep(.string) {
  color: #fbbf24;
  font-weight: 600;
}
.code-text :deep(.number) {
  color: #64748b;
  font-weight: 600;
}

/* Founder Section */
.founder-section {
  padding: 120px 0;
  background: #18181b;
  position: relative;
  overflow: hidden;
}

.founder-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
}

.founder-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.founder-quote {
  background: rgba(255, 255, 255, 0.05);
  padding: 64px;
  border-radius: 24px;
  border-left: 6px solid #dcee77;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
  position: relative;
}

.founder-quote::before {
  content: '"';
  position: absolute;
  top: -20px;
  left: 32px;
  font-size: 120px;
  color: rgba(255, 255, 255, 0.06);
  font-family: serif;
  line-height: 1;
}

.founder-quote blockquote {
  font-size: 20px;
  line-height: 1.8;
  color: #d1d5db;
  margin-bottom: 40px;
  font-style: italic;
  opacity: 0.95;
}

.founder-name {
  font-size: 24px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #ffffff 0%, #dcee77 50%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.founder-title {
  font-size: 18px;
  color: #dcee77;
  margin-bottom: 8px;
  font-weight: 600;
}

.founder-credentials {
  font-size: 16px;
  color: #9ca3af;
  opacity: 0.8;
}

/* Study Plans */
.study-plans {
  padding: 120px 0;
  background: #18181b;
  position: relative;
}

.study-description {
  font-size: 17px;
  line-height: 1.7;
  color: #d1d5db;
  margin: 24px auto 0;
  max-width: 900px;
}

.topics-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
  justify-content: center;
}

.topic-tag {
  display: inline-block;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #e5e7eb;
  transition: all 0.2s ease;
  cursor: default;
}

.topic-tag:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
}

/* Question Bank */
.question-bank {
  padding: 120px 0;
  background: #18181b;
  position: relative;
  overflow: hidden;
}

.question-bank::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
}

.bank-stats {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 64px;
  position: relative;
  z-index: 1;
}

.bank-stat .stat-number {
  font-size: 56px;
  font-weight: 900;
  color: #dcee77;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bank-stat .stat-label {
  font-size: 20px;
  color: #9ca3af;
  font-weight: 600;
}

.question-filters {
  margin-bottom: 64px;
  position: relative;
  z-index: 1;
}

.filter-group h3 {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #ffffff;
}

.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.filter-tag {
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  font-size: 16px;
  color: #d1d5db;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  font-weight: 600;
}

.filter-tag:hover {
  border-color: #dcee77;
  color: #dcee77;
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.sample-questions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  position: relative;
  z-index: 1;
}

.question-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.question-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.question-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
}

.question-card:hover::before {
  opacity: 1;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 16px;
}

.question-header h3 {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  flex: 1;
  line-height: 1.4;
}

.question-type {
  font-size: 12px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  color: #dcee77;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.question-description {
  color: #9ca3af;
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 16px;
}

.question-meta {
  display: flex;
  gap: 16px;
  font-size: 14px;
  align-items: center;
}

.question-difficulty {
  padding: 6px 12px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  color: #92400e;
  border-radius: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.question-frameworks {
  color: #9ca3af;
  font-weight: 600;
}

/* Example Solutions */
.example-solutions {
  padding: 120px 0;
  background: #18181b;
  position: relative;
  overflow: hidden;
}

.example-solutions::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
}

.solutions-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.solution-tab {
  padding: 16px 32px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #d1d5db;
  backdrop-filter: blur(10px);
  font-size: 16px;
}

.solution-tab:hover {
  border-color: #dcee77;
  color: #dcee77;
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.solution-tab.active {
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  color: #000000;
  border-color: #dcee77;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}

.solution-content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  position: relative;
  z-index: 1;
}

.code-block {
  background: #18181b;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-header {
  background: #18181b;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-title {
  color: #e2e8f0;
  font-size: 16px;
  font-weight: 700;
}

.code-block pre {
  margin: 0;
  padding: 24px;
  overflow-x: auto;
}

.code-block code {
  font-family: "SF Mono", Monaco, monospace;
  font-size: 15px;
  line-height: 1.7;
  color: #e2e8f0;
}

/* Company Guides */
.company-guides {
  padding: 120px 0;
  background: #18181b;
  position: relative;
  overflow: hidden;
}

.company-guides::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
}

.companies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  margin-top: 64px;
  position: relative;
  z-index: 1;
}

.company-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 32px 24px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.company-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.company-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
  border-color: rgba(255, 255, 255, 0.08);
}

.company-card:hover::before {
  opacity: 1;
}

.company-logo {
  font-size: 24px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 12px;
  display: block;
  transition: transform 0.4s ease;
}

.company-card:hover .company-logo {
  transform: scale(1.05);
}

.company-questions {
  font-size: 16px;
  color: #9ca3af;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-left h1 {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 20px;
  }

  .company-logos {
    gap: 24px;
  }

  .logo-item {
    padding: 10px 20px;
    font-size: 16px;
  }

  .hero-cta .btn {
    padding: 14px 32px;
    font-size: 16px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 32px;
  }

  .stat-item {
    padding: 20px;
  }

  .stat-number {
    font-size: 32px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 20px;
  }

  .topics-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;
  }

  .topic-card {
    padding: 24px 16px;
  }

  .companies-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;
  }

  .company-card {
    padding: 24px 16px;
  }

  .sample-questions {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .question-card {
    padding: 24px;
  }

  .bank-stats {
    flex-direction: column;
    gap: 40px;
  }

  .bank-stat .stat-number {
    font-size: 40px;
  }

  .founder-quote {
    padding: 40px;
  }

  .founder-quote blockquote {
    font-size: 18px;
  }

  .demo-content {
    padding: 24px;
  }

  .solution-content {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 100px 0 60px;
  }

  .hero-left h1 {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .company-logos {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .logo-item {
    padding: 8px 16px;
    font-size: 14px;
  }

  .hero-cta .btn {
    width: 100%;
    padding: 16px;
    font-size: 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .topics-grid {
    grid-template-columns: 1fr;
  }

  .companies-grid {
    grid-template-columns: 1fr;
  }

  .sample-questions {
    grid-template-columns: 1fr;
  }

  .bank-stats {
    gap: 32px;
  }

  .founder-quote {
    padding: 32px;
  }

  .founder-quote blockquote {
    font-size: 16px;
  }
}
</style>
