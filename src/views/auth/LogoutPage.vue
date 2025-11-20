<template>
  <div class="logout-page">
    <div class="container">
      <div class="logout-content">
        <div class="logout-card">
          <div class="logout-icon">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="#d1d5db"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 17L21 12L16 7"
                stroke="#d1d5db"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 12H9"
                stroke="#d1d5db"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h1 class="logout-title">Logging you out...</h1>
          <p class="logout-message">
            Please wait while we securely log you out of your account.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(async () => {
  try {
    // Logout from Memberstack if available
    if (window.memberstack && window.memberstack.logout) {
      await window.memberstack.logout();
    }

    // Clear login status from localStorage
    localStorage.removeItem("isLoggedIn");

    // Show success message (you can integrate with your toast system here)
    console.log("Successfully logged out");

    // Redirect to home page after a short delay
    setTimeout(() => {
      router.push("/");
    }, 2000);
  } catch (error) {
    console.error("Logout failed:", error);
    // Still clear localStorage and redirect even if Memberstack logout fails
    localStorage.removeItem("isLoggedIn");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }
});
</script>

<style scoped>
.logout-page {
  min-height: 100vh;
  background: #18181b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.logout-content {
  max-width: 500px;
  width: 100%;
}

.logout-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 16px;
  padding: 48px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.logout-icon {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.logout-title {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.logout-message {
  color: #9ca3af;
  font-size: 16px;
  line-height: 1.5;
}
</style>
