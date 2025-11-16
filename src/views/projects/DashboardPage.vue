<template>
  <div class="dashboard-page">
    <div class="dashboard-header">
      <div class="container">
        <h1>My Dashboard</h1>
        <p>Welcome back, {{ member.name || 'Developer' }}! Here's an overview of your progress.</p>
      </div>
    </div>
    
    <div class="container">
      <div class="dashboard-content">
        <div class="stats-grid">
          <div class="stat-card">
            <h3>Challenges Started</h3>
            <div class="stat-number">5</div>
          </div>
          <div class="stat-card">
            <h3>Challenges Completed</h3>
            <div class="stat-number">2</div>
          </div>
          <div class="stat-card">
            <h3>Questions Practiced</h3>
            <div class="stat-number">25</div>
          </div>
          <div class="stat-card">
            <h3>Current Streak</h3>
            <div class="stat-number">7 days</div>
          </div>
        </div>
        
        <div class="in-progress-section">
          <h2>In-Progress Challenges</h2>
          <div class="challenges-list">
            <!-- Placeholder for in-progress challenges -->
            <div class="challenge-item">
              <div class="challenge-info">
                <h3>E-commerce Product Page</h3>
                <div class="progress-bar">
                  <div class="progress" style="width: 60%;"></div>
                </div>
              </div>
              <router-link to="/projects/challenges/e-commerce-product-page" class="btn btn-outline">
                Continue
              </router-link>
            </div>
            <p class="placeholder-text">Your in-progress challenges and stats will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import memberstack from '@memberstack/dom'

const member = ref({})

onMounted(async () => {
  try {
    const currentMember = await memberstack.getCurrentMember()
    if (currentMember.data) {
      member.value = {
        name: currentMember.data.customFields?.name || ''
      }
    }
  } catch (error) {
    console.error('Error fetching member data:', error)
  }
})
</script>

<style scoped>
.dashboard-page {
  background: #f8fafc;
  min-height: calc(100vh - 144px);
}

.dashboard-header {
  background: white;
  padding: 64px 0;
  border-bottom: 1px solid #e5e7eb;
}

.dashboard-header h1 {
  font-size: 48px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.dashboard-header p {
  font-size: 20px;
  color: #6b7280;
}

.dashboard-content {
  padding: 64px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-bottom: 64px;
}

.stat-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.stat-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 16px;
}

.stat-number {
  font-size: 48px;
  font-weight: 800;
  color: #007bff;
}

.in-progress-section h2 {
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 32px;
}

.challenges-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.challenge-item {
  background: white;
  padding: 24px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.challenge-info h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
}

.progress-bar {
  width: 200px;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #007bff;
  border-radius: 4px;
}

.placeholder-text {
  text-align: center;
  padding: 48px;
  color: #6b7280;
  font-size: 18px;
  background: white;
  border-radius: 12px;
  border: 2px dashed #e5e7eb;
}

@media (max-width: 768px) {
  .dashboard-header h1 {
    font-size: 36px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .challenge-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>