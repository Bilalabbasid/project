<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <PlaybookArticleSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">5</span>
            <span class="reading-time">12 min read</span>
          </div>
          <h1>User Interface Coding Interviews</h1>
          <p class="article-subtitle">
            Best practices while interviewing, important concepts to know and
            critical practice questions to do
          </p>
        </header>
        <article class="article-content">
          <p>
            User interface coding interviews will involve candidates writing
            HTML, CSS and JavaScript to complete. In our opinion this is
            essential for evaluating the skills of Front End Engineers and more
            companies are moving towards asking candidates to code user
            interfaces during interviews.
          </p>

          <section>
            <h2>Types of user interface questions</h2>

            <p>
              The user interfaces that candidates are asked to code can range
              from really small UI components to more complex client-facing
              products like small apps and games.
            </p>

            <h3>User interface components/widgets/layouts</h3>

            <p>
              These are the most common types of UI questions. They are usually
              small and can be completed within 15-30 minutes.
            </p>

            <ul>
              <li>
                <strong>Components:</strong>
                <a href="/questions/user-interface/accordion" target="_blank"
                  >Accordion</a
                >,
                <a href="/questions/user-interface/tabs" target="_blank">Tabs</a
                >,
                <a href="/questions/user-interface/star-rating" target="_blank"
                  >Star Rating Widget</a
                >,
                <a href="/questions/user-interface/tweet" target="_blank"
                  >Tweet</a
                >, Image Carousel
              </li>
              <li>
                <strong>Widgets:</strong>
                <a
                  href="/questions/user-interface/digital-clock"
                  target="_blank"
                  >Digital Clock</a
                >,
                <a href="/questions/user-interface/analog-clock" target="_blank"
                  >Analog Clock</a
                >
              </li>
              <li>
                <strong>Page Sections:</strong>
                <a href="/questions/user-interface/signup-form" target="_blank"
                  >Signup Form</a
                >,
                <a href="/questions/user-interface/holy-grail" target="_blank"
                  >Holy Grail</a
                >
              </li>
            </ul>

            <h3>Apps/games</h3>

            <p>
              The time allowed for apps/games questions is usually longer than
              components/widgets. Depending on how complex the question is, you
              may spend up to half an hour or even an hour to complete the
              question, especially if you are asked to build games.
            </p>

            <ul>
              <li>
                <strong>Apps:</strong>
                <a href="/questions/user-interface/todo-list" target="_blank"
                  >Todo List</a
                >,
                <a href="/questions/user-interface/stopwatch" target="_blank"
                  >Stopwatch</a
                >,
                <a
                  href="/questions/user-interface/temperature-converter"
                  target="_blank"
                  >Temperature Converter</a
                >
              </li>
              <li>
                <strong>Games:</strong>
                <a href="/questions/user-interface/tic-tac-toe" target="_blank"
                  >Tic-tac-toe</a
                >,
                <a href="/questions/user-interface/whack-a-mole" target="_blank"
                  >Whack-a-mole</a
                >, Snake, Tetris, Minesweeper, Connect 4
              </li>
            </ul>

            <p>
              Observe that most games will be 2D grid-based games. Make sure you
              know how to create grid layouts in HTML and CSS!
            </p>
          </section>

          <section>
            <h2>What to do during user interface coding interviews</h2>

            <p>
              User interface coding interviews share a fair bit of similarity
              with non-front end coding interviews. In general, you should:
            </p>

            <ol>
              <li>
                <strong>Find out what is available:</strong> Find out what
                platform you are coding on and familiarize yourself with the
                coding environment:
                <ul>
                  <li>
                    Whether you will be using a local IDE or an online one. If
                    local IDE, will you be using your own laptop?
                  </li>
                  <li>The supported editor shortcuts</li>
                  <li>
                    Whether you can use JavaScript libraries/framework or have
                    to use vanilla JavaScript
                  </li>
                  <li>Whether you can execute code and preview the UI</li>
                  <li>
                    What are the latest supported JavaScript syntax and language
                    features?
                  </li>
                  <li>Whether you can install dependencies beforehand</li>
                </ul>
              </li>
              <li>
                <strong>Self introduction:</strong> Make your self introduction
                under a minute. Unless requested, do not take longer than this
                otherwise you might not have enough time to code.
              </li>
              <li>
                <strong>Clarify question:</strong> Ask clarifying questions upon
                receiving the question. Clarify the following:
                <ul>
                  <li>Can you use the newest JavaScript syntax?</li>
                  <li>
                    Browser support, as this will affect the browser APIs you
                    can use
                  </li>
                </ul>
              </li>
              <li>
                <strong>Manage complexity:</strong> Break down the problem into
                stages/milestones that build on top of each other. Communicate
                this breakdown to your interviewer. Unlike coding interviews,
                the focus of User Interface coding interviews is usually around
                the component states and APIs as opposed to complex data
                structures and algorithms
              </li>
              <li>
                <strong>Start coding:</strong> Code out your solution and
                explain your code to your interviewer while you are coding
                <ul>
                  <li>
                    Where possible, test your code in the browser after every
                    milestone/feature added, instead of only at the end
                  </li>
                  <li>
                    Refer to the
                    <a
                      href="/front-end-interview-playbook/user-interface-questions-cheatsheet"
                      target="_blank"
                      >User Interface Questions Cheatsheet</a
                    >
                    for a list of things to take note of during User Interface
                    coding interviews
                  </li>
                </ul>
              </li>
              <li>
                <strong>Review your code:</strong> After coding, read through
                your code once and try to spot basic errors like typos, using
                variables before initializing them, using APIs incorrectly, etc.
              </li>
              <li>
                <strong>Testing:</strong> Outline some basic test cases and some
                edge cases. Test your code with these cases and determine if
                your code passes them. If it fails, debug the issue(s) and fix
                them
              </li>
              <li>
                <strong>Tradeoff:</strong> Explain any tradeoffs you made, cases
                you explicitly didn't handle, and how you would improve the code
                if you had more time
              </li>
              <li>
                <strong>Follow-ups:</strong> The interview might not end here,
                the interviewer might have follow-up questions for you on this
                question or give you another question. Be prepared for them
              </li>
            </ol>
          </section>

          <section>
            <h2>How to prepare for user interface coding interviews</h2>

            <ol>
              <li>
                <strong>Core concepts:</strong> Be familiar with the topics
                under the Important concepts section below. The
                <a href="/front-end-interview-playbook/quiz" target="_blank"
                  >Quiz section</a
                >
                can also be a good start since you might be asked on these
                concepts in the form of quiz questions during coding.
              </li>
              <li>
                <strong>Practice writing UI:</strong> It's best to learn how to
                build UIs in both Vanilla JavaScript and a UI framework of
                choice. Most companies will allow using JavaScript UI frameworks
                but some companies (e.g. Google) mandate that you can only use
                Vanilla JavaScript
                <ul>
                  <li>
                    <strong>Vanilla JavaScript:</strong> Learn the DOM
                    manipulation APIs. At the very least you should know how to
                    create new DOM elements, add classes/attributes to them, and
                    add child elements. If you come from a jQuery background,
                    check out
                    <a href="https://youmightnotneedjquery.com/" target="_blank"
                      >You might not need jQuery</a
                    >, a website showing you how to accomplish the common jQuery
                    operations in Vanilla JavaScript. You will be pleasantly
                    surprised to find out that with modern browser APIs there
                    isn't really much need for jQuery anymore.
                  </li>
                  <li>
                    <strong>JavaScript UI framework:</strong> Be familiar with a
                    UI framework of choice. Stick with the framework that you
                    are most familiar with. There's no need and also probably
                    not enough time to learn a new framework. If you are new to
                    JavaScript UI frameworks, React will be our recommendation
                    as it is the most popular library/framework to build UI
                    right now and what most companies look for when hiring front
                    end engineers.
                  </li>
                </ul>
              </li>
              <li>
                <strong>CSS:</strong> Be familiar with writing CSS under
                interview conditions (small questions which won't require
                writing that much CSS):
                <ul>
                  <li>
                    <strong>Write Vanilla CSS:</strong> Learn to write CSS
                    without reliance on preprocessors like Sass/Less. Not all
                    coding environments will allow using processors and
                    interview questions are likely small and do not really
                    benefit from the features CSS preprocessors bring. The most
                    useful feature of CSS processors is the use of variables,
                    which is available natively via CSS custom properties (CSS
                    variables).
                  </li>
                  <li>
                    <strong>Adopt a CSS naming convention:</strong> Consider
                    adopting a CSS naming methodology like
                    <a href="https://getbem.com/" target="_blank"
                      >Block Element Modifier</a
                    >
                    when writing your classes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Deep dives:</strong> Read our User Interface coding deep
                dive guides:
                <ul>
                  <li>
                    <a
                      href="/front-end-interview-playbook/user-interface-questions-cheatsheet"
                      target="_blank"
                      >User Interface Questions Cheatsheet</a
                    >
                  </li>
                  <li>
                    <a
                      href="/front-end-interview-playbook/user-interface-components-api-design-principles"
                      target="_blank"
                      >User Interface Components API Design Principles</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <strong>More practice:</strong> Try out
                <a href="/interviews/gfe75" target="_blank">GFE 75</a> or pick a
                <a href="/interviews/study-plans" target="_blank">study plan</a>
                and practice the
                <a href="/questions/formats/ui-coding" target="_blank"
                  >User Interface coding questions</a
                >
                recommended for the selected study plan.
                <ul>
                  <li>
                    Spend roughly equal amount of time practicing building both
                    UI components and building apps/games. Both are equally
                    important.
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2>Important concepts</h2>

            <p>Be familiar with these web development concepts:</p>

            <div class="concepts-table">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Concepts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data structures</td>
                    <td>Arrays, Maps, Stacks, Trees, Sets</td>
                  </tr>
                  <tr>
                    <td>Software engineering</td>
                    <td>
                      SOLID principles, Design patterns, Model-View-Controller
                    </td>
                  </tr>
                  <tr>
                    <td>HTML</td>
                    <td>Semantic HTML, Form validation, Form submission</td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>
                      Box model, Selectors, Specificity, Positioning, Units,
                      Flexbox, Grid, CSS custom properties (variables)
                    </td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>
                      Closures, Callbacks, Promise, async/await, Handling
                      variadic arguments
                    </td>
                  </tr>
                  <tr>
                    <td>DOM</td>
                    <td>
                      DOM traversal, DOM creation, DOM manipulation, Accessing
                      element/node properties, Event delegation
                    </td>
                  </tr>
                  <tr>
                    <td>Runtime APIs</td>
                    <td>
                      Timer — setTimeout(), setInterval(), Networking — Ajax,
                      fetch()
                    </td>
                  </tr>
                  <tr>
                    <td>Accessibility</td>
                    <td>
                      ARIA roles, states & properties, Keyboard interactions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>Evaluation axes</h2>

            <p>
              User interface coding interviews have similar rubrics as
              JavaScript coding interviews as both involve coding in the front
              end domain. However, user interface coding questions will have
              even more emphasis on domain expertise and the various front end
              topics.
            </p>

            <ul>
              <li>
                <strong>Problem solving:</strong> Use a systematic and logical
                approach to understanding and addressing a problem. Break down
                the problem into smaller independent problems. Evaluate
                different approaches and their tradeoffs
              </li>
              <li>
                <strong>Software engineering foundation:</strong> Familiarity
                with data structures, algorithms, runtime complexity analysis,
                use of design patterns, design solution with clean abstractions
              </li>
              <li>
                <strong>Domain expertise:</strong> Understanding of the front
                end domain and the relevant languages: Browser (DOM and DOM
                APIs), HTML, CSS, JavaScript, User Experience, Accessibility,
                i18n, Networks, Performance
              </li>
              <li>
                <strong>Communication:</strong> Ask questions to clarify details
                and clearly explaining one's approach and considerations
              </li>
              <li>
                <strong>Verification:</strong> Identify various scenarios to
                test the code against, including edge cases. Be able to diagnose
                and fix any issues that arise
              </li>
            </ul>
          </section>

          <section>
            <h2>Best practice questions</h2>

            <p>
              From experience, the best UI interview questions to practice, as
              determined by frequency and important concepts covered are:
            </p>

            <ul>
              <li>
                <a href="/questions/user-interface/todo-list" target="_blank"
                  >Todo List</a
                >
              </li>
              <li>
                <a href="/questions/user-interface/signup-form" target="_blank"
                  >Signup Form</a
                >
              </li>
              <li>
                <a
                  href="/questions/user-interface/temperature-converter"
                  target="_blank"
                  >Temperature Converter</a
                >
              </li>
              <li>
                <a href="/questions/user-interface/progress-bar" target="_blank"
                  >Progress Bar</a
                >
              </li>
              <li>
                <a href="/questions/user-interface/analog-clock" target="_blank"
                  >Analog Clock</a
                >
              </li>
              <li>
                <a href="/questions/user-interface/job-board" target="_blank"
                  >Job Board</a
                >
              </li>
              <li>
                <a href="/questions/user-interface/data-table" target="_blank"
                  >Data Table</a
                >
              </li>
              <li>
                <a href="/questions/user-interface/whack-a-mole" target="_blank"
                  >Whack-a-mole</a
                >
              </li>
              <li>
                <a href="/questions/user-interface/tic-tac-toe" target="_blank"
                  >Tic-tac-toe</a
                >
              </li>
              <li>
                <a href="/questions/user-interface/tabs" target="_blank"
                  >Tabs</a
                >
              </li>
              <li>
                <a
                  href="/questions/user-interface/image-carousel"
                  target="_blank"
                  >Image Carousel</a
                >
              </li>
              <li>
                <a href="/questions/user-interface/modal-dialog" target="_blank"
                  >Modal Dialog</a
                >
              </li>
              <li>Autocomplete</li>
              <li>Dropdown Menu</li>
            </ul>

            <p>
              GreatFrontEnd has a
              <a href="/questions/formats/ui-coding" target="_blank"
                >comprehensive list of user interface coding questions</a
              >
              that you can practice in your framework of choice (currently
              supports Vanilla JavaScript and React). We also provide manual
              tests cases you can test your code against to verify the
              correctness and solutions written in the various JavaScript UI
              frameworks by ex-FAANG Senior Engineers. Automated test cases are
              not provided for UI questions because they tend to be coupled to
              implementation and hard for automated tests to test accurately.
              Moreover, during interviews you likely have to test your UI
              yourself.
            </p>

            <p>
              Many of GreatFrontEnd's coding questions are also broken down into
              stages, which get progressively harder. In interviews, your
              interviewer might only explicitly request for the basic
              functionality. However, after you complete the basic
              functionality, you can take the initiative to add on more features
              to improve on the basic version and handle more edge cases. An
              example of a question broken down into stages:
            </p>

            <ol>
              <li>
                <a href="/questions/user-interface/accordion" target="_blank"
                  >Accordion</a
                >: Build a basic accordion that focuses on rendering and
                show/hide functionality
              </li>
              <li>
                <a href="/questions/user-interface/accordion-ii" target="_blank"
                  >Accordion II</a
                >: Build an accordion with improved accessibility that has the
                right ARIA roles, states, and properties
              </li>
              <li>
                <a
                  href="/questions/user-interface/accordion-iii"
                  target="_blank"
                  >Accordion III</a
                >: Built a fully-accessible accordion that has keyboard support
                according to ARIA specifications
              </li>
            </ol>

            <p>
              Building the basic accordion component might let you pass the
              interview, but nailing the accessibility aspects will help you
              score more points and possibly put you at senior level.
            </p>

            <p>
              Note that we are intentionally vague in some of the questions and
              don't present the full requirements upfront in the question
              description. However, we'll cover as much ground as possible in
              the solution. It may be frustrating while reading the solutions to
              see that you've missed out some things, but this trains you to
              think ahead and consider what are the possible areas you have to
              take note of when building the solution. Better to find out during
              practice than during actual interviews.
            </p>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/algorithms"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">Data Structures and Algorithms</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/ui-cheatsheet"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">UI Interview Cheatsheet</span>
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
