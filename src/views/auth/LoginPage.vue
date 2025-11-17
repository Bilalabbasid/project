<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h2>Welcome Back</h2>
          <p>Log in to access your dashboard, challenges, and interview prep.</p>
        </div>
        
        <form data-ms-form="login" @submit.prevent="handleSubmit" class="auth-form">
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
            Log In
          </button>
        </form>
        
        <div class="auth-footer">
          <p>
            Don't have an account? 
            <router-link to="/signup" class="auth-link">Sign Up</router-link>
          </p>
          <p>
            <a href="#forgot-password" class="auth-link">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  // Memberstack handles the form submission via the data-ms-form attribute.
  // This function is here to demonstrate the use of the Composition API.
  // In a real application, you might add client-side validation here.
  console.log('Form submitted with:', email.value, password.value)
}
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
  max-width: 450px;
  width: 100%;
  padding: 0 20px;
}

.auth-card {
  background: #111827;
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
  border-color: #efff94;
  box-shadow: 0 0 0 3px rgba(239, 255, 148, 0.25);
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
  color: #efff94;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.auth-link:hover {
  color: #d4e66a;
}
</style>