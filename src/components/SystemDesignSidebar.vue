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
  background: linear-gradient(180deg, #18181b 0%, #1a1a1e 50%, #1c1c20 100%);
  border-right: 1px solid rgba(220, 238, 119, 0.1);
  padding: 24px 0;
  padding-top: 100px;
  height: 100vh;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  position: relative;
}

.system-design-sidebar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(220, 238, 119, 0.03) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.sidebar-nav {
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.sidebar-header {
  margin-bottom: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(220, 238, 119, 0.2);
  position: relative;
}

.sidebar-header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #dcee77 50%,
    transparent 100%
  );
}

.sidebar-header h3 {
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #dcee77 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}

.sidebar-header p {
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
  opacity: 0.8;
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
  padding: 0;
  margin: 0;
  margin-left: 44px;
  margin-top: 8px;
  position: relative;
}

.subsection-list::before {
  content: "";
  position: absolute;
  left: -20px;
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
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  padding: 6px 0 6px 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
  position: relative;
  margin-bottom: 2px;
}

.subsection-link::before {
  content: "";
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: #dcee77;
  border-radius: 50%;
  opacity: 0.6;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.subsection-link:hover {
  color: #ffffff;
  background: rgba(220, 238, 119, 0.08);
  transform: translateX(8px);
}

.subsection-link:hover::before {
  opacity: 1;
  transform: translateY(-50%) scale(1.2);
  box-shadow: 0 0 8px rgba(220, 238, 119, 0.5);
}

.subsection-link.active {
  color: #dcee77;
  font-weight: 500;
  background: rgba(220, 238, 119, 0.12);
}

.subsection-link.active::before {
  opacity: 1;
  background: #dcee77;
  box-shadow: 0 0 12px rgba(220, 238, 119, 0.6);
}

.sidebar-footer {
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid rgba(220, 238, 119, 0.2);
  position: relative;
}

.sidebar-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #dcee77 50%,
    transparent 100%
  );
}

.back-to-interviews {
  display: block;
  color: #dcee77;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 8px 12px;
  border-radius: 8px;
  text-align: center;
  background: rgba(220, 238, 119, 0.05);
  border: 1px solid rgba(220, 238, 119, 0.1);
}

.back-to-interviews:hover {
  color: #ffffff;
  background: rgba(220, 238, 119, 0.15);
  border-color: rgba(220, 238, 119, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 238, 119, 0.2);
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

.social-links {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 12px 20px;
  background: rgba(42, 42, 46, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(220, 238, 119, 0.1);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: linear-gradient(135deg, #2a2a2e 0%, #1f1f23 100%);
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover {
  color: #000000;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(220, 238, 119, 0.3);
}

.social-link:hover::before {
  opacity: 1;
}

.social-icon {
  width: 18px;
  height: 18px;
  position: relative;
  z-index: 1;
}
</style>
