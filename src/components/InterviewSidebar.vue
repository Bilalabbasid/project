<template>
  <aside class="interview-sidebar">
    <nav class="sidebar-nav">
      <ul>
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
  width: 240px;
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

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  margin-bottom: 4px;
}

.sidebar-link {
  display: block;
  padding: 12px 12px;
  color: #d1d5db;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
  border: 1px solid transparent;
  font-size: 14px;
  margin: 0;
}

.dropdown-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
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

.dropdown-menu {
  list-style: none;
  padding: 8px 0;
  margin: 0;
  background: #18181b;
  border: 1px solid #374151;
  border-radius: 6px;
  margin-top: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.dropdown-item {
  display: block;
  padding: 12px 16px;
  color: #d1d5db;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s ease;
  background: #18181b;
}

.dropdown-item:hover {
  background: #2a2a2e;
  color: #ffffff;
}

.dropdown-item.router-link-active {
  background: #d9eb72;
  color: #000000;
}

.locked-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.6;
  cursor: not-allowed;
}

.lock-container {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #dcee77;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.lock-icon {
  width: 12px;
  height: 12px;
  color: #000000;
}

.sidebar-link:hover {
  color: #ffffff;
  border-color: transparent;
}

.sidebar-link.router-link-active {
  background: #dcee77;
  color: #000000;
  border-color: #dcee77;
}

@media (max-width: 768px) {
  .interview-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #374151;
    padding: 16px 0;
  }

  .sidebar-link {
    margin: 0;
  }

  .dropdown-menu {
    background: #18181b;
    border: 1px solid #374151;
    margin-left: 16px;
    margin-right: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  .dropdown-item {
    padding: 12px 16px;
    background: #18181b;
  }
}
</style>
