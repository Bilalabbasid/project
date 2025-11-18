<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <BehavioralPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">2</span>
            <span class="reading-time">10 min read</span>
          </div>
          <h1>Most Common Questions</h1>
          <p class="article-subtitle">
            Overview of the most frequently asked behavioral interview questions
            and how to prepare for them
          </p>
        </header>
        <article class="article-content">
          <p class="lead-paragraph">
            In this article, we will cover the top questions (ordered from
            highest frequency) that candidates should practice with before their
            interviews.
          </p>

          <p>
            As mentioned in the behavioral interview preparation overview, most
            behavioral interview questions can be categorized into 8 main themes
            for efficient preparation. We recommend candidates to prepare using
            this strategy and then refer to the list below for practice.
          </p>

          <section>
            <h2>Top 16 most common questions</h2>

            <ol class="numbered-list">
              <li><strong>Tell me about yourself.</strong></li>
              <li><strong>Walk me through your resume.</strong></li>
              <li>
                <strong>Why have you applied for this role and team?</strong>
              </li>
              <li>
                <strong>Do you have any questions for me?</strong> (end of
                interview)
              </li>
              <li>
                <strong
                  >Can you tell me about a time you improved upon your work upon
                  receiving criticism or feedback?</strong
                >
              </li>
              <li>
                <strong
                  >Can you describe a past project where you had to work with a
                  difficult stakeholder or teammate and how you dealt with
                  it?</strong
                >
              </li>
              <li>
                <strong
                  >Can you describe a time you creatively solved an engineering
                  problem or achieved meaningful metric improvement?</strong
                >
              </li>
              <li>
                <strong
                  >Can you describe a time when you had to make an important
                  engineering decision and how you decided between
                  tradeoffs?</strong
                >
              </li>
              <li>
                <strong
                  >Can you give an example of a time when you had to work on a
                  team project and had to compromise with others to reach a
                  solution?</strong
                >
              </li>
              <li>
                <strong
                  >What do you think is your greatest area for
                  improvement?</strong
                >
              </li>
              <li>
                <strong
                  >Describe a time you failed and had to alter course and adopt
                  a new approach. How did you know change was necessary?</strong
                >
              </li>
              <li>
                <strong
                  >Can you describe a time when you had to work with a tight
                  timeline but was not given a clear direction on how to
                  proceed?</strong
                >
              </li>
              <li>
                <strong
                  >Can you describe a time when you had to adapt to changing
                  priorities or requirements?</strong
                >
              </li>
              <li>
                <strong
                  >Tell me about a time you learnt a new skill outside of work
                  and applied it to your work.</strong
                >
              </li>
              <li>
                <strong
                  >Tell me about a time you learnt a new skill set after
                  observing others leveraging it to great success.</strong
                >
              </li>
              <li>
                <strong
                  >Can you describe a time when you had to effectively
                  communicate technical information to a non-technical audience
                  and how you approached it?</strong
                >
              </li>
            </ol>
          </section>

          <section>
            <h2>
              Additional questions for leaders (Tech leads or Engineering
              Managers)
            </h2>

            <div class="subsection">
              <h3>Team management and leadership</h3>
              <ol class="numbered-list" start="17">
                <li>
                  <strong
                    >How do you approach the process of setting and achieving
                    goals for your team?</strong
                  >
                </li>
                <li>
                  <strong
                    >Can you tell me about a time when you had to work with a
                    tight budget or limited resources to achieve an
                    objective?</strong
                  >
                </li>
                <li>
                  <strong
                    >How do you approach collaboration and communication with
                    your team and stakeholders?</strong
                  >
                </li>
                <li>
                  <strong
                    >Describe a time when you had to handle an underperforming
                    team member.</strong
                  >
                </li>
                <li>
                  <strong
                    >Can you describe a time when you had to adjust your
                    management style to fit the needs of your team?</strong
                  >
                </li>
              </ol>
            </div>

            <div class="subsection">
              <h3>Cross functional collaboration</h3>
              <ol class="numbered-list" start="22">
                <li>
                  <strong
                    >How do you approach the process of gathering and
                    incorporating user or client feedback into your
                    work?</strong
                  >
                </li>
                <li>
                  <strong
                    >Can you give an example of a time when you had to balance
                    business needs with engineering complexity?</strong
                  >
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2>Additional questions for practice</h2>

            <p>
              We've grouped the most common behavioral questions into 8 major
              themes. Check out additional practice questions while studying
              them:
            </p>

            <ul class="bullet-list">
              <li>
                <a href="#" class="internal-link"
                  >"Tell me about yourself..."</a
                >
              </li>
              <li>"Walk me through your resume..."</li>
              <li>
                <a href="#" class="internal-link"
                  >"Why join this team or company?"</a
                >
              </li>
              <li>
                "Tell me about a time when..." (categorized into below themes)
                <ul class="nested-list">
                  <li>
                    <a href="#" class="internal-link"
                      >Driving results and problem solving</a
                    >
                  </li>
                  <li><a href="#" class="internal-link">Collaboration</a></li>
                  <li><a href="#" class="internal-link">Growth mindset</a></li>
                  <li>Adaptability and flexibility</li>
                </ul>
              </li>
              <li>
                <a href="#" class="internal-link"
                  >"Do you have any questions for me?"</a
                >
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/behavioral/intro"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">Intro to Behavioral Interviews</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/behavioral/tell-me-about-yourself"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Answering "Tell Me About Yourself"</span>
            </div>
            <span class="nav-arrow">→</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import BehavioralPlaybookSidebar from "../../components/BehavioralPlaybookSidebar.vue";
</script>

<style scoped>
.playbook-article-page {
  background: #18181b;
  color: #ffffff;
  min-height: 100vh;
}

.article-layout {
  display: flex;
  min-height: 100vh;
}

.article-main {
  flex: 1;
  padding: 40px 0;
  padding-top: 120px;
  margin-left: 300px;
}

.article-header {
  max-width: 800px;
  margin: 0 auto 40px;
  padding: 0 2rem;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #9ca3af;
}

.article-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: #dcee77;
  color: #000000;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
}

.article-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.article-subtitle {
  font-size: 1.125rem;
  color: #9ca3af;
  line-height: 1.6;
  margin: 0;
}

.article-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  line-height: 1.7;
}

.article-content p {
  margin-bottom: 1.5rem;
  color: #d1d5db;
}

.article-content h2 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #ffffff;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #374151;
}

.article-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 1.5rem 0 1rem;
}

.article-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
  color: #d1d5db;
}

.article-content a {
  color: #dcee77;
  text-decoration: none;
  transition: color 0.2s ease;
}

.article-content a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.article-navigation {
  max-width: 800px;
  margin: 60px auto 0;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1;
}

.nav-link:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.nav-link.prev {
  text-align: left;
}

.nav-link.next {
  text-align: right;
  flex-direction: row-reverse;
}

.nav-label {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 0.25rem;
}

.nav-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
}

.nav-arrow {
  font-size: 1.25rem;
  color: #dcee77;
  font-weight: bold;
}

@media (max-width: 768px) {
  .article-header {
    padding: 0 1rem;
  }

  .article-content {
    padding: 0 1rem;
  }

  .article-header h1 {
    font-size: 2rem;
  }

  .article-navigation {
    padding: 0 1rem;
    flex-direction: column;
  }
}

.article-content code {
  background: #2a2a2e;
  color: #e5e7eb;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  font-size: 0.9em;
}

.bullet-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.bullet-list li {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.bullet-list li::before {
  content: "•";
  color: #dcee77;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.bullet-list li strong {
  color: #ffffff;
}

.principle-section {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
}

.principle-section h4 {
  font-size: 18px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.question-section {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.question-section h3 {
  font-size: 16px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.lead-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 2rem;
}

.numbered-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
  counter-reset: item;
}

.numbered-list li {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 12px;
  padding-left: 25px;
  position: relative;
  counter-increment: item;
}

.numbered-list li::before {
  content: counter(item) ".";
  color: #dcee77;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.numbered-list li strong {
  color: #ffffff;
}

.nested-list {
  list-style: none;
  padding: 0;
  margin: 8px 0 8px 20px;
}

.nested-list li {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 4px;
  padding-left: 15px;
  position: relative;
}

.nested-list li::before {
  content: "•";
  color: #dcee77;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.internal-link {
  color: #dcee77;
  text-decoration: none;
  transition: color 0.2s ease;
}

.internal-link:hover {
  color: #ffffff;
  text-decoration: underline;
}
</style>
