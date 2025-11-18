<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">11</span>
            <span class="reading-time">15 min read</span>
          </div>
          <h1>Data Fetching in React Interviews</h1>
          <p class="article-subtitle">
            A comprehensive guide to efficiently fetching data in React,
            covering client-side and server-side techniques, dynamic queries,
            error handling, caching, and advanced optimizations with query
            libraries
          </p>
        </header>
        <article class="article-content">
          <p class="lead-paragraph">
            Fetching data is a fundamental part of building web applications. In
            React, managing data fetching efficiently is crucial to creating
            responsive and performant applications. Whether retrieving data from
            an API, database, or another source, React provides multiple
            approaches to handle data fetching effectively.
          </p>

          <p>
            Data can be fetched either on the server (server-side rendering) or
            on the client via <code>fetch</code> and then rendered in the
            browser (client-side rendering).
          </p>

          <section>
            <h2>Client-side data fetching</h2>

            <p>
              The built-in <code>fetch</code> API is a straightforward way to
              make HTTP requests in JavaScript. Here's a simple example using
              the <code>useEffect</code> hook to fetch data from an API:
            </p>

            <div class="code-block">
              <pre><code>import { useState, useEffect } from 'react';

function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error response');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return &lt;p&gt;Loading...&lt;/p&gt;;
  }

  if (error) {
    return &lt;p&gt;Error: {error.message}&lt;/p&gt;;
  }

  return (
    &lt;ul&gt;
      {data.map((post) =&gt; (
        &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
            </div>

            <p>
              This component calls an API on mount, fetches the data, and
              renders it to the screen. It also shows a loading message while
              the data is being fetched and error message if an error was
              encountered. These are all great for user experience.
            </p>
          </section>

          <section>
            <h2>Dynamic client-side data fetching</h2>

            <p>
              However, often you will need to fetch data based on a dynamic
              parameter, such as a blog post slug or an autocomplete search
              query.
            </p>

            <p>
              The following "live search" example fetches data based on a
              user-provided search term as you type:
            </p>

            <div class="code-block">
              <pre><code>import { useState } from 'react';
import axios from 'axios';

function SearchResults() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(query) {
    if (!query) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(
          query,
        )}`,
      );

      if (!response.ok) {
        throw new Error('Error response');
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    &lt;div&gt;
      &lt;input
        type="text"
        value={query}
        onChange={(event) =&gt; setQuery(event.target.value)}
        placeholder="Enter search term"
      /&gt;
      {loading &amp;&amp; &lt;p&gt;Loading...&lt;/p&gt;}
      {error &amp;&amp; &lt;p&gt;Error: {error.message}&lt;/p&gt;}
      {data &amp;&amp; (
        &lt;ul&gt;
          {data.map((result) =&gt; (
            &lt;li key={result.id}&gt;{result.title}&lt;/li&gt;
          ))}
        &lt;/ul&gt;
      )}
    &lt;/div&gt;
  );
}</code></pre>
            </div>

            <p>
              Spot any problem with the example above? On first glance it might
              look fine, but there are actually many issues and areas of
              improvements:
            </p>

            <div class="subsection">
              <h3>A fetch request is made per keystroke</h3>

              <p>
                Since there's no submit button, the
                <code>fetchData()</code> function is called on every change in
                the <code>&lt;input&gt;</code>. If a user enters
                <code>'tomato'</code>, a total of 6 HTTP requests will be made!
                This is quite redundant considering the user probably only cares
                about the results for <code>'tomato'</code>.
              </p>

              <p>
                One way to resolve this is to debounce the query so that the API
                request is only made after the user has stopped typing for a
                specific duration.
              </p>
            </div>

            <div class="subsection">
              <h3>Race conditions</h3>

              <p>
                Wastefulness of multiple requests aside, a more serious problem
                is that the displayed results aren't even for the current search
                term. Race conditions can occur because when multiple requests
                are made, the server can return the results in any order. The
                response for the term <code>'toma'</code> can arrive later than
                the response for the term <code>'tomato'</code>, but the code
                simply displays the results of the latest request, not
                necessarily the request of the current search term.
              </p>

              <p>This problem can be fixed/improved in multiple ways:</p>

              <ol class="numbered-list">
                <li>
                  <strong>Debouncing:</strong> Debouncing ensures that requests
                  are sent only after a period of inactivity, which reduces the
                  chance of race conditions. However, if the request latency is
                  longer than the debounce duration, then race conditions can
                  still occur. Debouncing is not a foolproof approach.
                </li>
                <li>
                  <strong>Cancelling previous requests:</strong> Use
                  <code>AbortController</code> to cancel in-flight API requests
                  when a new one is made.
                </li>
                <li>
                  <strong>Ignore/discard outdated responses:</strong> Before
                  displayed data, determine if the response is for the current
                  query, and ignore/discard the responses that aren't relevant.
                </li>
              </ol>
            </div>

            <div class="subsection">
              <h3>Setting state after unmount</h3>

              <p>
                If the user navigates away from the page and the response is
                returned, the code will attempt to call
                <code>setData</code> even though the component is no longer in
                the DOM and React will log a warning "Can't perform a React
                state update on an unmounted component." This can be fixed by
                ensuring the component is still mounted before updating state by
                using a cleanup function in <code>useEffect</code> to set an
                <code>isMounted</code> flag to <code>false</code> or using
                <code>AbortController</code>s for fetch requests.
              </p>

              <div class="code-block">
                <pre><code>useEffect(() => {
  let isMounted = true;

  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => {
      if (isMounted) {
        setData(data);
      }
    });

  return () => {
    isMounted = false;
  };
}, []);</code></pre>
              </div>
            </div>

            <div class="subsection">
              <h3>Redundant duplicate requests</h3>

              <p>
                This happens when a user types a query, receives results, and
                then retypes the same query, triggering another API request when
                the data is already available.
              </p>

              <p>
                Example: If a user types <code>'tomato'</code>, deletes it, and
                then types <code>'tomato'</code> again, the API is queried twice
                despite already having the results.
              </p>

              <p>
                Caching is the solution to this issue. An example is to use a
                <code>Map&lt;query, results&gt;</code> as the cache. Before
                making an API call, check if the results already exist in the
                cache. If they do, use them instead of fetching again.
              </p>
            </div>
          </section>

          <section>
            <h2>Data mutations</h2>

            <p>
              Data fetching isn't only limited to querying, there's also
              mutations. A data mutation refers to any operation that modifies
              data on the server, such as creating, updating, or deleting
              records in a database via an API.
            </p>

            <div class="subsection">
              <h3>Optimistic updates</h3>

              <p>
                The typical steps in a data mutation with any optimizations:
              </p>

              <ol class="numbered-list">
                <li>Trigger the API request (POST, PUT, DELETE)</li>
                <li>Show a loading state while the request is in progress</li>
                <li>Wait for the response from the server</li>
                <li>
                  In success cases, handle the response and update UI where
                  relevant
                </li>
                <li>
                  Handle errors appropriately (e.g., show an error message)
                </li>
              </ol>

              <p>
                This flow is slow because the user must wait for the server
                response before seeing changes. This is where optimistic updates
                can help.
              </p>

              <p>
                Optimistic updates are a technique used in data mutations where
                the UI updates before receiving a response from the server. This
                makes the application feel faster and more responsive by
                assuming the mutation will succeed.
              </p>

              <ol class="numbered-list">
                <li>
                  Update the UI immediately with the assumed successful change
                </li>
                <li>Send the API request in the background</li>
                <li>If the request succeeds, keep the UI as it is</li>
                <li>
                  If the request fails, rollback the UI to its previous state
                  and show an error message
                </li>
              </ol>

              <p>
                Optimistic updates reduce perceived latency and improves user
                experience.
              </p>

              <div class="code-block">
                <pre><code>const handleLike = async () => {
  setLike((count) => count + 1); // Update UI optimistically

  try {
    await fetch('/api/posts/4/like', {
      method: 'POST',
    });
  } catch (error) {
    setLike((count) => count - 1); // Rollback on failure
  }
};</code></pre>
              </div>

              <p>
                Optimistic updates can be used for mutations where the success
                scenario is known beforehand, such as liking a post, adding an
                item to a cart, or editing a comment.
              </p>
            </div>

            <div class="subsection">
              <h3>Invalidating cache</h3>

              <p>
                If the UI relies on cached data, the cache should be invalidated
                either by refetching the data or merging the mutation response
                with the cached data (not possible for certain mutations).
              </p>
            </div>
          </section>

          <section>
            <h2>Query libraries</h2>

            <p>
              By now you probably agree with me that data fetching is such a
              huge pain to implement properly. But not to worry, query libraries
              to the rescue!
            </p>

            <p>
              Query libraries are specially designed to handle data fetching,
              caching, synchronization, and state management in front end
              applications. They simplify making API requests while optimizing
              performance and user experience. Popular examples include
              <a
                href="https://tanstack.com/query/latest"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >TanStack Query</a
              >,
              <a
                href="https://swr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >useSWR</a
              >, and
              <a
                href="https://www.apollographql.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="external-link"
                >Apollo Client</a
              >
              (for GraphQL).
            </p>

            <p>
              The following example uses TanStack Query. See how easy it is to
              fetch data when they're written in a declarative manner!
            </p>

            <div class="code-block">
              <pre><code>import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function DataFetchingComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await axios.get('/api/posts');
      return response.data;
    },
    staleTime: 5000, // Cache data for 5 seconds
  });

  if (isLoading) {
    return &lt;p&gt;Loading...&lt;/p&gt;;
  }
  if (error) {
    return &lt;p&gt;Error: {error.message}&lt;/p&gt;;
  }

  return (
    &lt;ul&gt;
      {data.map((post) =&gt; (
        &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
            </div>

            <div class="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Manual Implementation</th>
                    <th>Query Library</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Caching</td>
                    <td>No caching</td>
                    <td>Automatic caching</td>
                  </tr>
                  <tr>
                    <td>Error handling</td>
                    <td>Needs try/catch</td>
                    <td>Built-in retries</td>
                  </tr>
                  <tr>
                    <td>Optimistic updates</td>
                    <td>Requires manual rollback</td>
                    <td>Automatic rollback on failure</td>
                  </tr>
                  <tr>
                    <td>Pagination</td>
                    <td>Requires additional logic</td>
                    <td>Built-in support</td>
                  </tr>
                  <tr>
                    <td>Background updates</td>
                    <td>Requires manual polling</td>
                    <td>Handles updates in background</td>
                  </tr>
                  <tr>
                    <td>Refetching</td>
                    <td>Manual</td>
                    <td>Automatic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>Server-side data fetching and server-side rendering (SSR)</h2>

            <p>
              Server-side data fetching is a technique where data is retrieved
              from a database or API before rendering the page on the server
              (SSR), rather than fetching it on the client after the initial
              load. SSR improves performance, SEO, and user experience by
              delivering pre-rendered, data-filled pages to the client.
            </p>

            <p>
              Metaframeworks like Next.js make server-side data fetching easy
              with functions like <code>getServerSideProps</code> / server
              components, which runs on the server before sending the HTML to
              the browser. Unlike client-side fetching, where a loading state is
              visible while waiting for data, server-side fetching ensures that
              the user sees the fully rendered page immediately.
            </p>

            <p>
              This is particularly useful for performance-sensitive pages,
              SEO-sensitive pages, personalized dashboards, and dynamic content
              that depends on request-specific data (e.g., authentication or
              geolocation).
            </p>

            <p>
              With the exception of take-home assignments, most React coding
              interview questions will be using client-side data fetching rather
              than server-side data fetching.
            </p>

            <p>
              However, CSR vs SSR is a common discussion topic during system
              design rounds and you should know the benefits of each and when to
              use which.
            </p>
          </section>

          <section>
            <h2>What you need to know for interviews</h2>

            <ul class="bullet-list">
              <li>
                <strong>Basic data fetching:</strong>
                <ul class="bullet-list">
                  <li>
                    Using <code>useEffect</code> and <code>useState</code> for
                    fetching data in functional components
                  </li>
                  <li>Handling loading and error states</li>
                  <li>
                    Understanding dependency arrays (<code>[]</code> for
                    on-mount fetch, <code>[query]</code> for fetch-on-change)
                  </li>
                  <li>Avoiding infinite loops due to missing dependencies</li>
                  <li>
                    Cleaning up side effects (e.g., aborting fetch requests to
                    prevent setting state on unmount)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Issues with basic data fetching approach:</strong>
                Although you probably won't be asked to implement optimized data
                fetching approaches, you should know what the issues are and how
                to fix them on a high level
              </li>
            </ul>
          </section>

          <section>
            <h2>Key interview questions</h2>

            <ol class="numbered-list">
              <li>How do you fetch data in React?</li>
              <li>
                What are the benefits of using TanStack Query over
                <code>useState</code> and <code>useEffect</code>?
              </li>
              <li>
                How do you prevent redundant API requests in a live search?
              </li>
              <li>
                What are optimistic updates, and how do they improve
                performance?
              </li>
              <li>How do you handle errors and retries in API calls?</li>
              <li>How do you cancel an API request if a component unmounts?</li>
            </ol>
          </section>

          <section>
            <h2>Practice questions</h2>

            <p><strong>Quiz:</strong></p>

            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/how-do-you-handle-asynchronous-data-loading-in-react-applications?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  How do you handle asynchronous data loading in React
                  applications?
                </a>
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/explain-server-side-rendering-of-react-applications-and-its-benefits?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  Explain server-side rendering of React applications and its
                  benefits?
                </a>
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/quiz/what-are-some-common-pitfalls-when-doing-data-fetching-in-react?framework=react&tab=quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  What are some common pitfalls when doing data fetching in
                  React?
                </a>
              </li>
            </ul>

            <p><strong>Coding:</strong></p>

            <ul class="bullet-list">
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/like-button/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  Like Button
                </a>
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/birth-year-histogram/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  Birth Year Histogram
                </a>
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/job-board/react?framework=react&tab=coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  Job Board
                </a>
              </li>
            </ul>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/playbook/react/signup-form"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Prev</span>
              <span class="nav-title">Signup Form Example in React</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/playbook/react/design-patterns"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title"
                >Design Patterns for React Interviews</span
              >
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

.lead-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 2rem;
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

.numbered-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
  counter-reset: item;
}

.numbered-list li {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 12px;
  padding-left: 30px;
  position: relative;
}

.numbered-list li::before {
  content: counter(item) ". ";
  counter-increment: item;
  color: #dcee77;
  font-weight: bold;
  position: absolute;
  left: 0;
}
</style>
