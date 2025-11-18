<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <PlaybookArticleSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">9</span>
            <span class="reading-time">4 min read</span>
          </div>
          <h1>Front End Quiz Interview Questions</h1>
          <p class="article-subtitle">
            Quiz-style front end interview questions — What to expect, concepts
            to learn, and 100+ important practice questions
          </p>
        </header>
        <article class="article-content">
          <p>
            Quiz questions, also known as trivia questions, are short
            close-ended questions meant to test your understanding of the
            domain. Each question shouldn't take more than a minute or two to
            answer, however, further discussions can be spawned from your
            answers. Hence it's important to have good understanding of the
            concepts behind the answers you give and not blindly memorize and
            regurgitate.
          </p>

          <section>
            <h2>Examples</h2>

            <p>
              Beyond getting asked on front end fundamentals (HTML, CSS,
              JavaScript), you could be asked on framework-specific questions if
              you claim to have knowledge of them (either verbally during
              interviews or when interviewers go through your resume):
            </p>

            <ul>
              <li>
                <a
                  href="/questions/quiz/explain-your-understanding-of-the-box-model-and-how-you-would-tell-the-browser-in-css-to-render-your-layout-in-different-box-models"
                  target="_blank"
                >
                  Explain what the CSS box model is.
                </a>
              </li>
              <li>
                <a
                  href="/questions/quiz/what-is-css-selector-specificity-and-how-does-it-work"
                  target="_blank"
                >
                  What is CSS selector specificity?
                </a>
              </li>
              <li>
                <a
                  href="/questions/quiz/what-are-the-differences-between-variables-created-using-let-var-or-const"
                  target="_blank"
                >
                  What are the differences between variables created using let,
                  var or const?
                </a>
              </li>
              <li>
                <a
                  href="/questions/quiz/explain-how-this-works-in-javascript"
                  target="_blank"
                >
                  Explain how this works in JavaScript.
                </a>
              </li>
            </ul>

            <p>
              Beyond getting asked on front end fundamentals (HTML, CSS,
              JavaScript), you could be asked on framework-specific questions if
              you claim to have knowledge of them (either verbally during
              interviews or when interviewers go through your resume):
            </p>

            <ul>
              <li>What problems do X technology solve?</li>
              <li>
                What are the advantages and disadvantages of X technology?
              </li>
              <li>How does X technology work under the hood?</li>
              <li>What does X technology compare with Y technology?</li>
            </ul>
          </section>

          <section>
            <h2>Relevant rounds</h2>

            <p>
              There usually wouldn't be interview rounds just asking you solely
              quiz questions. However, interviewers could spring questions onto
              you while in the middle of interviews focused on other formats
              like coding and system design.
            </p>

            <ul>
              <li>
                <strong>Recruiter call:</strong> Due to the close-ended nature
                of quiz questions, they can even be asked by non-technical
                personnel such as recruiters. Thankfully, non-engineers are
                probably not able to evaluate the accuracy and are probably just
                matching the keywords in your answers with the solutions handed
                to them. In the worst scenarios, you can probably still pass by
                replying something that sounds sensible and includes the right
                keywords.
              </li>
              <li>
                <strong>Online assessment:</strong> While uncommon, it is
                possible that you are given multiple choice questions and have
                to pick a correct answer from them.
              </li>
              <li>
                <strong>Coding round:</strong> Interviewers might ask you a few
                quiz questions before any coding has started to warm you up. Or
                while you are coding and explaining your code, the interviewer
                might want to dive deeper into something you just mentioned.
                Hence it's best to have a good understanding of everything you
                say/do.
              </li>
              <li>
                <strong>System design round:</strong> Like in the coding round,
                the interviewer can ask further questions on the things you say.
              </li>
              <li>
                <strong>Hiring manager round:</strong> Hiring manager rounds are
                usually not meant to be technical but they could be going over
                your resume and asking you related quiz questions on
                technologies/projects mentioned in your resume.
              </li>
            </ul>

            <p>
              As you can see, you can expect to be asked quiz questions in
              almost every possible round. Be prepared at all times.
            </p>
          </section>

          <section>
            <h2>Important concepts</h2>

            <div class="concepts-table">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Key Concepts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>HTML</strong></td>
                    <td>
                      Semantic HTML, Block vs inline elements, &lt;head&gt;,
                      &lt;script&gt;, &lt;style&gt;, &lt;link&gt;, &lt;form&gt;,
                      &lt;input&gt;, Form validation/submission
                    </td>
                  </tr>
                  <tr>
                    <td><strong>CSS</strong></td>
                    <td>
                      Box model, Selectors, Specificity, Positioning, Units,
                      Flexbox, Grid, Media Queries
                    </td>
                  </tr>
                  <tr>
                    <td><strong>JavaScript</strong></td>
                    <td>
                      Data types, Scope, Closures, this, Variable declaration
                      (var, let, const), Array methods, Object methods,
                      Promises, Classes, Async/Await
                    </td>
                  </tr>
                  <tr>
                    <td><strong>DOM</strong></td>
                    <td>
                      DOM creation/manipulation/traversal, Event
                      bubbling/capturing, Event delegation
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Runtime APIs</strong></td>
                    <td>
                      fetch(), Storage (localStorage, sessionStorage), Timers
                      (setTimeout(), setInterval())
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>Tips</h2>

            <p>
              There are a ton of concepts to cover which can feel really
              overwhelming. The good thing is that learning these concepts well
              will make you a better Front End Engineer regardless of whether
              you are actively interviewing or not.
            </p>

            <p>
              We wouldn't recommend memorizing answers to quiz questions. It's
              best to truly understand the solution for each question and get
              some real world experience by using them in projects as it's
              usually easier to learn by doing.
            </p>
          </section>

          <section>
            <h2>Practice questions</h2>

            <p>
              GreatFrontEnd contains a list of over 100 common quiz questions
              with detailed solutions written for each of them.
            </p>

            <ul>
              <li>
                <a
                  href="/questions/javascript-interview-questions/quiz"
                  target="_blank"
                >
                  JavaScript Quiz Questions
                </a>
              </li>
              <li>
                <a
                  href="/questions/html-interview-questions/quiz"
                  target="_blank"
                >
                  HTML Quiz Questions
                </a>
              </li>
              <li>
                <a
                  href="/questions/css-interview-questions/quiz"
                  target="_blank"
                >
                  CSS Quiz Questions
                </a>
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/system-design"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">System Design Interviews</span>
            </div>
          </router-link>
          <router-link to="/interviews/playbook/resume" class="nav-link next">
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Resume Guide</span>
            </div>
            <span class="nav-arrow">→</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import PlaybookArticleSidebar from "../../components/PlaybookArticleSidebar.vue";
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

.concepts-table table {
  width: 100%;
  border-collapse: collapse;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  margin: 1.5rem 0;
}

.concepts-table th,
.concepts-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #374151;
  vertical-align: top;
}

.concepts-table th {
  background: #2a2a2e;
  color: #ffffff;
  font-weight: 600;
}

.concepts-table td {
  color: #d1d5db;
}

.concepts-table tr:last-child td {
  border-bottom: none;
}

.article-content code {
  background: #2a2a2e;
  color: #e5e7eb;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  font-size: 0.9em;
}
</style>
