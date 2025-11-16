<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-content">
        <div class="nav-left">
          <router-link to="/" class="logo">
            DevPlatform
          </router-link>
          
          <div class="nav-links">
            <div class="dropdown">
              <button class="dropdown-trigger">
                Interviews
                <svg class="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div class="dropdown-menu">
                <router-link to="/interviews" class="dropdown-item">Overview</router-link>
                <router-link to="/interviews/playbook" class="dropdown-item">Playbook</router-link>
                <router-link to="/interviews/questions" class="dropdown-item">Practice Questions</router-link>
              </div>
            </div>
            
            <div class="dropdown">
              <button class="dropdown-trigger">
                Projects
                <svg class="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div class="dropdown-menu">
                <router-link to="/projects" class="dropdown-item">Overview</router-link>
                <router-link to="/projects/challenges" class="dropdown-item">Challenges</router-link>
                <router-link to="/projects/dashboard" class="dropdown-item" v-if="isAuthenticated">Dashboard</router-link>
                <router-link to="/projects/submissions" class="dropdown-item" v-if="isAuthenticated">Submissions</router-link>
              </div>
            </div>
            
            <router-link to="/pricing" class="nav-link">Pricing</router-link>
          </div>
        </div>
        
        <div class="nav-right">
          <div v-if="!isAuthenticated" class="auth-buttons">
            <router-link to="/login" class="btn btn-outline">Login</router-link>
            <router-link to="/signup" class="btn">Sign Up</router-link>
          </div>
          
          <div v-else class="user-menu">
            <div class="dropdown">
              <button class="dropdown-trigger user-trigger">
                Account
                <svg class="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div class="dropdown-menu">
                <router-link to="/projects/dashboard" class="dropdown-item">Dashboard</router-link>
                <router-link to="/account" class="dropdown-item">Account Settings</router-link>
                <button @click="handleLogout" class="dropdown-item logout-btn">Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import memberstack from '@memberstack/dom'

const isAuthenticated = ref(false)

const checkAuthStatus = async () => {
  try {
    const member = await memberstack.getCurrentMember()
    isAuthenticated.value = !!member.data
  } catch (error) {
    isAuthenticated.value = false
  }
}

const handleLogout = async () => {
  try {
    await memberstack.logout()
    isAuthenticated.value = false
    window.location.href = '/'
  } catch (error) {
    console.error('Logout error:', error)
  }
}

onMounted(() => {
  checkAuthStatus()
  
  // Listen for auth changes
  memberstack.onReady.then(() => {
    memberstack.on('memberUpdate', () => {
      checkAuthStatus()
    })
  })
})
</script>

<style scoped>
.nav {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 48px;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  color: #007bff;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #007bff;
}

.dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: #4b5563;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.dropdown-trigger:hover {
  background: #f3f4f6;
  color: #007bff;
}

.user-trigger {
  color: #007bff;
  background: #f0f8ff;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  min-width: 200px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.3s ease;
  z-index: 100;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 12px 16px;
  color: #4b5563;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #f3f4f6;
  color: #007bff;
}

.dropdown-item:first-child {
  border-radius: 8px 8px 0 0;
}

.dropdown-item:last-child {
  border-radius: 0 0 8px 8px;
}

.logout-btn {
  color: #dc2626;
}

.logout-btn:hover {
  background: #fee2e2;
  color: #dc2626;
}

.nav-right {
  display: flex;
  align-items: center;
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 16px;
}

@media (max-width: 768px) {
  .nav-left {
    gap: 16px;
  }
  
  .nav-links {
    gap: 16px;
  }
  
  .nav-links .nav-link {
    display: none;
  }
  
  .auth-buttons {
    gap: 8px;
  }
  
  .btn {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>