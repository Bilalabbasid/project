<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <SystemDesignSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">5</span>
            <span class="reading-time">6 min read</span>
          </div>
          <h1>
            Common Mistakes to Avoid for Front End System Design Interviews
          </h1>
          <p class="article-subtitle">
            Know the mistakes candidates often make during front end system
            design interviews and how to avoid them.
          </p>
        </header>
        <article class="article-content">
          <p>
            Unlike coding interviews which are much more common and you can
            somewhat practice/simulate interview conditions, it is much harder
            to practice for system design interviews.
          </p>

          <p>
            Here's a list of common mistakes made by candidates when they are
            answering system design interview questions and many of them are not
            specific to front end system design interviews. Hopefully you will
            remember these points and avoid them for your own interviews.
          </p>

          <section>
            <h2>Jumping into answering the question immediately</h2>

            <p>
              Don't jump into answering the question immediately! Take the time
              to gather requirements and clarify assumptions by asking
              questions. Answering the wrong question well is worse than
              answering the right question poorly.
            </p>
          </section>

          <section>
            <h2>Approaching the question in an unstructured manner</h2>

            <p>
              Because system design interviews are very open-ended with no
              explicit completion milestone (unlike coding interviews where you
              have to produce working code), some candidates might just talk
              about whatever that comes to their mind and the answer might end
              up appearing messy to the interviewer. Use the RADIO framework to
              help you.
            </p>

            <p>
              Write down each step of the RADIO framework on the whiteboard at
              the start of the interview and ensure that by the end of the
              interview you have covered each section sufficiently. Note that
              you don't necessarily have to complete each section in order and
              you can always revisit previous sections if you've missed out on
              certain things.
            </p>
          </section>

          <section>
            <h2>Insisting on only one solution or the best solution</h2>

            <p>
              Don't insist there's only one solution, especially if the
              interviewer prompts you for alternative approaches. More often
              than not, there are multiple ways to solve a problem, each with
              its own tradeoffs.
            </p>

            <p>
              The interviewer wants to see you identify a solution with the
              right tradeoffs for the issue at hand, not you saying that there's
              only one right or best solution. The other solutions might be
              clearly bad and is very obvious to you, but the interviewer wants
              to hear you explain why they are bad.
            </p>
          </section>

          <section>
            <h2>Remaining silent the entire time</h2>

            <p>
              On the opposite of the spectrum of answering too quickly, there
              are people who remain too silent. Don't remain silent the entire
              time and thinking only in your head – think out loud!
            </p>

            <p>
              System design interviews are meant to be collaborative exercises
              between you and the interviewer. Treat your interviewer as a
              coworker, bring up issues you've identified, bounce ideas, and
              discuss possible solutions with them.
            </p>
          </section>

          <section>
            <h2>Going down a rabbit hole</h2>

            <p>
              Don't go down a rabbit hole of diving too deep into a particular
              component. Define an initial architecture/high-level design first,
              then proceed to elaborate on the various parts of the system.
              Focus on the parts which are most important to the problem.
            </p>

            <p>
              If you are unsure, ask the interviewer if you should dive deeper
              into a specific component. It'd be bad to spend too much time
              discussing about an unimportant component, wasting precious time
              without providing useful signals to the interviewer.
            </p>
          </section>

          <section>
            <h2>Using buzzwords without being able to explain them</h2>

            <p>
              Don't use buzzwords or terms you can't explain well. It might be
              tempting to throw out some cool terms like "Virtual DOM", "DOM
              Reconciliation", "Partial Hydration", "Streaming Server-side
              Rendering" and you can if they're relevant to the current topic!
            </p>

            <p>
              However, if you do, make sure you are able to explain the term you
              just used as your interviewer is likely going to probe for more
              information to test your knowledge. It's a red flag if you are
              unable to explain the term you just used.
            </p>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/system-design/evaluation-axes"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">Evaluation Criteria</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/system-design/cheatsheet"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Cheatsheet</span>
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
</style>
