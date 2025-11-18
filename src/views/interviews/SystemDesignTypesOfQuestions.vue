<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <SystemDesignSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">2</span>
            <span class="reading-time">6 min read</span>
          </div>
          <h1>Types of Front End System Design Questions</h1>
          <p class="article-subtitle">
            Question formats you can expect in a front end system design
            interview.
          </p>
        </header>
        <article class="article-content">
          <p>
            There are two main kinds of front end system design questions: (1)
            Applications and (2) UI components.
          </p>

          <section>
            <h2>Applications</h2>

            <p>
              As mentioned above, designing applications for front end system
              design interviews will feel similar to general Software
              Engineering system design interviews, and in fact, the questions
              are highly similar. However, instead of talking about distributed
              systems, you should focus on the client side of things and talk
              about application architecture and client-side implementation
              details.
            </p>

            <p>
              In this day and age, many websites are interactive and rich
              applications that can do virtually what many desktop applications
              can. If you've used Gmail, Facebook, YouTube, ChatGPT, or Google
              Calendar on the web, you have used a web app. Web apps tend to be
              interactive and dynamic (contents on the page change frequently)
              and page navigations in a web app usually don't require a full
              page refresh; the app uses JavaScript to fetch remote data for the
              next page and dynamically change the contents and URL.
            </p>

            <p>
              Since web apps are complex software involving multiple modules,
              common application architectures learnt in Software Engineering
              classes like Model-View-Controller (MVC), Model-View-ViewModel
              (MVVM) are also applicable when building web apps. React is one of
              the most popular JavaScript libraries by Facebook to build
              interactive web applications and many React web apps adopt a
              unidirectional Flux/Redux-based architecture.
            </p>

            <p>
              Different applications have their own unique aspects and talking
              points. It's imperative that you focus on the parts that are
              unique to the application and not spend too much time talking
              about general stuff that are applicable to all questions. Firstly,
              design the high-level architecture, identify the components in the
              system, and the API between the components. Then dive into a few
              areas that are interesting/unique to the problem and how to
              implement or optimize them.
            </p>

            <h3>Examples</h3>

            <p>
              Here's a list of application questions commonly asked during front
              end system design interviews and the areas you should focus on:
            </p>

            <div class="examples-table">
              <table>
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Examples</th>
                    <th>Focus Areas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>News Feed</td>
                    <td>Facebook, Twitter</td>
                    <td>
                      Feed interactions, Feed pagination approaches, Post
                      composer
                    </td>
                  </tr>
                  <tr>
                    <td>Messaging/Chat</td>
                    <td>Messenger, Slack, Discord</td>
                    <td>
                      Real-time chat, Message syncing, Messages list, Chat list
                    </td>
                  </tr>
                  <tr>
                    <td>E-commerce Marketplaces</td>
                    <td>Amazon, eBay</td>
                    <td>
                      Product listing pages, Product detail pages, Cart,
                      Checkout
                    </td>
                  </tr>
                  <tr>
                    <td>Photo Sharing</td>
                    <td>Instagram, Flickr, Google Photos</td>
                    <td>Photos browsing, Photos editing, Photos uploading</td>
                  </tr>
                  <tr>
                    <td>Travel Booking</td>
                    <td>Airbnb, Skyscanner</td>
                    <td>Search UI, Search results, Booking UI</td>
                  </tr>
                  <tr>
                    <td>Video Streaming</td>
                    <td>Netflix, YouTube</td>
                    <td>Video player, Video streaming, Recommended videos</td>
                  </tr>
                  <tr>
                    <td>Pinterest</td>
                    <td>Pinterest</td>
                    <td>
                      Masonry layout implementation and media feed optimizations
                    </td>
                  </tr>
                  <tr>
                    <td>Collaborative Apps</td>
                    <td>Google Docs, Google Sheets, Google Slides, Notion</td>
                    <td>
                      Real-time collaboration protocols, Conflict resolution,
                      State syncing
                    </td>
                  </tr>
                  <tr>
                    <td>Email Client</td>
                    <td>Outlook, Apple Mail, Gmail</td>
                    <td>Mailbox syncing, Mailbox UI, Email composer</td>
                  </tr>
                  <tr>
                    <td>Drawing</td>
                    <td>Figma, Excalidraw, Canva</td>
                    <td>
                      Rendering approach, Client state/data model, State
                      management
                    </td>
                  </tr>
                  <tr>
                    <td>Maps</td>
                    <td>Google/Apple Maps, Foursquare City Guide</td>
                    <td>Map rendering, Displaying locations</td>
                  </tr>
                  <tr>
                    <td>File Storage</td>
                    <td>Google Drive, Dropbox</td>
                    <td>File uploading, File downloading, File explorer</td>
                  </tr>
                  <tr>
                    <td>Video Conferencing</td>
                    <td>Zoom, Google Meet</td>
                    <td>Video streaming, Various viewing modes</td>
                  </tr>
                  <tr>
                    <td>Ridesharing</td>
                    <td>Uber, Lyft</td>
                    <td>Trip booking, Driver location, App states</td>
                  </tr>
                  <tr>
                    <td>Music Streaming</td>
                    <td>Spotify, Apple Music</td>
                    <td>Audio streaming, Music player UI, Playlists UI</td>
                  </tr>
                  <tr>
                    <td>Games</td>
                    <td>Tetris, Snake</td>
                    <td>Game state, Game loop, Game logic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>UI components</h2>

            <p>
              In modern front end development, it is common to use component
              libraries to build applications. Some popular component libraries
              you might have used before include jQuery UI (how old school!),
              Bootstrap, Material UI, Chakra UI, etc.
            </p>

            <p>
              It is an expectation of Front End Engineers to be able to build
              the various UI components needed by an application. Some UI
              components can be easy to build (e.g. text, button, badge, etc),
              while others can be much more complex (autocomplete, dropdown,
              modal, etc). Most of the time, if you are asked to design a UI
              component, it would be from the latter category.
            </p>

            <p>
              Firstly determine the subcomponents of the component (e.g. for an
              image carousel, there's the image, the pagination buttons,
              thumbnails), define the external-facing API of the component (what
              options/props the component should accept), describe the internal
              component state, API between the subcomponents (if relevant), then
              dive into optimizations and considerations for performance,
              accessibility, user experience, security, etc where relevant.
            </p>

            <p>
              You might have to write a small amount of code for one or more of
              the following purposes:
            </p>

            <ol>
              <li>Describe the component hierarchy</li>
              <li>Describe the shape of the component state</li>
              <li>Explain some non-trivial logic within the component</li>
            </ol>

            <div class="code-example">
              <pre><code>&lt;ImageCarousel
  images={...}
  onPrev={...}
  onNext={...}
  layout="horizontal"&gt;
  &lt;ImageCarouselImage style={...} /&gt;
  &lt;ImageThumbnail onClick={...} /&gt;
&lt;/ImageCarousel&gt;</code></pre>
            </div>

            <h3>Customizing theming</h3>

            <p>
              You will most certainly be expected to design a way for users of
              the component (developers) to customize the component appearance.
              Refer to Front End Interview Guidebook's UI Components API Design
              Principles Section for an overview and comparison of the different
              approaches.
            </p>

            <h3>Examples</h3>

            <p>
              Examples of UI components asked during front end system design
              interviews:
            </p>

            <ul>
              <li>
                Design an
                <router-link to="/interviews/questions"
                  >autocomplete component</router-link
                >
              </li>
              <li>
                Design a
                <router-link to="/interviews/questions"
                  >dropdown menu component</router-link
                >
              </li>
              <li>
                Design an
                <router-link to="/interviews/questions"
                  >embeddable poll widget</router-link
                >
              </li>
              <li>
                Design an
                <router-link to="/interviews/questions"
                  >image carousel</router-link
                >
              </li>
              <li>
                Design a
                <router-link to="/interviews/questions"
                  >modal component</router-link
                >
              </li>
              <li>
                Design a
                <router-link to="/interviews/questions"
                  >rich text editor</router-link
                >
              </li>
              <li>Design a data table with sorting and pagination</li>
              <li>Design a datepicker</li>
              <li>Design a multiselect component</li>
            </ul>
          </section>

          <section>
            <h2>What to do during interviews?</h2>

            <p>
              Now that you have an understanding of the kind of questions you
              can be asked during Front end system design interviews, how do you
              go about answering them? We came up with the
              <router-link to="/interviews/system-design/framework"
                >RADIO framework</router-link
              >, an easy-to-remember structured approach that you can use to ace
              Front End system design interview questions.
            </p>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/system-design/introduction"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">Introduction</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/system-design/framework"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">RADIO Framework</span>
            </div>
            <span class="nav-arrow">→</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import SystemDesignSidebar from "../../components/SystemDesignSidebar.vue";
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

.examples-table {
  margin: 2rem 0;
  overflow-x: auto;
}

.examples-table table {
  width: 100%;
  border-collapse: collapse;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.examples-table th,
.examples-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #374151;
  vertical-align: top;
}

.examples-table th {
  background: #374151;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
}

.examples-table td {
  color: #d1d5db;
  font-size: 0.875rem;
}

.examples-table tr:nth-child(even) {
  background: #2a2a2e;
}

.examples-table tr:hover {
  background: #374151;
}

.code-example {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

.code-example pre {
  margin: 0;
  color: #d1d5db;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}

.code-example code {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
}
</style>
