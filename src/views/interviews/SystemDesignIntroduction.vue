<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <SystemDesignSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">1</span>
            <span class="reading-time">8 min read</span>
          </div>
          <h1>Front End System Design: An Introduction</h1>
          <p class="article-subtitle">
            Learn useful techniques and how to approach top front end system
            design questions. Written by ex-interviewers at FAANG.
          </p>
        </header>
        <article class="article-content">
          <p>
            Unlike coding and quiz questions, system design interviews are
            open-ended style interviews where there are no right answers. You're
            given a vague problem or scenario and you're expected to work with
            the interviewer to answer the question by coming up with a suitable
            software design on a whiteboard, or some collaborative drawing app
            if it's a virtual interview. It is similar to the process at certain
            companies where engineers write technical design documents to
            outline the possible approaches to a project they are working on,
            explain technical decisions and discuss tradeoffs with coworkers
            except that you have to do it within 30-60 minutes.
          </p>

          <p>
            System design interviews are usually given to candidates who have
            some number of years of working experience (aka non-fresh grads) and
            your performance in the system design interview has significant
            influence on the job level you will be offered. Most of the time,
            failing the system design interview will result in an overall
            rejection. It's really important to ace your system design
            interviews!
          </p>

          <p>
            However, given the open-ended nature of system design interviews, it
            is much harder to practice for it as compared to coding interviews.
            Many candidates also don't have real life experience building
            various systems and it's hard to draw from experience when answering
            system design interview questions. Also, there are very few
            resources available for front end system design. Most existing
            system design resources are targeted at general Software Engineers
            and hence focus on distributed systems.
          </p>

          <p>
            GreatFrontEnd's front end system design resources are perhaps the
            most comprehensive you can find and will help you ace your front end
            system design interviews with ease!
          </p>

          <section>
            <h2>Front end vs Back end / Full stack system design</h2>

            <p>
              In traditional Software Engineer system design interviews,
              candidates will be asked to describe the architecture of a
              distributed system, usually involving web servers, API gateways,
              load balancers, caches, databases, microservices, message queues,
              streams, etc.
            </p>

            <p>
              For Front End Engineers, system design interviews are slightly
              different – there's more emphasis on what goes on in the client
              and API design between the client and the server, as opposed to
              what goes on in the back end.
            </p>

            <div class="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Back End / Full Stack</th>
                    <th>Front End</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gather requirements</td>
                    <td>Required</td>
                    <td>Required</td>
                  </tr>
                  <tr>
                    <td>Architecture / High-level design entities</td>
                    <td>Distributed cloud services</td>
                    <td>Application/Component</td>
                  </tr>
                  <tr>
                    <td>Back-of-the-envelope estimation</td>
                    <td>May be required</td>
                    <td>Not required</td>
                  </tr>
                  <tr>
                    <td>Components of the system</td>
                    <td>
                      Cloud services (e.g. Load balancer, Application server,
                      Database, File storage, Caches, Message queues, CDN,
                      Full-text search)
                    </td>
                    <td>Application modules (Model, View, Controller)</td>
                  </tr>
                  <tr>
                    <td>Data model</td>
                    <td>Database schema</td>
                    <td>Application state</td>
                  </tr>
                  <tr>
                    <td>Type of APIs between components</td>
                    <td>Network (Any protocol)</td>
                    <td>Network (HTTP, WebSocket), JavaScript functions</td>
                  </tr>
                  <tr>
                    <td>Deep dives / focus areas</td>
                    <td>Scalability, Reliability, Consistency, Availability</td>
                    <td>
                      Performance, User Experience, Accessibility,
                      Internationalization
                    </td>
                  </tr>
                  <tr>
                    <td>Less important (Can treat as a black box)</td>
                    <td>Client</td>
                    <td>Server</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For example, a classic question is to ask about designing a
              Facebook news feed which can be asked during both back end and
              front end system interviews.
            </p>

            <ul>
              <li>
                <strong>Back end / Full stack:</strong> Capacity estimation,
                designing the database schema, APIs between microservices, how
                to ensure the services can scale with the traffic, how to
                generate a user's news feed in a scalable fashion, what happens
                when a post is created by a typical user (hundreds of followers)
                vs celebrities (millions of followers)
              </li>
              <li>
                <strong>Front end:</strong> HTTP API for the feed, how to
                implement feed pagination, how to implement interactions with
                posts, how new posts can be created, user experience and
                accessibility considerations
              </li>
            </ul>

            <p>
              As you can see, the focus of front end system design interviews
              can be very different from back end, and answering them well
              requires a different approach.
            </p>
          </section>

          <section>
            <h2>What you will learn in this guide</h2>

            <p>
              Our Front End System Design guide is structured into two parts,
              you will first gain a deeper understanding of what system design
              interviews are about, then dive into some front end system design
              case studies that use the RADIO framework.
            </p>

            <ul>
              <li>
                <router-link to="/interviews/system-design/types-of-questions"
                  >Types of questions</router-link
                >: Types of Front End System Design interview questions and
                examples
              </li>
              <li>
                <router-link to="/interviews/system-design/framework"
                  >RADIO framework</router-link
                >: A framework for answering Front End System Design interview
                questions
              </li>
              <li>
                <router-link to="/interviews/system-design/evaluation-axes"
                  >Evaluation axes</router-link
                >: How you are being evaluated and what interviewers are looking
                out for
              </li>
              <li>
                <router-link to="/interviews/system-design/common-mistakes"
                  >Common mistakes</router-link
                >: Common mistakes to avoid during Front End System Design
                interviews
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link to="/interviews/system-design" class="nav-link prev">
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Back to</span>
              <span class="nav-title">System Design Overview</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/system-design/types-of-questions"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Types of Questions</span>
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

.comparison-table {
  margin: 2rem 0;
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #374151;
}

.comparison-table th {
  background: #374151;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
}

.comparison-table td {
  color: #d1d5db;
  font-size: 0.875rem;
  vertical-align: top;
}

.comparison-table tr:nth-child(even) {
  background: #2a2a2e;
}

.comparison-table tr:hover {
  background: #374151;
}

.comparison-table td:first-child {
  font-weight: 600;
  color: #ffffff;
}
</style>
