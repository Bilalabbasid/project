<template>
  <div class="dashboard-page">
    <InterviewSidebar />
    <div class="dashboard-layout">
      <div class="dashboard-main">
        <div class="dashboard-container">
          <!-- Dashboard Header -->
          <div class="dashboard-header">
            <div class="header-content">
              <h1>Interview Dashboard</h1>
              <p>Track your progress and continue your preparation journey</p>
            </div>
            <button
              class="cta-button"
              @click="$router.push('/interviews/get-started')"
            >
              Continue Learning
            </button>
          </div>

          <!-- Progress Overview -->
          <div class="dashboard-section">
            <h2 class="section-title">Progress Overview</h2>
            <div class="progress-grid">
              <div class="progress-card">
                <div class="progress-header">
                  <div class="progress-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3V21H21"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="progress-info">
                    <h3>Questions Solved</h3>
                    <div class="progress-count">{{ solvedQuestions }}/500</div>
                  </div>
                </div>
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    :style="{ width: solvedPercentage + '%' }"
                  ></div>
                </div>
              </div>

              <div class="progress-card">
                <div class="progress-header">
                  <div class="progress-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="progress-info">
                    <h3>Current Streak</h3>
                    <div class="progress-count">{{ currentStreak }} days</div>
                  </div>
                </div>
                <div class="streak-indicator">
                  <div
                    v-for="day in streakDays"
                    :key="day.id"
                    :class="['streak-day', { active: day.active }]"
                  >
                    {{ day.label }}
                  </div>
                </div>
              </div>

              <div class="progress-card">
                <div class="progress-header">
                  <div class="progress-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                      <path
                        d="M12 6V12L16 14"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="progress-info">
                    <h3>Weekly Goal</h3>
                    <div class="progress-count">{{ weeklyProgress }}/20</div>
                  </div>
                </div>
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    :style="{ width: weeklyPercentage + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Topic Progress -->
          <div class="dashboard-section">
            <h2 class="section-title">Topic Progress</h2>
            <div class="topics-grid">
              <div v-for="topic in topics" :key="topic.id" class="topic-card">
                <div class="topic-header">
                  <div class="topic-icon">{{ topic.icon }}</div>
                  <div class="topic-info">
                    <h4>{{ topic.name }}</h4>
                    <div class="topic-progress">
                      {{ topic.solved }}/{{ topic.total }} solved
                    </div>
                  </div>
                </div>
                <div class="topic-bar">
                  <div
                    class="topic-fill"
                    :style="{ width: topic.percentage + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="dashboard-section">
            <h2 class="section-title">Recent Activity</h2>
            <div class="activity-list">
              <div
                v-for="activity in recentActivities"
                :key="activity.id"
                class="activity-item"
              >
                <div class="activity-icon">{{ activity.icon }}</div>
                <div class="activity-content">
                  <div class="activity-title">{{ activity.title }}</div>
                  <div class="activity-time">{{ activity.time }}</div>
                </div>
                <div :class="['activity-status', activity.status]">
                  {{ activity.statusText }}
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="dashboard-section">
            <h2 class="section-title">Quick Actions</h2>
            <div class="actions-grid">
              <router-link to="/interviews/questions" class="action-card">
                <div class="action-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11H5C4.44772 11 4 11.4477 4 12V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V12C20 11.4477 19.5523 11 19 11H15M9 11V7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7V11M9 11H15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="action-content">
                  <h4>Practice Questions</h4>
                  <p>Solve coding problems and improve your skills</p>
                </div>
              </router-link>

              <router-link to="/interviews/playbook" class="action-card">
                <div class="action-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6.253V19M12 6.253C10.832 5.477 9.246 5 7.5 5C5.754 5 4.168 5.477 3 6.253V19C4.168 18.477 5.754 18 7.5 18C9.246 18 10.832 18.477 12 19M12 6.253C13.168 5.477 14.754 5 16.5 5C18.246 5 19.832 5.477 21 6.253V19C19.832 18.477 18.246 18 16.5 18C14.754 18 13.168 18.477 12 19"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="action-content">
                  <h4>Strategy Playbook</h4>
                  <p>Learn proven techniques and frameworks</p>
                </div>
              </router-link>

              <router-link to="/interviews/behavioral" class="action-card">
                <div class="action-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 12H16M8 16H16M12 8V16M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="action-content">
                  <h4>Behavioral Prep</h4>
                  <p>Master communication and soft skills</p>
                </div>
              </router-link>

              <router-link to="/interviews/mock" class="action-card">
                <div class="action-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 10L19 14M19 10L15 14M13 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="action-content">
                  <h4>Mock Interviews</h4>
                  <p>Practice with real interview scenarios</p>
                </div>
              </router-link>
            </div>
          </div>

          <!-- Current Study Plan -->
          <div class="dashboard-section">
            <h2 class="section-title">Current Study Plan</h2>
            <div class="study-plan-card">
              <div class="plan-info">
                <h3>{{ currentPlan.name }}</h3>
                <p>{{ currentPlan.description }}</p>
                <div class="plan-progress">
                  <span
                    >Week {{ currentPlan.currentWeek }} of
                    {{ currentPlan.totalWeeks }}</span
                  >
                  <span
                    >{{ currentPlan.completedQuestions }}/{{
                      currentPlan.totalQuestions
                    }}
                    questions</span
                  >
                </div>
              </div>
              <div class="plan-actions">
                <button
                  class="continue-button"
                  @click="$router.push('/interviews/questions')"
                >
                  Continue Plan
                </button>
                <button
                  class="view-plan-button"
                  @click="$router.push('/interviews/plans')"
                >
                  View Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import InterviewSidebar from "@/components/InterviewSidebar.vue";

// Reactive data
const solvedQuestions = ref(127);
const currentStreak = ref(12);
const weeklyProgress = ref(15);

// Computed properties
const solvedPercentage = computed(() => (solvedQuestions.value / 500) * 100);
const weeklyPercentage = computed(() => (weeklyProgress.value / 20) * 100);

// Streak days
const streakDays = ref([
  { id: 1, label: "M", active: true },
  { id: 2, label: "T", active: true },
  { id: 3, label: "W", active: true },
  { id: 4, label: "T", active: true },
  { id: 5, label: "F", active: true },
  { id: 6, label: "S", active: true },
  { id: 7, label: "S", active: false },
]);

// Topics progress
const topics = ref([
  {
    id: 1,
    name: "JavaScript",
    icon: "JS",
    solved: 45,
    total: 100,
    percentage: 45,
  },
  { id: 2, name: "React", icon: "⚛️", solved: 23, total: 50, percentage: 46 },
  { id: 3, name: "CSS", icon: "CSS", solved: 18, total: 40, percentage: 45 },
  {
    id: 4,
    name: "System Design",
    icon: "SD",
    solved: 8,
    total: 30,
    percentage: 27,
  },
  {
    id: 5,
    name: "Algorithms",
    icon: "ALG",
    solved: 15,
    total: 60,
    percentage: 25,
  },
  {
    id: 6,
    name: "Behavioral",
    icon: "BEH",
    solved: 12,
    total: 25,
    percentage: 48,
  },
]);

// Recent activities
const recentActivities = ref([
  {
    id: 1,
    icon: "✓",
    title: 'Completed "Two Sum" algorithm problem',
    time: "2 hours ago",
    status: "completed",
    statusText: "Solved",
  },
  {
    id: 2,
    icon: "📖",
    title: "Read React Hooks guide",
    time: "1 day ago",
    status: "completed",
    statusText: "Read",
  },
  {
    id: 3,
    icon: "○",
    title: "Started CSS Grid challenge",
    time: "2 days ago",
    status: "in-progress",
    statusText: "In Progress",
  },
  {
    id: 4,
    icon: "🏆",
    title: "Completed weekly goal",
    time: "3 days ago",
    status: "completed",
    statusText: "Achieved",
  },
]);

// Current study plan
const currentPlan = ref({
  name: "1 Month Intensive Plan",
  description: "Comprehensive preparation covering all essential topics",
  currentWeek: 2,
  totalWeeks: 4,
  completedQuestions: 67,
  totalQuestions: 107,
});

onMounted(() => {
  // Initialize dashboard data
  console.log("Interview Dashboard mounted");
});
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background: #18181b;
  padding-top: 64px; /* Account for fixed header */
}

.dashboard-layout {
  display: flex;
  min-height: calc(100vh - 64px);
}

.dashboard-main {
  flex: 1;
  margin-left: 280px; /* Account for fixed sidebar width */
  padding: 24px;
  overflow-y: auto;
}

.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 24px;
  background: #1f2937;
  border-radius: 8px;
  border: 1px solid #374151;
}

.header-content h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.header-content p {
  font-size: 1rem;
  color: #9ca3af;
}

.cta-button {
  background: #4b5563;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-button:hover {
  background: #6b7280;
  transform: translateY(-1px);
}

.dashboard-section {
  margin-bottom: 48px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
}

.progress-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.progress-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.15s ease;
}

.progress-card:hover {
  border-color: #4b5563;
  transform: translateY(-1px);
}

.progress-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.progress-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111827;
  border-radius: 6px;
  color: #9ca3af;
}

.progress-info h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
}

.progress-percentage,
.progress-count {
  font-size: 1.25rem;
  font-weight: 600;
  color: #e5e7eb;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: #374151;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 12px;
}

.progress-fill {
  height: 100%;
  background: #6b7280;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.streak-indicator {
  display: flex;
  gap: 6px;
}

.streak-day {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #374151;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #9ca3af;
  transition: all 0.15s ease;
}

.streak-day.active {
  background: #4b5563;
  color: #ffffff;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.topic-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  padding: 16px;
  transition: all 0.15s ease;
}

.topic-card:hover {
  border-color: #4b5563;
  transform: translateY(-1px);
}

.topic-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.topic-icon {
  font-size: 1rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111827;
  border-radius: 4px;
  color: #9ca3af;
  font-weight: 600;
  font-size: 0.75rem;
}

.topic-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
}

.topic-progress {
  font-size: 0.75rem;
  color: #9ca3af;
}

.topic-bar {
  width: 100%;
  height: 4px;
  background: #374151;
  border-radius: 2px;
  overflow: hidden;
}

.topic-fill {
  height: 100%;
  background: #6b7280;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.activity-item:hover {
  border-color: #4b5563;
  transform: translateY(-1px);
}

.activity-icon {
  font-size: 1rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111827;
  border-radius: 4px;
  color: #9ca3af;
  font-weight: 600;
}

.activity-content {
  flex: 1;
}

.activity-title {
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 2px;
  font-size: 0.875rem;
}

.activity-time {
  font-size: 0.75rem;
  color: #6b7280;
}

.activity-status {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.625rem;
  font-weight: 500;
  text-transform: uppercase;
}

.activity-status.completed {
  background: #10b981;
  color: #ffffff;
}

.activity-status.in-progress {
  background: #f59e0b;
  color: #ffffff;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.action-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.15s ease;
}

.action-card:hover {
  border-color: #4b5563;
  transform: translateY(-1px);
}

.action-icon {
  font-size: 1.5rem;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111827;
  border-radius: 4px;
  color: #9ca3af;
}

.action-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2px;
}

.action-content p {
  font-size: 0.75rem;
  color: #9ca3af;
}

.study-plan-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
}

.plan-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 6px;
}

.plan-info p {
  color: #9ca3af;
  margin-bottom: 12px;
  font-size: 0.875rem;
}

.plan-progress {
  display: flex;
  gap: 12px;
  font-size: 0.75rem;
  color: #e5e7eb;
}

.plan-actions {
  display: flex;
  gap: 10px;
}

.continue-button {
  background: #4b5563;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.continue-button:hover {
  background: #6b7280;
  transform: translateY(-1px);
}

.view-plan-button {
  background: transparent;
  color: #9ca3af;
  border: 1px solid #4b5563;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.view-plan-button:hover {
  background: #374151;
  color: #ffffff;
}

@media (max-width: 768px) {
  .dashboard-main {
    margin-left: 0;
    padding: 16px;
  }

  .dashboard-header {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }

  .progress-grid,
  .topics-grid,
  .actions-grid {
    grid-template-columns: 1fr;
  }

  .study-plan-card {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }

  .plan-actions {
    justify-content: center;
  }
}
</style>
