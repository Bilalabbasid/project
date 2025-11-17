<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Practice</h4>
          <ul>
            <li><router-link to="/interviews">Get started</router-link></li>
            <li><router-link to="/interviews/questions">JavaScript functions</router-link></li>
            <li><router-link to="/interviews">User interface coding</router-link></li>
            <li><router-link to="/interviews">System design</router-link></li>
            <li><router-link to="/interviews">Quiz</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Guides</h4>
          <ul>
            <li><a href="#">Front End Interview Playbook</a></li>
            <li><a href="#">Front End System Design Playbook</a></li>
            <li><a href="#">React Interview Playbook</a></li>
            <li><a href="#">Behavioral Interview Playbook</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Study Plans</h4>
          <ul>
            <li><a href="#">1 Week Plan</a></li>
            <li><a href="#">1 Month Plan</a></li>
            <li><a href="#">3 Months Plan</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Company</h4>
          <ul>
            <li><router-link to="/pricing">Pricing</router-link></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Advertise with us</a></li>
            <li><a href="#">Become an affiliate</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Medium</a></li>
            <li><a href="#">DEV Community</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-newsletter">
        <h4>Subscribe to our newsletter</h4>
        <div class="newsletter-form">
          <input 
            type="email" 
            placeholder="Email" 
            class="newsletter-input"
            v-model="email"
          />
          <button class="newsletter-button" @click="subscribe">Notify me</button>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="social-links">
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://discord.com" target="_blank" aria-label="Discord" rel="noopener noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter / X" rel="noopener noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
        <div class="footer-copyright">
          <p>&copy; 2025 Codeney Pte Ltd. All rights reserved.</p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const subscribe = () => {
  if (email.value) {
    alert(`Thank you for subscribing with ${email.value}!`)
    email.value = ''
  }
}
</script>

<style scoped>
.footer {
  background: #18181b;
  border-top: 1px solid #1f2937;
  padding: 64px 0 32px;
  margin-top: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  margin-bottom: 48px;
}

.footer-section h4 {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 12px;
}

.footer-section a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #efff94;
}

.footer-newsletter {
  padding: 32px 0;
  border-top: 1px solid #1f2937;
  border-bottom: 1px solid #1f2937;
  margin-bottom: 32px;
}

.footer-newsletter h4 {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.newsletter-form {
  display: flex;
  gap: 12px;
  max-width: 400px;
}

.newsletter-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #374151;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
  background: #111827;
  color: #ffffff;
}

.newsletter-input:focus {
  border-color: #efff94;
}

.newsletter-button {
  padding: 12px 24px;
  background: #efff94;
  color: #000000;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.newsletter-button:hover {
  background: #d4e66a;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  border-top: 1px solid #1f2937;
  padding-top: 24px;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #9ca3af;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #efff94;
}

.footer-copyright {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-copyright p {
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.footer-links a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #efff94;
}

.footer-links span {
  color: #374151;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-button {
    width: 100%;
  }
}
</style>