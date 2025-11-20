<template>
  <aside class="react-playbook-sidebar">
    <nav class="sidebar-nav">
      <div class="sidebar-header">
        <h3>React Interview Playbook</h3>
        <p>Table of Contents</p>
      </div>

      <ul class="toc-list">
        <!-- Overview section (dropdown) -->
        <li class="toc-section dropdown-section">
          <div class="section-header">
            <span class="section-number">1</span>
            <button
              class="section-title dropdown-trigger"
              @click="toggleOverviewDropdown"
              :class="{ active: isOverviewActive }"
            >
              Overview
              <svg
                class="dropdown-arrow"
                :class="{ rotated: overviewDropdownOpen }"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ul v-show="overviewDropdownOpen" class="subsection-list">
            <li>
              <router-link
                to="/interviews/playbook/react/introduction"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/playbook/react/introduction',
                }"
              >
                React Interviews: An Introduction
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/react/landscape"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/playbook/react/landscape',
                }"
              >
                Landscape and History of React
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/react/preparation"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/playbook/react/preparation',
                }"
              >
                How to Prepare for React Interviews
              </router-link>
            </li>
          </ul>
        </li>

        <!-- Essential topics section (dropdown) -->
        <li class="toc-section dropdown-section">
          <div class="section-header">
            <span class="section-number">2</span>
            <button
              class="section-title dropdown-trigger"
              @click="toggleTopicsDropdown"
              :class="{ active: isTopicsActive }"
            >
              Essential topics
              <svg
                class="dropdown-arrow"
                :class="{ rotated: topicsDropdownOpen }"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ul v-show="topicsDropdownOpen" class="subsection-list">
            <li>
              <router-link
                to="/interviews/playbook/react/basic-concepts"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/playbook/react/basic-concepts',
                }"
              >
                Basic React Concepts for Interviews
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/react/declarative-thinking"
                class="subsection-link"
                :class="{
                  active:
                    $route.path ===
                    '/interviews/playbook/react/declarative-thinking',
                }"
              >
                Thinking Declaratively in React
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/react/state-design"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/playbook/react/state-design',
                }"
              >
                Designing State in React Interviews
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/react/hooks"
                class="subsection-link"
                :class="{
                  active: $route.path === '/interviews/playbook/react/hooks',
                }"
              >
                React Hooks for Interviews
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/react/event-handling"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/playbook/react/event-handling',
                }"
              >
                Event Handling in React Interviews
              </router-link>
            </li>

            <li>
              <router-link
                to="/interviews/playbook/react/signup-form"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/playbook/react/signup-form',
                }"
              >
                Signup Form Example in React
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/react/data-fetching"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/playbook/react/data-fetching',
                }"
              >
                Data Fetching in React Interviews
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/react/design-patterns"
                class="subsection-link"
                :class="{
                  active:
                    $route.path ===
                    '/interviews/playbook/react/design-patterns',
                }"
              >
                Design Patterns for React Interviews
              </router-link>
            </li>
          </ul>
        </li>
      </ul>

      <div class="sidebar-footer">
        <router-link to="/interviews" class="back-to-interviews">
          ← Back to Interviews
        </router-link>
      </div>
    </nav>

    <!-- Social Media Links -->
    <div class="social-links">
      <a
        href="https://medium.com/@techmade"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        title="Follow us on Medium"
      >
        <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
          />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/techmadeco/"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        title="Follow us on Instagram"
      >
        <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
      </a>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const overviewDropdownOpen = ref(false);
const topicsDropdownOpen = ref(false);

// Check if current route is in overview section
const isOverviewActive = computed(() => {
  const overviewPaths = [
    "/interviews/playbook/react/introduction",
    "/interviews/playbook/react/landscape",
    "/interviews/playbook/react/preparation",
  ];
  return overviewPaths.includes(route.path);
});

// Check if current route is in topics section
const isTopicsActive = computed(() => {
  const topicsPaths = [
    "/interviews/playbook/react/basic-concepts",
    "/interviews/playbook/react/declarative-thinking",
    "/interviews/playbook/react/state-design",
    "/interviews/playbook/react/hooks",
    "/interviews/playbook/react/event-handling",
    "/interviews/playbook/react/forms",
    "/interviews/playbook/react/signup-form",
    "/interviews/playbook/react/data-fetching",
    "/interviews/playbook/react/design-patterns",
  ];
  return topicsPaths.includes(route.path);
});

// Auto-open dropdowns based on current route
watch(
  [isOverviewActive, isTopicsActive],
  ([overview, topics]) => {
    overviewDropdownOpen.value = overview;
    topicsDropdownOpen.value = topics;
  },
  { immediate: true }
);

const toggleOverviewDropdown = () => {
  overviewDropdownOpen.value = !overviewDropdownOpen.value;
};

const toggleTopicsDropdown = () => {
  topicsDropdownOpen.value = !topicsDropdownOpen.value;
};
</script>

<style scoped>
.react-playbook-sidebar {
  width: 320px;
  background: linear-gradient(180deg, #1a1a1e 0%, #18181b 50%, #161619 100%);
  border-right: 1px solid #374151;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.3);
  padding: 32px 0;
  padding-top: 120px;
  height: 100vh;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.react-playbook-sidebar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(135deg, #1e1e22 0%, #1a1a1e 100%);
  z-index: -1;
}

.sidebar-nav {
  padding: 0 24px;
}

.sidebar-header {
  margin-bottom: 32px;
  padding-bottom: 20px;
  border-bottom: 2px solid #374151;
  position: relative;
}

.sidebar-header::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #dcee77 0%, #c4d66a 100%);
  border-radius: 1px;
}

.sidebar-header h3 {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6px;
  background: linear-gradient(135deg, #ffffff 0%, #d1d5db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sidebar-header p {
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
  font-weight: 500;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-section {
  margin-bottom: 12px;
  position: relative;
}

.section-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.section-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  color: #000000;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 4px;
  box-shadow: 0 4px 12px rgba(220, 238, 119, 0.3);
  position: relative;
}

.section-number::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  opacity: 0.3;
  z-index: -1;
}

.section-title {
  display: block;
  color: #d1d5db;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 6px 0;
  border-radius: 8px;
  position: relative;
}

.dropdown-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  color: #d1d5db;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  padding: 6px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
}

.dropdown-trigger:hover {
  color: #ffffff;
  transform: translateX(6px);
}

.dropdown-arrow {
  width: 18px;
  height: 18px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  opacity: 0.7;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg) scale(1.1);
  opacity: 1;
}

.section-title:hover,
.dropdown-trigger:hover {
  color: #ffffff;
  background: rgba(220, 238, 119, 0.1);
}

.section-title.active,
.dropdown-trigger.active {
  color: #dcee77;
  font-weight: 600;
  background: rgba(220, 238, 119, 0.15);
}

.subsection-list {
  list-style: none;
  padding: 12px 0 12px 44px;
  margin: 0;
  position: relative;
}

.subsection-list::before {
  content: "";
  position: absolute;
  left: 14px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    #dcee77 0%,
    rgba(220, 238, 119, 0.3) 100%
  );
  border-radius: 1px;
}

.subsection-link {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
  padding: 6px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-radius: 6px;
  margin-bottom: 2px;
}

.subsection-link::before {
  content: "";
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: #dcee77;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
}

.subsection-link:hover::before {
  opacity: 0.6;
  transform: translateY(-50%) scale(1.2);
}

.subsection-link:hover {
  color: #d1d5db;
  background: rgba(220, 238, 119, 0.08);
  transform: translateX(8px);
}

.subsection-link.active {
  color: #dcee77;
  font-weight: 500;
  background: rgba(220, 238, 119, 0.15);
}

.subsection-link.active::before {
  opacity: 1;
  background: #dcee77;
  box-shadow: 0 0 8px rgba(220, 238, 119, 0.5);
}

.sidebar-footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px solid #374151;
  position: relative;
}

.sidebar-footer::after {
  content: "";
  position: absolute;
  top: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #dcee77 0%, #c4d66a 100%);
  border-radius: 1px;
}

.back-to-interviews {
  display: block;
  color: #dcee77;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 12px 0;
  border-radius: 8px;
  position: relative;
}

.back-to-interviews:hover {
  color: #ffffff;
  background: rgba(220, 238, 119, 0.1);
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .react-playbook-sidebar {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .react-playbook-sidebar {
    display: none;
  }
}

.social-links {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 16px 24px;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 30, 0.8) 0%,
    rgba(22, 22, 25, 0.8) 100%
  );
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(55, 65, 81, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2a2a2e 0%, #1f1f23 100%);
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-link:hover::before {
  opacity: 1;
}

.social-link:hover {
  color: #000000;
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 8px 24px rgba(220, 238, 119, 0.4);
}

.social-icon {
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 1;
}
</style>
