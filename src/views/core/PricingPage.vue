<template>
  <div class="pricing-page">
    <!-- Hero Section -->
    <section class="pricing-hero">
      <div class="container">
        <div class="pricing-hero-content">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that works best for your learning journey. All plans include access to our complete library of interview prep materials and project challenges.</p>
        </div>
      </div>
    </section>
    
    <!-- Pricing Table Section -->
    <section class="pricing-main">
      <div class="container">
        <PricingTable />
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our pricing and features</p>
        </div>
        
        <div class="faq-grid">
          <div class="faq-item" v-for="faq in faqs" :key="faq.id">
            <h3>{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Feature Comparison Section -->
    <section class="feature-comparison">
      <div class="container">
        <div class="section-header">
          <h2>What's Included</h2>
          <p>Detailed breakdown of features available in each plan</p>
        </div>
        
        <div class="comparison-table">
          <div class="comparison-header">
            <div class="feature-column">Features</div>
            <div class="plan-column">Monthly</div>
            <div class="plan-column">Yearly</div>
            <div class="plan-column">Lifetime</div>
          </div>
          
          <div class="comparison-row" v-for="feature in features" :key="feature.name">
            <div class="feature-name">{{ feature.name }}</div>
            <div class="feature-check">
              <svg v-if="feature.monthly" class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span v-else class="cross-icon">×</span>
            </div>
            <div class="feature-check">
              <svg v-if="feature.yearly" class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span v-else class="cross-icon">×</span>
            </div>
            <div class="feature-check">
              <svg v-if="feature.lifetime" class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span v-else class="cross-icon">×</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="pricing-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of developers who are already advancing their careers with our platform.</p>
          <div class="cta-actions">
            <router-link to="/signup" class="btn btn-primary btn-large">
              Start Free Trial
            </router-link>
            <router-link to="/interviews" class="btn btn-outline btn-large">
              Explore Content
            </router-link>
          </div>
          <p class="guarantee">30-day money-back guarantee • Cancel anytime</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PricingTable from '@/components/PricingTable.vue'

const faqs = ref([
  {
    id: 1,
    question: "What's included in the free trial?",
    answer: "Our free trial gives you access to a selection of our interview prep materials and project challenges for 7 days. You can explore our platform and see the quality of our content before committing to a paid plan."
  },
  {
    id: 2,
    question: "Can I switch between plans?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference immediately. If you downgrade, the change will take effect at the start of your next billing cycle."
  },
  {
    id: 3,
    question: "Is there a money-back guarantee?",
    answer: "Absolutely! We offer a 30-day money-back guarantee on all our plans. If you're not completely satisfied with our platform, contact us within 30 days of your purchase for a full refund."
  },
  {
    id: 4,
    question: "Do you offer student discounts?",
    answer: "Yes! We offer a 50% student discount on all our plans. Contact our support team with your student ID or .edu email address to apply for the discount."
  },
  {
    id: 5,
    question: "How often is new content added?",
    answer: "We add new interview questions and project challenges weekly. Our team continuously updates our content library based on the latest industry trends and feedback from our community."
  },
  {
    id: 6,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won't be charged for subsequent periods."
  }
])

const features = ref([
  { name: "All Interview Prep Content", monthly: true, yearly: true, lifetime: true },
  { name: "All Project Challenges", monthly: true, yearly: true, lifetime: true },
  { name: "Progress Tracking", monthly: true, yearly: true, lifetime: true },
  { name: "Community Access", monthly: true, yearly: true, lifetime: true },
  { name: "Premium Support", monthly: true, yearly: true, lifetime: true },
  { name: "Priority Support", monthly: false, yearly: true, lifetime: true },
  { name: "Exclusive Webinars", monthly: false, yearly: true, lifetime: true },
  { name: "Early Content Access", monthly: false, yearly: true, lifetime: true },
  { name: "VIP Discord Channel", monthly: false, yearly: false, lifetime: true },
  { name: "1-on-1 Mentorship", monthly: false, yearly: false, lifetime: true }
])
</script>

<style scoped>
.pricing-page {
  min-height: 100vh;
  background: #18181b;
}

/* Hero Section */
.pricing-hero {
  background: #18181b;
  color: #ffffff;
  padding: 120px 0 80px;
  text-align: center;
}

.pricing-hero-content h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 24px;
}

.pricing-hero-content p {
  font-size: 20px;
  max-width: 600px;
  margin: 0 auto;
  color: #d1d5db;
  line-height: 1.6;
}

/* Main Pricing Section */
.pricing-main {
  background: #18181b;
}

/* FAQ Section */
.faq-section {
  padding: 120px 0;
  background: #18181b;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header h2 {
  font-size: 40px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
}

.section-header p {
  font-size: 18px;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
}

.faq-item {
  background: #111827;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border: 1px solid #374151;
}

.faq-item h3 {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.faq-item p {
  color: #9ca3af;
  line-height: 1.6;
}

/* Feature Comparison */
.feature-comparison {
  padding: 120px 0;
  background: #18181b;
}

.comparison-table {
  background: #111827;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border: 1px solid #374151;
}

.comparison-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background: #1f2937;
  padding: 24px;
  border-bottom: 1px solid #374151;
}

.feature-column {
  font-weight: 700;
  color: #ffffff;
  font-size: 18px;
}

.plan-column {
  text-align: center;
  font-weight: 600;
  color: #efff94;
  font-size: 16px;
}

.comparison-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 20px 24px;
  border-bottom: 1px solid #374151;
  align-items: center;
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-row:nth-child(even) {
  background: #1f2937;
}

.feature-name {
  font-weight: 500;
  color: #d1d5db;
}

.feature-check {
  display: flex;
  justify-content: center;
  align-items: center;
}

.check-icon {
  width: 20px;
  height: 20px;
  color: #efff94;
}

.cross-icon {
  color: #ef4444;
  font-size: 20px;
  font-weight: 600;
}

/* CTA Section */
.pricing-cta {
  background: #18181b;
  color: #ffffff;
  padding: 80px 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 18px;
  color: #d1d5db;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 24px;
}

.btn-large {
  padding: 16px 32px;
  font-size: 18px;
}

.guarantee {
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .pricing-hero-content h1 {
    font-size: 36px;
  }
  
  .pricing-hero-content p {
    font-size: 18px;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .comparison-header,
  .comparison-row {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    font-size: 14px;
  }
  
  .feature-column,
  .plan-column {
    font-size: 14px;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .section-header h2 {
    font-size: 32px;
  }
}
</style>