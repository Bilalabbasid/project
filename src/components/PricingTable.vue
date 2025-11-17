<template>
  <div class="pricing-table">
    <div class="pricing-header">
      <h2>Choose Your Plan</h2>
      <p>Unlock your full potential with our comprehensive training platform</p>
    </div>
    
    <div class="pricing-cards">
      <div class="pricing-card">
        <div class="plan-header">
          <h3>Monthly</h3>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">29</span>
            <span class="period">/month</span>
          </div>
        </div>
        
        <ul class="features">
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Access to all Interview Prep content
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Access to all Project Challenges
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Premium support
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Cancel anytime
          </li>
        </ul>
        
        <button 
          class="btn plan-button" 
          data-ms-plan="pln_monthly_plan_id"
        >
          Get Started
        </button>
      </div>
      
      <div class="pricing-card featured">
        <div class="recommended-badge">Recommended</div>
        <div class="plan-header">
          <h3>Yearly</h3>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">199</span>
            <span class="period">/year</span>
          </div>
          <div class="savings">Save $149/year</div>
        </div>
        
        <ul class="features">
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Everything in Monthly plan
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Priority support
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Exclusive webinars & workshops
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Early access to new content
          </li>
        </ul>
        
        <button 
          class="btn plan-button featured-button" 
          data-ms-plan="pln_yearly_premium_plan_id"
        >
          Get Started
        </button>
      </div>
      
      <div class="pricing-card">
        <div class="plan-header">
          <h3>Lifetime</h3>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">499</span>
            <span class="period">one-time</span>
          </div>
        </div>
        
        <ul class="features">
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Everything in Yearly plan
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Lifetime access guarantee
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            All future content included
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            VIP Discord community access
          </li>
        </ul>
        
        <button 
          class="btn plan-button" 
          data-ms-plan="pln_lifetime_plan_id"
        >
          Get Lifetime Access
        </button>
      </div>
    </div>
    
    <div class="pricing-footer">
      <p>Includes access to all Interview Prep & Project Challenges</p>
      <p>30-day money-back guarantee on all plans</p>
    </div>
  </div>
</template>

<script setup>
// No reactive data needed for this component
</script>

<style scoped>
.pricing-table {
  padding: 80px 0;
}

.pricing-header {
  text-align: center;
  margin-bottom: 64px;
}

.pricing-header h2 {
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
}

.pricing-header p {
  font-size: 20px;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto;
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  background: #111827;
  border: 2px solid #374151;
  border-radius: 16px;
  padding: 32px;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: #efff94;
}

.pricing-card.featured {
  border-color: #efff94;
  transform: scale(1.05);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

.recommended-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #efff94;
  color: #000000;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}

.plan-header {
  text-align: center;
  margin-bottom: 32px;
}

.plan-header h3 {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  margin-bottom: 8px;
}

.currency {
  font-size: 24px;
  color: #9ca3af;
}

.amount {
  font-size: 56px;
  font-weight: 800;
  color: #ffffff;
}

.period {
  font-size: 18px;
  color: #9ca3af;
}

.savings {
  background: #efff94;
  color: #000000;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
}

.features {
  list-style: none;
  margin-bottom: 32px;
}

.features li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  color: #d1d5db;
}

.check-icon {
  width: 20px;
  height: 20px;
  color: #efff94;
  flex-shrink: 0;
}

.plan-button {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
}

.featured-button {
  background: #efff94;
  color: #000000;
}

.featured-button:hover {
  background: #d4e66a;
}

.pricing-footer {
  text-align: center;
  margin-top: 48px;
}

.pricing-footer p {
  color: #9ca3af;
  margin-bottom: 8px;
}

.pricing-footer p:first-child {
  font-weight: 600;
  font-size: 18px;
}

@media (max-width: 768px) {
  .pricing-header h2 {
    font-size: 36px;
  }
  
  .pricing-header p {
    font-size: 18px;
  }
  
  .pricing-cards {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .pricing-card.featured {
    transform: none;
  }
  
  .pricing-card.featured:hover {
    transform: translateY(-8px);
  }
}
</style>