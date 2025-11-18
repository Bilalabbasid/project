<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <PlaybookArticleSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">3</span>
            <span class="reading-time">8 min read</span>
          </div>
          <h1>JavaScript Coding Interviews</h1>
          <p class="article-subtitle">
            Question types to expect, important concepts to know and top
            practice questions to do
          </p>
        </header>
        <article class="article-content">
          <p>
            The difference between coding JavaScript coding questions vs
            algorithmic coding questions is that the former is usually specific
            to the front end domain and it makes the most sense to use
            JavaScript (or TypeScript) to complete them. You will also probably
            need to make use of browser/JavaScript-specific APIs and/or utilize
            HTML/CSS/JavaScript knowledge.
          </p>

          <p>
            These JavaScript coding questions tend to be practical in nature and
            can come in one or more of the following categories:
          </p>

          <ol>
            <li>
              Implement standard built-in classes or methods in the JavaScript
              language
            </li>
            <li>
              Implement a utility function/class commonly found in popular
              libraries
            </li>
          </ol>

          <section>
            <h2>Examples</h2>

            <h3>JavaScript standard built-in classes/methods</h3>

            <p>
              It may seem redundant to implement standard classes/methods when
              they are already part of the language. However, browsers
              inconsistencies used to be a rampant problem and some language
              APIs are not found in older browsers. Hence developers had to
              resort to polyfilling, the act of providing modern functionality
              on older browsers that do not natively support it by implementing
              these APIs in downloaded JavaScript. Being able to implement these
              native functions also shows good understanding of front end
              fundamentals.
            </p>

            <ul>
              <li>
                <strong>Array methods:</strong>
                <a href="/questions/javascript/array-map" target="_blank"
                  >Array.prototype.map</a
                >,
                <a href="/questions/javascript/array-reduce" target="_blank"
                  >Array.prototype.reduce</a
                >,
                <a href="/questions/javascript/array-filter" target="_blank"
                  >Array.prototype.filter</a
                >
              </li>
              <li>
                <strong>Promise and other Promise-related functions:</strong>
                <a href="/questions/javascript/promise-all" target="_blank"
                  >Promise.all</a
                >,
                <a href="/questions/javascript/promise-any" target="_blank"
                  >Promise.any</a
                >
              </li>
              <li>
                <strong>DOM methods:</strong>
                <a
                  href="/questions/javascript/get-elements-by-tag-name"
                  target="_blank"
                  >document.getElementsByTagName</a
                >,
                <a
                  href="/questions/javascript/get-elements-by-class-name"
                  target="_blank"
                  >document.getElementsByClassName</a
                >
              </li>
            </ul>

            <p>
              There's more to these functions than meets the eye. Let's take the
              innocent <code>Array.prototype.map</code> for example. Are you
              aware that:
            </p>

            <ol>
              <li>
                It passes 4 arguments to the callback, including the
                <code>index</code> and <code>this</code>?
              </li>
              <li>
                It keeps the "holes" in sparse arrays, aka
                <code>[1, 2, , 4].map(val => val * val) === [1, 4, , 16]</code>
              </li>
              <li>
                The range of elements processed by <code>map</code> is set
                before the first call to callbackfn. Elements which are appended
                to the array after the call to <code>map</code> begins will not
                be visited by callbackfn. If existing elements of the array are
                changed, their value as passed to callbackfn will be the value
                at the time <code>map</code> visits them; elements that are
                deleted after the call to <code>map</code> begins and before
                being visited are not visited.
              </li>
            </ol>

            <p>
              Your implementation doesn't have to handle all of these cases,
              especially the array mutation one. However, it's a positive signal
              if you mentioned these cases. The closer your implementation is to
              the specification, the more senior/experienced you will appear to
              be.
            </p>

            <h3>Utility function/class from popular libraries</h3>

            <p>
              These functions/classes are commonly needed when building software
              with JavaScript but aren't in the standard language (for now).
            </p>

            <ul>
              <li>
                <strong>Lodash/Underscore functions:</strong>
                <a href="/questions/javascript/debounce" target="_blank"
                  >debounce</a
                >,
                <a href="/questions/javascript/throttle" target="_blank"
                  >throttle</a
                >,
                <a href="/questions/javascript/flatten" target="_blank"
                  >flatten</a
                >,
                <a href="/questions/javascript/curry" target="_blank">curry</a>,
                <a href="/questions/javascript/deep-clone" target="_blank"
                  >cloneDeep</a
                >
              </li>
              <li>
                <strong>jQuery methods:</strong>
                <a href="/questions/javascript/jquery-css" target="_blank"
                  >jQuery.css</a
                >,
                <a
                  href="/questions/javascript/jquery-toggleClass"
                  target="_blank"
                  >jQuery.toggleClass</a
                >
              </li>
              <li>
                <strong>Popular libraries:</strong>
                <ul>
                  <li>
                    <a href="/questions/javascript/classnames" target="_blank"
                      >classnames</a
                    >
                  </li>
                  <li>
                    <code>test</code>/<code>expect</code> functions from testing
                    frameworks like Jest/Mocha/Vitest
                  </li>
                  <li>
                    <a
                      href="/questions/javascript/event-emitter"
                      target="_blank"
                      >Emitter</a
                    >
                    (which exists as part of Node.js and many third party
                    libraries)
                  </li>
                  <li>Immutable.js</li>
                  <li>Backbone.js</li>
                </ul>
              </li>
            </ul>

            <p>
              If you take a look at the source code of these libraries, you
              might find some of the implementation to be quite complex. This is
              because there are lots of obscure real world use cases that the
              library has to support. Similar to the standard functions, you're
              not expected to handle all of these edge cases within an interview
              setting but you get points for calling them out.
            </p>
          </section>

          <section>
            <h2>What to do during JavaScript coding interviews</h2>

            <p>
              JavaScript coding interviews share a lot of similarities with
              algorithmic coding interviews. In general, you should:
            </p>

            <ol>
              <li>
                Find out what platform you are coding on and familiarize
                yourself with the coding environment:
                <ul>
                  <li>The supported editor shortcuts</li>
                  <li>Whether you can execute code</li>
                  <li>Whether you can install 3rd party dependencies</li>
                </ul>
              </li>
              <li>
                Make your self introduction under a minute. Unless requested, do
                not take longer than this otherwise you might not have enough
                time to code.
              </li>
              <li>
                Ask clarifying questions upon receiving the question. Clarify
                the following:
                <ul>
                  <li>
                    Can you use newer JavaScript syntax (ES2016 and beyond)?
                  </li>
                  <li>
                    Whether the code is meant to run in the browser or on the
                    server (e.g. Node.js)
                  </li>
                  <li>
                    Browser support, as this will affect the browser APIs you
                    can use
                  </li>
                </ul>
              </li>
              <li>
                Propose a solution to your interviewer. Unlike coding
                interviews, the focus of JavaScript coding interviews is usually
                not on complex data structures and algorithms. It's possible and
                likely you can jump straight to the optimal solution with the
                best choice of data structures and algorithms.
              </li>
              <li>
                Code out your solution and explain your code to your interviewer
                while you are coding.
              </li>
              <li>
                After coding, read through your code once and try to spot basic
                errors like typos, using variables before initializing them,
                using APIs incorrectly, etc.
              </li>
              <li>
                Outline some basic test cases and some edge cases. Test your
                code with these cases and determine if your code passes them. If
                it fails, debug the issue(s) and fix them.
              </li>
              <li>
                Optional: Explain the time/space complexity if the code involved
                algorithmic optimizations and smart choice of data structures.
              </li>
              <li>
                Explain any tradeoffs you made, cases you explicitly didn't
                handle, and how you would improve the code if you had more time.
              </li>
              <li>
                The interview might not end here, the interviewer might have
                follow-up questions for you on this question or give you another
                question. Be prepared for them.
              </li>
            </ol>
          </section>

          <section>
            <h2>How to prepare for JavaScript coding interviews</h2>

            <ol>
              <li>
                Be familiar with HTML, CSS, JavaScript, and DOM concepts by
                referring to the "Important Concepts" below. The
                <a href="/front-end-interview-playbook/quiz">Quiz section</a>
                can also be a good start since you might be asked on these
                concepts in the form of quiz questions during coding.
              </li>
              <li>
                Pick a <a href="/interviews/get-started">study plan</a> and
                practice the
                <a href="/questions/formats/javascript-functions"
                  >JavaScript coding questions</a
                >
                recommended for the selected study plan. It's also alright to
                study for a certain topic as you are doing the questions.
              </li>
            </ol>
          </section>

          <section>
            <h2>Important concepts</h2>

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
                    <td>Algorithms</td>
                    <td>
                      Binary search, Breadth-first search, Depth-first search,
                      Recursion
                    </td>
                  </tr>
                  <tr>
                    <td>JavaScript language</td>
                    <td>
                      Data types (checking for types, type coercion), Scope,
                      Closures, Callbacks, How this keyword works,
                      Object-oriented programming in JavaScript (prototypes,
                      classes, methods), Arrow functions vs normal functions,
                      Invoking functions via
                      Function.prototype.apply()/Function.prototype.call(),
                      Promise, Handling variadic arguments
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
                    <td>Timer (setTimeout(), setInterval())</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>Evaluation axes</h2>

            <p>
              JavaScript coding interviews are similar to algorithmic coding
              interviews and the way to go about the interviews should be
              similar. Naturally, there will be some overlaps with algorithmic
              coding interviews regarding how candidates are evaluated during
              JavaScript coding interviews.
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
                APIs), HTML, CSS, JavaScript, Performance
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
            <h2>Useful tips</h2>

            <ul>
              <li>
                <strong>Wishful thinking:</strong> JavaScript's standard library
                doesn't have some useful data structures and algorithms like
                queue, heap, binary search, which can make your life easier
                during JavaScript coding interviews. However, you can ask the
                interviewer if you can pretend such a data structure/algorithm
                exists and use it directly in your solution without implementing
                it.
              </li>
              <li>
                <strong>Pure functions:</strong> Aim to write pure functions
                which have the benefit of reusability and modularity, aka
                functions which don't rely on state outside of the function and
                doesn't cause side effects.
              </li>
              <li>
                <strong>Choose data structures wisely.</strong> Pay attention to
                your choice of data structures and be aware of the time
                complexities of the code. Be familiar with the time/space
                complexities of the basic JavaScript Array, Object, Set, Map
                operations should you want to use them in your solution. Some of
                these time/space complexities differ across languages. Don't
                write code that runs in O(n²) if it can accomplished in O(n)
                runtime with the use of hash maps.
              </li>
              <li>
                <strong>this matters:</strong> If a function accepts a callback
                function as a parameter, consider how the
                <code>this</code> variable should behave. For many built-in
                functions, <code>this</code> is provided as one of the arguments
                the callback function is invoked with.
              </li>
              <li>
                <strong>Mutations within callback functions.</strong> Beware of
                callback functions mutating the data structure it is operating
                on. You probably do not need to handle this case during
                interviews but you should explicitly mention such cases if it's
                relevant.
              </li>
              <li>
                <strong>Recursion edge cases:</strong>
                <ul>
                  <li>
                    <strong>Clarifying input size:</strong> If you have
                    identified that solving the question requires recursion, ask
                    about the input size and how to handle the case of recursion
                    stack overflow. Usually you won't have to handle it but
                    raising this issue demonstrates thoughtfulness.
                  </li>
                  <li>
                    <strong>Cyclic structures:</strong> Nested deep data
                    structures can have recursive references to itself, which
                    makes certain operations like serialization and traversal
                    more tricky. Ask the interviewer if you have to handle such
                    cases. Usually you won't have to handle it but raising this
                    issue demonstrates thoughtfulness.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2>Best practice questions</h2>

            <p>
              From experience, the best JavaScript coding interview questions to
              practice, as determined by frequency and important concepts
              covered are:
            </p>

            <ul>
              <li>
                <a href="/questions/javascript/debounce" target="_blank"
                  >Debounce</a
                >
              </li>
              <li>
                <a href="/questions/javascript/throttle" target="_blank"
                  >Throttle</a
                >
              </li>
              <li>
                <a href="/questions/javascript/array-filter" target="_blank"
                  >Array.prototype.filter</a
                >
              </li>
              <li>
                <a href="/questions/javascript/promise-all" target="_blank"
                  >Promise.all</a
                >
              </li>
              <li>
                <a href="/questions/javascript/curry" target="_blank">Curry</a>
              </li>
              <li>
                <a href="/questions/javascript/flatten" target="_blank"
                  >Flatten</a
                >
              </li>
              <li>
                <a
                  href="/questions/javascript/get-elements-by-class-name"
                  target="_blank"
                  >getElementsByTagName</a
                >
              </li>
              <li>
                <a href="/questions/javascript/deep-clone" target="_blank"
                  >Deep Clone</a
                >
              </li>
              <li>
                <a href="/questions/javascript/data-selection" target="_blank"
                  >Data Selection</a
                >
              </li>
            </ul>

            <p>
              GreatFrontEnd has a
              <a href="/questions/formats/javascript-functions"
                >comprehensive list of JavaScript coding questions</a
              >
              that you can practice. There are also automated tests cases you
              can run your code against to verify the correctness and solutions
              written by ex-FAANG Senior Engineers.
            </p>

            <p>
              Note that we are intentionally vague in some of the questions and
              don't present the full requirements upfront in the question
              description. However, we'll cover as much ground as possible in
              the solution. It may be frustrating while reading the solutions to
              see that you've missed out some things, but this trains you to
              think ahead and consider what are the possible areas you have to
              take note of when working on the solution. Better to find out
              during practice than during actual interviews.
            </p>

            <p>
              Prefer GitHub for learning? You can find 190+ JavaScript coding
              interview questions with solutions in our
              <a
                href="https://github.com/greatfrontend/top-javascript-interview-questions"
                target="_blank"
                >GreatFrontEnd GitHub repo</a
              >. Clone it, practice offline, or contribute while continuing here
              for structured guidance.
            </p>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link to="/interviews/playbook/coding" class="nav-link prev">
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">Front End Coding Interviews</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/algorithms"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Data Structures and Algorithms</span>
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
