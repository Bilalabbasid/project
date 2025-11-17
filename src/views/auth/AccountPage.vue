<template>
  <div class="account-page">
    <div class="container">
      <div class="account-header">
        <h1>Manage Your Account</h1>
        <p>Update your profile, manage your subscription, and view your billing history.</p>
      </div>
      
      <div class="account-content">
        <div class="account-card">
          <div class="card-header">
            <h2>Profile Information</h2>
            <p>Keep your personal details up to date.</p>
          </div>
          
          <div class="card-body">
            <div class="profile-info">
              <div class="info-item">
                <span class="info-label">Name</span>
                <span class="info-value">{{ member.name || 'Not set' }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email</span>
                <span class="info-value">{{ member.email }}</span>
              </div>
            </div>
            <button class="btn btn-outline" data-ms-profile="true">
              Edit Profile
            </button>
          </div>
        </div>
        
        <div class="account-card">
          <div class="card-header">
            <h2>Billing & Subscription</h2>
            <p>Manage your payment methods and subscription plan.</p>
          </div>
          
          <div class="card-body">
            <div class="subscription-info">
              <div class="info-item">
                <span class="info-label">Current Plan</span>
                <span class="info-value">{{ member.plan || 'Free' }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Status</span>
                <span class="info-value status-active">{{ member.status || 'Active' }}</span>
              </div>
            </div>
            <button class="btn" data-ms-profile="true">
              Manage Billing & Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import memberstack from '@memberstack/dom'

const member = ref({
  name: '',
  email: '',
  plan: '',
  status: ''
})

onMounted(async () => {
  try {
    const currentMember = await memberstack.getCurrentMember()
    if (currentMember.data) {
      member.value = {
        name: currentMember.data.customFields?.name || '',
        email: currentMember.data.auth.email,
        plan: currentMember.data.planConnections?.[0]?.planId || 'Free',
        status: currentMember.data.status
      }
    }
  } catch (error) {
    console.error('Error fetching member data:', error)
  }
})
</script>

<style scoped>
.account-page {
  padding: 80px 0;
  background: #18181b;
  min-height: calc(100vh - 144px);
}

.account-header {
  text-align: center;
  margin-bottom: 64px;
}

.account-header h1 {
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
}

.account-header p {
  font-size: 20px;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto;
}

.account-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.account-card {
  background: #111827;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border: 1px solid #374151;
}

.card-header {
  padding: 24px 32px;
  border-bottom: 1px solid #374151;
}

.card-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.card-header p {
  color: #9ca3af;
}

.card-body {
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-info,
.subscription-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: 14px;
  color: #9ca3af;
  margin-bottom: 4px;
}

.info-value {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}

.status-active {
  color: #efff94;
  text-transform: capitalize;
}

.btn {
  padding: 12px 24px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .account-header h1 {
    font-size: 36px;
  }
  
  .account-header p {
    font-size: 18px;
  }
  
  .card-body {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
}
</style>