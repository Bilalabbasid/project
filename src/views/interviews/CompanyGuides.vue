<template>
  <div class="company-guides-page">
    <InterviewSidebar />
    <main class="main-content">
      <div class="content-wrapper">
        <header class="page-header">
          <h1 class="page-title">Company guides</h1>
          <p class="page-subtitle">Premium</p>
          <p class="page-description">
            Optimized preparation for target companies, leveraging insider tips and expertise.
          </p>
          <div class="premium-features">
            <div class="feature-item">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Actual interview questions
            </div>
            <div class="feature-item">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Recommended resources
            </div>
            <div class="feature-item">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Solutions by ex-interviewers
            </div>
          </div>
        </header>

        <div class="search-section">
          <div class="search-container">
            <svg class="search-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
            <input
              type="text"
              placeholder="Search company guides"
              class="search-input"
              v-model="searchQuery"
            >
          </div>
        </div>

        <section class="companies-section">
          <div class="companies-grid">
            <div
              v-for="company in filteredCompanies"
              :key="company.name"
              class="company-card"
            >
              <div class="company-logo">
                <img :src="company.logo" :alt="company.name" />
              </div>
              <h3 class="company-name">{{ company.name }}</h3>
              <div class="company-questions">{{ company.questions }} questions</div>
              <button class="company-button locked">
                <svg class="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                View Guide
              </button>
            </div>
          </div>
        </section>

        <section class="details-section">
          <h2 class="section-title">Company Front End Interview Guides</h2>
          <div class="details-content">
            <p class="details-description">
              Looking for comprehensive resources to prepare for front-end interviews at top companies? Our collection of guides provides information on each company's interview process, insider tips, recommended preparation strategies, and a curated selection of practice questions that are known to be tested in those companies' front-end interviews.
            </p>

            <div class="details-features">
              <div class="feature-block">
                <h3 class="feature-title">Company interview processes</h3>
                <p class="feature-description">
                  Each guide consolidates official information from leading companies about their interview processes and tips. Don't miss any important details—find everything you need to know in one place.
                </p>
              </div>

              <div class="feature-block">
                <h3 class="feature-title">Insider tips from a network of interviewers</h3>
                <p class="feature-description">
                  Want to get tips, but don't know any insiders? We've gathered tips from our network of interviewers and contributors across various companies as much as we can. Learn what to focus on in your preparation to maximize your chances of success.
                </p>
              </div>

              <div class="feature-block">
                <h3 class="feature-title">Recommended preparation strategies</h3>
                <p class="feature-description">
                  Our guides provide a structured interview preparation strategy for each company. Start with official preparation materials, then practice real questions that are known to be tested in interviews. Finally, expand your study to cover all relevant topics, ensuring you're thoroughly prepared for every stage of the interview process.
                </p>
              </div>

              <div class="feature-block">
                <h3 class="feature-title">Actual interview questions with solutions and test cases</h3>
                <p class="feature-description">
                  The fastest way to prepare for an interview is to practice questions that have been previously tested at the company. Each company guide includes a collection of known questions for front-end interviews, covering key topics such as coding challenges, system design, and more. Familiarize yourself with the types of questions you might face by practicing with real interview questions and solutions.
                </p>
                <div class="company-links">
                  <a href="#" class="company-link">Google front end interview questions</a>
                  <a href="#" class="company-link">Amazon front end interview questions</a>
                  <a href="#" class="company-link">TikTok front end interview questions</a>
                  <a href="#" class="company-link">ByteDance front end interview questions</a>
                  <a href="#" class="company-link">Apple front end interview questions</a>
                  <a href="#" class="company-link">Microsoft front end interview questions</a>
                  <a href="#" class="company-link">Atlassian front end interview questions</a>
                  <a href="#" class="company-link">LinkedIn front end interview questions</a>
                  <a href="#" class="company-link">Uber front end interview questions</a>
                  <a href="#" class="company-link">Dropbox front end interview questions</a>
                  <a href="#" class="company-link">Lyft front end interview questions</a>
                  <a href="#" class="company-link">Airbnb front end interview questions</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import InterviewSidebar from '../../components/InterviewSidebar.vue'

const searchQuery = ref('')

const companies = ref([
  {
    name: 'OpenAI',
    logo: 'https://www.gfecdn.net/img/company-logos/openai-logomark.svg',
    questions: 15
  },
  {
    name: 'Google',
    logo: 'https://www.gfecdn.net/img/company-logos/google-logomark.svg',
    questions: 34
  },
  {
    name: 'Amazon',
    logo: 'https://www.gfecdn.net/img/company-logos/amazon-logomark.svg',
    questions: 61
  },
  {
    name: 'TikTok',
    logo: 'https://www.gfecdn.net/img/company-logos/tiktok-logomark.svg',
    questions: 35
  },
  {
    name: 'ByteDance',
    logo: 'https://www.gfecdn.net/img/company-logos/bytedance-logomark.svg',
    questions: 27
  },
  {
    name: 'Apple',
    logo: 'https://www.gfecdn.net/img/company-logos/apple-logomark.svg',
    questions: 13
  },
  {
    name: 'Microsoft',
    logo: 'https://www.gfecdn.net/img/company-logos/microsoft-logomark.svg',
    questions: 19
  },
  {
    name: 'Atlassian',
    logo: 'https://www.gfecdn.net/img/company-logos/atlassian-logomark.svg',
    questions: 17
  },
  {
    name: 'LinkedIn',
    logo: 'https://www.gfecdn.net/img/company-logos/linkedin-logomark.svg',
    questions: 18
  },
  {
    name: 'Uber',
    logo: 'https://www.gfecdn.net/img/company-logos/uber-logomark.svg',
    questions: 15
  },
  {
    name: 'Dropbox',
    logo: 'https://www.gfecdn.net/img/company-logos/dropbox-logomark.svg',
    questions: 8
  },
  {
    name: 'Lyft',
    logo: 'https://www.gfecdn.net/img/company-logos/lyft-logomark.svg',
    questions: 14
  },
  {
    name: 'Airbnb',
    logo: 'https://www.gfecdn.net/img/company-logos/airbnb-logomark.svg',
    questions: 6
  }
])

const filteredCompanies = computed(() => {
  if (!searchQuery.value) {
    return companies.value
  }
  return companies.value.filter(company =>
    company.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<style scoped>
.company-guides-page {
  display: flex;
  min-height: 100vh;
  background: #18181b;
  color: #ffffff;
}

.main-content {
  flex: 1;
  padding: 24px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 48px;
}

.page-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #ffffff;
}

.page-subtitle {
  font-size: 18px;
  color: #dcee77;
  font-weight: 600;
  margin-bottom: 16px;
}

.page-description {
  font-size: 20px;
  color: #9ca3af;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.premium-features {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 48px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #dcee77;
  font-size: 16px;
}

.feature-icon {
  width: 20px;
  height: 20px;
  color: #dcee77;
}

.search-section {
  margin-bottom: 48px;
}

.search-container {
  max-width: 400px;
  margin: 0 auto;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #6b7280;
}

.search-input {
  width: 100%;
  padding: 12px 16px 12px 48px;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
}

.search-input::placeholder {
  color: #6b7280;
}

.search-input:focus {
  outline: none;
  border-color: #dcee77;
}

.companies-section {
  margin-bottom: 64px;
}

.companies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.company-card {
  background: #1f2937;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  border: 1px solid #374151;
  transition: all 0.3s ease;
}

.company-card:hover {
  border-color: #dcee77;
  transform: translateY(-2px);
}

.company-logo {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 8px;
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.company-name {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 8px;
}

.company-questions {
  color: #9ca3af;
  font-size: 14px;
  margin-bottom: 20px;
}

.company-button {
  width: 100%;
  background: #dcee77;
  color: #000000;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.company-button:hover:not(.locked) {
  background: #c4d647;
}

.company-button.locked {
  background: #374151;
  color: #6b7280;
  cursor: not-allowed;
}

.lock-icon {
  width: 16px;
  height: 16px;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #ffffff;
}

.details-content {
  max-width: 800px;
  margin: 0 auto;
}

.details-description {
  font-size: 18px;
  line-height: 1.6;
  color: #9ca3af;
  margin-bottom: 48px;
  text-align: center;
}

.details-features {
  display: grid;
  gap: 32px;
}

.feature-block {
  margin-bottom: 32px;
}

.feature-title {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 12px;
}

.feature-description {
  font-size: 16px;
  line-height: 1.6;
  color: #9ca3af;
  margin-bottom: 16px;
}

.company-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 8px;
  margin-top: 16px;
}

.company-link {
  color: #dcee77;
  text-decoration: none;
  font-size: 14px;
  padding: 4px 0;
  transition: color 0.3s ease;
}

.company-link:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  .main-content {
    padding: 16px;
  }

  .page-title {
    font-size: 36px;
  }

  .premium-features {
    flex-direction: column;
    gap: 16px;
  }

  .companies-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }

  .company-card {
    padding: 20px;
  }

  .company-links {
    grid-template-columns: 1fr;
  }
}
</style>