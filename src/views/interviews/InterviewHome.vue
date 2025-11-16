<template>
  <div class="interview-home">
    <!-- Hero Section -->
    <section class="interview-hero">
      <div class="container">
        <div class="interview-hero-content">
          <h1>Prepare for Front-End Interviews</h1>
          <p>Master the skills and knowledge needed to ace interviews at top tech companies. From data structures to system design, we've got you covered.</p>
          <div class="hero-actions">
            <router-link to="/interviews/playbook" class="btn btn-primary">
              View the Playbook
            </router-link>
            <router-link to="/interviews/questions" class="btn btn-outline">
              Practice Questions
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Key Features Section -->
    <section class="key-features">
      <div class="container">
        <div class="section-header">
          <h2>Your Path to Interview Success</h2>
          <p>Structured resources to help you prepare efficiently and effectively</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Comprehensive Playbook</h3>
            <p>Our definitive guide covers every aspect of the front-end interview process, from initial screening to final rounds.</p>
            <router-link to="/interviews/playbook" class="feature-link">
              Explore the Playbook →
            </router-link>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3>Curated Practice Questions</h3>
            <p>Solve a wide range of questions that mirror what you'll face in real interviews at FAANG and other top companies.</p>
            <router-link to="/interviews/questions" class="feature-link">
              Browse Questions →
            </router-link>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A8.014 8.014 0 004 21h16a8.014 8.014 0 00-.572-5.572zM8 9a4 4 0 108 0v0a4 4 0 00-8 0v0z"/>
              </svg>
            </div>
            <h3>Expert-Led Explanations</h3>
            <p>Understand the 'why' behind every solution with detailed, step-by-step explanations from industry experts.</p>
            <router-link to="/interviews/questions" class="feature-link">
              Learn from the Best →
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="interview-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Ace Your Next Interview?</h2>
          <p>Unlock all our premium content and get the edge you need to succeed.</p>
          <div class="cta-actions">
            <router-link to="/pricing" class="btn btn-primary btn-large">
              Go Premium
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for this static page
</script>

<style scoped>
.interview-home {
  min-height: 100vh;
}

/* Hero Section */
.interview-hero {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
}

.interview-hero-content h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 24px;
}

.interview-hero-content p {
  font-size: 20px;
  max-width: 600px;
  margin: 0 auto 32px;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-primary {
  background: white;
  color: #007bff;
}

.btn-primary:hover {
  background: #f8fafc;
}

/* Key Features Section */
.key-features {
  padding: 120px 0;
  background: #f8fafc;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header h2 {
  font-size: 40px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.section-header p {
  font-size: 18px;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.feature-card {
  background: white;
  padding: 40px 32px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
}

.feature-icon svg {
  width: 40px;
  height: 40px;
}

.feature-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 24px;
}

.feature-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.feature-link:hover {
  color: #0056b3;
}

/* CTA Section */
.interview-cta {
  background: #1f2937;
  color: white;
  padding: 80px 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-large {
  padding: 16px 32px;
  font-size: 18px;
}

@media (max-width: 768px) {
  .interview-hero-content h1 {
    font-size: 36px;
  }
  
  .section-header h2 {
    font-size: 32px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>