<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">2</span>
            <span class="reading-time">12 min read</span>
          </div>
          <h1>Landscape and History of React</h1>
          <p class="article-subtitle">
            An overview of React's evolution, from its Facebook origins to its
            current dominance as a versatile, battle-tested library with a vast
            ecosystem of tools and innovations
          </p>
        </header>
        <article class="article-content">
          <section>
            <h2>Why React?</h2>

            <p>
              Why has React remained dominant in the front end ecosystem for so
              long? There are several key reasons:
            </p>

            <ul class="bullet-list">
              <li>
                <strong>Corporate backing and enterprise adoption:</strong>
                React was created at Facebook and powers all of their products
                user interfaces. It's trusted by major companies and enterprises
                worldwide to build applications across all sizes.
              </li>
              <li>
                <strong>Huge community support:</strong> Abundance of resources
                for learning React, from React's official docs, along with
                countless tutorials, courses, and GitHub projects.
              </li>
              <li>
                <strong>Massive open source ecosystem:</strong> From state
                management libraries (Redux, Zustand, Recoil) to UI component
                frameworks (Material UI, Chakra UI), React's ecosystem is vast
                and continues to evolve.
              </li>
              <li>
                <strong>Server-side and full stack capabilities:</strong> React
                is no longer just for the front end. With Next.js and React
                Server Components, it's now deeply integrated into the back-end,
                enabling full-stack React applications.
              </li>
              <li>
                <strong>Support & stability:</strong> React has consistently
                evolved while maintaining good backward compatibility.
              </li>
            </ul>

            <p>
              React's wide adoption, strong community, and ongoing innovation
              make it the go-to choice for front end development today.
            </p>
          </section>

          <section>
            <h2>History and evolution of React</h2>

            <p>
              React didn't become the most widely used front end framework
              overnight. It evolved through years of iteration and
              problem-solving. To truly appreciate where React is today, it
              helps to look back at how it started and progressed.
            </p>

            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-year">2011</div>
                <div class="timeline-content">
                  <h4>Birth of React</h4>
                  <p>
                    React began as an internal project at Facebook. Engineers
                    were struggling with performance issues when rendering
                    dynamic UIs (like Facebook's News Feed). Jordan Walke
                    created an early version of React called "FaxJS", which
                    later became React.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-year">2013</div>
                <div class="timeline-content">
                  <h4>Open sourcing React</h4>
                  <p>
                    React was
                    <a
                      href="https://www.youtube.com/watch?v=GW0rj4sNH2w"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="external-link"
                      >officially open sourced at JSConf US</a
                    >
                    in May 2013. At first, it was met with skepticism –
                    especially JSX, which mixed JavaScript with HTML. However,
                    developers soon realized that React's Virtual DOM approach
                    led to better performance.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-year">2015</div>
                <div class="timeline-content">
                  <h4>Flux & state management</h4>
                  <p>
                    State management in React was a growing challenge,
                    especially for large-scale applications with complex data
                    flows. To address this, Facebook introduced Flux, an
                    architectural pattern that enforced a unidirectional data
                    flow, making state changes more predictable and easier to
                    debug. Flux inspired the creation of Redux, which quickly
                    became the de facto state management solution for React due
                    to its centralized store, immutability principles, and
                    time-travel debugging capabilities.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-year">2016</div>
                <div class="timeline-content">
                  <h4>Functional components & Fiber architecture</h4>
                  <p>
                    React introduced functional components as an alternative to
                    class components, making component logic cleaner and more
                    reusable. Around the same time, work on
                    <a
                      href="https://github.com/acdlite/react-fiber-architecture"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="external-link"
                      >React Fiber</a
                    >
                    started, which is a complete rewrite of React's core
                    architecture and reconciliation algorithm, improving
                    performance and paving the way for features like Concurrent
                    Mode and Suspense.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-year">2018</div>
                <div class="timeline-content">
                  <h4>React hooks</h4>
                  <p>
                    Before Hooks, developers relied on class components to
                    manage state and lifecycle methods. Unveiled at React Conf
                    2018, React 16.8 introduced Hooks (<code>useState</code>,
                    <code>useEffect</code>, etc.), shifting React's development
                    style towards functional programming.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-year">2020</div>
                <div class="timeline-content">
                  <h4>Concurrent mode & Suspense</h4>
                  <p>
                    React 17 laid the groundwork for Concurrent Mode, allowing
                    React to prioritize rendering work and make apps feel more
                    responsive. React Suspense made it easier to handle data
                    fetching.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-year">2021</div>
                <div class="timeline-content">
                  <h4>React Forget</h4>
                  <p>
                    An early preview of
                    <a
                      href="https://www.youtube.com/watch?v=lGEMwh32soc"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="external-link"
                      >React Forget</a
                    >
                    was presented at React Conf 2021. It's a compiler that
                    automatically generates the equivalent of
                    <code>useMemo</code> and <code>useCallback</code> calls to
                    minimize the cost of re-rendering.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-year">2022</div>
                <div class="timeline-content">
                  <h4>React 18 and Server Components</h4>
                  <p>
                    React 18 introduced automatic batching, new hooks
                    (<code>useId</code>, <code>useTransition</code>), and
                    <a
                      href="https://react.dev/reference/rsc/use-server"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="external-link"
                      >React Server Components</a
                    >, allowing developers to offload rendering work to the
                    server.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-year">2023</div>
                <div class="timeline-content">
                  <h4>New official website</h4>
                  <p>
                    React unveiled
                    <a
                      href="https://react.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="external-link"
                      >react.dev</a
                    >
                    as the new official website for React documentation and
                    resources, offering a more comprehensive and user-friendly
                    experience for developers with the inclusion of embedded
                    coding exercises.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-year">2024</div>
                <div class="timeline-content">
                  <h4>React 19</h4>
                  <p>
                    The latest React version further optimized Server Components
                    and improved static site generation. The introduction of
                    Actions simplified state updates, making React apps easier
                    to manage. An experimental release of
                    <a
                      href="https://react.dev/learn/react-compiler"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="external-link"
                      >React Compiler</a
                    >
                    was
                    <a
                      href="https://react.dev/blog/2024/10/21/react-compiler-beta-release"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="external-link"
                      >announced</a
                    >
                    at React Conf 2024.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>React ecosystem</h2>

            <p>
              The React ecosystem is vast and consists of several official and
              community-driven projects that extend React's capabilities. These
              projects help developers build scalable, performant, and
              maintainable applications.
            </p>

            <p>
              Aim to be familiar and gain experience with at least one
              technology in each category.
            </p>

            <div class="ecosystem-section">
              <h3>State management</h3>
              <p>
                React has built-in state management (<code>useState</code>,
                <code>useReducer</code>, and Context API), but external
                solutions are often used for managing global state.
              </p>

              <ul class="bullet-list">
                <li>
                  <a
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Redux</a
                  >: A predictable state container often used for large
                  applications
                </li>
                <li>
                  <a
                    href="https://zustand-demo.pmnd.rs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Zustand</a
                  >: A lightweight alternative to Redux with a simple API
                </li>
                <li>
                  <a
                    href="https://jotai.pmnd.rs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Jotai</a
                  >: A minimal atomic state library for React
                </li>
              </ul>
            </div>

            <div class="ecosystem-section">
              <h3>UI components</h3>
              <p>
                Many UI libraries provide styled and themeable components for
                React applications.
              </p>

              <ul class="bullet-list">
                <li>
                  <a
                    href="https://mui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >MUI (Material UI)</a
                  >: A popular and themeable component library based originally
                  on Material Design
                </li>
                <li>
                  <a
                    href="https://mantine.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Mantine</a
                  >: A modern, fully-featured React component library with
                  built-in accessibility, dark mode support, and a flexible
                  styling API
                </li>
                <li>
                  <a
                    href="https://ant.design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Ant Design</a
                  >: A popular enterprise-focused UI component library
                </li>
              </ul>

              <p>
                Meanwhile, headless UI libraries provide unstyled, fully
                accessible components that give developers full control over
                styling while maintaining functionality and accessibility best
                practices.
              </p>

              <ul class="bullet-list">
                <li>
                  <a
                    href="https://headlessui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Headless UI</a
                  >: Developed by the Tailwind team, it provides fully
                  accessible, unstyled components like modals, dropdowns, and
                  accordions
                </li>
                <li>
                  <a
                    href="https://radix-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Radix UI</a
                  >: A set of highly composable, accessible components designed
                  for low-level UI building with full styling flexibility
                </li>
                <li>
                  <a
                    href="https://base-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Base UI</a
                  >: Headless, unstyled component library from creators of Radix
                  UI, and Material UI team
                </li>
                <li>
                  <a
                    href="https://react-spectrum.adobe.com/react-aria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >React Aria</a
                  >: A set of highly accessible hooks from Adobe for building
                  fully customizable UI components
                </li>
                <li>
                  <a
                    href="https://ariakit.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Ariakit</a
                  >: Open-source library with unstyled, primitive components,
                  with a collection of styled examples that you can copy and
                  paste into your apps
                </li>
              </ul>
            </div>

            <div class="ecosystem-section">
              <h3>Data fetching</h3>
              <p>
                React apps frequently fetch data from HTTP APIs and libraries
                have been built to make it easier to fetch data, incorporating
                useful features like caching, retries, and pagination.
              </p>

              <ul class="bullet-list">
                <li>
                  <a
                    href="https://tanstack.com/query"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >React Query (TanStack Query)</a
                  >: Popular server state management tool for React. It
                  optimizes caching, background syncing, and pagination
                </li>
                <li>
                  <a
                    href="https://swr.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >SWR</a
                  >: A lightweight data fetching library by Vercel, optimized
                  for performance
                </li>
                <li>
                  <a
                    href="https://www.apollographql.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Apollo Client</a
                  >: The most widely-used GraphQL client for React
                </li>
                <li>
                  <a
                    href="https://relay.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Relay</a
                  >: A GraphQL client by Meta that is optimized for performance
                </li>
              </ul>
            </div>

            <div class="ecosystem-section">
              <h3>Form validation</h3>
              <p>
                Libraries for client-side validation of forms built in React.
              </p>

              <ul class="bullet-list">
                <li>
                  <a
                    href="https://react-hook-form.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >React Hook Form</a
                  >: A lightweight, performant library built entirely with React
                  hooks. Minimizes re-renders and supports both built‑in
                  validation rules and schema-based validation (with Yup, Zod,
                  etc.), making it ideal for both small and complex forms
                </li>
                <li>
                  <a
                    href="https://formik.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Formik</a
                  >: Although no longer maintained, it was one of the most
                  popular form libraries that offers a declarative way to manage
                  form state, validation, and error handling. Formik is often
                  paired with Yup for schema validation but tends to be more
                  opinionated and slightly heavier compared to React Hook Form
                </li>
              </ul>
            </div>

            <div class="ecosystem-section">
              <h3>Routing & metaframeworks</h3>
              <p>
                Several frameworks extend React (known as metaframeworks) by
                adding routing, server-side rendering, and full stack
                capabilities.
              </p>

              <ul class="bullet-list">
                <li>
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Next.js</a
                  >: A full stack React framework by Vercel that supports
                  various rendering approaches (e.g. server-side rendering
                  (SSR), static site generation (SSG)) and nested routing
                </li>
                <li>
                  <a
                    href="https://remix.run/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Remix</a
                  >
                  &
                  <a
                    href="https://reactrouter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >React Router</a
                  >: A full-stack React framework that emphasizes progressive
                  enhancement and nested routing, from the creators of React
                  Router. The Remix team
                  <a
                    href="https://remix.run/blog/merging-remix-and-react-router"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >merged Remix's features into React Router v7</a
                  >
                </li>
                <li>
                  <a
                    href="https://tanstack.com/start"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >TanStack Start</a
                  >: Full-stack React framework powered by TanStack Router
                </li>
              </ul>
            </div>

            <div class="ecosystem-section">
              <h3>Testing & debugging</h3>
              <p>
                React applications often require unit, integration, and
                end-to-end testing.
              </p>

              <ul class="bullet-list">
                <li>
                  <a
                    href="https://jestjs.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Jest</a
                  >: A popular testing framework for unit and integration tests
                </li>
                <li>
                  <a
                    href="https://vitest.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Vitest</a
                  >: A testing framework that uses Vite bundling and config
                </li>
                <li>
                  <a
                    href="https://testing-library.com/docs/react-testing-library/intro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >React Testing Library</a
                  >: A user-focused testing library that simulates real user
                  interactions
                </li>
                <li>
                  <a
                    href="https://storybook.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Storybook</a
                  >: A tool for developing and testing isolated UI components
                </li>
                <li>
                  <a
                    href="https://www.cypress.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Cypress</a
                  >: A popular end-to-end (E2E) testing tool for websites
                </li>
                <li>
                  <a
                    href="https://react.dev/learn/react-developer-tools"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >React Developer Tools</a
                  >: An official browser extension for debugging React
                  components
                </li>
              </ul>
            </div>

            <div class="ecosystem-section">
              <h3>Bundlers</h3>
              <p>
                Bundlers help convert your modular code (with imports, JSX, CSS,
                images, etc.) into optimized bundles that can be efficiently
                served in development and production.
              </p>

              <ul class="bullet-list">
                <li>
                  <a
                    href="https://vitejs.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Vite</a
                  >: A very fast development server and bundler for web apps,
                  with great support for React
                </li>
                <li>
                  <a
                    href="https://parceljs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Parcel</a
                  >: A zero-config bundler for JavaScript apps, including React
                </li>
                <li>
                  <a
                    href="https://webpack.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >webpack</a
                  >: Highly configurable module bundler that has been the
                  industry standard for many years. Succeeded by
                  <a
                    href="https://turbo.build/pack/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Turbopack</a
                  >
                </li>
              </ul>
            </div>

            <div class="ecosystem-section">
              <h3>Animation & effects</h3>
              <p>
                Animation has traditionally been quite difficult to build in
                React. Thankfully, various animation and transition libraries
                were created to make animation easier.
              </p>

              <ul class="bullet-list">
                <li>
                  <a
                    href="https://motion.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >Motion</a
                  >: A popular and powerful animation library with a declarative
                  API. Previously Framer Motion
                </li>
                <li>
                  <a
                    href="https://react-spring.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >React Spring</a
                  >: Provides fluid, physics-based animations
                </li>
                <li>
                  <a
                    href="https://gsap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="external-link"
                    >GSAP</a
                  >: A high-performance JavaScript animation library compatible
                  with React
                </li>
              </ul>
            </div>
          </section>

          <div class="note-box">
            <p>
              React has come a long way from its early days as an internal
              library at Meta. Today, it's a mature, battle-tested
              library/framework that continues to evolve. Understanding its
              history and ecosystem gives you context on why certain patterns
              exist and how React solves real-world problems.
            </p>

            <p>
              As we move through this guide, keep in mind that companies look
              for engineers who understand React's core principles, performance
              optimizations, and real-world applications. By the time you finish
              this guide, you'll not only be able to answer React interview
              questions – you'll be better at using React.
            </p>
          </div>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/react/introduction"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">React Interviews: An Introduction</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/preparation"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">How to Prepare for React Interviews</span>
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

.bullet-list li code {
  background: #374151;
  color: #dcee77;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 14px;
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

.note-box {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 20px;
  margin: 24px 0;
}

.note-box p {
  margin: 0 0 16px 0;
  color: #d1d5db;
  line-height: 1.6;
}

.note-box p:last-child {
  margin-bottom: 0;
}

.timeline {
  margin: 2rem 0;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
}

.timeline-item:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 1rem;
  top: 2.5rem;
  bottom: -2rem;
  width: 2px;
  background: #374151;
}

.timeline-year {
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
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.timeline-content {
  flex: 1;
  padding-bottom: 1rem;
}

.timeline-content h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
}

.ecosystem-section {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
}

.ecosystem-section h3 {
  font-size: 18px;
  font-weight: 600;
  color: #dcee77;
  margin-bottom: 12px;
}

.ecosystem-section p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 16px;
}
</style>
