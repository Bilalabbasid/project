<template>
  <div class="projects-home">
    <!-- Hero Section -->
    <section class="projects-hero">
      <div class="container">
        <div class="projects-hero-content">
          <h1>Build Real-World Projects</h1>
          <p>Go beyond tutorials and build a portfolio of impressive projects that showcase your skills to potential employers.</p>
          <div class="hero-actions">
            <router-link to="/projects/challenges" class="btn btn-primary">
              Browse Challenges
            </router-link>
            <router-link to="/projects/dashboard" class="btn btn-outline">
              My Dashboard
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Key Features Section -->
    <section class="key-features">
      <div class="container">
        <div class="section-header">
          <h2>From Concept to Completion</h2>
          <p>We provide everything you need to build high-quality projects</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Real-World Scenarios</h3>
            <p>Our challenges are based on real-world applications and components, giving you practical experience.</p>
            <router-link to="/projects/challenges" class="feature-link">
              View Challenges →
            </router-link>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3>Starter Files & Assets</h3>
            <p>Get a head start with professionally designed starter files, including all the assets you need to get building.</p>
            <router-link to="/projects/challenges" class="feature-link">
              Explore Starters →
            </router-link>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A8.014 8.014 0 004 21h16a8.014 8.014 0 00-.572-5.572zM8 9a4 4 0 108 0v0a4 4 0 00-8 0v0z"/>
              </svg>
            </div>
            <h3>Solution Walkthroughs</h3>
            <p>Compare your work with our expert solutions and learn new techniques and best practices along the way.</p>
            <router-link to="/projects/challenges" class="feature-link">
              See Solutions →
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="projects-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Build Your Portfolio?</h2>
          <p>Unlock all our premium projects and start building today.</p>
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
.projects-home {
  min-height: 100vh;
}

/* Hero Section */
.projects-hero {
  background: linear-gradient(135deg, #ff6b35 0%, #f7c59f 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
}

.projects-hero-content h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 24px;
}

.projects-hero-content p {
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
  color: #ff6b35;
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
  background: linear-gradient(135deg, #ff6b35, #f7c59f);
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
  color: #ff6b35;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.feature-link:hover {
  color: #e55a2b;
}

/* CTA Section */
.projects-cta {
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
  .projects-hero-content h1 {
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