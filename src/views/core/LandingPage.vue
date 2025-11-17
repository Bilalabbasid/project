<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
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
              <p class="cta-note">200+ questions are free to do</p>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number">1M+</span>
                <span class="stat-label">engineers already on board</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Question Demo Section -->
    <section class="question-demo">
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
          <div class="demo-preview">
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
                <div
                  class="code-line"
                  v-for="(line, idx) in demoCode"
                  :key="idx"
                >
                  <span class="line-number">{{ idx + 1 }}</span>
                  <span class="code-text" v-html="line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder's Foreword -->
    <section class="founder-section">
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

    <!-- User Success Stories -->
    <section class="success-stories">
      <div class="container">
        <h2 class="section-title">Users success stories</h2>
        <p class="section-subtitle">The offers don't lie</p>
        <p class="section-description">
          Scores of our users have landed multiple offers at the world's top
          companies with substantial TC gains. Be the next.
        </p>
        <div class="testimonial-card featured">
          <blockquote class="testimonial-text">
            "When I started interviewing for frontend positions, I found it
            really hard to find quality content for the interviews whereas
            backend interviews seemed to have an endless supply of questions
            ranging from leetcode-style to system design. Techmade provides an
            amazing platform to hone your frontend skills for interviews and
            beyond. It helped me bridge the gaps in my knowledge of the core
            fundamentals and provided an awesome framework for system design
            that really dove into the tradeoffs of the design decisions I
            choose. Techmade was truly a game changer for my interviews skills
            and I will definitely be coming back to it in the future."
          </blockquote>
          <div class="testimonial-author">
            <div class="author-info">
              <div class="author-name">Yugant Joshi</div>
              <div class="author-title">
                Frontend Software Engineer, San Jose, US
              </div>
            </div>
          </div>
          <div class="testimonial-stats">
            <div class="stat">
              <div class="stat-value">33 offers</div>
              <div class="stat-label">TikTok, Amazon, Doordash</div>
            </div>
            <div class="stat">
              <div class="stat-value">22x</div>
              <div class="stat-label">Increase in total compensation</div>
            </div>
          </div>
          <div class="testimonial-note">Received after using Techmade</div>
        </div>
      </div>
    </section>

    <!-- Made by Experienced Engineers -->
    <section class="engineers-section">
      <div class="container">
        <h2 class="section-title">Made by experienced senior engineers</h2>
        <p class="section-subtitle">
          Let big tech senior/staff engineers write your prep resources
        </p>
        <p class="section-description">
          Having interviewed hundreds of candidates, we know what to look out
          for. Learn best practices and techniques gleaned from years of
          experience.
        </p>
        <div class="credentials-grid">
          <div class="credential-item">
            <div class="credential-icon">👨‍💼</div>
            <h3>By Senior to Principal-level Engineers</h3>
            <p>at the world's best companies</p>
          </div>
          <div class="credential-item">
            <div class="credential-icon">📚</div>
            <h3>Blind 75</h3>
            <p>Creators of widely-used interview materials</p>
          </div>
          <div class="credential-item">
            <div class="credential-icon">🔧</div>
            <h3>Core maintainers</h3>
            <p>of well-known open source projects</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Study Plans and Topics -->
    <section class="study-plans">
      <div class="container">
        <h2 class="section-title">Study plans and topics</h2>
        <p class="section-subtitle">
          A simple yet comprehensive plan to follow
        </p>
        <p class="section-description">
          Front end interviews are even broader in scope than traditional
          software engineering interviews. On top of the wide range of front end
          topics that could be asked, some companies still include standard DSA
          questions for front end roles. We've condensed everything into a
          simple strategy you can use to conquer essential interview patterns.
        </p>
        <div class="topics-grid">
          <div v-for="topic in topics" :key="topic.id" class="topic-card">
            <div class="topic-icon">{{ topic.icon }}</div>
            <h3>{{ topic.name }}</h3>
          </div>
        </div>
        <div class="study-plans-list">
          <div class="plan-item">
            <span class="plan-number">1</span>
            <span class="plan-name">GFE 75</span>
          </div>
          <div class="plan-item">
            <span class="plan-number">2</span>
            <span class="plan-name">Blind 75</span>
          </div>
          <div class="plan-item">
            <span class="plan-number">3</span>
            <span class="plan-name">Front end system design</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Workspace Features -->
    <section class="workspace-section">
      <div class="container">
        <h2 class="section-title">Workspace features</h2>
        <p class="section-subtitle">
          Practice in an environment that simulates real interviews
        </p>
        <p class="section-description">
          Our in-browser coding workspace allows you to simulate a real
          interview environment with no set up required.
        </p>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">▶️</div>
            <h3>Run your code against tests</h3>
            <p>and instantly preview your output</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📐</div>
            <h3>Resize and customize</h3>
            <p>the workspace as you like</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎨</div>
            <h3>Syntax highlighting</h3>
            <p>theming and shortcuts</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Question Bank -->
    <section class="question-bank">
      <div class="container">
        <h2 class="section-title">Huge question bank</h2>
        <p class="section-subtitle">
          A practice question bank with everything you'd ever need
        </p>
        <p class="section-description">
          We have questions in every critical topic, interview format and
          framework / language. Every question comes with solutions and test
          cases.
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
              <span v-for="tag in questionTopics" :key="tag" class="filter-tag">
                {{ tag }}
              </span>
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
    <section class="example-solutions">
      <div class="container">
        <h2 class="section-title">Example solutions</h2>
        <p class="section-subtitle">
          Every question answered by ex-interviewers
        </p>
        <p class="section-description">
          Referencing good solutions is crucial to learning effectively. We've
          written our solutions with special care to include practical
          considerations and multiple approaches.
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

    <!-- Automated Testing -->
    <section class="testing-section">
      <div class="container">
        <h2 class="section-title">Automated convenient testing</h2>
        <p class="section-subtitle">
          Test your code automatically with a single click
        </p>
        <p class="section-description">
          Polish your answers with a comprehensive test suite that covers all
          the important edge cases that interviewers will look out for.
        </p>
        <div class="testing-features">
          <div class="testing-feature">
            <span class="feature-number">1.</span>
            <p>Fully public and customizable</p>
          </div>
          <div class="testing-feature">
            <span class="feature-number">2.</span>
            <p>Detailed test scenarios for UI questions</p>
          </div>
        </div>
        <div class="testing-demo">
          <div class="code-editor">
            <div class="editor-header">
              <div class="editor-controls">
                <span class="control red"></span>
                <span class="control yellow"></span>
                <span class="control green"></span>
              </div>
              <span class="editor-title">makeCounter.js</span>
            </div>
            <div class="editor-body">
              <div class="code-line">
                <span class="line-number">1</span>
                <span class="code-text"
                  >export default function makeCounter(initialValue = 0) {</span
                >
              </div>
              <div class="code-line">
                <span class="line-number">2</span>
                <span class="code-text"> let count =</span>
              </div>
            </div>
            <div class="editor-footer">
              <button class="run-button">Run</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Guides -->
    <section class="company-guides">
      <div class="container">
        <h2 class="section-title">Company guides and tips</h2>
        <p class="section-subtitle">
          Leverage insider tips from leading companies
        </p>
        <p class="section-description">
          Practicing company-specific questions is the quickest way to ace
          specific interviews. We regularly survey and update lists for known
          questions tested in top companies around the world.
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

<script setup>
import { ref, computed } from "vue";

const activeTab = ref("ui");
const activeSolution = ref("flatten");

const demoTabs = [
  { id: "ui", label: "UI components" },
  { id: "js", label: "JavaScript functions" },
  { id: "system", label: "System design" },
  { id: "quiz", label: "Quiz" },
];

const demoCode = computed(() => {
  if (activeTab.value === "ui") {
    return [
      '<span class="keyword">function</span> <span class="function">ContactForm</span>() {',
      '  <span class="keyword">return</span> (',
      '    <span class="tag">&lt;form&gt;</span>',
      '      <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="string">"text"</span> <span class="tag">/&gt;</span>',
      '    <span class="tag">&lt;/form&gt;</span>',
      "  );",
      "}",
    ];
  }
  return [
    '<span class="keyword">function</span> <span class="function">flatten</span>(arr) {',
    '  <span class="keyword">return</span> arr.<span class="function">flat</span>(<span class="number">Infinity</span>);',
    "}",
  ];
});

const topics = [
  { id: 1, name: "Accessibility", icon: "♿" },
  { id: 2, name: "JavaScript Functions", icon: "⚡" },
  { id: 3, name: "React", icon: "⚛️" },
  { id: 4, name: "Networking", icon: "🌐" },
  { id: 5, name: "Data structures & algorithms", icon: "📊" },
  { id: 6, name: "Front end system design", icon: "🏗️" },
  { id: 7, name: "DOM manipulation", icon: "🖱️" },
  { id: 8, name: "Internationalization", icon: "🌍" },
  { id: 9, name: "User interfaces", icon: "🎨" },
  { id: 10, name: "Performance", icon: "⚡" },
];

const questionTopics = [
  "Accessibility",
  "Async",
  "CSS",
  "Closure",
  "HTML",
  "Internationalization",
  "JavaScript",
  "Networking",
  "OOP",
  "Performance",
  "React Hooks",
  "Security",
  "Web APIs",
];

const sampleQuestions = [
  {
    id: 1,
    title: "Contact Form",
    description:
      "Build a contact form which submits user feedback and contact details to a back end API",
    type: "UI coding",
    difficulty: "Easy",
    frameworks: "Available frameworks",
  },
  {
    id: 2,
    title: "Digital Clock",
    description: "Build a 7-segment digital clock that shows the current time",
    type: "UI coding",
    difficulty: "Medium",
    frameworks: "Available frameworks",
  },
  {
    id: 3,
    title: "File Explorer",
    description:
      "Build a file explorer component to navigate files and directories in a tree-like hierarchical viewer",
    type: "UI coding",
    difficulty: "Medium",
    frameworks: "Available frameworks",
  },
  {
    id: 4,
    title:
      "What are the different ways to visually hide content (and make it available only for screen readers)?",
    type: "Quiz",
    difficulty: "Medium",
    frameworks: "Topics: Accessibility, CSS",
  },
];

const solutions = [
  { id: "flatten", name: "Flatten" },
  { id: "deepClone", name: "Deep Clone" },
  { id: "likeButton", name: "Like Button" },
];

const currentSolution = computed(() => {
  const solutionMap = {
    flatten: {
      name: "Flatten",
      code: `/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  return value.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr)
      ? flatten(curr) : curr),
    [],
  );
}`,
    },
    deepClone: {
      name: "Deep Clone",
      code: `export default function deepClone(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }
  if (value instanceof Date) {
    return new Date(value.getTime());
  }
  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }
  const cloned = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      cloned[key] = deepClone(value[key]);
    }
  }
  return cloned;
}`,
    },
    likeButton: {
      name: "Like Button",
      code: `export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setLiked(!liked);
    setCount(prev => liked ? prev - 1 : prev + 1);
  };
  
  return (
    <button onClick={handleClick}>
      {liked ? '❤️' : '🤍'} {count}
    </button>
  );
}`,
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

<style scoped>
.landing-page {
  background: #18181b;
  color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.hero {
  background: #18181b;
  color: #ffffff;
  padding: 120px 0 80px;
  text-align: center;
  border-bottom: 1px solid #1f2937;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-text h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 32px;
  color: #d1d5db;
}

.company-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.logo-item {
  font-size: 18px;
  font-weight: 600;
  color: #9ca3af;
}

.hero-cta {
  margin-bottom: 48px;
}

.btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 16px;
}

.btn-primary {
  background: #efff94;
  color: #000000;
}

.btn-primary:hover {
  background: #d4e66a;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(239, 255, 148, 0.3);
}

.cta-note {
  margin-top: 12px;
  font-size: 14px;
  color: #9ca3af;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 4px;
  color: #ffffff;
}

.stat-label {
  font-size: 14px;
  color: #9ca3af;
}

/* Question Demo Section */
.question-demo {
  padding: 80px 0;
  background: #18181b;
}

.section-title {
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 48px;
  color: #ffffff;
}

.demo-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.demo-tab {
  padding: 12px 24px;
  border: 2px solid #374151;
  background: #111827;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #d1d5db;
}

.demo-tab:hover {
  border-color: #efff94;
  color: #efff94;
}

.demo-tab.active {
  background: #efff94;
  color: #000000;
  border-color: #efff94;
}

.demo-content {
  background: #111827;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border: 1px solid #374151;
}

.code-editor {
  background: #1e293b;
  border-radius: 8px;
  overflow: hidden;
}

.editor-header {
  background: #334155;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.editor-controls {
  display: flex;
  gap: 8px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red {
  background: #ef4444;
}
.control.yellow {
  background: #f59e0b;
}
.control.green {
  background: #10b981;
}

.editor-title {
  color: #e2e8f0;
  font-size: 14px;
  font-family: "SF Mono", Monaco, monospace;
}

.editor-body {
  padding: 20px;
  font-family: "SF Mono", Monaco, monospace;
  font-size: 14px;
  line-height: 1.6;
}

.code-line {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.line-number {
  color: #64748b;
  margin-right: 16px;
  user-select: none;
  min-width: 24px;
}

.code-text {
  color: #e2e8f0;
}

.code-text :deep(.keyword) {
  color: #c084fc;
}
.code-text :deep(.function) {
  color: #60a5fa;
}
.code-text :deep(.tag) {
  color: #f87171;
}
.code-text :deep(.attr) {
  color: #34d399;
}
.code-text :deep(.string) {
  color: #fbbf24;
}
.code-text :deep(.number) {
  color: #60a5fa;
}

/* Founder Section */
.founder-section {
  padding: 80px 0;
  background: #18181b;
}

.section-subtitle {
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
  color: #d1d5db;
}

.section-description {
  font-size: 18px;
  text-align: center;
  color: #9ca3af;
  max-width: 800px;
  margin: 0 auto 48px;
  line-height: 1.6;
}

.founder-content {
  max-width: 900px;
  margin: 0 auto;
}

.founder-quote {
  background: #111827;
  padding: 48px;
  border-radius: 16px;
  border-left: 4px solid #efff94;
  border: 1px solid #374151;
}

.founder-quote blockquote {
  font-size: 18px;
  line-height: 1.8;
  color: #d1d5db;
  margin-bottom: 32px;
  font-style: italic;
}

.founder-info {
  margin-top: 24px;
}

.founder-name {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.founder-title {
  font-size: 16px;
  color: #d1d5db;
  margin-bottom: 4px;
}

.founder-credentials {
  font-size: 14px;
  color: #9ca3af;
}

/* Success Stories */
.success-stories {
  padding: 80px 0;
  background: #18181b;
}

.testimonial-card {
  background: #111827;
  padding: 48px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid #374151;
}

.testimonial-card.featured {
  border: 2px solid #efff94;
}

.testimonial-text {
  font-size: 18px;
  line-height: 1.8;
  color: #d1d5db;
  margin-bottom: 32px;
  font-style: italic;
}

.testimonial-author {
  margin-bottom: 32px;
}

.author-name {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.author-title {
  font-size: 14px;
  color: #9ca3af;
}

.testimonial-stats {
  display: flex;
  gap: 48px;
  margin-bottom: 16px;
}

.testimonial-stats .stat {
  text-align: center;
}

.stat-value {
  font-size: 32px;
  font-weight: 800;
  color: #efff94;
  margin-bottom: 4px;
}

.testimonial-stats .stat-label {
  font-size: 14px;
  color: #9ca3af;
}

.testimonial-note {
  font-size: 12px;
  color: #9ca3af;
  text-align: center;
}

/* Engineers Section */
.engineers-section {
  padding: 80px 0;
  background: #18181b;
}

.credentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-top: 48px;
}

.credential-item {
  text-align: center;
  padding: 32px;
  background: #111827;
  border-radius: 12px;
  border: 1px solid #374151;
}

.credential-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.credential-item h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ffffff;
}

.credential-item p {
  color: #9ca3af;
  font-size: 14px;
}

/* Study Plans */
.study-plans {
  padding: 80px 0;
  background: #18181b;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.topic-card {
  background: #111827;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  border: 1px solid #374151;
}

.topic-card:hover {
  transform: translateY(-4px);
  border-color: #efff94;
}

.topic-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.topic-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}

.study-plans-list {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.plan-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #111827;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid #374151;
}

.plan-number {
  width: 32px;
  height: 32px;
  background: #efff94;
  color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.plan-name {
  font-weight: 600;
  color: #ffffff;
}

/* Workspace Section */
.workspace-section {
  padding: 80px 0;
  background: #18181b;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-top: 48px;
}

.feature-item {
  text-align: center;
  padding: 32px;
  background: #111827;
  border-radius: 12px;
  border: 1px solid #374151;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-item h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ffffff;
}

.feature-item p {
  color: #9ca3af;
  font-size: 14px;
}

/* Question Bank */
.question-bank {
  padding: 80px 0;
  background: #18181b;
}

.bank-stats {
  display: flex;
  justify-content: center;
  gap: 64px;
  margin-bottom: 48px;
}

.bank-stat {
  text-align: center;
}

.bank-stat .stat-number {
  font-size: 48px;
  font-weight: 800;
  color: #efff94;
  margin-bottom: 8px;
}

.bank-stat .stat-label {
  font-size: 18px;
  color: #9ca3af;
}

.question-filters {
  margin-bottom: 48px;
}

.filter-group h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
}

.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.filter-tag {
  padding: 8px 16px;
  background: #111827;
  border: 1px solid #374151;
  border-radius: 20px;
  font-size: 14px;
  color: #d1d5db;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tag:hover {
  border-color: #efff94;
  color: #efff94;
}

.sample-questions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.question-card {
  background: #111827;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  border: 1px solid #374151;
}

.question-card:hover {
  transform: translateY(-4px);
  border-color: #efff94;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 12px;
}

.question-header h3 {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  flex: 1;
}

.question-type {
  font-size: 12px;
  padding: 4px 8px;
  background: #374151;
  border-radius: 4px;
  color: #9ca3af;
}

.question-description {
  color: #9ca3af;
  margin-bottom: 16px;
  line-height: 1.6;
}

.question-meta {
  display: flex;
  gap: 12px;
  font-size: 12px;
}

.question-difficulty {
  padding: 4px 8px;
  background: #fef3c7;
  color: #92400e;
  border-radius: 4px;
}

.question-frameworks {
  color: #9ca3af;
}

/* Example Solutions */
.example-solutions {
  padding: 80px 0;
  background: #18181b;
}

.solutions-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.solution-tab {
  padding: 12px 24px;
  border: 2px solid #374151;
  background: #111827;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #d1d5db;
}

.solution-tab:hover {
  border-color: #efff94;
  color: #efff94;
}

.solution-tab.active {
  background: #efff94;
  color: #000000;
  border-color: #efff94;
}

.solution-content {
  background: #111827;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #374151;
}

.code-block {
  background: #1e293b;
  border-radius: 8px;
  overflow: hidden;
}

.code-header {
  background: #334155;
  padding: 12px 16px;
}

.code-title {
  color: #e2e8f0;
  font-size: 14px;
  font-weight: 600;
}

.code-block pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
}

.code-block code {
  font-family: "SF Mono", Monaco, monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #e2e8f0;
}

/* Testing Section */
.testing-section {
  padding: 80px 0;
  background: #18181b;
}

.testing-features {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.testing-feature {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #111827;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid #374151;
}

.feature-number {
  font-size: 24px;
  font-weight: 700;
  color: #efff94;
}

.testing-feature p {
  font-size: 16px;
  color: #ffffff;
  margin: 0;
}

.testing-demo {
  max-width: 600px;
  margin: 0 auto;
}

.editor-footer {
  padding: 16px;
  background: #334155;
  display: flex;
  justify-content: flex-end;
}

.run-button {
  padding: 8px 24px;
  background: #efff94;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.run-button:hover {
  background: #d4e66a;
}

/* Company Guides */
.company-guides {
  padding: 80px 0;
  background: #18181b;
}

.companies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 48px;
}

.company-card {
  background: #111827;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  border: 1px solid #374151;
}

.company-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border-color: #efff94;
}

.company-logo {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.company-questions {
  font-size: 14px;
  color: #9ca3af;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 36px;
  }

  .section-title {
    font-size: 32px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 24px;
  }

  .testimonial-stats {
    flex-direction: column;
    gap: 24px;
  }

  .topics-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .companies-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
