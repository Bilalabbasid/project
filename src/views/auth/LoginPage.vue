<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h2>{{ isLogin ? "Welcome Back" : "Create Your Account" }}</h2>
          <p>
            {{
              isLogin
                ? "Log in to access your dashboard, challenges, and interview prep."
                : "Join thousands of developers and start your learning journey today."
            }}
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="you@example.com"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="••••••••"
            />
          </div>

          <button type="submit" class="btn auth-button">
            {{ isLogin ? "Log In" : "Create Account" }}
          </button>

          <div
            v-if="error"
            class="error-message"
            style="color: #ef4444; margin-top: 8px; text-align: center"
          >
            {{ error }}
          </div>
        </form>

        <div class="auth-footer">
          <p
            @click="toggleMode"
            style="cursor: pointer; margin-top: 10px; color: #dcee77"
          >
            {{
              isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Log In"
            }}
          </p>
          <p v-if="isLogin">
            <a href="#forgot-password" class="auth-link">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import memberstackDOM from "@memberstack/dom";
import { useToast } from "@/composables/useToast";

const router = useRouter();
const { showToast } = useToast();
const email = ref("");
const password = ref("");
const error = ref("");
const isLogin = ref(true); // Start with login mode
let memberstack;

onMounted(async () => {
  try {
    memberstack = await memberstackDOM.init({
      publicKey: import.meta.env.VITE_MEMBERSTACK_PUBLIC_KEY,
      useCookies: true,
    });
  } catch (err) {
    console.error("Memberstack initialization failed:", err);
  }
});

// Toggle between signup and login
const toggleMode = () => {
  isLogin.value = !isLogin.value;
  error.value = ""; // Clear any errors when switching modes
};

// Handle signup or login
const handleSubmit = async () => {
  error.value = "";

  if (!email.value || !password.value) {
    error.value = "Please fill in all fields";
    return;
  }

  if (!isLogin.value && password.value.length < 8) {
    error.value = "Password must be at least 8 characters";
    return;
  }

  try {
    let member;

    if (isLogin.value) {
      // Login
      member = await memberstack.loginMemberEmailPassword({
        email: email.value,
        password: password.value,
      });
      console.log("Login successful!", member);
      showToast("Welcome back! Login successful.", "success");
    } else {
      // Signup
      member = await memberstack.signupMemberEmailPassword({
        email: email.value,
        password: password.value,
      });
      console.log("Signup successful!", member);
      showToast("Account created successfully! Welcome aboard.", "success");
    }

    // Redirect after successful auth
    router.push("/dashboard");
  } catch (err) {
    console.error("Authentication failed:", err);
    error.value = err.message || "Authentication failed. Please try again.";
    showToast("Authentication failed. Please try again.", "error");
  }
};
</script>

<style scoped>
.auth-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 144px); /* Adjust for nav and footer height */
  background: #18181b;
  padding: 40px 0;
}

.auth-container {
  max-width: 600px;
  width: 100%;
  padding: 0 20px;
}

.auth-card {
  background: #18181b;
  padding: 48px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid #374151;
}

.auth-header {
  text-align: center;
  margin-bottom: 32px;
}

.auth-header h2 {
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;
}

.auth-header p {
  color: #9ca3af;
  font-size: 16px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #d1d5db;
  margin-bottom: 8px;
}

.form-group input {
  padding: 12px 16px;
  border: 1px solid #374151;
  border-radius: 8px;
  font-size: 16px;
  background: #1f2937;
  color: #ffffff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #18181b;
  box-shadow: 0 0 0 3px rgba(24, 24, 27, 0.25);
}

.form-group input::placeholder {
  color: #6b7280;
}

.auth-button {
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 8px;
  background-color: #dcee77;
  color: #000000;
  border: 1px solid #374151;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-button:hover {
  background-color: #c4d66a;
}

.auth-footer {
  text-align: center;
  margin-top: 24px;
  color: #9ca3af;
}

.auth-footer p {
  margin-bottom: 8px;
}

.auth-link {
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.auth-link:hover {
  color: #d1d5db;
}
</style>
