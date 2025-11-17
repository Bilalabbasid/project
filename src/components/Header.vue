<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);
const user = ref(null);

// Mock user for demonstration
onMounted(() => {
  // In a real app, check authentication status
  isLoggedIn.value = false; // Set to false to show auth dropdown
  if (isLoggedIn.value) {
    user.value = {
      name: "User",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    };
  } else {
    user.value = {
      name: "Guest",
      avatar: "https://ui-avatars.com/api/?name=Guest&background=18181b&color=fff&size=40",
    };
  }
});

const logout = () => {
  isLoggedIn.value = false;
  user.value = null;
  router.push("/");
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <span class="logo-text">techmade</span>
        </router-link>

        <!-- Navigation -->
        <nav class="nav">
          <div class="nav-item dropdown">
            <button class="nav-link">
              Interviews
              <svg
                class="dropdown-arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div class="dropdown-menu">
              <router-link to="/interviews/questions" class="dropdown-item"
                >Practice Questions</router-link
              >
              <router-link to="/interviews/playbook" class="dropdown-item"
                >Interview Playbook</router-link
              >
              <router-link to="/interviews/system-design" class="dropdown-item"
                >System Design</router-link
              >
            </div>
          </div>

          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          <router-link to="/prepare" class="nav-link">Prepare</router-link>
          <router-link to="/pricing" class="nav-link">Pricing</router-link>
        </nav>

        <!-- Right side actions -->
        <div class="header-actions">
          <div class="feedback-btn">
            <button class="btn-feedback">
              <span class="feedback-count">739</span>
              <span>Feedback</span>
            </button>
          </div>

          <div class="user-menu">
            <button class="user-avatar">
              <img :src="user?.avatar" :alt="user?.name" />
            </button>
            <div class="user-dropdown">
              <template v-if="isLoggedIn">
                <router-link to="/account" class="dropdown-item">My Account</router-link>
                <button @click="logout" class="dropdown-item">Logout</button>
              </template>
              <template v-else>
                <router-link to="/login" class="dropdown-item">Sign In</router-link>
                <router-link to="/signup" class="dropdown-item">Sign Up</router-link>
                <router-link to="/login" class="dropdown-item">Login</router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Promotional Banner -->
    <div class="promo-banner">
      <div class="container">
        <div class="promo-content">
          <span class="promo-text">
            Techmade Projects now in BETA! 30% off with BETA30
          </span>
          <button class="promo-close">×</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #18181b;
  border-bottom: 1px solid #1f2937;
  position: sticky;
  top: 0;
  z-index: 50;
}

.promo-banner {
  background: linear-gradient(90deg, #efff94 0%, #d4e66a 100%);
  color: #000000;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  font-weight: 500;
}

.promo-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.promo-close {
  position: absolute;
  right: 0;
  background: none;
  border: none;
  color: #000000;
  font-size: 1.25rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.promo-close:hover {
  opacity: 1;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.logo {
  text-decoration: none;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
}

.logo-text {
  color: #ffffff;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #d1d5db;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #ffffff;
}

.dropdown-arrow {
  transition: transform 0.2s;
}

.dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #111827;
  border: 1px solid #374151;
  border-radius: 6px;
  padding: 0.5rem 0;
  min-width: 12rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-0.5rem);
  transition: all 0.2s;
  z-index: 50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background-color: #1f2937;
  color: #ffffff;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-feedback {
  background: #efff94;
  color: #000000;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.btn-feedback:hover {
  background-color: #d4e66a;
}

.feedback-count {
  background: #000000;
  color: #efff94;
  padding: 0.125rem 0.375rem;
  border-radius: 3px;
  font-size: 0.75rem;
  font-weight: 700;
}

.user-menu {
  position: relative;
}

.user-avatar {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
}

.user-avatar img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #111827;
  border: 1px solid #374151;
  border-radius: 6px;
  padding: 0.5rem 0;
  min-width: 10rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-0.5rem);
  transition: all 0.2s;
  z-index: 50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.user-menu:hover .user-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.auth-buttons {
  display: flex;
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .header-actions {
    gap: 0.5rem;
  }
}
</style>
