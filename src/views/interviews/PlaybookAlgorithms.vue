<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <PlaybookArticleSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">4</span>
            <span class="reading-time">6 min read</span>
          </div>
          <h1>Data Structures and Algorithms Interviews</h1>
          <p class="article-subtitle">
            Front end engineer's guide to DSA - important concepts to know, top
            practice questions to do and other tips
          </p>
        </header>
        <article class="article-content">
          <p>
            Algorithmic coding questions are exactly the questions you can find
            on LeetCode. Algorithmic questions usually have the following
            traits:
          </p>

          <ul>
            <li>
              They aren't specific to the front end domain; they can be solved
              in most mainstream programming languages.
            </li>
            <li>
              Usually accompanied with impractical scenarios. You would not have
              encountered such a problem during real world development. Who ever
              had to flip a binary tree or count the number of palindromic
              substrings in a string?
            </li>
            <li>
              Efficiency of the code (time and space complexity) is important
              and producing the most efficient solution requires solid knowledge
              of data structures and algorithms.
            </li>
          </ul>

          <p>
            Although algorithmic coding questions aren't specific to front end,
            the skills needed to excel in these questions — strong analytical
            thinking, effective communication, a solid grasp of the common data
            structures and algorithms, good code hygiene, are still crucial
            skills good Front End Engineers should possess. Good Front End
            Engineers are also good Software Engineers and good Software
            Engineers should have mastery over basic DSA. Hence it's no surprise
            that many companies still ask algorithmic coding questions during
            the interview process. Familiarity with data structures and
            algorithms is also helpful for solving JavaScript coding questions
            and User Interface coding questions.
          </p>

          <p>
            There are a ton of resources out there that cover algorithmic coding
            interviews and since they are not specific to front end, we won't go
            into too much detail on this page. We recommend referring to
            <a href="https://www.techinterviewhandbook.org/" target="_blank"
              >Tech Interview Handbook</a
            >
            as a free resource if you would like to learn more about algorithmic
            coding interviews.
          </p>

          <section>
            <h2>Examples</h2>

            <ul>
              <li>Reverse a linked list</li>
              <li>Determine if a string contains balanced brackets</li>
              <li>Determine how many substrings in a string are palindromes</li>
            </ul>
          </section>

          <section>
            <h2>How to prepare</h2>

            <ol>
              <li>
                Pick a good programming language to use. If you want to save
                preparation time you should probably stick with JavaScript for
                algorithmic questions, although note that the JavaScript
                language doesn't contain certain common useful data structures
                and algorithms whereas other languages like Python, Java, and
                C++ do. We recommend using Python for solving algorithmic
                interview questions
              </li>
              <li>
                Plan your time and tackle topics and questions in order of
                importance
              </li>
              <li>Combine studying and practicing for a single topic</li>
              <li>
                Accompany practice with coding interview cheat sheets to
                internalize the must-dos and must-remembers
              </li>
            </ol>

            <p>
              Refer to
              <a
                href="https://www.techinterviewhandbook.org/coding-interview-prep/"
                target="_blank"
                >Tech Interview Handbook's step-by-step guide on how to prepare
                for algorithmic coding interviews</a
              >.
            </p>
          </section>

          <section>
            <h2>Important concepts</h2>

            <p>
              Although you can still be asked any algorithmic question,
              companies tend to go easier on Front End Engineer candidates and
              probably will not ask questions involving hard topics like dynamic
              programming or complex graph algorithms.
            </p>

            <p>
              Since the DOM is a tree, prioritize learning about trees and the
              various tree traversal algorithms.
            </p>

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
                    <td>
                      Arrays, Maps, Stacks, Trees, Graphs, Matrix (2D Arrays),
                      Sets
                    </td>
                  </tr>
                  <tr>
                    <td>Algorithms</td>
                    <td>
                      Binary Search, Breadth-first Search, Depth-first Search,
                      Topological Sorting, Recursion
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>Common JavaScript operations</h2>

            <p>
              Be aware of the common JavaScript operations and their time
              complexities.
            </p>

            <h3>Array</h3>

            <p>Array operations and their time complexity:</p>

            <ul>
              <li><code>Array.prototype.concat()</code>: O(m + n)</li>
              <li><code>Array.prototype.every()</code>: O(n)</li>
              <li><code>Array.prototype.fill()</code>: O(n)</li>
              <li><code>Array.prototype.filter()</code>: O(n)</li>
              <li><code>Array.prototype.find()</code>: O(n)</li>
              <li><code>Array.prototype.pop()</code>: O(1)</li>
              <li><code>Array.prototype.push()</code>: O(1)</li>
              <li><code>Array.prototype.reduce()</code>: O(n)</li>
              <li><code>Array.prototype.reverse()</code>: O(n)</li>
              <li><code>Array.prototype.shift()</code>: O(n)</li>
              <li><code>Array.prototype.slice()</code>: O(n)</li>
              <li><code>Array.prototype.some()</code>: O(n)</li>
              <li><code>Array.prototype.sort()</code>: O(nlgn)</li>
              <li><code>Array.prototype.splice()</code>: O(n)</li>
              <li><code>Array.prototype.unshift()</code>: O(m + n)</li>
            </ul>

            <p>
              <em>n</em> is the number of elements in the array and
              <em>m</em> is the number of elements to be added.
            </p>

            <h3>Map</h3>

            <p>Map operations and their time complexity:</p>

            <ul>
              <li><code>Map.prototype.clear()</code>: O(n)</li>
              <li><code>Map.prototype.delete()</code>: O(1)</li>
              <li>
                <code>Map.prototype.entries()</code>: O(1) because it returns an
                iterator. Getting all the entries will take O(n) time
              </li>
              <li><code>Map.prototype.forEach()</code>: O(n)</li>
              <li><code>Map.prototype.get()</code>: O(1)</li>
              <li><code>Map.prototype.has()</code>: O(1)</li>
              <li>
                <code>Map.prototype.keys()</code>: O(1) because it returns an
                iterator. Getting all the keys will take O(n) time
              </li>
              <li><code>Map.prototype.set()</code>: O(1)</li>
              <li>
                <code>Map.prototype.values()</code>: O(1) because it returns an
                iterator. Getting all the values will take O(n) time
              </li>
            </ul>

            <p><em>n</em> is the number of keys in the map.</p>

            <h3>Set</h3>

            <p>Set operations and their time complexity:</p>

            <ul>
              <li><code>Set.prototype.add()</code>: O(1)</li>
              <li><code>Set.prototype.clear()</code>: O(n)</li>
              <li><code>Set.prototype.delete()</code>: O(1)</li>
              <li>
                <code>Set.prototype.entries()</code>: O(1) because it returns an
                iterator. Getting all the entries will take O(n) time
              </li>
              <li><code>Set.prototype.forEach()</code>: O(n)</li>
              <li><code>Set.prototype.has()</code>: O(1)</li>
              <li>
                <code>Set.prototype.keys()</code>: O(1) because it returns an
                iterator. Getting all the keys will take O(n) time
              </li>
              <li>
                <code>Set.prototype.values()</code>: O(1) because it returns an
                iterator. Getting all the values will take O(n) time
              </li>
            </ul>

            <p><em>n</em> is the number of elements in the set.</p>
          </section>

          <section>
            <h2>Evaluation axes</h2>

            <p>
              During algorithmic coding interviews, interviewers are evaluating
              candidates on the following skills:
            </p>

            <ul>
              <li>
                <strong>Problem solving:</strong> Use a systematic and logical
                approach to understanding and addressing a problem. Break down
                the problem into smaller independent problems. Evaluate
                different approaches and their tradeoffs
              </li>
              <li>
                <strong>Technical competence:</strong> Ability to translate
                solutions into working code and demonstrating a strong
                understanding of the language being used
              </li>
              <li>
                <strong>Communication:</strong> Ask questions to clarify details
                and clearly explain one's approach and considerations
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
                <strong>Choose data structures wisely:</strong> Pay attention to
                your choice of data structures and be aware of the time
                complexities of the code. Be familiar with the time/space
                complexities of the basic JavaScript Array, Object, Set, Map
                operations should you want to use them in your solution. Some of
                these time/space complexities differ across languages. Don't
                write code that runs in O(n²) if it can accomplished in O(n)
                runtime with the use of hash maps.
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
            <h2>Practice questions</h2>

            <p>
              Blind 75 is a famous and concise list of algorithm questions
              curated by
              <a href="https://www.linkedin.com/in/yangshun/" target="_blank"
                >Yangshun Tay</a
              >. You can practice the
              <a href="/interviews/playbook/blind75"
                >Blind 75 question list on GreatFrontEnd</a
              >.
            </p>

            <p>
              GreatFrontEnd also provides some
              <a href="/questions/formats/algo-coding"
                >general practice questions for Data Structures and
                Algorithms</a
              >
              where you can practice implementing common data structures (<a
                href="/questions/algo/stack"
                target="_blank"
                >Stack</a
              >, <a href="/questions/algo/queue" target="_blank">Queue</a>) and
              algorithms (<a
                href="/questions/algo/binary-search"
                target="_blank"
                >Binary Search</a
              >,
              <a href="/questions/algo/merge-sort" target="_blank">Merge Sort</a
              >), etc in JavaScript.
            </p>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/javascript"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">JavaScript Coding Interviews</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/user-interface"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">User Interface Coding Interviews</span>
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
