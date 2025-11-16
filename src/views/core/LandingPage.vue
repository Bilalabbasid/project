<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Navigate Your Tech Career with Ease</h1>
            <p>From FAANG-level interview prep to real-world project challenges, get the skills you need to land your dream tech job and excel in your career.</p>
            
            <div class="hero-actions">
              <router-link to="/interviews" class="btn btn-primary">
                Explore Interviews
              </router-link>
              <router-link to="/projects" class="btn btn-outline">
                Explore Projects
              </router-link>
            </div>
            
            <div class="hero-stats">
              <div class="stat">
                <div class="stat-number">10,000+</div>
                <div class="stat-label">Developers Trained</div>
              </div>
              <div class="stat">
                <div class="stat-number">500+</div>
                <div class="stat-label">Practice Questions</div>
              </div>
              <div class="stat">
                <div class="stat-number">100+</div>
                <div class="stat-label">Project Challenges</div>
              </div>
            </div>
          </div>
          
          <div class="hero-visual">
            <div class="code-window">
              <div class="window-header">
                <div class="window-controls">
                  <span class="control red"></span>
                  <span class="control yellow"></span>
                  <span class="control green"></span>
                </div>
                <div class="window-title">interview-prep.js</div>
              </div>
              <div class="code-content">
                <div class="code-line">
                  <span class="line-number">1</span>
                  <span class="code-text">
                    <span class="keyword">function</span> 
                    <span class="function-name">landDreamJob</span>() {
                  </span>
                </div>
                <div class="code-line">
                  <span class="line-number">2</span>
                  <span class="code-text">
                    &nbsp;&nbsp;<span class="keyword">const</span> 
                    <span class="variable">skills</span> = 
                    <span class="function-name">practiceDaily</span>();
                  </span>
                </div>
                <div class="code-line">
                  <span class="line-number">3</span>
                  <span class="code-text">
                    &nbsp;&nbsp;<span class="keyword">const</span> 
                    <span class="variable">portfolio</span> = 
                    <span class="function-name">buildProjects</span>();
                  </span>
                </div>
                <div class="code-line">
                  <span class="line-number">4</span>
                  <span class="code-text">
                    &nbsp;&nbsp;<span class="keyword">return</span> 
                    <span class="variable">skills</span> + 
                    <span class="variable">portfolio</span>;
                  </span>
                </div>
                <div class="code-line">
                  <span class="line-number">5</span>
                  <span class="code-text">}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>Everything You Need to Succeed</h2>
          <p>Comprehensive resources designed by industry experts to accelerate your tech career</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Interview Playbooks</h3>
            <p>Tackle any interview with our definitive guides covering everything from behavioral questions to system design. Get the insider knowledge that hiring managers look for.</p>
            <router-link to="/interviews/playbook" class="feature-link">
              View Playbooks →
            </router-link>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3>Practice Questions</h3>
            <p>Master coding interviews with our carefully curated collection of questions used by top tech companies. From algorithms to data structures, we've got you covered.</p>
            <router-link to="/interviews/questions" class="feature-link">
              Start Practicing →
            </router-link>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A8.014 8.014 0 004 21h16a8.014 8.014 0 00-.572-5.572zM8 9a4 4 0 108 0v0a4 4 0 00-8 0v0z"/>
              </svg>
            </div>
            <h3>Project Challenges</h3>
            <p>Build your portfolio by creating real, high-quality projects that showcase your skills to potential employers. From simple components to full applications.</p>
            <router-link to="/projects/challenges" class="feature-link">
              Browse Projects →
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Social Proof Section -->
    <section class="social-proof">
      <div class="container">
        <div class="section-header">
          <h2>Trusted by Developers Worldwide</h2>
          <p>Join thousands of developers who have advanced their careers with our platform</p>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              "The interview playbook helped me land my dream job at Google. The system design section was particularly valuable for senior-level interviews."
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">SJ</div>
              <div class="author-info">
                <div class="author-name">Sarah Johnson</div>
                <div class="author-title">Senior Engineer at Google</div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              "The project challenges are incredibly well-designed. They helped me build a portfolio that stood out to recruiters and hiring managers."
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">MC</div>
              <div class="author-info">
                <div class="author-name">Mike Chen</div>
                <div class="author-title">Full Stack Developer at Meta</div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              "As a career changer, this platform gave me the confidence and skills I needed to break into tech. The structure and guidance are unmatched."
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">ER</div>
              <div class="author-info">
                <div class="author-name">Emily Rodriguez</div>
                <div class="author-title">Frontend Engineer at Netflix</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="container">
        <PricingTable />
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Accelerate Your Tech Career?</h2>
          <p>Join thousands of developers who are already advancing their careers with our comprehensive training platform.</p>
          <div class="cta-actions">
            <router-link to="/signup" class="btn btn-primary btn-large">
              Get Started Today
            </router-link>
            <router-link to="/pricing" class="btn btn-outline btn-large">
              View Pricing
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PricingTable from '@/components/PricingTable.vue'
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}

.hero-text p {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 32px;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  background: #f8fafc;
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  gap: 48px;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.8;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-window {
  background: #1e293b;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
}

.window-header {
  background: #334155;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.window-controls {
  display: flex;
  gap: 8px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red { background: #ef4444; }
.control.yellow { background: #f59e0b; }
.control.green { background: #10b981; }

.window-title {
  color: #e2e8f0;
  font-size: 14px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
}

.code-content {
  padding: 20px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.code-line {
  display: flex;
  align-items: center;
}

.line-number {
  color: #64748b;
  margin-right: 16px;
  user-select: none;
}

.code-text {
  color: #e2e8f0;
}

.keyword { color: #c084fc; }
.function-name { color: #60a5fa; }
.variable { color: #34d399; }

/* Features Section */
.features {
  padding: 120px 0;
  background: #f8fafc;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header h2 {
  font-size: 48px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.section-header p {
  font-size: 20px;
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
  background: linear-gradient(135deg, #667eea, #764ba2);
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

/* Social Proof Section */
.social-proof {
  padding: 120px 0;
  background: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.testimonial-card {
  background: #f8fafc;
  padding: 32px;
  border-radius: 16px;
  border-left: 4px solid #007bff;
}

.testimonial-content {
  font-size: 18px;
  line-height: 1.6;
  color: #374151;
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}

.author-name {
  font-weight: 600;
  color: #1f2937;
}

.author-title {
  color: #6b7280;
  font-size: 14px;
}

/* Pricing Section */
.pricing-section {
  background: #f8fafc;
}

/* CTA Section */
.cta {
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

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 48px;
    text-align: center;
  }
  
  .hero-text h1 {
    font-size: 40px;
  }
  
  .hero-stats {
    justify-content: center;
    gap: 32px;
  }
  
  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header h2 {
    font-size: 36px;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>