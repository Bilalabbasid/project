<template>
  <aside class="playbook-article-sidebar">
    <nav class="sidebar-nav">
      <div class="sidebar-header">
        <h3>Front End Interview Playbook</h3>
        <p>Table of Contents</p>
      </div>

      <ul class="toc-list">
        <!-- Introduction -->
        <li class="toc-section">
          <div class="section-header">
            <span class="section-number">1</span>
            <router-link
              to="/interviews/playbook/introduction"
              class="section-title"
              :class="{
                active: $route.path === '/interviews/playbook/introduction',
              }"
            >
              Introduction
            </router-link>
          </div>
        </li>

        <!-- Coding interviews (dropdown) -->
        <li class="toc-section dropdown-section">
          <div class="section-header">
            <span class="section-number">2</span>
            <button
              class="section-title dropdown-trigger"
              @click="toggleCodingDropdown"
              :class="{ active: isCodingActive }"
            >
              Coding interview
              <svg
                class="dropdown-arrow"
                :class="{ rotated: codingDropdownOpen }"
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
          <ul v-show="codingDropdownOpen" class="subsection-list">
            <li>
              <router-link
                to="/interviews/playbook/coding"
                class="subsection-link"
                :class="{
                  active: $route.path === '/interviews/playbook/coding',
                }"
              >
                Overview
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/javascript"
                class="subsection-link"
                :class="{
                  active: $route.path === '/interviews/playbook/javascript',
                }"
              >
                JavaScript Functions
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/algorithms"
                class="subsection-link"
                :class="{
                  active: $route.path === '/interviews/playbook/algorithms',
                }"
              >
                Algorithms
              </router-link>
            </li>
          </ul>
        </li>

        <!-- User Interface interviews (dropdown) -->
        <li class="toc-section dropdown-section">
          <div class="section-header">
            <span class="section-number">3</span>
            <button
              class="section-title dropdown-trigger"
              @click="toggleUI_dropdown"
              :class="{ active: isUIActive }"
            >
              User Interface Interviews
              <svg
                class="dropdown-arrow"
                :class="{ rotated: uiDropdownOpen }"
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
          <ul v-show="uiDropdownOpen" class="subsection-list">
            <li>
              <router-link
                to="/interviews/playbook/user-interface"
                class="subsection-link"
                :class="{
                  active: $route.path === '/interviews/playbook/user-interface',
                }"
              >
                Overview
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/ui-cheatsheet"
                class="subsection-link"
                :class="{
                  active: $route.path === '/interviews/playbook/ui-cheatsheet',
                }"
              >
                Cheatsheet
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/api-design"
                class="subsection-link"
                :class="{
                  active: $route.path === '/interviews/playbook/api-design',
                }"
              >
                Api Design
              </router-link>
            </li>
          </ul>
        </li>

        <!-- System design interviews -->
        <li class="toc-section">
          <div class="section-header">
            <span class="section-number">4</span>
            <router-link
              to="/interviews/playbook/system-design"
              class="section-title"
              :class="{
                active: $route.path === '/interviews/playbook/system-design',
              }"
            >
              System design interviews
            </router-link>
          </div>
        </li>

        <!-- Quiz interviews -->
        <li class="toc-section">
          <div class="section-header">
            <span class="section-number">5</span>
            <router-link
              to="/interviews/playbook/quiz"
              class="section-title"
              :class="{ active: $route.path === '/interviews/playbook/quiz' }"
            >
              Quiz Interview
            </router-link>
          </div>
        </li>

        <!-- Resume preparation -->
        <li class="toc-section">
          <div class="section-header">
            <span class="section-number">6</span>
            <router-link
              to="/interviews/playbook/resume"
              class="section-title"
              :class="{ active: $route.path === '/interviews/playbook/resume' }"
            >
              Resume preparation
            </router-link>
          </div>
        </li>
      </ul>

      <div class="sidebar-footer">
        <router-link to="/interviews/playbook" class="back-to-playbook">
          ← Back to Playbook Overview
        </router-link>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const codingDropdownOpen = ref(false);
const uiDropdownOpen = ref(false);

// Check if current route is in coding section
const isCodingActive = computed(() => {
  const codingPaths = [
    "/interviews/playbook/coding",
    "/interviews/playbook/javascript",
    "/interviews/playbook/algorithms",
  ];
  return codingPaths.includes(route.path);
});

// Check if current route is in UI section
const isUIActive = computed(() => {
  const uiPaths = [
    "/interviews/playbook/user-interface",
    "/interviews/playbook/ui-cheatsheet",
    "/interviews/playbook/api-design",
  ];
  return uiPaths.includes(route.path);
});

// Auto-open dropdowns based on current route
watch(
  [isCodingActive, isUIActive],
  ([coding, ui]) => {
    codingDropdownOpen.value = coding;
    uiDropdownOpen.value = ui;
  },
  { immediate: true }
);

const toggleCodingDropdown = () => {
  codingDropdownOpen.value = !codingDropdownOpen.value;
};

const toggleUI_dropdown = () => {
  uiDropdownOpen.value = !uiDropdownOpen.value;
};
</script>

<style scoped>
.playbook-article-sidebar {
  width: 300px;
  background: #18181b;
  border-right: 1px solid #374151;
  padding: 24px 0;
  padding-top: 100px;
  height: 100vh;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.sidebar-nav {
  padding: 0 20px;
}

.sidebar-header {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #374151;
}

.sidebar-header h3 {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.sidebar-header p {
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-section {
  margin-bottom: 8px;
}

.section-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.section-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #dcee77;
  color: #000000;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.section-title {
  display: block;
  color: #d1d5db;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transition: color 0.2s ease;
  padding: 4px 0;
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
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  padding: 4px 0;
  transition: color 0.2s ease;
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.section-title:hover,
.dropdown-trigger:hover {
  color: #ffffff;
}

.section-title.active,
.dropdown-trigger.active {
  color: #dcee77;
  font-weight: 600;
}

.subsection-list {
  list-style: none;
  padding: 8px 0 8px 36px;
  margin: 0;
}

.subsection-link {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  font-size: 13px;
  line-height: 1.4;
  padding: 4px 0;
  transition: color 0.2s ease;
}

.subsection-link:hover {
  color: #d1d5db;
}

.sidebar-footer {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid #374151;
}

.back-to-playbook {
  display: block;
  color: #dcee77;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.back-to-playbook:hover {
  color: #ffffff;
}

@media (max-width: 1024px) {
  .playbook-article-sidebar {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .playbook-article-sidebar {
    display: none;
  }
}
</style>
