<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <!-- Sidebar -->
      <PlaybookArticleSidebar />

      <!-- Main Content -->
      <div class="article-main">
        <!-- Article Header -->
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">1</span>
            <span class="reading-time">10 min read</span>
          </div>
          <h1>Front End Interviews: An Introduction</h1>
          <p class="article-subtitle">
            Everything you need to know - from types of questions to preparation
            tactics
          </p>
        </header>

        <!-- Article Content -->
        <article class="article-content">
          <p>
            Front End Interviews are notoriously hard to prepare for. There are
            many possible interview formats and there isn't a standardized
            structure across the industry for evaluating front end engineers.
            Some companies use the same interview process for Front End
            Engineers as they do for generalist Software Engineers while some
            companies (e.g. Google and Amazon) do a mix where they have both
            general software engineering rounds and front end domain-specific
            rounds.
          </p>

          <p>
            In recent years, the industry is gradually shifting away from asking
            front end interview candidates to solve data structures and
            algorithms (DSA) questions. Instead, candidates will have to
            implement common front end library functions and/or build practical
            UI components/apps which tests their understanding of practical and
            relevant front end concepts. This is an encouraging trend because
            unlike most DSA questions, front end interview questions are highly
            relevant to a front end engineer's day-to-day responsibilities and
            is a more accurate assessment.
          </p>

          <p>
            However, many existing software engineering interview resources are
            geared towards general software engineering roles instead of Front
            End Engineers which is a much smaller and niche field; you can
            barely find any resources on Front End System Design. These factors
            combined with the breadth of possible domain topics makes preparing
            for front end interviews a long, tedious, and tough process.
          </p>

          <p>
            Fear not! GreatFrontEnd aims to be the best resource for Front End
            Engineers to ace their front end interviews by being a one-stop
            platform to equip Front End Engineers with the necessary knowledge
            and practice. On GreatFrontEnd, readers can:
          </p>

          <ol>
            <li>
              Learn how to create an
              <a href="#prepare-resume"
                >awesome resume tailored for Front End Engineering job
                listings</a
              >
            </li>
            <li>
              Learn important front end concepts and techniques that apply to
              all question types
            </li>
            <li>
              Prepare for the most common front end interview question types
              (coding, system design, quiz, behavioral)
            </li>
            <li>
              <a href="/interviews/questions">Practice questions</a> across the
              most common front end interview formats along with high quality
              solutions written by ex-FAANG Senior Engineers
            </li>
            <li>
              Browse suggested
              <a href="/interviews/study-plans">study plans</a> and adopt a
              structured preparation approach
            </li>
          </ol>

          <section id="prepare-resume">
            <h2>Prepare an awesome resume</h2>

            <p>
              Your resume is the first opportunity to make an impression on
              potential employers and is crucial for getting shortlisted at your
              dream companies.
            </p>

            <p>
              If you are facing difficulties getting interviews for jobs you
              apply to despite having the necessary qualifications, it could be
              because of your resume. Even highly qualified candidates may not
              know how to effectively present their accomplishments in their
              resume and therefore may not get shortlisted. It is important to
              remember that being underqualified is not always the reason for
              not being selected; sometimes it is simply a matter of poor
              presentation and not including the important content. Once you
              have made it through the resume screening process, your past
              achievements are secondary and your technical skills become
              paramount, which can be learned and improved upon. Hence getting
              your foot in the door by submitting a great resume that represents
              you well is extremely important.
            </p>

            <p>
              While there are existing resources on how to make a good Software
              Engineering resume such as the
              <a
                href="https://www.techinterviewhandbook.org/resume/"
                target="_blank"
                >Tech Interview Handbook</a
              >
              and
              <a
                href="https://www.faangtechleads.com/resume/handbook"
                target="_blank"
                >FAANG Tech Leads' Resume Handbook</a
              >, they are general and not specific to Front End Engineers. We
              have written some
              <a href="/interviews/playbook/resume"
                >tips on how to tailor your resume for Front End Engineering
                positions</a
              >.
            </p>
          </section>

          <section id="question-formats">
            <h2>Prepare by question formats</h2>

            <p>
              There are many different formats a front end interview loop can be
              conducted and each company does things differently. To be
              efficient in your preparation, you should find out the different
              interview stages of the companies you are interviewing with, the
              various rounds within each stage, and the question types you will
              be asked in each round.
            </p>

            <p>
              Each question format has its own challenges and quirks. We'll
              introduce you to the various formats and you can read the
              dedicated pages for each type if you'd like to find out more.
            </p>

            <h3>Coding questions</h3>

            <p>
              Coding questions will involve writing code (duh!). However, the
              code you will be required to write and the platforms you will
              write the code on can vary wildly. You could be asked about:
            </p>

            <ol>
              <li>
                <strong>Algorithmic coding:</strong> Solve tricky algorithmic
                questions that evaluates your understanding of data structures,
                algorithms and time complexity.
                <a href="/interviews/playbook/algorithms"
                  >Read about Algorithmic Coding Interviews</a
                >
              </li>
              <li>
                <strong>JavaScript coding:</strong> Implement functions or data
                structures in JavaScript that are related to front end domain
                and commonly used during front end development.
                <a href="/interviews/playbook/javascript"
                  >Read about JavaScript Coding Interviews</a
                >
              </li>
              <li>
                <strong>User interface coding:</strong> Build user interfaces
                (components, widgets, apps) using HTML, CSS, and JavaScript,
                sometimes even using JavaScript frameworks.
                <a href="/interviews/playbook/user-interface"
                  >Read about User Interface Coding Interviews</a
                >
              </li>
            </ol>

            <p>
              Companies are trending towards using domain-specific coding
              questions and less on testing about algorithms and data structures
              as the former is more relevant for evaluating the core skills
              needed for front end engineering work.
            </p>

            <h3>System design questions</h3>

            <p>
              System design interviews are highly open-ended interviews that
              involve coming up with a software system design to solve a vague
              problem or scenario. Candidates will have to break down a system
              into smaller components, draw architecture diagrams, design APIs,
              dive into certain parts of the system and discuss tradeoffs in
              order to succeed.
            </p>

            <p>
              System design interviews are usually only given to senior level
              candidates and the required systems can be one of the following
              types and examples:
            </p>

            <ol>
              <li>
                <strong>Distributed systems:</strong> Twitter back end, URL
                shortener
              </li>
              <li>
                <strong>Client applications:</strong> Newsfeed, Photo sharing
                applications
              </li>
              <li>
                <strong>Complex user interface components:</strong>
                Autocomplete, Dropdown menu, Modal
              </li>
            </ol>

            <p>
              Most of the time, Front End Engineers will be asked to design
              client applications and complex user interface components as those
              products are more relevant to front end engineering.
            </p>

            <p>
              <a href="/interviews/playbook/system-design"
                >Read more about Front End System Design -></a
              >
            </p>

            <h3>Quiz questions</h3>

            <p>
              Quiz questions, also known as trivia questions, are short
              questions meant to test your understanding of the domain. Each
              question shouldn't take more than a minute or two to answer.
            </p>

            <p>
              There usually wouldn't be entire interview rounds just asking you
              quiz questions, but they could be sprung onto you in the middle of
              other interview rounds.
            </p>

            <p>
              <a href="/interviews/playbook/quiz"
                >Read more about Quiz Questions -></a
              >
            </p>
          </section>

          <section id="behavioral-interviews">
            <h2>Behavioral questions/interviews</h2>

            <p>
              In behavioral interviews, interviewer asks questions about your
              past behaviors and experiences in order to evaluate your
              suitability for the job and maturity level.
            </p>

            <p>
              The idea behind behavioral interviews is that past behaviors and
              experiences are good indicators of how someone will behave in the
              future, so the interviewer will ask questions that are designed to
              get you to describe specific situations you have faced and how you
              have dealt with them in order to get a better understanding about
              you beyond your technical capabilities.
            </p>

            <p>
              Behavioral interviews is a large topic on its own and we have
              <a href="/interviews/playbook/behavioral"
                >written an entire playbook on it</a
              >.
            </p>
          </section>

          <section id="hiring-process">
            <h2>Typical hiring process</h2>

            <p>Most companies will have a process resembling:</p>

            <ol>
              <li>
                <strong>Initial screen</strong>
                <ul>
                  <li>Recruiter call (Quiz questions may be asked)</li>
                  <li>Autograded online assessments or take home projects</li>
                </ul>
              </li>
              <li>
                <strong>Phone screen</strong>
                <ul>
                  <li>
                    Coding (Implementing algorithms, JavaScript functions, or
                    building user interfaces)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Full loop</strong>
                <ul>
                  <li>
                    Coding round (Implementing algorithms, JavaScript functions,
                    or building user interfaces)
                  </li>
                  <li>System design round</li>
                  <li>Behavioral round</li>
                </ul>
              </li>
            </ol>

            <p>
              The surest way to know what to expect is to ask the company
              recruiter about their interview process for the role. Good
              companies will even prepare a detailed document to explain each
              stage of the interview process along with resources to guide the
              candidates to prepare for the interviews. For big companies that
              see a large volume of applicants, there's a good chance that some
              candidates who have interviewed with them will share their
              experience on platforms like
              <a href="https://www.glassdoor.com/" target="_blank">Glassdoor</a
              >, <a href="https://www.teamblind.com/" target="_blank">Blind</a>,
              and <a href="https://www.reddit.com/" target="_blank">Reddit</a>.
            </p>

            <p>
              You must know what question types to expect in interviews,
              otherwise you'll be flying blind and not be able to prepare
              effectively.
            </p>

            <h3>Round-type matrix</h3>

            <p>
              The following matrix shows the relevance/likelihood of each
              question type during each interview round. It's possible that an
              interview round can include questions from different question
              types.
            </p>

            <div class="matrix-container">
              <table class="question-matrix">
                <thead>
                  <tr>
                    <th></th>
                    <th>Online assessment</th>
                    <th>Recruiter call</th>
                    <th>Take-home project</th>
                    <th>Coding</th>
                    <th>Behavioral</th>
                    <th>System design</th>
                    <th>Hiring manager</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Quiz</td>
                    <td>Medium</td>
                    <td>High</td>
                    <td>High</td>
                    <td>High</td>
                    <td>None</td>
                    <td>Low</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>Algorithms</td>
                    <td>High</td>
                    <td>None</td>
                    <td>None</td>
                    <td>High</td>
                    <td>High</td>
                    <td>High</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>High</td>
                    <td>None</td>
                    <td>Medium</td>
                    <td>High</td>
                    <td>High</td>
                    <td>Medium</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>UI</td>
                    <td>High</td>
                    <td>None</td>
                    <td>High</td>
                    <td>High</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>System design</td>
                    <td>None</td>
                    <td>None</td>
                    <td>Medium</td>
                    <td>Low</td>
                    <td>Low</td>
                    <td>High</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Behavioral</td>
                    <td>Low</td>
                    <td>None</td>
                    <td>None</td>
                    <td>Low</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Question types asked by companies</h3>

            <p>
              Here's a summary of the question types asked by the top US
              companies.
            </p>

            <div class="companies-matrix">
              <table class="companies-table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Quiz</th>
                    <th>Algorithms</th>
                    <th>JavaScript</th>
                    <th>UI</th>
                    <th>System design</th>
                    <th>Behavioral</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Airbnb</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Amazon</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Apple</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Unknown</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>ByteDance</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Dropbox</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Facebook/Meta</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Google</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>LinkedIn</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Unknown</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Lyft</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Microsoft</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>OpenAI</td>
                    <td>Yes</td>
                    <td>Maybe</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>X</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Uber</td>
                    <td>Unknown</td>
                    <td>Unknown</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Unknown</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="study-practice">
            <h2>Study and practice</h2>

            <p>
              Read on to find out how to prepare for the following front end
              interview formats/questions types:
            </p>

            <ul>
              <li>
                <strong>Coding Questions</strong>
                <ul>
                  <li>
                    <a href="/interviews/playbook/algorithms"
                      >Algorithmic Questions</a
                    >
                  </li>
                  <li>
                    <a href="/interviews/playbook/javascript"
                      >JavaScript Questions</a
                    >
                  </li>
                  <li>
                    <a href="/interviews/playbook/user-interface"
                      >User Interface Questions</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <strong
                  ><a href="/interviews/playbook/system-design"
                    >System Design Questions</a
                  ></strong
                >
              </li>
              <li>
                <strong
                  ><a href="/interviews/playbook/quiz"
                    >Quiz Questions</a
                  ></strong
                >
              </li>
            </ul>
          </section>
        </article>

        <!-- Article Navigation -->
        <nav class="article-navigation">
          <router-link to="/interviews/playbook/coding" class="nav-link next">
            <span class="nav-label">Next</span>
            <span class="nav-title">Front End Coding Interviews</span>
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

.article-content ol,
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

.matrix-container,
.companies-matrix {
  margin: 2rem 0;
  overflow-x: auto;
}

.question-matrix,
.companies-table {
  width: 100%;
  border-collapse: collapse;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
}

.question-matrix th,
.question-matrix td,
.companies-table th,
.companies-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #374151;
  font-size: 0.875rem;
}

.question-matrix th,
.companies-table th {
  background: #2a2a2e;
  color: #ffffff;
  font-weight: 600;
}

.question-matrix td,
.companies-table td {
  color: #d1d5db;
}

.question-matrix tr:last-child td,
.companies-table tr:last-child td {
  border-bottom: none;
}

.article-navigation {
  max-width: 800px;
  margin: 60px auto 0;
  padding: 0 2rem;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-link:hover {
  border-color: #4b5563;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.nav-link.next {
  text-align: right;
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
  }

  .matrix-container,
  .companies-matrix {
    margin: 1rem 0;
  }

  .question-matrix,
  .companies-table {
    font-size: 0.75rem;
  }

  .question-matrix th,
  .question-matrix td,
  .companies-table th,
  .companies-table td {
    padding: 8px 12px;
  }
}
</style>
