<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">10</span>
            <span class="reading-time">12 min read</span>
          </div>
          <h1>Signup Form Example in React</h1>
          <p class="article-subtitle">
            A step-by-step guide to building an accessible React signup form
            with uncontrolled inputs, proper labeling, browser validation, and
            client-side submission
          </p>
        </header>
        <article class="article-content">
          <p class="lead-paragraph">
            Building a form with great user experience and accessibility isn't
            all that easy - but it also isn't that hard once you know the things
            to pay attention to.
          </p>

          <p>
            On this page we'll demonstrate the basics of building a good,
            accessible simple signup form with uncontrolled inputs. Since the
            inputs are uncontrolled, most of the points aren't specific to
            React.
          </p>

          <section>
            <h2>1. Input field</h2>

            <p>
              First and foremost, start with an
              <code>&lt;input&gt;</code> field. <code>&lt;input&gt;</code> are
              the backbone of HTML forms and depending on the
              <code>type</code> attribute value, browsers render these controls
              differently to assist the user in filling up the form. Common
              values include <code>text</code>, <code>email</code>,
              <code>number</code>, <code>url</code>, <code>checkbox</code>,
              <code>file</code>, etc.
            </p>

            <div class="code-block">
              <pre><code>&lt;input type="email" /&gt;</code></pre>
            </div>
          </section>

          <section>
            <h2>2. Add label to input field</h2>

            <p>
              All <code>&lt;input&gt;</code> tags should have an associated
              <code>&lt;label&gt;</code> for accessibility purposes. This is
              necessary so that users of assistive technologies can tell what
              the input is for. Clicking or touching a label will also focus on
              the label's associated form control.
            </p>

            <p>
              The <code>&lt;label&gt;</code> and the
              <code>&lt;input&gt;</code> are linked using
              <code>for</code> (<code>htmlFor</code> in React) and
              <code>id</code> attributes respectively.
            </p>

            <div class="code-block">
              <pre><code>&lt;label htmlFor="email-input"&gt;Email&lt;/label&gt;
&lt;input id="email-input" type="email" /&gt;</code></pre>
            </div>

            <p>
              The alternative is to use <code>aria-label</code> on
              <code>&lt;input&gt;</code> but it is better to have a visible
              label using <code>&lt;label&gt;</code>.
            </p>
          </section>

          <section>
            <h2>3. Wrap within a form</h2>

            <p>
              Next, the elements should be wrapped within a
              <code>&lt;form&gt;</code>. This enables the browser's
              enter-to-submit behavior, aka users can hit Enter to submit the
              form.
            </p>

            <div class="code-block">
              <pre><code>&lt;form&gt;
  &lt;label htmlFor="email-input"&gt;Email&lt;/label&gt;
  &lt;input id="email-input" type="email" /&gt;
&lt;/form&gt;</code></pre>
            </div>
          </section>

          <section>
            <h2>4. Form attributes</h2>

            <p>The <code>&lt;form&gt;</code> tag accepts these attributes:</p>

            <ul class="bullet-list">
              <li>
                <code>action</code>: Specifies the URL of the server that will
                receive the submitted form data.
              </li>
              <li>
                <code>method</code>: Defines the HTTP method used to send the
                form data. Common values are:
                <ul class="bullet-list">
                  <li>
                    <code>POST</code> Form data is sent as part of the request
                    body.
                  </li>
                  <li>
                    <code>GET</code>: Form data is appended to the URL as
                    search/query parameters.
                  </li>
                </ul>
              </li>
              <li>
                <code>enctype</code>: Specifies how the form data should be
                encoded when submitting it to the server. This is particularly
                important when you're uploading files.
              </li>
            </ul>

            <div class="code-block">
              <pre><code>&lt;form method="POST" action="/users/signup"&gt;
  &lt;label htmlFor="email-input"&gt;Email&lt;/label&gt;
  &lt;input id="email-input" type="email" /&gt;
&lt;/form&gt;</code></pre>
            </div>
          </section>

          <section>
            <h2>5. Submit button</h2>

            <p>
              While not all users are aware they can hit Enter to submit the
              form, submit buttons are universally understood mechanisms for
              form submissions. If the <code>type</code> attribute of the
              <code>&lt;button&gt;</code> is not specified, the default value
              used is <code>&lt;button type="submit"&gt;</code>.
            </p>

            <p>
              When such <code>&lt;button&gt;</code>s are used within a
              <code>&lt;form&gt;</code>, triggering them will cause form
              submissions.
            </p>

            <div class="code-block">
              <pre><code>&lt;form method="POST" action="/users/signup"&gt;
  &lt;label htmlFor="email-input"&gt;Email&lt;/label&gt;
  &lt;input id="email-input" type="email" /&gt;
  &lt;button&gt;Sign up&lt;/button&gt;
&lt;/form&gt;</code></pre>
            </div>

            <p>
              An alternative way to create a submit button is by using the
              <code>&lt;input&gt;</code> tag with <code>type="submit"</code>.
            </p>

            <div class="code-block">
              <pre><code>&lt;form method="POST" action="/users/signup"&gt;
  &lt;label htmlFor="email-input"&gt;Email&lt;/label&gt;
  &lt;input id="email-input" type="email" /&gt;
  &lt;input type="submit" value="Sign up"&gt;
&lt;/form&gt;</code></pre>
            </div>
          </section>

          <section>
            <h2>6. Input field name attribute</h2>

            <p>
              <code>&lt;input&gt;</code> elements with a
              <code>name</code> attribute defined will be included in the form
              submission data as part of the name/value pairs.
            </p>

            <div class="code-block">
              <pre><code>&lt;form method="POST" action="/users/signup"&gt;
  &lt;label htmlFor="email-input"&gt;Email&lt;/label&gt;
  &lt;input id="email-input" name="userEmail" type="email" /&gt;
  &lt;button&gt;Sign up&lt;/button&gt;
&lt;/form&gt;</code></pre>
            </div>

            <p>
              With the <code>name</code> attribute specified, when the form is
              submitted:
            </p>

            <ul class="bullet-list">
              <li>
                For <code>&lt;form method="GET"&gt;</code>, a HTTP
                <code>GET</code> request will be made to
                <code>/users/signup?userEmail=john.doe@gmail.com</code>.
              </li>
              <li>
                For <code>&lt;form method="POST"&gt;</code>, a HTTP
                <code>POST</code> request will be made to
                <code>/users/signup</code> and with the body as
                <code>userEmail=john.doe@gmail.com</code>.
              </li>
            </ul>

            <p>
              If there are more form fields, the key-values pairs are
              concatenated with <code>&amp;</code> as the delimiter. E.g.
              <code
                >userEmail=john.doe@gmail.com&amp;password=securepassword123</code
              >.
            </p>

            <p>
              The value of an <code>&lt;input&gt;</code> element without a
              <code>name</code> attribute is not included in the data submitted
              to the server. The <code>name</code> attribute acts as a key for
              the form data, pairing it with the <code>value</code> attribute of
              the input element. If the <code>name</code> attribute is missing,
              the form data associated with that input will not be part of the
              HTTP request when the form is submitted.
            </p>

            <p>
              Hence all form control input elements should have the
              <code>name</code> attribute specified.
            </p>
          </section>

          <section>
            <h2>7. Other attributes for input field (e.g. autocomplete)</h2>

            <p>
              By adding the <code>autocomplete</code> attribute, browsers will
              offer suggestions based on the value and the user's autofill data
              such as addresses and payment methods.
            </p>

            <div class="code-block">
              <pre><code>&lt;form method="POST" action="/users/signup"&gt;
  &lt;label htmlFor="email-input"&gt;Email&lt;/label&gt;
  &lt;input autocomplete="email" id="email-input" name="userEmail" type="email" /&gt;
  &lt;button&gt;Sign up&lt;/button&gt;
&lt;/form&gt;</code></pre>
            </div>

            <p>
              Possible values include <code>email</code>,
              <code>family-name</code>, <code>new-password</code>,
              <code>street-address</code>, etc. Refer to the
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >full list of values on MDN</a
              >. Specifying the <code>autocomplete</code> attribute is
              especially useful for shipping and billing address forms on
              checkout pages.
            </p>
          </section>

          <section>
            <h2>8. Browser validation</h2>

            <p>
              Add a password field using
              <code>&lt;input type="password" /&gt;</code>.
            </p>

            <p>
              By specifying attributes like <code>required</code>,
              <code>minlength</code>, <code>pattern</code>, on
              <code>&lt;input&gt;</code>, the browser can help to validate that
              the user's input matches these requirements before the form is
              submitted to the server.
            </p>

            <div class="code-block">
              <pre><code>&lt;form method="POST" action="/users/signup"&gt;
  &lt;label htmlFor="email-input"&gt;Email&lt;/label&gt;
  &lt;input
    autocomplete="email"
    id="email-input"
    name="userEmail"
    required
    type="email"
  /&gt;
  &lt;label htmlFor="password-input"&gt;Password&lt;/label&gt;
  &lt;input
    autocomplete="new-password"
    id="password-input"
    minlength="8"
    name="userPassword"
    required
    type="password"
  /&gt;
  &lt;button&gt;Sign up&lt;/button&gt;
&lt;/form&gt;</code></pre>
            </div>

            <p>
              Note that browser validation alone is insufficient! Malicious
              personnel can directly hit your server endpoints without using
              your HTML form. You should still validate and sanitize all user
              input on the server.
            </p>
          </section>

          <section>
            <h2>9. Link form control descriptions using aria-describedby</h2>

            <p>
              For <code>&lt;input&gt;</code>s which benefit from additional
              descriptions / hint text, they can be associated with the element
              that contain the descriptive text, which could be a
              <code>&lt;span&gt;</code>, <code>&lt;div&gt;</code> or any other
              suitable HTML elements.
            </p>

            <div class="code-block">
              <pre><code>&lt;form method="POST" action="/users/signup"&gt;
  &lt;label htmlFor="email-input"&gt;Email&lt;/label&gt;
  &lt;input
    autocomplete="email"
    id="email-input"
    name="userEmail"
    required
    type="email"
  /&gt;
  &lt;label htmlFor="password-input"&gt;Password&lt;/label&gt;
  &lt;input
    aria-describedby="password-hint"
    autocomplete="new-password"
    id="password-input"
    minlength="8"
    name="userPassword"
    required
    type="password"
  /&gt;
  &lt;div id="password-hint"&gt;
    Your password must be at least 8 characters long.
  &lt;/div&gt;
  &lt;button&gt;Sign up&lt;/button&gt;
&lt;/form&gt;</code></pre>
            </div>

            <p>
              When a user focuses on the password input field, assistive
              technologies like screen readers will read the input label along
              with the additional instructions provided in the
              <code>&lt;div&gt;</code>. This helps users understand the
              requirements for the password field more clearly.
            </p>
          </section>

          <section>
            <h2>10. Submission via fetch()</h2>

            <p>
              The current form will make a HTTP <code>POST</code> request to
              <code>/users/signup</code> upon submission, which causes a full
              page navigation and that might not always be desirable.
            </p>

            <p>
              We can modify the form to make a client-side HTTP
              <code>POST</code> request via <code>fetch()</code>. The main
              changes to make are:
            </p>

            <ul class="bullet-list">
              <li>
                Call <code>event.preventDefault()</code> to prevent the browser
                from navigating away
              </li>
              <li>
                Use <code>new FormData(formElement)</code> to get the input
                fields data from the form element
              </li>
              <li>
                Send the data to the server API endpoint via
                <code>fetch()</code>
              </li>
            </ul>

            <div class="code-block">
              <pre><code>function SignupForm() {
  async function handleSubmit(event) {
    // Prevent default behavior, which is a navigation
    event.preventDefault();

    const formElement = event.target;
    const formData = new FormData(formElement);

    const response = await fetch('/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('userEmail'),
        password: formData.get('userPassword'),
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    if (!response.ok) {
      // Handle error response
      return;
    }

    // Handle success flow
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;label htmlFor="email-input"&gt;Email&lt;/label&gt;
      &lt;input
        autocomplete="email"
        id="email-input"
        name="userEmail"
        required
        type="email"
      /&gt;
      &lt;label htmlFor="password-input"&gt;Password&lt;/label&gt;
      &lt;input
        aria-describedby="password-hint"
        autocomplete="new-password"
        id="password-input"
        minlength="8"
        name="userPassword"
        required
        type="password"
      /&gt;
      &lt;div id="password-hint"&gt;
        Your password must be at least 8 characters long.
      &lt;/div&gt;
      &lt;button&gt;Sign up&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
            </div>

            <p>You have it, a fully-accessible sign up form in React.</p>
          </section>

          <section>
            <h2>What you need to know for interviews</h2>

            <p>
              How to independently build an accessible form in React with
              validation and submission.
            </p>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/react/forms"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">Forms in React Interviews</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/data-fetching"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Data Fetching in React Interviews</span>
            </div>
            <span class="nav-arrow">→</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import ReactPlaybookSidebar from "../../components/ReactPlaybookSidebar.vue";
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

.code-block {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.code-block code {
  background: none;
  color: #e5e7eb;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.5;
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

.external-link {
  color: #dcee77;
  text-decoration: none;
  transition: color 0.2s ease;
}

.external-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.lead-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 2rem;
}
</style>
