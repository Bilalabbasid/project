<template>
  <div class="challenge-card">
    <div class="challenge-header">
      <div class="challenge-meta">
        <span class="level-badge" :class="`level-${challenge.level.toLowerCase()}`">
          {{ challenge.level }}
        </span>
        <span v-if="challenge.isPremium" class="premium-badge">
          <svg class="crown-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clip-rule="evenodd" />
          </svg>
          Premium
        </span>
      </div>
      <h3>{{ challenge.title }}</h3>
      <p>{{ challenge.description }}</p>
    </div>
    
    <div class="challenge-body">
      <div class="challenge-skills" v-if="challenge.skills">
        <h4>Skills you'll practice:</h4>
        <div class="skills-list">
          <span v-for="skill in challenge.skills" :key="skill" class="skill-tag">
            {{ skill }}
          </span>
        </div>
      </div>
      
      <div class="challenge-difficulty" v-if="challenge.estimatedTime">
        <div class="difficulty-item">
          <svg class="clock-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
          </svg>
          <span>{{ challenge.estimatedTime }}</span>
        </div>
      </div>
    </div>
    
    <div class="challenge-footer">
      <router-link 
        :to="`/projects/challenges/${challenge.id}`" 
        class="btn challenge-button"
        :class="{ 'btn-premium': challenge.isPremium }"
      >
        Go to project
        <svg class="arrow-icon" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  challenge: {
    type: Object,
    required: true,
    validator(value) {
      return value && typeof value.title === 'string' && typeof value.description === 'string'
    }
  }
})
</script>

<style scoped>
.challenge-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.challenge-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-color: #007bff;
}

.challenge-header {
  margin-bottom: 20px;
}

.challenge-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
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

.level-intermediate {
  background: #fef3c7;
  color: #92400e;
}

.level-advanced {
  background: #fee2e2;
  color: #991b1b;
}

.premium-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #fff7ed;
  color: #ea580c;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.crown-icon {
  width: 14px;
  height: 14px;
}

.challenge-header h3 {
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
}

.challenge-header p {
  color: #6b7280;
  line-height: 1.5;
}

.challenge-body {
  flex: 1;
  margin-bottom: 20px;
}

.challenge-skills {
  margin-bottom: 16px;
}

.challenge-skills h4 {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  padding: 2px 8px;
  background: #f3f4f6;
  color: #4b5563;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
}

.challenge-difficulty {
  display: flex;
  align-items: center;
  gap: 16px;
}

.difficulty-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #6b7280;
  font-size: 14px;
}

.clock-icon {
  width: 16px;
  height: 16px;
}

.challenge-footer {
  margin-top: auto;
}

.challenge-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  font-weight: 600;
  text-decoration: none;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.challenge-button:hover .arrow-icon {
  transform: translateX(4px);
}

.btn-premium {
  background: #ff6b35;
  color: white;
}

.btn-premium:hover {
  background: #e55a2b;
}
</style>