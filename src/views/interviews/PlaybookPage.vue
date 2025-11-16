<template>
  <div class="playbook-page">
    <div class="playbook-header">
      <div class="container">
        <h1>Front-End Interview Playbook</h1>
        <p>The definitive guide to front-end interviews. From algorithms to system design, we cover everything you need to know to land your dream job.</p>
      </div>
    </div>
    
    <div class="container">
      <div class="playbook-content">
        <aside class="playbook-sidebar">
          <h3>Table of Contents</h3>
          <nav>
            <ul>
              <li v-for="section in sections" :key="section.id">
                <a :href="`#${section.id}`" class="sidebar-link">
                  {{ section.title }}
                  <span v-if="!section.isFree" class="premium-badge">Premium</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main class="playbook-main">
          <section v-for="section in sections" :key="section.id" :id="section.id" class="playbook-section">
            <h2>{{ section.title }}</h2>
            
            <div v-if="section.isFree">
              <p>{{ section.content }}</p>
            </div>
            
            <div v-else data-ms-content="pln_yearly_premium_plan_id">
              <p>{{ section.content }}</p>
              
              <div data-ms-content-fallback class="premium-fallback">
                <h3>Unlock This Premium Guide</h3>
                <p>This is a premium guide. To access this section and all other premium content, please upgrade your plan.</p>
                <router-link to="/pricing" class="btn btn-premium">
                  Unlock Now
                </router-link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sections = ref([
  {
    id: 'introduction',
    title: 'Introduction',
    isFree: true,
    content: 'Welcome to the Front-End Interview Playbook! This guide is designed to be your comprehensive resource for preparing for front-end engineering interviews at all levels. We will cover the entire process, from the initial recruiter screen to the final on-site rounds.'
  },
  {
    id: 'coding-interviews',
    title: 'Coding Interviews',
    isFree: false,
    content: 'Coding interviews are a fundamental part of the process. In this section, we dive deep into the data structures and algorithms that are most relevant to front-end development. We will cover topics like arrays, strings, trees, and recursion, with a focus on practical application in JavaScript.'
  },
  {
    id: 'system-design',
    title: 'System Design',
    isFree: false,
    content: 'Front-end system design interviews test your ability to architect complex, scalable user interfaces. We will explore common patterns and trade-offs for building components like news feeds, image carousels, and typeaheads. This section will equip you with the vocabulary and frameworks to excel in these challenging rounds.'
  },
  {
    id: 'behavioral-interviews',
    title: 'Behavioral Interviews',
    isFree: true,
    content: 'Behavioral interviews are just as important as technical rounds. In this section, we will discuss how to effectively communicate your past experiences using the STAR method. We will also cover common questions about teamwork, leadership, and conflict resolution.'
  },
  {
    id: 'negotiation',
    title: 'Salary Negotiation',
    isFree: false,
    content: 'Congratulations on receiving an offer! This final section provides strategies for negotiating your salary and compensation package. We will cover how to research market rates, handle competing offers, and confidently advocate for your value.'
  }
])
</script>

<style scoped>
.playbook-page {
  background: #f8fafc;
}

.playbook-header {
  background: white;
  padding: 64px 0;
  border-bottom: 1px solid #e5e7eb;
  text-align: center;
}

.playbook-header h1 {
  font-size: 48px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.playbook-header p {
  font-size: 20px;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto;
}

.playbook-content {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 48px;
  padding: 64px 0;
}

.playbook-sidebar {
  position: sticky;
  top: 100px; /* Adjust based on nav height */
  align-self: start;
}

.playbook-sidebar h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1f2937;
}

.playbook-sidebar ul {
  list-style: none;
}

.sidebar-link {
  display: block;
  padding: 12px 16px;
  color: #4b5563;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.sidebar-link:hover {
  background: #e5e7eb;
  color: #1f2937;
}

.sidebar-link.active {
  background: #007bff;
  color: white;
}

.premium-badge {
  display: inline-block;
  margin-left: 8px;
  padding: 2px 8px;
  background: #fff7ed;
  color: #ea580c;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.playbook-main {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.playbook-section {
  padding: 48px;
  border-bottom: 1px solid #e5e7eb;
}

.playbook-section:last-child {
  border-bottom: none;
}

.playbook-section h2 {
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 24px;
}

.playbook-section p {
  font-size: 18px;
  line-height: 1.7;
  color: #4b5563;
}

.premium-fallback {
  margin-top: 32px;
  padding: 32px;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 12px;
  text-align: center;
}

.premium-fallback h3 {
  font-size: 24px;
  font-weight: 700;
  color: #ca8a04;
  margin-bottom: 16px;
}

.premium-fallback p {
  color: #a16207;
  margin-bottom: 24px;
}

.btn-premium {
  background: #ff6b35;
  color: white;
}

.btn-premium:hover {
  background: #e55a2b;
}

@media (max-width: 768px) {
  .playbook-content {
    grid-template-columns: 1fr;
  }
  
  .playbook-sidebar {
    position: static;
    margin-bottom: 48px;
  }
  
  .playbook-header h1 {
    font-size: 36px;
  }
  
  .playbook-section {
    padding: 32px;
  }
  
  .playbook-section h2 {
    font-size: 28px;
  }
}
</style>