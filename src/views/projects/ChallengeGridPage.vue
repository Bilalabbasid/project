<template>
  <div class="challenge-grid-page">
    <div class="challenge-grid-header">
      <div class="container">
        <h1>Project Challenges</h1>
        <p>A collection of real-world projects to help you build your portfolio and showcase your skills.</p>
      </div>
    </div>
    
    <div class="container">
      <div class="challenge-grid-content">
        <div class="challenge-grid">
          <ChallengeCard 
            v-for="challenge in challenges" 
            :key="challenge.id" 
            :challenge="challenge" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChallengeCard from '@/components/ChallengeCard.vue'

const challenges = ref([
  {
    id: 'testimonial-card',
    title: 'Testimonial Card',
    description: 'Build a simple user testimonial card component, a common feature in marketing websites.',
    level: 'Starter',
    isPremium: false,
    skills: ['HTML', 'CSS', 'Flexbox'],
    estimatedTime: '1-2 hours'
  },
  {
    id: 'blog-card',
    title: 'Blog Card',
    description: 'Create a responsive blog card component, perfect for showcasing articles on a homepage or blog index.',
    level: 'Starter',
    isPremium: true,
    skills: ['HTML', 'CSS', 'Responsive Design'],
    estimatedTime: '2-3 hours'
  },
  {
    id: 'pricing-table',
    title: 'Pricing Table',
    description: 'Design and build a responsive pricing table, a crucial component for any SaaS or subscription-based product.',
    level: 'Intermediate',
    isPremium: true,
    skills: ['Vue.js', 'CSS Grid', 'State Management'],
    estimatedTime: '4-6 hours'
  },
  {
    id: 'e-commerce-product-page',
    title: 'E-commerce Product Page',
    description: 'Build a detailed product page for an e-commerce site, complete with image gallery, variants, and add-to-cart functionality.',
    level: 'Advanced',
    isPremium: true,
    skills: ['Vue.js', 'API Integration', 'State Management'],
    estimatedTime: '8-12 hours'
  }
])
</script>

<style scoped>
.challenge-grid-page {
  background: #f8fafc;
  min-height: calc(100vh - 144px);
}

.challenge-grid-header {
  background: white;
  padding: 64px 0;
  border-bottom: 1px solid #e5e7eb;
  text-align: center;
}

.challenge-grid-header h1 {
  font-size: 48px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.challenge-grid-header p {
  font-size: 20px;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto;
}

.challenge-grid-content {
  padding: 64px 0;
}

.challenge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

@media (max-width: 768px) {
  .challenge-grid-header h1 {
    font-size: 36px;
  }
  
  .challenge-grid {
    grid-template-columns: 1fr;
  }
}
</style>