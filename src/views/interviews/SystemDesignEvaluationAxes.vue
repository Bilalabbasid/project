<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <SystemDesignSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">4</span>
            <span class="reading-time">7 min read</span>
          </div>
          <h1>Evaluation Criteria for Front End System Design Interviews</h1>
          <p class="article-subtitle">
            Specific behaviors and signals interviewers look out for in front
            end system design interviews.
          </p>
        </header>
        <article class="article-content">
          <p>
            During interviews, interviewers look out for signals displayed by
            candidates before making an overall hiring and leveling
            recommendation. The more desired behaviors the candidate displays,
            the higher the likelihood the interviewer will recommend a "Hire"
            decision. The more detailed and mature the answers are, the higher
            the leveling recommendation.
          </p>

          <p>
            This section lists some of the behaviors that candidates should
            display. Bear them in mind as you are answering the system design
            question and demonstrate them confidently during the interview.
          </p>

          <section>
            <h2>Problem exploration</h2>

            <ul>
              <li>Demonstrated thorough understanding of the problem.</li>
              <li>
                Explored the requirements sufficiently by asking relevant
                clarifying questions to minimize ambiguities.
              </li>
              <li>
                Gathered functional and non-functional requirements of the
                problem.
              </li>
              <li>Defined the scope of the problem.</li>
              <li>
                Identified the important aspects of the problem to focus on and
                address.
              </li>
            </ul>

            <p>
              <em>Relevant framework sections: Requirements exploration</em>
            </p>
          </section>

          <section>
            <h2>Architecture</h2>

            <ul>
              <li>
                Developed an architecture that solved the entire problem
                sufficiently.
              </li>
              <li>
                Brokedown the problem into smaller independent parts of suitable
                granularity.
              </li>
              <li>
                Identified components of the system and defined their
                responsibilities clearly.
              </li>
              <li>
                Articulated how these components will work together and
                defined/described the API between these components.
              </li>
              <li>Developed an architecture that can be put into practice.</li>
              <li>
                Developed an architecture with scalability and reusability in
                mind, one that can be extended to support future requirements.
              </li>
            </ul>

            <p>
              <em
                >Relevant framework sections: Architecture/High-level design,
                Data model, Interface definition</em
              >
            </p>
          </section>

          <section>
            <h2>Technical proficiency</h2>

            <ul>
              <li>
                Demonstrated technical knowledge and proficiency of front end
                fundamentals, common technologies and APIs.
              </li>
              <li>
                Able to dive into specific front end domain areas where relevant
                to the problem.
              </li>
              <li>
                Identified areas which need to be paid special attention to and
                addressed them by proposing solutions and analyzing their
                tradeoffs.
              </li>
            </ul>

            <p>
              Front end domain areas include Performance, Networking, HTML/CSS,
              Accessibility, Internationalization, Security, Scalability, etc.
            </p>

            <p>
              <em
                >Relevant framework sections: Architecture / High-level design,
                Optimizations and deep dive</em
              >
            </p>
          </section>

          <section>
            <h2>Exploration and tradeoffs</h2>

            <ul>
              <li>
                Offered various possible solutions to the problems at hand and
                explained the pros and cons of each solution.
                <ul>
                  <li>
                    The "problem" here doesn't necessarily refer to the given
                    system design question.
                  </li>
                  <li>
                    While solving the given question, there would be smaller
                    problems to solve/questions to answer and each small
                    problem/question can have various solutions and choices to
                    make.
                  </li>
                </ul>
              </li>
              <li>
                Explained the suitability of the solutions given the context and
                requirements and provided recommendations for the context of the
                question.
                <ul>
                  <li>
                    Do not insist there is only one possible solution. Good
                    questions usually have a few possible solutions where the
                    suitability of each depends on the context.
                  </li>
                  <li>
                    Even if the other solutions are clearly and obviously bad,
                    do still mention them and briefly explain why they are bad.
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              <em
                >Relevant framework sections: Requirements exploration, Data
                model, Interface definition, Optimizations and deep dive</em
              >
            </p>
          </section>

          <section>
            <h2>Product and UX sense</h2>

            <ul>
              <li>
                Proposed a robust solution that lays the foundation of a good
                product.
              </li>
              <li>
                Considered user experience when answering: loading states,
                performance (perceived or actual), mobile friendliness, keyboard
                friendliness, etc.
              </li>
              <li>Considered error cases and suggested ways to handle them.</li>
            </ul>

            <p>
              <em>Relevant framework sections: Optimizations and deep dive</em>
            </p>
          </section>

          <section>
            <h2>Communication and collaboration</h2>

            <ul>
              <li>Conveyed their thoughts and ideas clearly and concisely.</li>
              <li>Explained complex concepts with ease.</li>
              <li>
                Engaged the interviewer during the session, asks good questions
                and seeks opinions where relevant.
              </li>
              <li>
                Open to feedback from the interviewer and incorporates the
                feedback to refine their solutions.
              </li>
            </ul>

            <p>
              <em
                >Relevant framework sections: Architecture / High-level design,
                Data model, Interface definition, Optimizations and deep
                dive</em
              >
            </p>
          </section>

          <section>
            <h2>Summary</h2>

            <p>
              Here's a table summarizing how the evaluation axes can be mapped
              to the various sections of the RADIO framework: Requirements
              Exploration, Architecture/High-level Design, Data Model, Interface
              Definition, Optimizations and Deep Dive.
            </p>

            <div class="evaluation-table">
              <table>
                <thead>
                  <tr>
                    <th>Evaluation Axis</th>
                    <th>Requirements Exploration</th>
                    <th>Architecture/High-level Design</th>
                    <th>Data Model</th>
                    <th>Interface Definition</th>
                    <th>Optimizations and Deep Dive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Problem exploration</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Architecture</td>
                    <td>-</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Technical proficiency</td>
                    <td>-</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>-</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Exploration and tradeoffs</td>
                    <td>-</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Product and UX sense</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Communication and collaboration</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/system-design/framework"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">RADIO Framework</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/system-design/common-mistakes"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Common Mistakes</span>
            </div>
            <span class="nav-arrow">→</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import SystemDesignSidebar from "../../components/SystemDesignSidebar.vue";
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

.article-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
  color: #d1d5db;
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

.evaluation-table {
  margin: 2rem 0;
  overflow-x: auto;
}

.evaluation-table table {
  width: 100%;
  border-collapse: collapse;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.evaluation-table th,
.evaluation-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #374151;
  vertical-align: top;
}

.evaluation-table th {
  background: #374151;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
}

.evaluation-table td {
  color: #d1d5db;
  font-size: 0.875rem;
}

.evaluation-table tr:nth-child(even) {
  background: #2a2a2e;
}

.evaluation-table tr:hover {
  background: #374151;
}

.evaluation-table td:nth-child(1) {
  font-weight: 600;
  color: #ffffff;
}

.evaluation-table td:not(:first-child) {
  text-align: center;
  font-weight: 600;
}
</style>
