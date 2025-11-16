<template>
  <div class="challenge-detail-page">
    <div class="challenge-header">
      <div class="container">
        <h1>{{ challenge.title }}</h1>
        <p>{{ challenge.description }}</p>
        <div class="challenge-meta">
          <span class="level-badge" :class="`level-${challenge.level.toLowerCase()}`">
            {{ challenge.level }}
          </span>
          <span v-if="challenge.isPremium" class="premium-badge">
            Premium
          </span>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="challenge-content">
        <div class="challenge-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id" 
            class="tab-button" 
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            {{ tab.name }}
          </button>
        </div>
        
        <div class="tab-content">
          <!-- Requirements Tab -->
          <div v-if="activeTab === 'requirements'" class="tab-pane">
            <h2>Project Requirements</h2>
            <p>Your task is to build out the project as per the provided designs and specifications. You should aim to match the design as closely as possible and ensure all functionality is implemented correctly.</p>
            
            <h3>User Stories</h3>
            <ul>
              <li v-for="story in challenge.userStories" :key="story">{{ story }}</li>
            </ul>
            
            <h3>Assets</h3>
            <p>You can find all the necessary assets, such as images and fonts, in the starter files. The starter files also include a style guide with color palettes and typography details.</p>
          </div>
          
          <!-- Solution Tab -->
          <div v-if="activeTab === 'solution'" class="tab-pane">
            <div v-if="!challenge.isPremium" class="solution-content">
              <h2>Solution Walkthrough</h2>
              <p>Here is a step-by-step guide to building the {{ challenge.title }} project. You can compare this with your own solution to learn new techniques and best practices.</p>
              <!-- Placeholder for solution content -->
            </div>
            
            <div v-else data-ms-content="pln_yearly_premium_plan_id">
              <div class="solution-content">
                <h2>Solution Walkthrough</h2>
                <p>Here is a step-by-step guide to building the {{ challenge.title }} project. You can compare this with your own solution to learn new techniques and best practices.</p>
                <!-- Placeholder for premium solution content -->
              </div>
              
              <div data-ms-content-fallback class="premium-fallback">
                <h3>Unlock This Solution</h3>
                <p>This is a premium solution. To access the complete walkthrough and starter files, please upgrade your plan.</p>
                <router-link to="/pricing" class="btn btn-premium">
                  Unlock Now
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const challengeId = route.params.id

const challenges = ref({
  'testimonial-card': {
    id: 'testimonial-card',
    title: 'Testimonial Card',
    description: 'Build a simple user testimonial card component.',
    level: 'Starter',
    isPremium: false,
    userStories: [
      'I can see the user\'s avatar, name, and title.',
      'I can read the user\'s testimonial.',
      'The component is responsive and looks good on all screen sizes.'
    ]
  },
  'blog-card': {
    id: 'blog-card',
    title: 'Blog Card',
    description: 'Build a simple blog card component.',
    level: 'Starter',
    isPremium: true,
    userStories: [
      'I can see the blog post\'s image, category, title, and author.',
      'The component has a hover effect.',
      'The component is responsive.'
    ]
  }
})

const challenge = computed(() => challenges.value[challengeId] || {})

const tabs = ref([
  { id: 'requirements', name: 'Requirements' },
  { id: 'solution', name: 'Solution' }
])

const activeTab = ref('requirements')
</script>

<style scoped>
.challenge-detail-page {
  background: #f8fafc;
}

.challenge-header {
  background: white;
  padding: 64px 0;
  border-bottom: 1px solid #e5e7eb;
  text-align: center;
}

.challenge-header h1 {
  font-size: 48px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.challenge-header p {
  font-size: 20px;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto 24px;
}

.challenge-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.level-badge {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.level-starter {
  background: #dcfce7;
  color: #166534;
}

.premium-badge {
  padding: 4px 12px;
  background: #fff7ed;
  color: #ea580c;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
}

.challenge-content {
  padding: 64px 0;
  max-width: 900px;
  margin: 0 auto;
}

.challenge-tabs {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 32px;
}

.tab-button {
  padding: 12px 24px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 18px;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button:hover {
  color: #1f2937;
}

.tab-button.active {
  color: #007bff;
  border-bottom-color: #007bff;
}

.tab-pane {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.tab-pane h2 {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 24px;
}

.tab-pane p {
  font-size: 18px;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 16px;
}

.tab-pane h3 {
  font-size: 22px;
  font-weight: 600;
  color: #1f2937;
  margin-top: 32px;
  margin-bottom: 16px;
}

.tab-pane ul {
  list-style-position: inside;
  padding-left: 20px;
}

.tab-pane ul li {
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 8px;
  line-height: 1.7;
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
  .challenge-header h1 {
    font-size: 36px;
  }
  
  .tab-button {
    padding: 12px 16px;
    font-size: 16px;
  }
}
</style>