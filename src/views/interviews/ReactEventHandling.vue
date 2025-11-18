<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">8</span>
            <span class="reading-time">10 min read</span>
          </div>
          <h1>Event Handling in React Interviews</h1>
          <p class="article-subtitle">
            Guide to React's synthetic event system, covering best practices for
            handling, intercepting, and optimizing mouse, input, form, focus,
            and keyboard events for interview success
          </p>
        </header>
        <article class="article-content">
          <p class="lead-paragraph">
            React uses a synthetic event system to provide a consistent way to
            handle events across different browsers. Unlike native JavaScript
            events, React wraps native events into a standardized object called
            <code>SyntheticEvent</code>, which improves performance and ensures
            cross-browser compatibility.
          </p>

          <section>
            <h2>How React handles events</h2>

            <p>
              React's synthetic event system provides consistency across
              different browsers and optimizations for performance.
            </p>

            <p>In vanilla JavaScript, event listeners are added like this:</p>

            <div class="code-block">
              <pre><code>document.getElementById('btn').addEventListener('click', (event) => {
  console.log('Clicked!');
});</code></pre>
            </div>

            <p>In React, events are attached to elements like this:</p>

            <div class="code-block">
              <pre><code>&lt;button onClick={() => console.log('Clicked!')}>Click Me&lt;/button></code></pre>
            </div>

            <p>
              However, since React uses event delegation and events are attached
              to the root of the React application (not the document root)
              instead of individual elements to improve performance.
            </p>

            <p>
              React wraps native events into a <code>SyntheticEvent</code> for
              efficiency and compatibility.
            </p>

            <p>
              Like event listeners in vanilla JavaScript, React's
              <code>SyntheticEvent</code>s are passed as the first argument to
              event handler callbacks. For the most part they can be treated as
              raw browser <code>Event</code> objects and
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Event"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >Event attributes and methods</a
              >
              can also be accessed on the <code>SyntheticEvent</code>.
            </p>

            <div class="code-block">
              <pre><code>function handleClick(event) {
  console.log(event); // React SyntheticEvent
  console.log(event.nativeEvent); // Native browser event
  console.log(event.target); // &lt;button>...&lt;/button>
}

&lt;button onClick={handleClick}>Click me&lt;/button>;</code></pre>
            </div>

            <p>
              Further reading on react.dev:
              <a
                href="https://react.dev/learn/responding-to-events"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >Responding to Events</a
              >
            </p>
          </section>

          <section>
            <h2>Event handlers in React</h2>

            <p>
              Event handlers in React are functions that respond to user
              interactions, such as clicks, key presses, form submissions, or
              mouse movements.
            </p>

            <div class="subsection">
              <h3>Mouse events</h3>

              <p>
                Mouse event handlers fire when users interact with the mouse
                (clicks, hovers, etc.). Mouse events can be added to most
                elements but for accessibility purposes, certain handlers like
                <code>onClick</code> should only be added to interactive
                elements such as <code>&lt;button&gt;</code>,
                <code>&lt;a&gt;</code>, <code>&lt;input&gt;</code> otherwise
                screen reader users will not be able to trigger those
                interactions.
              </p>

              <p>
                Mouse event handlers receive the
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >MouseEvent</a
                >
                argument.
              </p>

              <div class="code-block">
                <pre><code>function ClickButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return &lt;button onClick={handleClick}>Click me&lt;/button>;
}</code></pre>
              </div>

              <p>You should know the following mouse events:</p>

              <ul class="bullet-list">
                <li>
                  <code>onClick</code>: Fires when an element is clicked
                  (mousedown + mouseup). Commonly used in interviews
                </li>
                <li>
                  <code>onMouseEnter</code>: Fires when the mouse enters an
                  element. Does not bubble (useful for hover interactions).
                  Sometimes used in interviews
                </li>
                <li>
                  <code>onMouseLeave</code>: Fires when the mouse leaves an
                  element. Does not bubble. Sometimes used in interviews
                </li>
                <li>
                  <code>onMouseOver</code>: Fires when the mouse enters an
                  element or its children. Does bubble. Sometimes used in
                  interviews
                </li>
                <li>
                  <code>onMouseOut</code>: Fires when the mouse leaves an
                  element or its children. Does bubble. Sometimes used in
                  interviews
                </li>
                <li>
                  <code>onMouseDown</code>: Fires when the mouse button is
                  pressed down. Rarely used in interviews, in most cases you
                  should use <code>onClick</code>
                </li>
                <li>
                  <code>onMouseUp</code>: Fires when the mouse button is
                  released. Rarely used in interviews, in most cases you should
                  use <code>onClick</code>
                </li>
                <li>
                  <code>onDoubleClick</code>: Fires when an element is
                  double-clicked. Rarely used in interviews
                </li>
              </ul>

              <p>
                In case you get quizzed, you should be able to explain the
                difference between <code>onMouseEnter</code>/<code
                  >onMouseLeave</code
                >
                and <code>onMouseOver</code>/<code>onMouseOut</code> – the
                former pair does not
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >bubble up the DOM</a
                >
                while the latter pair does.
              </p>

              <p>
                For accessibility purposes, bear in mind to not add
                <code>onClick</code> handlers to non-interactive (non-clickable
                and non-focusable) elements.
              </p>

              <p>
                90% of the time you'd use <code>onClick</code> only on
                <code>&lt;button&gt;</code>s.
                <code>&lt;a href="#" onClick={...}></code> is also an
                anti-pattern, just use
                <code>&lt;button onClick={...}></code> and modify the styling
                accordingly.
              </p>

              <p>
                <code>onMouseEnter</code>/<code>onMouseLeave</code> and
                <code>onMouseOver</code>/<code>onMouseOut</code> can be used for
                adding hover styles, it's better to use CSS's
                <code>:hover</code> pseudo-class. There is no need to use
                JavaScript when CSS is able to do the job.
              </p>
            </div>

            <div class="subsection">
              <h3>Input events</h3>

              <p>
                Input event handlers are fired when user input changes (typing,
                pasting, etc.) and can be attached on
                <code>&lt;input&gt;</code> and
                <code>&lt;textarea&gt;</code> elements.
              </p>

              <p>
                Input event handlers receive the
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/InputEvent"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >InputEvent</a
                >
                as argument.
              </p>

              <div class="code-block">
                <pre><code>function Foo() {
  const [value, setValue] = useState('');

  return (
    &lt;input
      onChange={(event) => setValue(event.target.value)}
      value={value}
      placeholder="Type here"
    />
  );
}</code></pre>
              </div>

              <p>You should know the following input events:</p>

              <ul class="bullet-list">
                <li>
                  <code>onChange</code>: Fires when the value of an input
                  changes
                </li>
                <li>
                  <code>onInput</code>: Fires when the user inputs data (similar
                  to <code>onChange</code>). Most of the time, use
                  <code>onChange</code> instead
                </li>
              </ul>

              <div class="principle-section">
                <h4>
                  What's the difference between 'change' and 'input' events?
                </h4>

                <p>
                  For most event handlers in React, the
                  <code>onEventName</code> attribute is the same as doing
                  <code>element.addEventListener('eventname', ...)</code> in the
                  browser. But not for <code>onChange</code> and
                  <code>onInput</code>!
                </p>

                <p>
                  Both <code>'change'</code> and <code>'input'</code> events
                  detect when the value of an input field changes, but they have
                  key differences in behavior and when they fire.
                </p>

                <p>
                  In browsers, for some elements, including
                  <code>&lt;input type="text"></code>, the change event doesn't
                  fire until the control loses focus. React's
                  <code>onChange</code> behaves more like the DOM
                  <code>'input'</code> event where it is fired on every
                  keystroke.
                </p>

                <p>
                  The browser <code>'change'</code> event is fired when the
                  value is committed (e.g. loses focus):
                </p>
                <ul class="bullet-list">
                  <li>In most cases, it is not fired on every keystroke</li>
                  <li>
                    Works for <code>&lt;input&gt;</code>,
                    <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>,
                    etc
                  </li>
                </ul>

                <p>
                  The browser <code>'input'</code> event fires on every input
                  change, including typing, pasting, and voice input:
                </p>
                <ul class="bullet-list">
                  <li>Works in both React and vanilla JS</li>
                  <li>
                    Fires immediately on every character input (like React's
                    <code>onChange</code>)
                  </li>
                  <li>
                    Triggers even when using voice input, drag-and-drop, and
                    pasting
                  </li>
                </ul>

                <div class="comparison-table">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>React onChange</th>
                        <th>Browser 'input' event</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Triggers on every keystroke?</td>
                        <td>✅ (React only)</td>
                        <td>✅</td>
                      </tr>
                      <tr>
                        <td>Triggers on copy-paste?</td>
                        <td>✅</td>
                        <td>✅</td>
                      </tr>
                      <tr>
                        <td>Triggers on IME (Chinese, Japanese, Korean)?</td>
                        <td>❌ (only on commit)</td>
                        <td>✅ (on every character)</td>
                      </tr>
                      <tr>
                        <td>Triggers on speech-to-text input?</td>
                        <td>❌ (only on commit)</td>
                        <td>✅ (on every spoken word)</td>
                      </tr>
                      <tr>
                        <td>Works with contenteditable?</td>
                        <td>❌</td>
                        <td>✅</td>
                      </tr>
                      <tr>
                        <td>Detects programmatic value updates?</td>
                        <td>❌</td>
                        <td>✅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  It can be confusing to know when to use
                  <code>onChange</code> vs <code>onInput</code>, during
                  interviews, when in doubt, use <code>onChange</code>.
                </p>
              </div>
            </div>

            <div class="subsection">
              <h3>Form events</h3>

              <p>
                Form event handlers (<code>onSubmit</code> and
                <code>onReset</code>) only work on
                <code>&lt;form&gt;</code> elements.
              </p>

              <p>
                <code>onSubmit</code> receives the
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >SubmitEvent</a
                >
                argument while the <code>onReset</code> handler receives the
                generic
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Event"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Event</a
                >
                argument.
              </p>

              <div class="code-block">
                <pre><code>function SimpleForm() {
  const [input, setInput] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // Prevents page reload
    alert(`Form submitted with: ${input}`);
  }

  return (
    &lt;form onSubmit={handleSubmit}>
      &lt;input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something"
      />
      &lt;button type="submit">Submit&lt;/button>
    &lt;/form>
  );
}</code></pre>
              </div>

              <p>You should know the following form events:</p>

              <ul class="bullet-list">
                <li>
                  <code>onSubmit</code>: Fires when a form is submitted. Only
                  fires when triggered by a
                  <code>&lt;button type="submit"></code> or
                  <code>&lt;input type="submit"></code> within a
                  <code>&lt;form&gt;</code>
                </li>
                <li>
                  <code>onReset</code>: Fires when a form is reset. Only fires
                  when triggered by a <code>&lt;button type="reset"></code> or
                  <code>&lt;input type="reset"></code> within a
                  <code>&lt;form&gt;</code>
                </li>
              </ul>

              <p>
                Since most of the time you are dealing with single-page
                applications and do not have a server, you likely have to do
                <code>event.preventDefault()</code> within the
                <code>onSubmit</code> handler to prevent a full-page refresh.
              </p>
            </div>

            <div class="subsection">
              <h3>Focus events</h3>

              <p>
                Focus event handlers work with elements that can receive focus
                such as form elements and interactive elements such as
                <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>,
                <code>&lt;select&gt;</code>, <code>&lt;button&gt;</code>.
              </p>

              <p>
                Focus event handlers receive the
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >FocusEvent</a
                >
                argument.
              </p>

              <div class="code-block">
                <pre><code>function FocusBlurExample() {
  const [focused, setFocused] = useState(false);

  return (
    &lt;div>
      &lt;input
        type="text"
        placeholder="Click to focus..."
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={ { border: focused ? '2px solid blue' : '2px solid gray', outline: 'none', padding: '5px' } }
      />
      &lt;p>{focused ? 'Input is focused' : 'Input is blurred'}&lt;/p>
    &lt;/div>
  );
}</code></pre>
              </div>

              <p>You should know the following form events:</p>

              <ul class="bullet-list">
                <li><code>onFocus</code>: Fires when an element gains focus</li>
                <li><code>onBlur</code>: Fires when an element loses focus</li>
              </ul>

              <p>
                While the above example uses <code>onFocus</code>/<code
                  >onBlur</code
                >
                for adding focus styles, it's better to use CSS's
                <code>:focus</code> pseudo-class. There is no need to use
                JavaScript when CSS is able to do the job.
              </p>

              <p>
                Note that <code>onFocus</code> and <code>onBlur</code> can be
                fired on any elements as long as they can receive focus, even if
                they aren't able to by default. Adding <code>tabIndex</code> to
                an element will allow it to receive focus and become clickable.
                This is mostly used in custom design systems UI components for
                building custom form components to have full control over their
                appearance.
              </p>

              <p>
                During interviews you probably shouldn't need to do that and
                most of the time you should just use the default set of
                focusable elements.
              </p>

              <div class="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Element Type</th>
                      <th>Can receive focus?</th>
                      <th>Can use onFocus/onBlur?</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Form Inputs (&lt;input&gt;, &lt;textarea&gt;,
                        &lt;select&gt;)
                      </td>
                      <td>✅ Yes</td>
                      <td>✅ Yes</td>
                      <td>Standard usage</td>
                    </tr>
                    <tr>
                      <td>
                        Interactive Elements (&lt;button&gt;, &lt;a
                        href="..."&gt;, &lt;details&gt;)
                      </td>
                      <td>✅ Yes</td>
                      <td>✅ Yes</td>
                      <td>Automatically focusable</td>
                    </tr>
                    <tr>
                      <td>Elements with tabIndex defined</td>
                      <td>✅ Yes</td>
                      <td>✅ Yes</td>
                      <td>Becomes focusable</td>
                    </tr>
                    <tr>
                      <td>
                        Non-focusable elements (&lt;div&gt;, &lt;span&gt;,
                        &lt;p&gt;)
                      </td>
                      <td>❌ No</td>
                      <td>❌ No</td>
                      <td>Needs tabindex</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Focus handling is an important accessibility topic that goes
                beyond the scope of this guide.
              </p>
            </div>

            <div class="subsection">
              <h3>Keyboard events</h3>

              <p>
                Keyboard event handlers are used to detect keyboard interactions
                inside input fields, buttons, or any focusable elements.
              </p>

              <p>
                Keyboard event handlers receive the
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >KeyboardEvent</a
                >
                argument.
              </p>

              <div class="code-block">
                <pre><code>function handleKeyPress(event) {
  if (event.key === 'Enter') {
    alert('Enter key pressed!');
  }
}

&lt;input type="text" onKeyPress={handleKeyPress} />;</code></pre>
              </div>

              <p>You should know the following keyboard events:</p>

              <ul class="bullet-list">
                <li>
                  <code>onKeyDown</code>: Fires when a key is pressed down.
                  Fires continuously if the key is held
                </li>
                <li>
                  <code>onKeyUp</code>: Fires when a key is released after being
                  pressed. Useful for detecting final key input after typing
                </li>
                <li>
                  <code>onKeyPress</code>: (Deprecated) Similar to
                  <code>onKeyDown</code>, but does not detect special keys
                </li>
              </ul>

              <p>
                Keyboard event handlers receive the
                <code>KeyboardEvent</code> which has some properties, these are
                the ones you should know:
              </p>

              <div class="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>event.key</td>
                      <td>The key as a string</td>
                      <td>"a" or "A"</td>
                    </tr>
                    <tr>
                      <td>event.code</td>
                      <td>The physical key on the keyboard</td>
                      <td>"KeyA"</td>
                    </tr>
                    <tr>
                      <td>event.which (deprecated)</td>
                      <td>
                        System and implementation dependent numerical code
                      </td>
                      <td>65 (for A)</td>
                    </tr>
                    <tr>
                      <td>event.keyCode (deprecated)</td>
                      <td>
                        System and implementation dependent numerical code
                      </td>
                      <td>65 (for A)</td>
                    </tr>
                    <tr>
                      <td>event.shiftKey</td>
                      <td>true if Shift is held</td>
                      <td>true / false</td>
                    </tr>
                    <tr>
                      <td>event.ctrlKey</td>
                      <td>true if Ctrl is held</td>
                      <td>true / false</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                This is just a brief list, find the
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#instance_properties"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >full list of KeyboardEvent properties on MDN</a
                >.
              </p>

              <p>
                <code>event.key</code>, <code>event.code</code>,
                <code>event.which</code> and <code>event.keyCode</code> look
                very similar. For interviews, just know that you should use
                <code>event.key</code>.
              </p>

              <p>
                <strong
                  >Best practices for handling keyboard events in React</strong
                >
              </p>

              <ul class="bullet-list">
                <li>
                  Use <code>onKeyDown</code> instead of
                  <code>onKeyPress</code> (since <code>onKeyPress</code> is
                  deprecated)
                </li>
                <li>
                  Use <code>event.key</code> instead of
                  <code>event.which</code> or
                  <code>event.keyCode</code> (they're deprecated)
                </li>
                <li>
                  Use <code>event.preventDefault()</code> when needed (e.g.,
                  prevent <code>Enter</code> from submitting a form)
                </li>
                <li>
                  Add <code>tabIndex</code> for non-focusable elements (e.g.,
                  <code>&lt;div&gt;</code> needs it to receive keyboard events)
                </li>
                <li>
                  Handle accessibility properly (keyboard navigation should be
                  consistent)
                </li>
              </ul>

              <p>
                In most cases you shouldn't need to use keyboard events during
                interviews. Detecting text changes within
                <code>&lt;input&gt;</code>s is better done using
                <code>onChange</code>/<code>onInput</code> and detecting Enter
                key for the purpose of form submission is better done using
                <code>onSubmit</code> on <code>&lt;form&gt;</code>s.
              </p>
            </div>
          </section>

          <section>
            <h2>Event interception</h2>

            <p>
              Event interception in React refers to the ability to capture,
              modify, or stop an event's behavior before it reaches its final
              target.
            </p>

            <div class="subsection">
              <h3>Stopping event propagation</h3>

              <p>
                One way to intercept an event in React is by using
                <code>event.stopPropagation()</code>, which prevents the event
                from bubbling up to parent components. By default, events in
                React follow the bubbling phase, meaning they propagate from the
                target element up through its ancestors.
              </p>

              <p>
                However, there are cases where this behavior is undesirable,
                such as when clicking inside a dropdown should not close the
                entire menu because the click event bubbles up to a parent
                listener.
              </p>

              <div class="code-block">
                <pre><code>function Dropdown() {
  function handleParentClick() {
    console.log('Parent div clicked!');
  }

  function handleChildClick(event: React.MouseEvent&lt;HTMLDivElement>) {
    event.stopPropagation(); // Prevents bubbling to the parent
    console.log('Dropdown item clicked!');
  }

  return (
    &lt;div
      onClick={handleParentClick}
      style={ { padding: '20px', border: '2px solid black' } }>
      &lt;div
        onClick={handleChildClick}
        style={ { padding: '10px', border: '1px solid blue' } }>
        Click inside dropdown
      &lt;/div>
    &lt;/div>
  );
}</code></pre>
              </div>

              <p>
                In interviews, there shouldn't be many instances where you need
                to nest <code>onClick</code> handlers. If you ever do so,
                consider if you need <code>event.stopPropagation()</code> in the
                inner event handler.
              </p>

              <p>
                Further reading on react.dev:
                <a
                  href="https://react.dev/learn/responding-to-events#event-propagation"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Event propagation</a
                >
              </p>
            </div>

            <div class="subsection">
              <h3>Preventing default behavior</h3>

              <p>
                Another form of event interception is preventing default browser
                actions using <code>event.preventDefault()</code>. Certain HTML
                elements, like <code>&lt;form&gt;</code>,
                <code>&lt;a&gt;</code>, and <code>&lt;input&gt;</code>, have
                built-in behaviors (e.g., form submission, link navigation). If
                you want to handle these interactions with custom logic in
                React, you must prevent their default behavior.
              </p>

              <div class="code-block">
                <pre><code>function PreventFormSubmit() {
  function handleSubmit(event: React.FormEvent&lt;HTMLFormElement>) {
    event.preventDefault(); // Prevents full-page reload
    console.log('Form submitted without reloading!');
  }

  return (
    &lt;form onSubmit={handleSubmit}>
      &lt;input type="text" placeholder="Enter something" />
      &lt;button type="submit">Submit&lt;/button>
    &lt;/form>
  );
}</code></pre>
              </div>

              <p>
                Without <code>event.preventDefault()</code>, clicking "Submit"
                would cause the page to refresh, disrupting the React
                application. By intercepting the event, we can handle the form
                submission programmatically without affecting the user
                experience.
              </p>

              <p>
                Further reading on react.dev:
                <a
                  href="https://react.dev/learn/responding-to-events#preventing-default-behavior"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Preventing default behavior</a
                >
              </p>
            </div>
          </section>

          <section>
            <h2>Best practices for interviews</h2>

            <ul class="bullet-list">
              <li>
                If there's a performance with excessive re-rendering, avoid
                inline event handlers and memoize using <code>useCallback</code>
              </li>
              <li>
                Use <code>onChange</code> instead of <code>onInput</code> for
                form inputs
              </li>
              <li>
                Use <code>onMouseEnter</code>/<code>onMouseLeave</code> instead
                of <code>onMouseOver</code>/<code>onMouseOut</code> to prevent
                bubbling issues
              </li>
              <li>
                For performance-sensitive events like <code>onScroll</code>,
                debounce or throttle the event handlers
              </li>
            </ul>
          </section>

          <section>
            <h2>What you need to know for interviews</h2>

            <ul class="bullet-list">
              <li>
                <strong>Event system:</strong> Explain how the event system in
                React works and how it is different from browser event system
              </li>
              <li>
                <strong>Common events:</strong> Common mouse
                (<code>onClick</code>, <code>onMouseEnter</code>,
                <code>onMouseLeave</code>), input (<code>onChange</code>), form
                events (<code>onSubmit</code>), and keyboard events
                (<code>onKeyDown</code>)
              </li>
              <li>
                <strong>Event interception:</strong> When and how to use event
                interception
              </li>
            </ul>
          </section>

          <section>
            <h2>Practice questions</h2>

            <p><strong>Coding:</strong></p>

            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/temperature-converter/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Temperature Converter</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/dice-roller/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Dice Roller</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/grid-lights/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Grid Lights</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/star-rating/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Star Rating</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/stopwatch/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Stopwatch</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/auth-code-input/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Auth Code Input</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/selectable-cells/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                  >Selectable Cells</a
                >
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/react/hooks"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">React Hooks for Interviews</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/forms"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Forms in React Interviews</span>
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

.principle-section {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
}

.principle-section h4 {
  font-size: 18px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.code-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 16px 0;
}

.bad-example,
.good-example {
  background: #1f2937;
  border-radius: 8px;
  padding: 16px;
}

.bad-example p:first-child {
  color: #ef4444;
  font-weight: 600;
  margin-bottom: 12px;
}

.good-example p:first-child {
  color: #10b981;
  font-weight: 600;
  margin-bottom: 12px;
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

.subsection {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.subsection h3 {
  font-size: 16px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.lead-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 2rem;
}
</style>
