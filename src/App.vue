<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  background-color: #18181b;
  color: #ffffff;
}

#app {
  min-height: 100vh;
}

main {
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.btn-primary {
  background-color: #efff94;
  color: #000000;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-primary:hover {
  background-color: #d4e66a;
}

.btn-secondary {
  background-color: transparent;
  color: #6b7280;
  padding: 0.75rem 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-secondary:hover {
  background-color: #f8fafc;
  border-color: #d1d5db;
  color: #1a1a1a;
}

/* Green accent color for highlights */
.text-green {
  color: #efff94;
}

.bg-green {
  background-color: #efff94;
}

/* Dark theme utilities */
.bg-dark {
  background-color: #0a0a0a;
}

.bg-dark-secondary {
  background-color: #111827;
}

.text-gray-400 {
  color: #9ca3af;
}

.text-gray-300 {
  color: #d1d5db;
}

.border-gray-700 {
  border-color: #374151;
}

.border-gray-600 {
  border-color: #4b5563;
}

.card {
  background: #111827;
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #374151;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
}

.text-center {
  text-align: center;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.mt-4 {
  margin-top: 1.5rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }
}
</style>