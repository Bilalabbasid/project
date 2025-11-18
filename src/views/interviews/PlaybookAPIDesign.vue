<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <PlaybookArticleSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">7</span>
            <span class="reading-time">7 min read</span>
          </div>
          <h1>API design principles for UI components</h1>
          <p class="article-subtitle">
            Best practices for designing developer interface components APIs,
            useful for UI components coding and system design interviews
          </p>
        </header>
        <article class="article-content">
          <p>
            User Interface component libraries like Bootstrap and Material UI
            help developers build UI faster by providing commonly used
            components like buttons, tabs, modals, etc so that developers do not
            have to reinvent the wheel by building these components from scratch
            whenever they start on a new project.
          </p>

          <p>
            Often during front end interviews, you will be asked to build UI
            components and design an API to initialize them. Designing good
            component APIs is bread and butter for Front End Engineers. This
            page covers some of the top tips and best practices for designing UI
            component APIs. Some of these tips may be framework-specific but can
            be generalized for other component-based UI frameworks.
          </p>

          <section>
            <h2>Initialization</h2>

            <p>There are multiple ways to initialize a UI component:</p>

            <h3>jQuery-style</h3>

            <p>
              Before modern JavaScript UI libraries/frameworks like React,
              Angular, and Vue came into the picture, jQuery (and jQuery UI) was
              the most popular way to build UI. jQuery UI popularized the idea
              of initializing UI components via "constructors" which involved
              two arguments:
            </p>

            <ol>
              <li>
                <strong>Root element:</strong> A root DOM element to render the
                contents
              </li>
              <li>
                <strong>Customization options:</strong> Optional, additional,
                customization options usually in the form of a plain JavaScript
                object
              </li>
            </ol>

            <p>
              Using jQuery UI, one can turn a DOM element into a slider (among
              many other UI components) with a single line of code:
            </p>

            <pre><code>&lt;div id="gfe-slider"&gt;&lt;/div&gt;
&lt;script&gt;
  $('#gfe-slider').slider();
&lt;/script&gt;</code></pre>

            <p>
              jQuery refresher: jQuery UI's <code>slider()</code> method
              (constructor) takes in a JavaScript object which serves as
              customization options. Doing <code>$('#slider')</code> selects the
              <code>&lt;div id="slider"&gt;</code> element and returns a jQuery
              object that contains convenient methods to "do something" with the
              element such as <code>addClass</code>, <code>removeClass</code>,
              etc and other DOM manipulation methods. Within jQuery methods, the
              selected element can be accessed via the
              <code>this</code> keyword. jQuery APIs are built around this
              "select an element and do something with it" approach, hence the
              <code>slider()</code> method does not need an argument for the
              root DOM element.
            </p>

            <p>
              The slider can be customized by passing in a plain JavaScript
              object of options:
            </p>

            <pre><code>&lt;div id="gfe-slider"&gt;&lt;/div&gt;
&lt;script&gt;
  $('#gfe-slider').slider({
    animate: true,
    max: 50,
    min: 10,
    // See other options here: https://api.jqueryui.com/slider/
  });
&lt;/script&gt;</code></pre>

            <h3>Vanilla JavaScript style</h3>

            <p>
              There's no vanilla JavaScript style for initializing components
              since vanilla JavaScript is not a standard or framework. But if
              you have read enough of GreatFrontEnd's solutions for our vanilla
              JavaScript UI coding questions, you'll see that the API we
              recommend is similar to jQuery's, the constructor takes in a root
              element and options:
            </p>

            <pre><code>function slider(rootEl, options) {
  // Do something with rootEl and options.
}</code></pre>

            <h3>React (Or similar component-based libraries)</h3>

            <p>
              React forces you to write UI as components where the logic and
              structure is contained within. React components are JavaScript
              functions that return markup, a description of how to render
              itself.
            </p>

            <p>
              React components can take in <code>props</code>, which are
              essentially customization options for a component.
            </p>

            <pre><code>function Slider(&#123; min, max &#125;) &#123;
  // Use the props to render a customized component.
  return &lt;div&gt;...&lt;/div&gt;;
&#125;

&lt;Slider max=&#123;50&#125; min=&#123;10&#125; /&gt;;</code></pre>

            <p>
              Components do not take in a root element. To render the element
              into the page, a separate API is used.
            </p>

            <pre><code>import &#123; createRoot &#125; from 'react-dom/client';
import Slider from './Slider';

const domNode = document.getElementById('#gfe-slider');
// React will manage the DOM within this element.
const root = createRoot(domNode);
// Display the Slider component within the element.
root.render(&lt;Slider max=&#123;50&#125; min=&#123;10&#125; /&gt;);</code></pre>

            <p>
              You will usually not need to call
              <code>createRoot()</code> yourself if the entire page is a React
              app because there will only be one <code>createRoot()</code> call
              at the root/page-level.
            </p>
          </section>

          <section>
            <h2>Customizing appearance</h2>

            <p>
              Even though UI components in UI libraries provide default styling,
              developers will usually want to customize them with their
              company/product's branding and theme colors.
            </p>

            <p>
              Hence most UI components (especially those built as 3rd-party
              libraries) will allow for customization of the appearance, via a
              few methods:
            </p>

            <h3>Class injection</h3>

            <p>
              The idea here is simple, components accept a prop/option to allow
              the developer to provide their own classes and these classes are
              added to the actual DOM elements. This approach is not very robust
              because if the component also adds its own styling via classes,
              there could be conflicting properties within the component's
              classes and developer-provided classes.
            </p>

            <h4>React</h4>

            <pre><code>import clsx from 'clsx';

function Slider(&#123; className, value &#125;) &#123;
  return (
    &lt;div className=&#123;clsx('gfe-slider', className)&#125;&gt;
      &lt;input type="range" value=&#123;value&#125; /&gt;
    &lt;/div&gt;
  );
&#125;

&lt;Slider className="my-custom-slider" value=&#123;50&#125; /&gt;;</code></pre>

            <pre><code>/* UI library default stylesheet */
.gfe-slider {
  height: 12px;
}

/* Developer's custom stylesheet */
.my-custom-slider {
  color: red;
}</code></pre>

            <p>
              Through class injection, developers can change the text
              <code>color</code> of the component to be <code>red</code>.
            </p>

            <p>
              If there are many DOM elements within the component to be targeted
              and one single <code>className</code> prop is not sufficient, you
              can also have multiple differently-named props for
              <code>className</code>s of different elements:
            </p>

            <pre><code>import &#123; useId &#125; from 'react';
import clsx from 'clsx';

function Slider(&#123; label, value, className, classNameLabel, classNameTrack &#125;) &#123;
  const id = useId();
  return (
    &lt;div className=&#123;clsx('gfe-slider', className)&#125;&gt;
      &lt;label className=&#123;clsx('gfe-slider-label', classNameLabel)&#125; for=&#123;id&#125;&gt;
        &#123;label&#125;
      &lt;/label&gt;
      &lt;input
        className=&#123;clsx('gfe-slider-range', classNameTrack)&#125;
        id=&#123;id&#125;
        type="range"
        value=&#123;value&#125;
      /&gt;
    &lt;/div&gt;
  );
&#125;</code></pre>

            <h4>jQuery</h4>

            <p>
              In jQuery, classes can also be passed as a field on the options.
            </p>

            <pre><code>$('#gfe-slider').slider({
  // In reality, jQuery UI takes in a `classes` field instead
  // since there are multiple elements.
  class: 'my-custom-slider',
});</code></pre>

            <p>
              In reality, all of jQuery UI's component initializers take in the
              <code>classes</code> field to allow adding additional classes to
              individual elements. The following example is taken from jQuery UI
              Slider:
            </p>

            <pre><code>$('#gfe-slider').slider({
  classes: {
    'ui-slider': 'highlight',
    'ui-slider-handle': 'ui-corner-all',
    'ui-slider-range': 'ui-corner-all ui-widget-header',
  },
});</code></pre>

            <h4>Downside: Non-deterministic styling</h4>

            <p>
              Class injection has an unobvious downside — the final visual
              result is non-deterministic and may not be what is expected. Take
              the following code for example:
            </p>

            <pre><code>import clsx from 'clsx';

function Slider(&#123; className, value &#125;) &#123;
  return (
    &lt;div className=&#123;clsx('gfe-slider', className)&#125;&gt;
      &lt;input type="range" value=&#123;value&#125; /&gt;
    &lt;/div&gt;
  );
&#125;

&lt;Slider className="my-custom-slider" value=&#123;50&#125; /&gt;;</code></pre>

            <pre><code>/* UI library default stylesheet */
.gfe-slider {
  height: 12px;
  color: black;
}

/* Developer's custom stylesheet */
.my-custom-slider {
  color: red; /* .gfe-slider also defines a value for color. */
}</code></pre>

            <p>
              In the example above, both <code>.gfe-slider</code> and
              <code>.my-custom-slider</code> classes specify the
              <code>color</code> and because these two selectors have the same
              specificity, the winning style is actually the class that appears
              later on the HTML page.
            </p>

            <p>
              If the loading order of the stylesheet is not guaranteed (e.g. if
              stylesheets are lazily loaded), the visual result will not be
              deterministic. The results is that developers start using hacks
              like <code>!important</code> or
              <code>.my-custom-slider.my-custom-slider</code> to let their
              selectors win the specificity war. With all these hacks, the CSS
              code starts becoming unmaintainable.
            </p>

            <p>
              In jQuery UI, if a custom class is added, the existing default
              value is not used. This removes the "winning style" ambiguity but
              the user must now reimplement all the necessary styles present in
              the original class. This approach can also be applied to React
              components to resolve the ambiguity.
            </p>

            <p>
              Despite its flaws, class injection is still a very popular option.
            </p>

            <h3>CSS selector hooks</h3>

            <p>
              Technically speaking, developers can achieve customization if they
              read the source code of the component and define their custom
              styling by using the same classes. However, doing this is
              dangerous as relying on a component's internals and there's no
              guarantee that the class names won't change in the future.
            </p>

            <p>
              If UI library authors can make these classes/attributes part of
              their API, which comes with these guarantees:
            </p>

            <ol>
              <li>The list of selectors is published for external reference</li>
              <li>
                Existing published selectors will not be changed. If they are
                changed, it will be a breaking change and a version bump is
                needed as per semver
              </li>
            </ol>

            <p>
              Then it's an acceptable practice and developers can "hook" onto
              them (target them) by using these selectors in their stylesheets.
            </p>

            <p>An example of hooking into a component's selectors:</p>

            <pre><code>import &#123; useId &#125; from 'react';
import clsx from 'clsx';

function Slider(&#123; label, value &#125;) &#123;
  const id = useId();
  return (
    &lt;div className="gfe-slider"&gt;
      &lt;label className="gfe-slider-label" for=&#123;id&#125;&gt;
        &#123;label&#125;
      &lt;/label&gt;
      &lt;input className="gfe-slider-range" id=&#123;id&#125; type="range" value=&#123;value&#125; /&gt;
    &lt;/div&gt;
  );
&#125;</code></pre>

            <pre><code>/* UI library default stylesheet */
.gfe-slider {
  font-size: 12px;
}

/* No other classes are defined in this stylesheet,
gfe-slider-label and gfe-slider-range are added
to the component just for developers to gain access
to the underlying elements. */</code></pre>

            <pre><code>/* Developer's custom stylesheet */
.gfe-slider {
  font-size: 16px; /* Conflicts with the default .gfe-slider */
  padding: 10px 20px;
}

.gfe-slider-label {
  color: red;
}

.gfe-slider-range {
  height: 20px;
}</code></pre>

            <p>
              This approach saves developers the hassle of passing in classes
              into the component as they only have to write CSS to customize the
              styling. Reach UI, a headless UI component library for React, uses
              element selectors. Each component has a
              <code>data-reach-*</code> attribute on the underlying DOM element.
            </p>

            <pre><code>[data-reach-menu-item] {
  color: blue;
}</code></pre>

            <p>
              However, this approach still suffers from the non-deterministic
              styling issue as per "class injection" and doesn't easily allow
              per-instance styling. If per-instance styling is desired, this
              approach can be combined with the class injection approach.
            </p>

            <h3>Theme object</h3>

            <p>
              Instead of taking in classes, the component takes in an object of
              key/values for styling. This is useful if there is only a strict
              subset of properties to customize, or if you want to restrict
              styling to only a few properties.
            </p>

            <pre><code>const defaultTheme = &#123; color: 'black', height: 12 &#125;;

function Slider(&#123; value, label, theme &#125;) &#123;
  // Combine with default.
  const mergedTheme = &#123; ...defaultTheme, ...theme &#125;;

  return (
    &lt;div className="gfe-slider"&gt;
      &lt;label
        htmlFor=&#123;id&#125;
        style=&#123;&#123;
          color: mergedTheme.color,
        &#125;&#125;
      &gt;
        &#123;label&#125;
      &lt;/label&gt;
      &lt;input
        id=&#123;id&#125;
        type="range"
        value=&#123;value&#125;
        style=&#123;&#123;
          height: mergedTheme.height,
        &#125;&#125;
      /&gt;
    &lt;/div&gt;
  );
&#125;

&lt;Slider theme=&#123;&#123; color: 'red', height: 24 &#125;&#125; &#123;...props&#125; /&gt;;</code></pre>

            <p>
              However, since no classes with conflicting styles are used, and
              inline styles have higher specificity than classes, there's no
              specificity conflict and the inline styles will win. However, the
              number of options that need to be supported can grow really
              quickly. Inline styles are also present in the DOM per component
              instance, which can be bad for performance if this component is
              rendered hundreds/thousands of times within a page.
            </p>

            <p>
              The theme object is just a way to restrict the styling to certain
              properties and optionally, an accepted set of values, the values
              do not need be used as inline styles and instead can be combined
              with other styling approaches.
            </p>

            <h3>CSS preprocessor compilation</h3>

            <p>
              UI libraries are usually written with CSS preprocessors like Sass
              and Less. Bootstrap is written with Sass and they provide a way to
              customize the Sass variables used so that developers can generate
              a custom UI library stylesheet.
            </p>

            <p>
              This approach is great because it doesn't rely on overriding CSS
              selectors to achieve customization. There's also less amount of
              resulting CSS and no redundant overridden styles. The downside is
              that a compilation step is needed.
            </p>

            <h3>CSS variables / custom properties</h3>

            <p>
              CSS variables (or more formally known as CSS custom properties)
              are entities defined by CSS authors that contain specific values
              to be reused throughout a document. The
              <code>var()</code> function, it accepts fallback values if the
              given variable is not set.
            </p>

            <pre><code>function Slider(&#123; value, label &#125;) &#123;
  return (
    &lt;div className="gfe-slider"&gt;
      &lt;label for=&#123;id&#125;&gt;&#123;label&#125;&lt;/label&gt;
      &lt;input id=&#123;id&#125; type="range" value=&#123;value&#125; /&gt;
    &lt;/div&gt;
  );
&#125;</code></pre>

            <pre><code>/* UI library default stylesheet */
.gfe-slider {
  /* Fallback of 12px if not set. */
  font-size: var(--gfe-slider-font-size, 12px);
}

/* Developer's custom stylesheet */
:root {
  --gfe-slider-font-size: 15px;
}</code></pre>

            <p>
              The developer can define a value for
              <code>--gfe-slider-font-size</code> globally via the
              <code>:root</code> selector and set the font size for the
              <code>.gfe-slider</code> class to be 15px. The benefit of this
              approach is that it doesn't require JavaScript, however,
              per-component customization will be more troublesome (but still
              possible).
            </p>

            <h3>Render props</h3>

            <p>
              In React, render props are function props that a component uses to
              know what to render. It is useful for separating behavior from
              presentation. Many behavioral/headless UI libraries like Radix,
              Headless UI, and Reach UI make heavy use of render props.
            </p>
          </section>

          <section>
            <h2>Internationalization (i18n)</h2>

            <p>
              Does your UI work for multiple languages? How easy is it to add
              support for more languages?
            </p>

            <h3>Avoid hardcoding of labels in a certain language</h3>

            <p>
              Some UI components have label strings within them (e.g. image
              carousel has labels for prev/next buttons). It'd be good to allow
              customization of these label strings by making them part of
              component props/options.
            </p>

            <h3>Right-to-left languages</h3>

            <p>
              Some languages (e.g. Arabic, Hebrew) are read from right-to-left
              and the UI has to be flipped horizontally. The component can take
              in a <code>direction</code> prop/option and change the order of
              how elements are rendered. For example, the prev and next buttons
              will be on the right and left respectively in an RTL language.
            </p>

            <p>
              Use CSS logical properties to futureproof your styles and let your
              layout work for different writing modes.
            </p>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/ui-cheatsheet"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">UI Interview Cheatsheet</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/system-design"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">System Design Interviews</span>
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

.article-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 1.25rem 0 1rem;
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

.article-content pre {
  background: #2a2a2e;
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

.article-content code {
  background: #2a2a2e;
  color: #e5e7eb;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  font-size: 0.9em;
}

.article-content pre code {
  background: transparent;
  padding: 0;
  border-radius: 0;
}
</style>
