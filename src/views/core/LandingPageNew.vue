<script setup>
import { ref } from 'vue'
import CodingDemo from '@/components/CodingDemo.vue'

const stats = ref({
  questions: '200+',
  engineers: '1M+',
  verifiedBy: 'Google Analytics'
})

const companyLogos = [
  { name: 'Google', logo: '🔗' },
  { name: 'Amazon', logo: '📦' },
  { name: 'Meta', logo: '👥' },
  { name: 'Apple', logo: '🍎' },
  { name: 'Microsoft', logo: '🪟' }
]
</script>

<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-left">
            <!-- New Badge -->
            <div class="new-badge">
              <span class="badge-text">NEW</span>
              <span class="badge-link">Advertise with us →</span>
            </div>

            <!-- Main Headline -->
            <h1 class="hero-title">
              Navigate front end<br>
              interviews with ease
            </h1>

            <!-- Subtitle -->
            <p class="hero-subtitle">
              Meet the <strong>front end interview prep platform</strong> built to make your
              interviews much easier. By Big Tech ex-interviewers at 
              <span class="company-badges">
                <span class="company-badge">Google</span>
                <span class="company-badge">Amazon</span>
                <span class="company-badge">Meta</span>
              </span>
            </p>

            <!-- CTA Button -->
            <div class="hero-cta">
              <router-link to="/signup" class="btn-primary btn-large">
                Get started now →
              </router-link>
              <p class="cta-note">{{ stats.questions }} questions are free to do</p>
            </div>

            <!-- Social Proof -->
            <div class="social-proof">
              <div class="avatars">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User" class="avatar" />
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="User" class="avatar" />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" class="avatar" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" alt="User" class="avatar" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="User" class="avatar" />
                <span class="avatar-more">+</span>
              </div>
              <div class="proof-text">
                <strong>{{ stats.engineers }} engineers already on board</strong>
                <div class="verification">
                  <span class="verification-icon">📊</span>
                  <span>Verifiable by {{ stats.verifiedBy }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-right">
            <CodingDemo />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-header">
            <div class="section-badges">
              <span class="section-badge">UI components</span>
              <span class="section-badge active">JavaScript functions</span>
              <span class="section-badge">System design</span>
              <span class="section-badge">Quiz</span>
            </div>
          </div>

          <h2 class="about-title">
            We're crafting GreatFrontEnd with passion,<br>
            precision and quality.
          </h2>

          <div class="testimonial">
            <div class="testimonial-content">
              <p class="testimonial-quote">
                "Over my career, I have conducted over hundreds of interviews at Meta and have personally received offers from companies like Meta, Google, OpenAI, xAI, Airbnb, Lyft, Dropbox, etc. and I understand the challenges that front end engineers face when preparing for interviews.
              </p>
              <p class="testimonial-quote">
                GreatFrontEnd is the culmination of my experience and knowledge in the front end domain to help fellow engineers efficiently and adequately prepare for front end interviews.
              </p>
              <p class="testimonial-quote">
                The best part about GreatFrontEnd is that all users emerge as better Front End Engineers after using the platform."
              </p>
            </div>
            
            <div class="testimonial-author">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Yangshun Tay" class="author-avatar" />
              <div class="author-info">
                <div class="author-name">Yangshun Tay</div>
                <div class="author-title">Founder, CEO of GreatFrontEnd</div>
                <div class="author-subtitle">Ex-Staff Engineer, Meta. Author of Blind 75 and Docusaurus 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.landing-page {
  background-color: #0a0a0a;
  color: #ffffff;
}

.hero {
  padding: 4rem 0 6rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #111827 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-left {
  max-width: 600px;
}

.new-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(45deg, #22c55e, #16a34a);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.badge-text {
  color: #000;
  font-weight: 700;
}

.badge-link {
  color: #000;
  text-decoration: none;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #d1d5db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #d1d5db;
  margin-bottom: 2rem;
}

.company-badges {
  display: inline-flex;
  gap: 0.5rem;
  margin-left: 0.5rem;
}

.company-badge {
  background: #374151;
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
}

.hero-cta {
  margin-bottom: 3rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  display: inline-block;
}

.cta-note {
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0;
}

.social-proof {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatars {
  display: flex;
  align-items: center;
}

.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 2px solid #0a0a0a;
  margin-left: -0.5rem;
}

.avatar:first-child {
  margin-left: 0;
}

.avatar-more {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
  margin-left: -0.5rem;
  border: 2px solid #0a0a0a;
}

.proof-text {
  color: #d1d5db;
  font-size: 0.875rem;
}

.verification {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #9ca3af;
  margin-top: 0.25rem;
}

.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-section {
  padding: 4rem 0;
  background-color: #111827;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.section-badge {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background: #374151;
  color: #d1d5db;
  transition: all 0.2s;
}

.section-badge.active {
  background: #22c55e;
  color: #000;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #ffffff 0%, #d1d5db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.testimonial {
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-quote {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.author-avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.author-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.author-title {
  color: #22c55e;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.author-subtitle {
  color: #9ca3af;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-badges {
    flex-wrap: wrap;
  }
  
  .about-title {
    font-size: 2rem;
  }
  
  .testimonial-author {
    flex-direction: column;
    text-align: center;
  }
}
</style>