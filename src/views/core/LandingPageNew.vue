<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Navigate front end interviews with ease</h1>
          <p class="hero-subtitle">
            Meet the front end interview prep platform built to make your interviews much easier. By Big Tech ex-interviewers at
            <span class="company-logos">
              <span class="logo-text">Google</span>
              <span class="logo-text">Amazon</span>
              <span class="logo-text">Meta</span>
            </span>
          </p>
          <div class="hero-actions">
            <router-link to="/signup" class="btn btn-primary">Get started now</router-link>
            <span class="hero-note">200+ questions are free to do</span>
          </div>
          <div class="hero-stats">
            <span>1M+ engineers already on board</span>
            <span class="stats-note">Verifiable by Google Analytics</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Question Demo Section -->
    <section class="question-demo">
      <div class="container">
        <h2 class="section-title">Question demo</h2>
        <div class="demo-categories">
          <div 
            class="demo-category" 
            :class="{ active: activeCategory === 'ui' }"
            @click="setActiveCategory('ui')"
          >
            <div class="demo-icon-wrapper">
              <svg class="demo-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div class="demo-icon">UI components</div>
          </div>
          <div 
            class="demo-category"
            :class="{ active: activeCategory === 'js' }"
            @click="setActiveCategory('js')"
          >
            <div class="demo-icon-wrapper">
              <svg class="demo-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div class="demo-icon">JavaScript functions</div>
          </div>
          <div 
            class="demo-category"
            :class="{ active: activeCategory === 'system' }"
            @click="setActiveCategory('system')"
          >
            <div class="demo-icon-wrapper">
              <svg class="demo-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div class="demo-icon">System design</div>
          </div>
          <div 
            class="demo-category"
            :class="{ active: activeCategory === 'quiz' }"
            @click="setActiveCategory('quiz')"
          >
            <div class="demo-icon-wrapper">
              <svg class="demo-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="demo-icon">Quiz</div>
          </div>
        </div>
        
        <!-- Code Display Area -->
        <div v-if="activeCategory" class="code-display-area">
          <div class="code-editor">
            <div class="editor-header">
              <div class="editor-controls">
                <span class="control red"></span>
                <span class="control yellow"></span>
                <span class="control green"></span>
              </div>
              <span class="editor-title">greatfrontend.com</span>
            </div>
            <div class="editor-body">
              <pre><code>{{ codeExamples[activeCategory] }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder's Foreword Section -->
    <section class="founder-section">
      <div class="container">
        <h2 class="section-title">Founder's foreword</h2>
        <p class="section-intro">We're crafting GreatFrontEnd with passion, precision and quality.</p>
        <div class="founder-quote">
          <blockquote>
            "Over my career, I have conducted over hundreds of interviews at Meta and have personally received offers from companies like Meta, Google, OpenAI, xAI, Airbnb, Lyft, Dropbox, etc. and I understand the challenges that front end engineers face when preparing for interviews.
            <br><br>
            GreatFrontEnd is the culmination of my experience and knowledge in the front end domain to help fellow engineers efficiently and adequately prepare for front end interviews.
            <br><br>
            The best part about GreatFrontEnd is that all users emerge as better Front End Engineers after using the platform."
          </blockquote>
          <div class="founder-info">
            <div class="founder-name">Yangshun Tay</div>
            <div class="founder-title">Founder, CEO of GreatFrontEnd<br>Ex-Staff Engineer, Meta. Author of Blind 75 and Docusaurus 2</div>
          </div>
        </div>
      </div>
    </section>

    <!-- User Success Stories Section -->
    <section class="success-stories">
      <div class="container">
        <h2 class="section-title">Users success stories</h2>
        <p class="section-subtitle">The offers don't lie</p>
        <p class="section-description">Scores of our users have landed multiple offers at the world's top companies with substantial TC gains. Be the next.</p>
        <div class="testimonial">
          <blockquote>
            When I started interviewing for frontend positions, I found it really hard to find quality content for the interviews whereas backend interviews seemed to have an endless supply of questions ranging from leetcode-style to system design. GreatFrontEnd provides an amazing platform to hone your frontend skills for interviews and beyond. It helped me bridge the gaps in my knowledge of the core fundamentals and provided an awesome framework for system design that really dove into the tradeoffs of the design decisions I choose. GreatFrontEnd was truly a game changer for my interviews skills and I will definitely be coming back to it in the future.
          </blockquote>
          <div class="testimonial-author">
            <div class="author-name">Yugant Joshi</div>
            <div class="author-title">Frontend Software Engineer, San Jose, US</div>
          </div>
          <div class="testimonial-stats">
            <div class="stat-item">
              <div class="stat-number">33</div>
              <div class="stat-label">offers</div>
            </div>
            <div class="stat-companies">
              <span>TikTok</span>
              <span>Amazon</span>
              <span>Doordash</span>
            </div>
            <div class="stat-item">
              <div class="stat-number">22x</div>
              <div class="stat-label">Increase in total compensation</div>
            </div>
          </div>
          <div class="testimonial-note">Received after using GreatFrontEnd</div>
        </div>
      </div>
    </section>

    <!-- Made by Experienced Engineers Section -->
    <section class="experienced-engineers">
      <div class="container">
        <h2 class="section-title">Made by experienced senior engineers</h2>
        <p class="section-subtitle">Let big tech senior/staff engineers write your prep resources</p>
        <p class="section-description">Having interviewed hundreds of candidates, we know what to look out for. Learn best practices and techniques gleaned from years of experience.</p>
        <div class="engineer-badges">
          <div class="badge">By Senior to Principal-level Engineers at the world's best companies</div>
          <div class="badge">Blind 75</div>
          <div class="badge">Creators of widely-used interview materials</div>
          <div class="badge">Core maintainers of well-known open source projects</div>
        </div>
      </div>
    </section>

    <!-- Study Plans and Topics Section -->
    <section class="study-plans">
      <div class="container">
        <h2 class="section-title">Study plans and topics</h2>
        <p class="section-subtitle">A simple yet comprehensive plan to follow</p>
        <p class="section-description">
          Front end interviews are even broader in scope than traditional software engineering interviews. On top of the wide range of front end topics that could be asked, some companies still include standard DSA questions for front end roles.
          <br><br>
          We've condensed everything into a simple strategy you can use to conquer essential interview patterns.
        </p>
        <div class="topics-grid">
          <div class="topic-item">Accessibility</div>
          <div class="topic-item">JavaScript Functions</div>
          <div class="topic-item">React</div>
          <div class="topic-item">Networking</div>
          <div class="topic-item">Data structures & algorithms</div>
          <div class="topic-item">GFE 75</div>
          <div class="topic-item">Blind 75</div>
          <div class="topic-item">Front end system design</div>
          <div class="topic-item">DOM manipulation</div>
          <div class="topic-item">Internationalization</div>
          <div class="topic-item">User interfaces</div>
          <div class="topic-item">Performance</div>
        </div>
      </div>
    </section>

    <!-- Workspace Features Section -->
    <section class="workspace-features">
      <div class="container">
        <h2 class="section-title">Workspace features</h2>
        <p class="section-subtitle">Practice in an environment that simulates real interviews</p>
        <p class="section-description">Our in-browser coding workspace allows you to simulate a real interview environment with no set up required.</p>
        <div class="features-list">
          <div class="feature-item">Run your code against tests and instantly preview your output</div>
          <div class="feature-item">Resize and customize the workspace as you like</div>
          <div class="feature-item">Syntax highlighting, theming and shortcuts</div>
        </div>
      </div>
    </section>

    <!-- Huge Question Bank Section -->
    <section class="question-bank">
      <div class="container">
        <h2 class="section-title">Huge question bank</h2>
        <p class="section-subtitle">A practice question bank with everything you'd ever need</p>
        <p class="section-description">We have questions in every critical topic, interview format and framework / language. Every question comes with solutions and test cases.</p>
        <div class="question-stats">
          <div class="stat-box">
            <div class="stat-label">Topics</div>
            <div class="stat-value">Accessibility, Async, CSS, Closure, HTML, Internationalization, JavaScript, Networking, OOP, Performance, React Hooks, Security, Web APIs</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Number of questions</div>
            <div class="stat-value">2424 questions</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Total time</div>
            <div class="stat-value">99 hours total</div>
          </div>
        </div>
        <div class="question-examples">
          <div class="question-card">
            <div class="question-type">User interface coding</div>
            <h3 class="question-title">Contact Form</h3>
            <p class="question-description">Build a contact form which submits user feedback and contact details to a back end API</p>
            <div class="question-meta">
              <span class="question-format">UI coding</span>
              <span class="question-difficulty">Difficulty: Easy</span>
            </div>
            <div class="question-frameworks">Available frameworks</div>
          </div>
          <div class="question-card">
            <div class="question-type">User interface coding</div>
            <h3 class="question-title">Digital Clock</h3>
            <p class="question-description">Build a 7-segment digital clock that shows the current time</p>
            <div class="question-meta">
              <span class="question-format">UI coding</span>
              <span class="question-difficulty">Difficulty: Medium</span>
            </div>
            <div class="question-frameworks">Available frameworks</div>
          </div>
          <div class="question-card">
            <div class="question-type">User interface coding</div>
            <h3 class="question-title">File Explorer</h3>
            <p class="question-description">Build a file explorer component to navigate files and directories in a tree-like hierarchical viewer</p>
            <div class="question-meta">
              <span class="question-format">UI coding</span>
              <span class="question-difficulty">Difficulty: Medium</span>
            </div>
            <div class="question-frameworks">Available frameworks</div>
          </div>
          <div class="question-card">
            <div class="question-type">Quiz</div>
            <h3 class="question-title">What are the different ways to visually hide content (and make it available only for screen readers)?</h3>
            <div class="question-meta">
              <span class="question-format">Quiz</span>
              <span class="question-difficulty">Difficulty: Medium</span>
            </div>
            <div class="question-topics">Topics: Accessibility, CSS</div>
          </div>
        </div>
        <div class="view-all">
          <router-link to="/interviews/questions" class="btn btn-secondary">See all questions</router-link>
        </div>
      </div>
    </section>

    <!-- Example Solutions Section -->
    <section class="example-solutions">
      <div class="container">
        <h2 class="section-title">Example solutions</h2>
        <p class="section-subtitle">Every question answered by ex-interviewers</p>
        <p class="section-description">Referencing good solutions is crucial to learning effectively. We've written our solutions with special care to include practical considerations and multiple approaches.</p>
        <div class="solutions-tabs">
          <button class="solution-tab active">Flatten</button>
          <button class="solution-tab">Deep Clone</button>
          <button class="solution-tab">Like Button</button>
        </div>
        <div class="solution-code">
          <pre><code>/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  return value.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr)
      ? flatten(curr) : curr),
    [],
  );
}</code></pre>
        </div>
      </div>
    </section>

    <!-- Automated Testing Section -->
    <section class="automated-testing">
      <div class="container">
        <h2 class="section-title">Automated convenient testing</h2>
        <p class="section-subtitle">Test your code automatically with a single click</p>
        <p class="section-description">Polish your answers with a comprehensive test suite that covers all the important edge cases that interviewers will look out for.</p>
        <div class="testing-features">
          <div class="testing-feature">1. Fully public and customizable</div>
          <div class="testing-feature">2. Detailed test scenarios for UI questions</div>
        </div>
        <div class="code-example">
          <pre><code>export default function makeCounter(initialValue = 0) {
  let count =</code></pre>
          <button class="run-button">Run</button>
        </div>
      </div>
    </section>

    <!-- Company Guides Section -->
    <section class="company-guides">
      <div class="container">
        <h2 class="section-title">Company guides and tips</h2>
        <p class="section-subtitle">Leverage insider tips from leading companies</p>
        <p class="section-description">Practicing company-specific questions is the quickest way to ace specific interviews. We regularly survey and update lists for known questions tested in top companies around the world.</p>
        <div class="companies-grid">
          <div class="company-card">
            <div class="company-name">OpenAI</div>
            <div class="company-count">15 questions</div>
          </div>
          <div class="company-card">
            <div class="company-name">Google</div>
            <div class="company-count">34 questions</div>
          </div>
          <div class="company-card">
            <div class="company-name">Amazon</div>
            <div class="company-count">61 questions</div>
          </div>
          <div class="company-card">
            <div class="company-name">TikTok</div>
            <div class="company-count">35 questions</div>
          </div>
          <div class="company-card">
            <div class="company-name">ByteDance</div>
            <div class="company-count">27 questions</div>
          </div>
          <div class="company-card">
            <div class="company-name">Apple</div>
            <div class="company-count">13 questions</div>
          </div>
          <div class="company-card">
            <div class="company-name">Microsoft</div>
            <div class="company-count">19 questions</div>
          </div>
          <div class="company-card">
            <div class="company-name">Atlassian</div>
            <div class="company-count">17 questions</div>
          </div>
          <div class="company-card">
            <div class="company-name">LinkedIn</div>
            <div class="company-count">18 questions</div>
          </div>
        </div>
        <div class="view-full-list">
          <router-link to="/interviews/company-guides" class="btn btn-secondary">View full list</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeCategory = ref(null)

const setActiveCategory = (category) => {
  activeCategory.value = activeCategory.value === category ? null : category
}

const codeExamples = {
  ui: `// Build a Contact Form Component
// User interface coding question

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit to backend API
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input 
        type="email" 
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      <textarea 
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Difficulty: Easy
// Available frameworks: Vanilla / React / Vue`,
  js: `/**
 * Flatten a nested array
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  return value.reduce(
    (acc, curr) => acc.concat(
      Array.isArray(curr) ? flatten(curr) : curr
    ),
    []
  );
}

// Example usage:
// flatten([1, [2, 3], [4, [5, 6]]])
// Returns: [1, 2, 3, 4, 5, 6]`,
  system: `// System Design: Design a URL Shortener

// Requirements:
// - Shorten long URLs
// - Redirect short URLs to original
// - Handle 100M requests/day

// Components:
// 1. URL Shortening Service
// 2. Database (SQL/NoSQL)
// 3. Cache Layer (Redis)
// 4. Load Balancer

class URLShortener {
  constructor() {
    this.baseUrl = 'https://short.ly/';
    this.urlMap = new Map();
  }

  shorten(longUrl) {
    const shortCode = this.generateShortCode();
    this.urlMap.set(shortCode, longUrl);
    return this.baseUrl + shortCode;
  }

  redirect(shortCode) {
    return this.urlMap.get(shortCode);
  }

  generateShortCode() {
    // Base62 encoding: 0-9, a-z, A-Z
    return Math.random().toString(36).substring(2, 8);
  }
}`,
  quiz: `// Quiz: What are the different ways to visually hide 
// content (and make it available only for screen readers)?

// Method 1: Using CSS clip-path
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

// Method 2: Using CSS visually-hidden class
.visually-hidden {
  position: absolute !important;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

// Method 3: Using aria-label (for simple cases)
<button aria-label="Close dialog">×</button>

// Method 4: Using offscreen positioning
.offscreen {
  position: absolute;
  left: -9999px;
}`
}
</script>

<style scoped>
.landing-page {
  width: 100%;
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
  padding: 100px 0 60px;
  text-align: center;
  background: #18181b;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  color: #ffffff;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 18px;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.company-logos {
  display: inline-flex;
  gap: 8px;
  align-items: center;
}

.logo-text {
  font-weight: 600;
  color: #ffffff;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  font-size: 15px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: #efff94;
  color: #000000;
}

.btn-primary:hover {
  background: #d4e66a;
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid #374151;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #6b7280;
}

.hero-note {
  font-size: 14px;
  color: #6b7280;
}

.hero-stats {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  color: #6b7280;
}

.stats-note {
  font-size: 12px;
  color: #9ca3af;
}

/* Question Demo Section */
.question-demo {
  padding: 100px 0;
  background: #18181b;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.demo-categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.demo-category {
  background: #1b1b1e;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.demo-category::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(239, 255, 148, 0.05) 0%, rgba(239, 255, 148, 0.02) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.demo-category:hover::before {
  opacity: 1;
}

.demo-category:hover {
  border-color: #efff94;
  box-shadow: 0 8px 24px rgba(239, 255, 148, 0.15);
  transform: translateY(-4px);
}

.demo-category.active {
  border-color: #efff94;
  background: rgba(239, 255, 148, 0.05);
  box-shadow: 0 8px 24px rgba(239, 255, 148, 0.2);
}

.demo-category.active::before {
  opacity: 1;
}

.demo-icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  background: rgba(239, 255, 148, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.demo-category:hover .demo-icon-wrapper {
  background: rgba(239, 255, 148, 0.2);
  transform: scale(1.1);
}

.demo-icon-svg {
  width: 32px;
  height: 32px;
  color: #efff94;
  transition: all 0.3s ease;
}

.demo-category:hover .demo-icon-svg {
  color: #efff94;
  transform: rotate(5deg);
}

.demo-icon {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.demo-category:hover .demo-icon {
  color: #efff94;
}

.demo-category.active .demo-icon {
  color: #efff94;
}

/* Code Display Area */
.code-display-area {
  margin-top: 48px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.code-editor {
  background: #1b1b1e;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #374151;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.editor-header {
  background: #1b1b1e;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #374151;
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
  color: #9ca3af;
  font-size: 14px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-weight: 600;
}

.editor-body {
  padding: 24px;
  background: #1b1b1e;
  overflow-x: auto;
}

.editor-body pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #e5e7eb;
}

.editor-body code {
  color: #e5e7eb;
  white-space: pre;
}

/* Founder Section */
.founder-section {
  padding: 100px 0;
  background: #18181b;
}

.section-intro {
  text-align: center;
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 60px;
}

.founder-quote {
  max-width: 850px;
  margin: 0 auto;
}

.founder-quote blockquote {
  font-size: 17px;
  line-height: 1.75;
  color: #d1d5db;
  margin-bottom: 40px;
  font-style: normal;
  text-align: left;
}

.founder-info {
  text-align: left;
}

.founder-name {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ffffff;
}

.founder-title {
  font-size: 14px;
  color: #9ca3af;
  line-height: 1.6;
}

/* Success Stories Section */
.success-stories {
  padding: 100px 0;
  background: #18181b;
}

.section-subtitle {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #ffffff;
}

.section-description {
  text-align: center;
  font-size: 15px;
  color: #6b7280;
  margin-bottom: 60px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.testimonial {
  max-width: 950px;
  margin: 0 auto;
  background: #1b1b1e;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 56px;
}

.testimonial blockquote {
  font-size: 17px;
  line-height: 1.75;
  color: #d1d5db;
  margin-bottom: 40px;
  font-style: normal;
}

.testimonial-author {
  margin-bottom: 32px;
}

.author-name {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #ffffff;
}

.author-title {
  font-size: 14px;
  color: #6b7280;
}

.testimonial-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #6b7280;
}

.stat-companies {
  display: flex;
  gap: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.testimonial-note {
  font-size: 12px;
  color: #9ca3af;
  text-align: center;
}

/* Experienced Engineers Section */
.experienced-engineers {
  padding: 100px 0;
  background: #18181b;
}

.engineer-badges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 48px;
}

.badge {
  background: #1b1b1e;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #d1d5db;
}

/* Study Plans Section */
.study-plans {
  padding: 100px 0;
  background: #18181b;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 48px;
}

.topic-item {
  background: #1b1b1e;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 16px 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.2s;
}

.topic-item:hover {
  border-color: #efff94;
  background: #1b1b1e;
}

/* Workspace Features Section */
.workspace-features {
  padding: 100px 0;
  background: #18181b;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.feature-item {
  font-size: 16px;
  color: #d1d5db;
  padding-left: 24px;
  position: relative;
}

.feature-item::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #efff94;
  font-weight: 700;
}

/* Question Bank Section */
.question-bank {
  padding: 100px 0;
  background: #18181b;
}

.question-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 48px;
  margin-bottom: 48px;
}

.stat-box {
  background: #1b1b1e;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 24px;
}

.stat-box .stat-label {
  font-size: 12px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.stat-box .stat-value {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}

.question-examples {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 48px;
}

.question-card {
  background: #1b1b1e;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s;
}

.question-card:hover {
  border-color: #efff94;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.question-type {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.question-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #ffffff;
}

.question-description {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 16px;
}

.question-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.question-format,
.question-difficulty {
  font-size: 12px;
  color: #6b7280;
}

.question-frameworks,
.question-topics {
  font-size: 12px;
  color: #6b7280;
  font-weight: 600;
}

.view-all {
  text-align: center;
  margin-top: 48px;
}

/* Example Solutions Section */
.example-solutions {
  padding: 100px 0;
  background: #18181b;
}

.solutions-tabs {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 32px;
}

.solution-tab {
  padding: 12px 24px;
  background: transparent;
  border: 1px solid #374151;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.2s;
}

.solution-tab:hover {
  border-color: #6b7280;
  background: rgba(255, 255, 255, 0.05);
}

.solution-tab.active {
  background: #efff94;
  color: #000000;
  border-color: #efff94;
}

.solution-code {
  max-width: 800px;
  margin: 0 auto;
  background: #1b1b1e;
  border-radius: 12px;
  padding: 24px;
  overflow-x: auto;
}

.solution-code pre {
  margin: 0;
  color: #f9fafb;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.solution-code code {
  color: #f9fafb;
}

/* Automated Testing Section */
.automated-testing {
  padding: 100px 0;
  background: #18181b;
}

.testing-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
  margin-bottom: 32px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.testing-feature {
  font-size: 16px;
  color: #d1d5db;
}

.code-example {
  max-width: 800px;
  margin: 32px auto 0;
  background: #1b1b1e;
  border-radius: 12px;
  padding: 24px;
  position: relative;
}

.code-example pre {
  margin: 0;
  color: #f9fafb;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.run-button {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px 16px;
  background: #efff94;
  color: #000000;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.run-button:hover {
  background: #d4e66a;
}

/* Company Guides Section */
.company-guides {
  padding: 100px 0;
  background: #18181b;
}

.companies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 48px;
}

.company-card {
  background: #1b1b1e;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.2s;
}

.company-card:hover {
  border-color: #efff94;
  background: #1b1b1e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.company-name {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ffffff;
}

.company-count {
  font-size: 14px;
  color: #6b7280;
}

.view-full-list {
  text-align: center;
  margin-top: 48px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .section-title {
    font-size: 36px;
  }

  .demo-categories {
    grid-template-columns: repeat(2, 1fr);
  }

  .topics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .question-examples {
    grid-template-columns: 1fr;
  }

  .companies-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonial-stats {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 32px;
  }

  .demo-categories {
    grid-template-columns: 1fr;
  }

  .topics-grid {
    grid-template-columns: 1fr;
  }

  .companies-grid {
    grid-template-columns: 1fr;
  }
}
</style>