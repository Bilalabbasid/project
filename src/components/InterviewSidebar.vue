<template>
  <aside class="interview-sidebar">
    <nav class="sidebar-nav">
      <ul>
        <li>
          <router-link to="/interviews/dashboard" class="sidebar-link">
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/interviews/get-started" class="sidebar-link">
            Get started
          </router-link>
        </li>
        <li class="dropdown">
          <button
            class="sidebar-link dropdown-trigger"
            @click="togglePracticeDropdown"
          >
            Practice questions
            <svg
              class="dropdown-arrow"
              :class="{ rotated: practiceDropdownOpen }"
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
          <ul v-show="practiceDropdownOpen" class="dropdown-menu">
            <li>
              <router-link to="/interviews/questions" class="dropdown-item">
                All practice questions
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/questions/frameworks"
                class="dropdown-item"
              >
                Frameworks/languages
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/questions/formats"
                class="dropdown-item"
              >
                Question formats
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <button
            class="sidebar-link dropdown-trigger"
            @click="toggleStrategyDropdown"
          >
            Recommended strategy
            <svg
              class="dropdown-arrow"
              :class="{ rotated: strategyDropdownOpen }"
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
          <ul v-show="strategyDropdownOpen" class="dropdown-menu">
            <li>
              <router-link to="/interviews/playbook" class="dropdown-item">
                Frontend Interview Playbook
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/gfe75"
                class="dropdown-item"
              >
                GFE 75
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/blind75"
                class="dropdown-item"
              >
                Blind 75
              </router-link>
            </li>
            <li>
              <router-link to="/interviews/system-design" class="dropdown-item">
                Frontend System Design Playbook
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <button
            class="sidebar-link dropdown-trigger"
            @click="toggleTimeSaveDropdown"
          >
            Time-savers
            <svg
              class="dropdown-arrow"
              :class="{ rotated: timeSaveDropdownOpen }"
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
          <ul v-show="timeSaveDropdownOpen" class="dropdown-menu">
            <li>
              <router-link
                to="/interviews/study-plans"
                class="dropdown-item locked-item"
              >
                Study plan
                <div class="lock-container">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/company"
                class="dropdown-item locked-item"
              >
                Company guides
                <div class="lock-container">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/focus-areas"
                class="dropdown-item locked-item"
              >
                Focus areas
                <div class="lock-container">
                  <svg
                    class="lock-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <button
            class="sidebar-link dropdown-trigger"
            @click="toggleGuidesDropdown"
          >
            Guides
            <svg
              class="dropdown-arrow"
              :class="{ rotated: guidesDropdownOpen }"
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
          <ul v-show="guidesDropdownOpen" class="dropdown-menu">
            <li>
              <router-link to="/interviews/playbook" class="dropdown-item">
                Frontend Interview Playbook
              </router-link>
            </li>
            <li>
              <router-link to="/interviews/system-design" class="dropdown-item">
                Front End System Design Playbook
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/react"
                class="dropdown-item"
              >
                React Interview Playbook
              </router-link>
            </li>
            <li>
              <router-link
                to="/interviews/playbook/behavioral"
                class="dropdown-item"
              >
                Behavioral Interview Playbook
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
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

const practiceDropdownOpen = ref(false);
const strategyDropdownOpen = ref(false);
const timeSaveDropdownOpen = ref(false);
const guidesDropdownOpen = ref(false);

// Check if current route is in practice questions section
const isPracticeRoute = computed(() => {
  return route.path.startsWith("/interviews/questions");
});

// Check if current route is in strategy/playbook section
const isStrategyRoute = computed(() => {
  const strategyPaths = [
    "/interviews/playbook/gfe75",
    "/interviews/playbook/blind75",
  ];
  return strategyPaths.includes(route.path);
});

// Check if current route is in time-save section
const isTimeSaveRoute = computed(() => {
  return (
    route.path.startsWith("/interviews/study-plans") ||
    route.path.startsWith("/interviews/company") ||
    route.path.startsWith("/interviews/focus-areas")
  );
});

// Check if current route is in guides section
const isGuidesRoute = computed(() => {
  const guidesPaths = [
    "/interviews/playbook",
    "/interviews/system-design",
    "/interviews/playbook/react",
    "/interviews/playbook/behavioral",
    "/interviews/guides",
  ];
  return guidesPaths.includes(route.path);
});

// Auto-open dropdowns based on current route
watch(
  [isPracticeRoute, isStrategyRoute, isTimeSaveRoute, isGuidesRoute],
  ([practice, strategy, timeSave, guides]) => {
    practiceDropdownOpen.value = practice;
    strategyDropdownOpen.value = strategy;
    timeSaveDropdownOpen.value = timeSave;
    guidesDropdownOpen.value = guides;
  },
  { immediate: true }
);

const togglePracticeDropdown = () => {
  practiceDropdownOpen.value = !practiceDropdownOpen.value;
};

const toggleStrategyDropdown = () => {
  strategyDropdownOpen.value = !strategyDropdownOpen.value;
};

const toggleTimeSaveDropdown = () => {
  timeSaveDropdownOpen.value = !timeSaveDropdownOpen.value;
};

const toggleGuidesDropdown = () => {
  guidesDropdownOpen.value = !guidesDropdownOpen.value;
};
</script>

<style scoped>
.interview-sidebar {
  width: 280px;
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

.interview-sidebar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(135deg, #1e1e22 0%, #1a1a1e 100%);
  z-index: -1;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  margin-bottom: 8px;
  position: relative;
}

.sidebar-link {
  display: block;
  padding: 16px 20px;
  color: #d1d5db;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  border: 1px solid transparent;
  font-size: 14px;
  margin: 0 12px;
  position: relative;
  overflow: hidden;
}

.sidebar-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 90%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(220, 238, 119, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.sidebar-link:hover::before {
  left: 100%;
}

.dropdown-trigger {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  color: #d1d5db;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-trigger:hover {
  color: #ffffff;
  transform: translateX(4px);
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  opacity: 0.7;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg) scale(1.1);
  opacity: 1;
}

.dropdown-menu {
  list-style: none;
  padding: 12px 0;
  margin: 8px 12px 0;
  background: linear-gradient(135deg, #1f1f23 0%, #1a1a1e 100%);
  border: 1px solid #374151;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.dropdown-item {
  display: block;
  padding: 14px 16px;
  color: #d1d5db;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  position: relative;
  border-radius: 6px;
  margin: 2px 8px;
}

.dropdown-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: #dcee77;
  transform: scaleY(0);
  transition: transform 0.3s ease;
  border-radius: 0 2px 2px 0;
}

.dropdown-item:hover::before {
  transform: scaleY(1);
}

.dropdown-item:hover {
  background: rgba(220, 238, 119, 0.1);
  color: #ffffff;
  transform: translateX(4px);
}

.dropdown-item.router-link-active {
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  color: #000000;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(220, 238, 119, 0.3);
}

.dropdown-item.router-link-active::before {
  background: #000000;
  transform: scaleY(1);
}

.locked-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.6;
  cursor: not-allowed;
  position: relative;
}

.locked-item::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #dcee77, transparent);
  opacity: 0.5;
}

.lock-container {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(220, 238, 119, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.lock-icon {
  width: 14px;
  height: 14px;
  color: #000000;
}

.sidebar-link:hover {
  color: #ffffff;
  border-color: rgba(220, 238, 119, 0.3);
  background: linear-gradient(
    135deg,
    rgba(220, 238, 119, 0.1) 0%,
    rgba(196, 214, 106, 0.1) 100%
  );
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(220, 238, 119, 0.2);
}

.sidebar-link.router-link-active {
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  color: #000000;
  border-color: #dcee77;
  box-shadow: 0 6px 20px rgba(220, 238, 119, 0.4);
  font-weight: 600;
}

@media (max-width: 768px) {
  .interview-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #374151;
    padding: 20px 0;
    box-shadow: none;
  }

  .sidebar-link {
    margin: 0 8px;
    padding: 14px 16px;
  }

  .dropdown-menu {
    background: linear-gradient(135deg, #1f1f23 0%, #1a1a1e 100%);
    border: 1px solid #374151;
    margin-left: 16px;
    margin-right: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  .dropdown-item {
    padding: 12px 16px;
    margin: 2px 4px;
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
