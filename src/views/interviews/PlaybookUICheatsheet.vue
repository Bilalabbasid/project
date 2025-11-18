<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <PlaybookArticleSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">6</span>
            <span class="reading-time">15 min read</span>
          </div>
          <h1>Cheatsheet for UI Interview Questions</h1>
          <p class="article-subtitle">
            A cheatsheet you can use to improve the user interfaces you have to
            build or design during front end interviews
          </p>
        </header>
        <article class="article-content">
          <p>
            Here are some tips you can use to improve the user interfaces you
            have to build/design during front end interviews. These can be
            applied to both User Interface Coding Interviews and Front End
            System Design Interviews.
          </p>

          <section>
            <h2>General</h2>

            <ul>
              <li>
                <strong>Break down the problem:</strong> Break down the problem
                into stages/milestones that build on top of each other and write
                your code progressively.
              </li>
              <li>
                <strong>Test frequently:</strong> Test the UI in the browser
                after you complete every feature so that you can catch bugs
                early. Bugs caught earlier are easier to fix. Make sure the
                current feature is working before moving on to the next feature.
              </li>
              <li>
                <strong>Use JavaScript frameworks if possible:</strong> Your
                life will be very hard if you choose to build complicated UI
                using Vanilla JavaScript as the code can get very long and messy
                quickly. We recommend building apps and games using a JavaScript
                framework/library (e.g. React, Vue, Angular, etc.) if possible.
              </li>
              <li>
                <strong>Think ahead and plan accordingly:</strong> Think about
                what features your interviewer might ask you to add next by
                drawing from your experience in building real-world
                applications, using libraries, or from practicing interview
                questions. Design your code in a way that makes it easy for new
                features to be added. Most of the time you would be asked to
                component-ize your UI so that multiple component instances can
                be shown on a page – modularize and avoid relying on global
                states or polluting the global namespace.
              </li>
            </ul>
          </section>

          <section>
            <h2>Component organization</h2>

            <p>How do you structure your code?</p>

            <ul>
              <li>
                <strong>Adopt the Container/Presentational Pattern:</strong> To
                achieve good decoupling, rendering code should be agnostic to
                the source of data. Separate components into an outer layer that
                provides the data and an inner stateless one that renders the
                view based on the data. This makes it easy for the view to
                switch from local component/app state to data loaded from the
                network and vice versa, you only have to change the outer
                component and the inner component can be used as-is. This
                separation also facilitates testing of the presentational
                component as the required data can be easily mocked.
              </li>
              <li>
                <strong>Break down the app into smaller components:</strong> If
                the UI has multiple parts, break the UI into smaller components
                and identify the props/state needed by each component.
              </li>
              <li>
                <strong>Minimal API surface area:</strong> Don't pass excess
                data to inner components which don't need them.
              </li>
              <li>
                <strong>Component instantiation:</strong> When asked to build UI
                components, define APIs (usually functions) to allow creating
                multiple independent instances of the components along with
                configurable options and defaults. Avoid writing code (e.g.
                relying on global variables) that prevents multiple UI component
                instances from being created.
                <ul>
                  <li>
                    <strong>Vanilla JavaScript:</strong> Create a function that
                    takes in a DOM element (the container element) and an
                    options object. Within the function you can dynamically
                    create DOM elements and append to the container element.
                    Another source of inspiration for a component API is jQuery
                    UI, but that has a dependency on jQuery.
                  </li>
                  <li>
                    <strong>Other JavaScript UI frameworks:</strong> Most modern
                    JavaScript UI frameworks (e.g. React, Vue, Angular) force
                    you to think in terms of components by default.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2>State design</h2>

            <p>
              State is data that changes over time in your UI, commonly due to
              user interactions or background events (network request response,
              passing of time, WebSocket events).
            </p>

            <p>
              Most UI questions in interviews will require state and designing
              the state well is paramount.
            </p>

            <ul>
              <li>
                <strong>Determine the minimum state needed in your UI:</strong>
                The smaller the state, the easier it is to read and understand
                the code -> lower likelihood for bugs. Identify essential state
                vs derived state. Derived state is state that can be calculated
                from essential state. By deriving the state on-the-fly you
                reduce the possibility of state values going out-of-sync.
              </li>
              <li>
                <strong
                  >Separate rendering code vs data management code:</strong
                >
                Make the UI a function of your data and separate your code into
                two parts (rendering code vs data management code) for better
                readability. If you use JavaScript frameworks such as React, you
                will more or less be forced to do so.
              </li>
              <li>
                <strong
                  >Use the state-reducer pattern for complex state
                  interactions:</strong
                >
                If the question requires many state fields and certain actions
                require changing multiple fields at once, use a reducer to
                consolidate state update logic. First popularized by Redux, the
                state-reducer pattern encourages you to determine the state of
                your UI, actions that can be taken, and how to combine actions
                with state to derive the next state. If you are using React, you
                can achieve this pattern via the useReducer React hook. Redux is
                usually overkill for interviews and useReducer should be
                sufficient.
              </li>
            </ul>

            <p>
              React's docs on "Managing State" is an excellent resource on how
              to design and use component state correctly. Some of the ideas
              mentioned aren't specific to React and can be applied to any UI
              frameworks.
            </p>
          </section>

          <section>
            <h2>JavaScript</h2>

            <p>
              Is your JavaScript using modern language syntax and good practices
              while avoiding bad practices?
            </p>

            <ul>
              <li>
                <strong>Use a style guide:</strong> Use a JavaScript style guide
                like Airbnb's JavaScript Style Guide. During development, static
                analysis tools like ESLint can help you to enforce some of these
                good practices. However, these tools might not be available
                during interviews. Try to get accustomed to writing code with
                good coding style without help from a tool.
              </li>
              <li>
                <strong>Leave the global environment alone:</strong> This
                applies to Vanilla JavaScript scenarios. Avoid polluting global
                scope by declaring global variables and global functions. Write
                an Immediately-Invoked Function Expression (IIFE) and put all
                custom code within it.
              </li>
            </ul>
          </section>

          <section>
            <h2>HTML</h2>

            <p>
              Are you writing semantic HTML with the right tags and right
              attributes?
            </p>

            <ul>
              <li>
                <strong>Semantic tags:</strong> Use heading tags for titles,
                button tags for interactive elements, list tags for sequential
                elements, and so on. Don't use divs for everything!
              </li>
              <li>
                <strong>Heading hierarchy:</strong> Ensure heading tags have a
                hierarchy and there's not more than one h1 in the DOM.
              </li>
              <li>
                <strong>Interactive elements:</strong> Use button for elements
                that require interaction. Do not add click handlers to div and
                span, that's a huge red flag and shows a lack of thought for
                accessibility.
              </li>
            </ul>

            <h3>Forms</h3>

            <p>Forms are complex on its own and deserves its own section.</p>

            <ul>
              <li>
                <strong>Link labels and inputs:</strong> inputs should be linked
                to labels using id and for.
              </li>
              <li>
                <strong>Wrap inputs in a form:</strong> inputs should be wrapped
                in a form so that clicking on buttons and hitting Enter will
                submit the form. Remember to add event.preventDefault() if the
                network request is meant to be made using Ajax.
              </li>
              <li>
                <strong>Inputs should have appropriate types:</strong> inputs
                should have appropriate type like email, password, number, etc.
              </li>
              <li>
                <strong>Leverage native HTML form validation:</strong> Where
                possible, use the required attribute combined with other
                attributes like pattern, min, max, and so on.
              </li>
            </ul>
          </section>

          <section>
            <h2>CSS/styling</h2>

            <p>
              Is your CSS written in a scalable and easy-to-understand manner?
            </p>

            <ul>
              <li>
                <strong>Write Vanilla CSS:</strong> Learn to write CSS without
                reliance on preprocessors like Sass and Less. Not all
                environments will allow using processors and interview questions
                are likely small and do not really benefit from the features CSS
                preprocessors bring. The most useful feature of CSS processors
                is the use of variables, which is available natively via CSS
                custom properties (variables).
              </li>
              <li>
                <strong>Adopt a CSS naming convention:</strong> Consider
                adopting a CSS naming methodology like Block Element Modifier
                when writing your classes.
              </li>
              <li>
                <strong>Avoid #id selectors in components:</strong> When
                building UI components meant to be reused (e.g. buttons, tabs,
                menus, modals, etc), avoid using #id selectors in the HTML as
                ids are meant to be globally unique but you can have multiple
                instances of the component.
              </li>
              <li>
                <strong>Organize your CSS:</strong> Read about how to organize
                your CSS in big projects and how to have a Scalable and Modular
                Architecture for CSS.
              </li>
            </ul>
          </section>

          <section>
            <h2>User experience</h2>

            <p>Does your UI provide a great user experience?</p>

            <ul>
              <li>
                <strong>Mobile-friendliness:</strong> Check if you need to make
                your UI work well on mobile.
                <ul>
                  <li>
                    CSS media queries can be used to render a different layout
                    on mobile.
                  </li>
                  <li>
                    Make interactive elements like buttons large enough to be
                    pressed (recommend at least 44 x 44 px) and spaced widely
                    enough.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Error states:</strong> Reflect errors promptly and
                clearly — form validation errors, network request errors.
              </li>
              <li>
                <strong
                  >Handle rendering images of different dimensions:</strong
                >
                Make your UI work for rendering images of all sizes/dimensions
                yet preserving the original aspect ratios.
                <ul>
                  <li>
                    Use CSS background-image together with background-size:
                    contain so that the image fits within your defined area. If
                    it is ok for the image to be cropped off (e.g. for gradient
                    backgrounds), use background-size: cover.
                  </li>
                  <li>
                    img tags have a similar object-fit property with contain and
                    cover values.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Optimistic updates:</strong> Advanced technique where
                the success state is reflected even though the network request
                is still pending. If the request fails, revert the UI changes
                and show an error message.
              </li>
            </ul>
          </section>

          <section>
            <h2>Network</h2>

            <p>
              Does your UI handle the unpredictable nature of network requests
              and conditions?
            </p>

            <ul>
              <li>
                <strong>Reflect network request states:</strong> If the UI
                involves making network requests, clearly show the
                pending/success/failure state of the requests
                <ul>
                  <li>
                    <strong>Pending:</strong> Disable fields/buttons, show a
                    spinner.
                  </li>
                  <li><strong>Error:</strong> Show an error message.</li>
                  <li>
                    <strong>Success:</strong> Update the UI and/or show a
                    success message.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Race conditions:</strong> A common reason is due to
                parallel network requests where the response order is not
                guaranteed. A request made later could receive a response
                earlier. If your UI is susceptible to this, you can keep track
                of the latest requests and ignore the results from the earlier
                ones. Alternatively, make it such that your UI cannot fire
                multiple network requests at once, e.g. by disabling elements
                which trigger network requests after they're clicked.
              </li>
              <li>
                <strong>Prevent duplicate requests:</strong> Buttons should be
                disabled after submission to avoid making duplicate network
                requests.
              </li>
              <li>
                <strong>Consolidating requests:</strong> If the UI is making too
                many network requests, you can:
                <ul>
                  <li>
                    <strong>Debounce/throttle:</strong> Rate limit the number of
                    network requests fired.
                  </li>
                  <li>
                    <strong>Batch requests:</strong> Group requests together and
                    make only one single request. This requires the server side
                    to support such a format.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Caching:</strong> If a request with the same parameters
                has been made recently, can you reuse the previous response and
                save on a network round trip?
              </li>
              <li>
                <strong>Request timeouts:</strong> You might want to
                artificially show that the request has failed (timed out) if the
                request doesn't receive a response after a stipulated duration.
              </li>
              <li>
                <strong>Optimistic updates:</strong> Advanced technique where
                the success state is reflected even though the network request
                is still pending. If the request fails, revert the UI changes
                and show an error message.
              </li>
            </ul>
          </section>

          <section>
            <h2>Accessibility (a11y)</h2>

            <p>
              Handling accessibility in UI is a huge plus and in some cases a
              requirement for senior engineers.
            </p>

            <ul>
              <li>Can you use the UI with the keyboard only?</li>
              <li>Can you use your UI component with a screen reader?</li>
              <li>Can your UI component work without color?</li>
              <li>Can your UI component work without sound?</li>
            </ul>

            <p>Source: Accessible UI Components for the web</p>

            <ul>
              <li>
                <strong
                  >Screen readers, ARIA roles, states, and properties:</strong
                >
                <ul>
                  <li>
                    Add the right aria-role for custom built elements not built
                    using custom HTML tags.
                  </li>
                  <li>
                    Use aria-labels to describe elements where text is not shown
                    (e.g. icon-only buttons).
                  </li>
                  <li>
                    Link error messages elements with the elements responsible
                    for them via aria-describedby/aria-errormessage.
                  </li>
                  <li>
                    Image alt text: Add alt attribute to img elements so that
                    screen readers can describe the image.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Keyboard interactions:</strong>
                <ul>
                  <li>
                    Add the tabindex attribute to elements you want to be
                    focusable via keyboard tabbing.
                  </li>
                  <li>Elements can be triggered via keyboard.</li>
                  <li>Check that the focus order makes sense.</li>
                </ul>
              </li>
              <li>
                <strong>Visual issues:</strong>
                <ul>
                  <li>
                    Color contrast: Sufficient color contrast between
                    text/images and the background.
                  </li>
                  <li>
                    Size of elements: font size, interactive element size should
                    be large enough for their intended medium.
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              web.dev by Google has a free in-depth course on accessibility
              which we highly recommend.
            </p>
          </section>

          <section>
            <h2>Edge cases</h2>

            <p>
              There's probably not enough time to handle all edge cases
              scenarios in your code during the interview, but it'd be good to
              mention them to the interviewer for brownie points.
            </p>

            <ul>
              <li>
                <strong>Handle long strings:</strong> Strings in UI (e.g.
                headings/button labels) can cause the UI to behave weirdly such
                as overflowing and affect the position of surrounding elements.
                Long strings can be a result of user input or translations.
              </li>
              <li>
                <strong>Empty states:</strong> Show an empty state
                message/placeholder to indicate absence of contents e.g. when
                the list is empty. Showing nothing might make the user think
                that there's a pending network request and that data is still
                being fetched.
              </li>
              <li>
                <strong>Too many items in a list:</strong> Showing too many
                items on a single page can lead to poor UX (user has to scroll a
                lot) and poor performance in terms of responsiveness and memory
                consumption.
                <ul>
                  <li>
                    <strong>Pagination:</strong> Break up a long list of items
                    into multiple pages.
                  </li>
                  <li>
                    <strong>Virtual lists:</strong> Rendering only visible rows
                    of content in a dynamic list instead of the entire list.
                  </li>
                  <li>
                    Truncate the excess content and show an ellipsis. The
                    word-break CSS property will come in handy.
                  </li>
                  <li>
                    Limit the content to the first X characters/words and hide
                    the excess content behind a "Show More" button.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2>Performance</h2>

            <ul>
              <li>
                <strong>Throttle/debounce:</strong> Throttle and debounce are
                rate limiting techniques to prevent unnecessary operations. This
                technique can be used for operations which aren't super
                time-sensitive like network requests and scroll/resizing event
                callbacks.
              </li>
              <li>
                <strong>Caching:</strong> The results of duplicate computations
                / network requests can be cached in browser memory/storage and
                not repeated.
              </li>
              <li>
                <strong>On demand loading:</strong> Lazy load data/component
                code only when they are needed, instead of loading all at the
                start.
              </li>
              <li>
                <strong>Prefetch/preload data:</strong> Reduce network latency
                by prefetching/preloading data right before it is needed so that
                updates appear instantly.
              </li>
              <li>
                <strong>Too many items in a list:</strong> Refer to the point
                under "Edge Cases" above.
              </li>
            </ul>
          </section>

          <section>
            <h2>Security</h2>

            <ul>
              <li>
                <strong>Cross-site Scripting (XSS):</strong> Avoid assigning to
                Element.innerHTML or React's dangerouslySetInnerHTML when
                rendering contents into the DOM if it comes from users to
                prevent cross-site scripting, assign to Node.textContent or use
                the experimental Element.setHTML() method instead. Refer to
                OWASP's XSS Prevention Cheat Sheet
              </li>
              <li>
                <strong>Output encoding for "URL Contexts":</strong> If
                user-supplied input can be used in URL query parameters, use
                encodeURIComponent to prevent unintended values from becoming
                part of the URL (e.g. extra query parameters).
              </li>
              <li>
                <strong>Cross Site Request Forgery:</strong> Refer to OWASP's
                CSRF Prevention Cheat Sheet.
              </li>
            </ul>
          </section>

          <section>
            <h2>Internationalization (i18n)</h2>

            <p>
              Does your UI work for multiple languages? How easy is it to add
              support for more languages?
            </p>

            <ul>
              <li>
                <strong
                  >Avoid hardcoding of labels in a certain language:</strong
                >
                Some UI components have label strings within them (e.g. image
                carousel has labels for prev/next buttons). It'd be good to
                allow customization of these label strings by making them part
                of component props/options.
              </li>
              <li>
                <strong>UI can render long strings:</strong> Refer to the
                section above on rendering long strings.
              </li>
              <li>
                <strong>Right-to-left languages:</strong> Some languages (e.g.
                Arabic, Hebrew) are read from right-to-left and the UI has to be
                flipped horizontally. Use CSS logical properties to make your
                layout work for different writing modes.
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/user-interface"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">User Interface Coding Interviews</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/api-design"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">API Design Principles</span>
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
