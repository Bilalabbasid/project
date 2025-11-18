<template>
  <aside class="behavioral-playbook-sidebar">
    <nav class="sidebar-nav">
      <div class="sidebar-header">
        <h3>Behavioral Interview Playbook</h3>
        <p>Table of Contents</p>
      </div>

      <ul class="toc-list">
        <!-- Overview section -->
        <li class="toc-section">
          <router-link
            to="/interviews/playbook/behavioral/intro"
            class="section-link"
            :class="{
              active: $route.path === '/interviews/playbook/behavioral/intro',
            }"
          >
            <span class="section-number">1</span>
            <span class="section-title">Intro to Behavioral Interviews</span>
          </router-link>
        </li>

        <!-- Common Questions section -->
        <li class="toc-section">
          <router-link
            to="/interviews/playbook/behavioral/common-questions"
            class="section-link"
            :class="{
              active:
                $route.path ===
                '/interviews/playbook/behavioral/common-questions',
            }"
          >
            <span class="section-number">2</span>
            <span class="section-title">Most Common Questions</span>
          </router-link>
        </li>

        <!-- Solving Common Questions section (dropdown) -->
        <li class="toc-section dropdown-section">
          <div class="section-header">
            <span class="section-number">3</span>
            <button
              class="section-title dropdown-trigger"
              @click="toggleSolvingDropdown"
              :class="{ active: isSolvingActive }"
            >
              Solving Common Questions
              <svg
                class="dropdown-arrow"
                :class="{ rotated: solvingDropdownOpen }"
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
          <ul v-show="solvingDropdownOpen" class="subsection-list">
            <li>
              <router-link
                to="/interviews/playbook/behavioral/tell-me-about-yourself"
                class="subsection-link"
                :class="{
                  active:
                    $route.path ===
                    '/interviews/playbook/behavioral/tell-me-about-yourself',
                }"
              >
                Answering "Tell Me About Yourself"
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/behavioral/why-work-here"
                class="subsection-link"
                :class="{
                  active:
                    $route.path ===
                    '/interviews/playbook/behavioral/why-work-here',
                }"
              >
                Answering "Why Work Here"
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/behavioral/questions-to-ask"
                class="subsection-link"
                :class="{
                  active:
                    $route.path ===
                    '/interviews/playbook/behavioral/questions-to-ask',
                }"
              >
                Questions to Ask (End of Interview)
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/behavioral/problem-solving"
                class="subsection-link"
                :class="{
                  active:
                    $route.path ===
                    '/interviews/playbook/behavioral/problem-solving',
                }"
              >
                Problem Solving Questions
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/behavioral/collaborative"
                class="subsection-link"
                :class="{
                  active:
                    $route.path ===
                    '/interviews/playbook/behavioral/collaborative',
                }"
              >
                Collaborative Questions
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/behavioral/growth-mindset"
                class="subsection-link"
                :class="{
                  active:
                    $route.path ===
                    '/interviews/playbook/behavioral/growth-mindset',
                }"
              >
                Growth Mindset Questions
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
  </aside>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const solvingDropdownOpen = ref(false);

// Check if current route is in solving section
const isSolvingActive = computed(() => {
  const solvingPaths = [
    "/interviews/playbook/behavioral/tell-me-about-yourself",
    "/interviews/playbook/behavioral/why-work-here",
    "/interviews/playbook/behavioral/questions-to-ask",
    "/interviews/playbook/behavioral/problem-solving",
    "/interviews/playbook/behavioral/collaborative",
    "/interviews/playbook/behavioral/growth-mindset",
  ];
  return solvingPaths.includes(route.path);
});

// Auto-open dropdown based on current route
watch(
  isSolvingActive,
  (active) => {
    solvingDropdownOpen.value = active;
  },
  { immediate: true }
);

const toggleSolvingDropdown = () => {
  solvingDropdownOpen.value = !solvingDropdownOpen.value;
};
</script>

<style scoped>
.behavioral-playbook-sidebar {
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

.section-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #d1d5db;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transition: color 0.2s ease;
  padding: 8px 0;
}

.section-link:hover {
  color: #ffffff;
}

.section-link.active {
  color: #dcee77;
  font-weight: 600;
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
  .behavioral-playbook-sidebar {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .behavioral-playbook-sidebar {
    display: none;
  }
}
</style>
