<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const isLoggedIn = ref(false);
const user = ref(null);
const isInterviewsDropdownOpen = ref(false);

// Function to check authentication status
const checkAuthStatus = () => {
  // Check localStorage for login status
  const localLoginStatus = localStorage.getItem("isLoggedIn") === "true";

  if (localLoginStatus) {
    isLoggedIn.value = true;
    user.value = {
      name: "User",
      email: "",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    };
  } else {
    isLoggedIn.value = false;
    user.value = {
      name: "Guest",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    };
  }

  // Then check Memberstack for more detailed user info
  if (window.memberstack && window.memberstack.onReady) {
    window.memberstack.onReady
      .then((member) => {
        if (member && member.loggedIn) {
          isLoggedIn.value = true;
          user.value = {
            name: member.data?.name || "User",
            email: member.data?.email,
            avatar:
              member.data?.avatar ||
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
          };
        } else {
          // If Memberstack says not logged in, clear localStorage
          localStorage.removeItem("isLoggedIn");
          isLoggedIn.value = false;
          user.value = {
            name: "Guest",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
          };
        }
      })
      .catch((error) => {
        console.error("Memberstack auth check failed:", error);
      });
  }
};

// Check auth status on mount
onMounted(() => {
  checkAuthStatus();
});

// Watch for route changes to re-check auth status
watch(
  () => route.path,
  () => {
    checkAuthStatus();
  }
);
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <img src="/logo.png" alt="Techmade" class="LOGO" />
          <span class="logo-text">Techmade</span>
        </router-link>

        <!-- Navigation -->
        <nav class="nav">
          <div
            class="nav-item dropdown"
            :class="{ open: isInterviewsDropdownOpen }"
          >
            <button
              class="nav-link"
              @click="isInterviewsDropdownOpen = !isInterviewsDropdownOpen"
            >
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
            <div class="dropdown-menu" v-if="isInterviewsDropdownOpen">
              <button
                @click="
                  router.push('/interviews/get-started');
                  isInterviewsDropdownOpen = false;
                "
                class="dropdown-item"
              >
                Techmade | Interviews
              </button>
              <router-link
                to="/interviews/questions"
                class="dropdown-item"
                @click="isInterviewsDropdownOpen = false"
                >Practice Questions</router-link
              >
              <router-link
                to="/interviews/playbook"
                class="dropdown-item"
                @click="isInterviewsDropdownOpen = false"
                >Interview Playbook</router-link
              >
              <router-link
                to="/interviews/system-design"
                class="dropdown-item"
                @click="isInterviewsDropdownOpen = false"
                >System Design</router-link
              >
            </div>
          </div>

          <button
            class="nav-link"
            @click="
              isLoggedIn ? router.push('/dashboard') : router.push('/signup')
            "
          >
            Dashboard
          </button>
          <router-link to="/prepare" class="nav-link">Prepare</router-link>
          <router-link to="/pricing" class="nav-link">Pricing</router-link>
        </nav>

        <!-- Right side actions -->
        <div class="header-actions">
          <div class="feedback-btn">
            <button class="btn-feedback">
              <svg
                class="feedback-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
              <span class="feedback-count">739</span>
              <span class="feedback-text">Feedback</span>
            </button>
          </div>

          <div class="user-menu">
            <button class="user-avatar">
              <img :src="user?.avatar" :alt="user?.name" />
            </button>
            <div class="user-dropdown">
              <template v-if="isLoggedIn">
                <router-link to="/account" class="dropdown-item"
                  >My Account</router-link
                >
                <router-link to="/logout" class="dropdown-item"
                  >Logout</router-link
                >
              </template>
              <template v-else>
                <router-link to="/login" class="dropdown-item"
                  >Sign In</router-link
                >
                <router-link to="/signup" class="dropdown-item"
                  >Sign Up</router-link
                >
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
  background: linear-gradient(
    180deg,
    rgba(24, 24, 27, 0.95) 0%,
    rgba(24, 24, 27, 0.98) 100%
  );
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(220, 238, 119, 0.1);
  position: sticky;
  top: 0;
  z-index: 9998;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.promo-banner {
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  color: #000000;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  z-index: -1;
}

.promo-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.promo-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: relative;
}

.promo-text {
  font-weight: 700;
  letter-spacing: 0.01em;
}

.promo-close {
  position: absolute;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
}

.promo-close:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  position: relative;
}

.logo {
  text-decoration: none;
  font-size: 24px;
  font-weight: 900;
  display: flex;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: -0.02em;
}

.logo-image {
  height: 32px;
  width: auto;
  margin-right: 12px;
  filter: brightness(0) invert(1);
  padding: 6px;
  border-radius: 6px;
  backdrop-filter: blur(10px);
}

.logo:hover {
  transform: scale(1.05);
}

.logo-text {
  -webkit-background-clip: text;
  background-color: white;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 32px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #d1d5db;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  position: relative;
}

.nav-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #dcee77, transparent);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  color: #dcee77;
  background: rgba(220, 238, 119, 0.05);
}

.nav-link:hover::before {
  transform: translateX(-50%) scaleX(1);
}

.dropdown-arrow {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.7;
}

.dropdown.open .dropdown-arrow {
  transform: rotate(180deg);
  opacity: 1;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(0);
  background: #18181b;
  border: 1px solid rgba(220, 238, 119, 0.2);
  border-radius: 12px;
  padding: 8px;
  min-width: 220px;
  z-index: 9999;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(220, 238, 119, 0.1);
  backdrop-filter: blur(20px);
  animation: dropdownSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes dropdownSlideIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.dropdown-item {
  display: block;
  padding: 12px 16px;
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.dropdown-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) scaleX(0);
  width: 3px;
  height: 60%;
  background: linear-gradient(180deg, #dcee77 0%, #c4d66a 100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0 2px 2px 0;
}

.dropdown-item:hover {
  background: rgba(220, 238, 119, 0.1);
  color: #dcee77;
  transform: translateX(4px);
  padding-left: 20px;
}

.dropdown-item:hover::before {
  transform: translateY(-50%) scaleX(1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-feedback {
  background: linear-gradient(135deg, #18181b 0%, #1a1a1e 100%);
  color: #dcee77;
  border: 1px solid rgba(220, 238, 119, 0.3);
  padding: 8px 14px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.btn-feedback::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(220, 238, 119, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.btn-feedback:hover::before {
  left: 100%;
}

.btn-feedback:hover {
  background: linear-gradient(135deg, #1a1a1e 0%, #1f1f23 100%);
  border-color: rgba(220, 238, 119, 0.5);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(220, 238, 119, 0.2);
  color: #e5e7eb;
}

.feedback-icon {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.btn-feedback:hover .feedback-icon {
  opacity: 1;
}

.feedback-count {
  background: linear-gradient(135deg, #dcee77 0%, #c4d66a 100%);
  color: #000000;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.02em;
  min-width: 32px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.feedback-text {
  font-weight: 600;
  letter-spacing: 0.01em;
}

.user-menu {
  position: relative;
}
.LOGO {
  height: 62px;
  width: auto;
  margin-right: 2px;
  filter: brightness(0) invert(1);
}
.user-avatar {
  background: none;
  border: 2px solid rgba(220, 238, 119, 0.3);
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.user-avatar:hover {
  border-color: #dcee77;
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(220, 238, 119, 0.3);
}

.user-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
}

.user-dropdown {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  background: linear-gradient(135deg, #18181b 0%, #1a1a1e 100%);
  border: 1px solid rgba(220, 238, 119, 0.2);
  border-radius: 12px;
  padding: 8px;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 50;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(220, 238, 119, 0.1);
  backdrop-filter: blur(20px);
}

.user-menu:hover .user-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.auth-buttons {
  display: flex;
  gap: 12px;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .header-content {
    height: 64px;
  }

  .logo {
    font-size: 20px;
  }

  .header-actions {
    gap: 12px;
  }

  .btn-feedback {
    padding: 6px 10px;
    font-size: 12px;
    gap: 4px;
  }

  .feedback-count {
    padding: 2px 6px;
    font-size: 10px;
    min-width: 28px;
  }

  .feedback-text {
    display: none;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .promo-banner {
    font-size: 12px;
    padding: 10px 0;
  }

  .btn-feedback span:last-child {
    display: none;
  }

  .feedback-count {
    padding: 2px 6px;
    font-size: 10px;
    min-width: 28px;
  }
}
</style>
