<template>
  <aside class="system-design-sidebar">
    <nav class="sidebar-nav">
      <div class="sidebar-header">
        <h3>Frontend System Design Playbook</h3>
        <p>Table of Contents</p>
      </div>

      <ul class="toc-list">
        <!-- Guidebook section (dropdown) -->
        <li class="toc-section dropdown-section">
          <div class="section-header">
            <span class="section-number">1</span>
            <button
              class="section-title dropdown-trigger"
              @click="toggleGuidebookDropdown"
              :class="{ active: isGuidebookActive }"
            >
              Guidebook
              <svg
                class="dropdown-arrow"
                :class="{ rotated: guidebookDropdownOpen }"
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
          <ul v-show="guidebookDropdownOpen" class="subsection-list">
            <li>
              <router-link
                to="/interviews/system-design/introduction"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/system-design/introduction',
                }"
              >
                Introduction
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/system-design/types-of-questions"
                class="subsection-link"
                :class="{
                  active:
                    $route.path ===
                    '/interviews/system-design/types-of-questions',
                }"
              >
                Types of questions
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/system-design/framework"
                class="subsection-link"
                :class="{
                  active: $route.path === '/interviews/system-design/framework',
                }"
              >
                RADIO framework
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/system-design/evaluation-axes"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/system-design/evaluation-axes',
                }"
              >
                Evaluation axes
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/system-design/common-mistakes"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/system-design/common-mistakes',
                }"
              >
                Common mistakes
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/system-design/cheatsheet"
                class="subsection-link"
                :class="{
                  active:
                    $route.path === '/interviews/system-design/cheatsheet',
                }"
              >
                Cheatsheet
              </router-link>
            </li>
          </ul>
        </li>

        <!-- Questions section -->
        <li class="toc-section">
          <div class="section-header">
            <span class="section-number">2</span>
            <router-link
              to="/interviews/system-design"
              class="section-title"
              :class="{
                active: $route.path === '/interviews/system-design',
              }"
            >
              Questions
            </router-link>
          </div>
        </li>
      </ul>

      <div class="sidebar-footer">
        <router-link to="/interviews" class="back-to-interviews">
          ← Back to Interviews
        </router-link>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const guidebookDropdownOpen = ref(false);

// Check if current route is in guidebook section
const isGuidebookActive = computed(() => {
  const guidebookPaths = [
    "/interviews/system-design/introduction",
    "/interviews/system-design/types-of-questions",
    "/interviews/system-design/framework",
    "/interviews/system-design/evaluation-axes",
    "/interviews/system-design/common-mistakes",
    "/interviews/system-design/cheatsheet",
  ];
  return guidebookPaths.includes(route.path);
});

// Auto-open dropdowns based on current route
watch(
  [isGuidebookActive],
  ([guidebook]) => {
    guidebookDropdownOpen.value = guidebook;
  },
  { immediate: true }
);

const toggleGuidebookDropdown = () => {
  guidebookDropdownOpen.value = !guidebookDropdownOpen.value;
};
</script>

<style scoped>
.system-design-sidebar {
  width: 300px;
  background: #18181b;
  border-right: 1px solid #374151;
  padding: 24px 0;
  height: fit-content;
  min-height: calc(100vh - 120px);
  flex-shrink: 0;
  position: sticky;
  top: 80px;
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

.subsection-link.active {
  color: #dcee77;
  font-weight: 500;
}

.sidebar-footer {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid #374151;
}

.back-to-interviews {
  display: block;
  color: #dcee77;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.back-to-interviews:hover {
  color: #ffffff;
}

@media (max-width: 1024px) {
  .system-design-sidebar {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .system-design-sidebar {
    display: none;
  }
}
</style>
