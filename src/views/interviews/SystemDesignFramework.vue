<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <SystemDesignSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">3</span>
            <span class="reading-time">10 min read</span>
          </div>
          <h1>The RADIO Framework</h1>
          <p class="article-subtitle">
            Approach your front end system design interviews in a structured
            fashion. A good structure is half the battle won.
          </p>
        </header>
        <article class="article-content">
          <p>
            A good beginning is half the battle won. By using the RADIO
            framework to answer front end system design questions, you will
            already be much closer to acing your interview.
          </p>

          <p>
            In the context of front end system design interviews, the systems
            you are asked to design tend to be products, so we'll refer to the
            system as "product" from here on. Start by understanding the
            Requirements, defining the high level Architecture and the Data
            Model. Then define the Interfaces between the components in the
            product and talk about any Optimizations or dive deep into specific
            areas which require special attention.
          </p>

          <section>
            <h2>What is RADIO about?</h2>

            <ol>
              <li>
                <strong>Requirements exploration:</strong> Understand the
                problem thoroughly and determine the scope by asking a number of
                clarifying questions
              </li>
              <li>
                <strong>Architecture / High-level design:</strong> Identify the
                key components of the product and how they are related to each
                other
              </li>
              <li>
                <strong>Data model / Core entities:</strong> Describe the core
                entities and its data – the fields each entity contains and
                which component(s) they belong to
              </li>
              <li>
                <strong>Interface definition (API):</strong> Define the
                interface (API) between components in the product, functionality
                of each API, their parameters and responses
              </li>
              <li>
                <strong>Optimizations and deep dive:</strong> Discuss possible
                optimization opportunities and specific areas of interest when
                building the product
              </li>
            </ol>
          </section>

          <section>
            <h2>Requirements exploration</h2>

            <p>
              <strong>Objective:</strong> Understand the problem thoroughly and
              determine the scope by asking a number of clarifying questions.
            </p>

            <p>
              <strong>Recommended duration:</strong> Not more than 15% of the
              session.
            </p>

            <p>
              System design interview questions are open-ended in nature and are
              usually vague and under-specified on purpose. You are required to
              dig deeper and clarify ambiguities in the problem by asking useful
              questions. Treat your interviewer as a product manager you are
              working with on a new project, ask enough questions so that you
              know what problems you are trying to solve and what you need to
              build. In reality, some problems can be solved without any
              engineering at all!
            </p>

            <p>
              No two system design interview experiences will be the same even
              if you have been asked the same question before. Interviewers have
              different backgrounds and might prioritize different aspects of
              the system. Take this chance to find out what they are most
              interested in and plan your answers accordingly.
            </p>

            <p>
              Some general questions you should get answers to before moving on
              to the next part of the interview:
            </p>

            <h3>What are the main use cases we should be focusing on?</h3>

            <p>
              Imagine you were asked to "Design Facebook". Facebook is a huge
              platform, there's news feed, profiles, friends, groups, stories,
              and more. Which parts of Facebook should you focus on? The
              interviewer has the answer in mind but wants you to find out by
              asking questions. Typically you should focus on the most unique
              aspects of the product, the features which define it. For
              Facebook, it would be the news feed, pagination of the feed, and
              creating new posts. For YouTube, it would be the video-watching
              experience. The important areas for other type of products be
              found in the types of questions.
            </p>

            <p>
              For the rest of this page, we'll be using "Design Facebook" as the
              problem and apply the framework to it.
            </p>

            <p>
              Let's assume you didn't clarify which parts of the product to
              focus on and you assumed you should talk about the befriending
              flow and started talking about it. In the best case, good
              interviewers will steer you back in the direction the question was
              meant to proceed, but they will make a mental note that you didn't
              clarify the question. In the worst case, inexperienced
              interviewers will let you keep talking and politely try to find an
              opportunity to correct you, but you would have already wasted some
              precious minutes discussing an unimportant topic.
            </p>

            <h3>
              What are the functional requirements and non-functional
              requirements?
            </h3>

            <p>Firstly, what are functional and non-functional requirements?</p>

            <ul>
              <li>
                <strong>Functional requirements:</strong> Basic requirements of
                the product such that the product cannot function without them.
                This is usually whether a user can complete the core flows
                correctly.
              </li>
              <li>
                <strong>Non-functional requirements:</strong> Requirements that
                are viewed as improvements to the product, but not strictly
                required for the product to be usable, i.e. the product can
                still be used without these. These include performance (how fast
                the page loads, how fast an interaction takes), scalability (how
                many items can be present on the page before the page slows to a
                crawl), good user experience, etc.
              </li>
            </ul>

            <p>There are two ways you can get the answer to this question:</p>

            <ol>
              <li>
                Take the initiative to list out what you think are the
                requirements and get feedback and alignment from the interviewer
                (Preferred).
              </li>
              <li>
                Ask the interviewer directly. However, most of the time they'd
                want you to define them. Even if they give you an answer, it
                won't be too detailed.
              </li>
            </ol>

            <p>
              At the very minimum, your design has to meet the functional
              requirements. After meeting all the function requirements, move on
              to talk about how to fulfill the non-functional requirements.
            </p>

            <h3>
              What are the core features to focus on and which are good-to-have?
            </h3>

            <p>
              Even after you know the functional requirements, there can still
              be a ton of small features that make up the large feature. For
              example, when creating new Facebook posts, what kind of post
              formats should be supported? Besides the usual text-based posts,
              should the user be able to upload photos, upload videos, create
              polls, check in to a location, etc.
            </p>

            <p>
              You should clarify the core features beforehand and design for
              them before moving on to the extra features.
            </p>

            <h3>Other questions:</h3>

            <ul>
              <li>
                What devices/platforms (desktop/tablet/mobile) need to be
                supported?
              </li>
              <li>Is offline support necessary?</li>
              <li>Who are the main users of the product?</li>
              <li>
                What are the performance requirements, if any? Performance
                requirements typically fall under non-functional requirements
              </li>
            </ul>

            <p>
              The questions above should give you a good starting list but it is
              by no means an exhaustive list! Different problems will require
              you to ask domain-specific questions, which we will talk about in
              the case studies.
            </p>

            <p>
              You are recommended to write down the agreed requirements
              somewhere so that you can refer to them throughout the interview
              and ensure that you've covered them.
            </p>
          </section>

          <section>
            <h2>Architecture / High-level design</h2>

            <p>
              <strong>Objective:</strong> Identify the key components of the
              product and how they are related to each other.
            </p>

            <p>
              <strong>Recommended duration:</strong> Roughly 20% of the session.
            </p>

            <p>
              With the requirements in mind, we can move on to the architecture
              design proper. Your next task is to come up with a product/system
              architecture by identifying the key components of the product, how
              the components interact with each other, and how they are related.
              Remember to focus on the client-side architecture, not the back
              end.
            </p>

            <p>
              Diagrams are your friends here. Each component can be represented
              using a rectangle and your high-level design usually ends up
              looking like a few rectangular boxes with arrows between them to
              demonstrate the flow of data. It is also possible to have
              components within components, in that case, draw the parent using
              bigger rectangles since they need to fit multiple subcomponents.
            </p>

            <p>
              Examples of components/modules which are commonly found in a
              high-level front end design:
            </p>

            <ul>
              <li>
                <strong>Server:</strong> In front end system design interviews,
                we can treat the server as a black box and assume it exposes
                some APIs you can call via HTTP/WebSockets.
              </li>
              <li>
                <strong>View:</strong> This represents what the user sees, and
                it usually contains smaller subviews within it. Can contain
                client-side only state.
              </li>
              <li>
                <strong>Controller:</strong> The module which responds to user
                interactions and processes the data from the store/model in a
                format the view expects. This module is not always needed if the
                application is small and there's not much passing of data
                between modules.
              </li>
              <li>
                <strong>Model/Client store:</strong> Where the data lives.
                Stores contain data which will be presented to the user via
                views and stores tend to be app-wide in an interview context. In
                reality, you can have multiple stores within an application and
                stores can contain other stores.
              </li>
            </ul>

            <p>
              Other things to consider when defining the responsibilities of
              components:
            </p>

            <ul>
              <li>
                <strong>Separation of concerns:</strong> Components are meant to
                be modular and serve to encapsulate a set of functionality and
                data. Consider the purpose/functionality of each component, what
                data it should contain and how it can service the rest of the
                system (what it can do for the other components).
              </li>
              <li>
                <strong>Where computation should occur:</strong> If some amount
                of computation is needed (e.g. filtering of results given a
                search term, calculating the total amount for a cart), should
                the work be done on the server or the client? There are
                tradeoffs to each approach and the decision is both
                product-dependent and context-dependent.
              </li>
            </ul>

            <p>
              It is important to realize that not every common component
              mentioned above will be relevant and necessary for every product,
              it depends on the unique aspects of the product.
            </p>

            <p>
              After drawing out the architecture diagram, verbally describe the
              responsibilities of each component (box in the diagram).
            </p>

            <h3>Architecture example</h3>

            <p>
              Here's an example architecture diagram for the News Feed question
              drawn using Excalidraw.
            </p>

            <div class="architecture-diagram">
              <p><em>[Architecture diagram would be displayed here]</em></p>
            </div>

            <h4>Component responsibilities</h4>

            <ul>
              <li>
                <strong>Server:</strong> Serves feed data and provides a HTTP
                API for new feed posts to be created.
              </li>
              <li>
                <strong>Controller:</strong> Controls the flow of data within
                the application and makes network requests to the server.
              </li>
              <li>
                <strong>Client store:</strong> Stores data needed across the
                whole application. In the context of a news feed, most of the
                data in the store will be server-originated data needed by the
                feed UI.
              </li>
              <li>
                <strong>Feed UI:</strong> Contains a list of feed posts and the
                UI for composing new posts.
                <ul>
                  <li>
                    <strong>Feed post:</strong> Presents the data for a feed
                    post and contains buttons to interact with the post
                    (like/react/share/comment).
                  </li>
                  <li>
                    <strong>Post composer:</strong> UI for users to create new
                    feed posts.
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              Common free drawing tools that you might be asked to use include
              diagrams.net and Excalidraw. It'd be a good idea to familiarize
              yourself with these tools beforehand.
            </p>
          </section>

          <section>
            <h2>Data model</h2>

            <p>
              <strong>Objective:</strong> Describe the various data entities,
              the fields they contain and which component(s) they belong to.
            </p>

            <p>
              <strong>Recommended duration:</strong> Roughly 10% of the session.
            </p>

            <p>
              We now have to think about what data fields are present in the
              client. There are two kinds of data on client applications:
            </p>

            <h3>Server-originated data</h3>

            <p>
              Data that originates from the server, usually from a database and
              meant to be seen by multiple people or accessed from multiple
              different devices. Common examples include user data (name,
              profile picture) and user-generated data (feed posts, comments).
            </p>

            <h3>Client-only data</h3>

            <p>
              Client-only data, also commonly known as state, is data that only
              needs to live on the client and does not have to be sent to the
              server for writing into the database. Client data can be further
              broken down into two:
            </p>

            <ul>
              <li>
                <strong>Data to be persisted:</strong> Usually user input such
                as data entered into form fields. These data usually has to be
                sent to the server and saved into a database for it to be
                useful.
              </li>
              <li>
                <strong>Ephemeral data:</strong> Temporary state that lasts for
                a short time. Common examples include form validation state,
                current navigation tab, whether a section is expanded, etc. It's
                usually acceptable to lose these data when the browser tab is
                closed.
              </li>
            </ul>

            <p>
              When listing the data fields, it'd be useful to identify what kind
              of data that field is, whether it's server-originated data or
              client-only data.
            </p>

            <h3>Data model example</h3>

            <p>
              Here's a basic example of data model for the various entities
              using the News Feed question.
            </p>

            <div class="data-model-table">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Entity</th>
                    <th>Owner</th>
                    <th>Fields</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Server</td>
                    <td>Post</td>
                    <td>Feed Post</td>
                    <td>
                      id, created_time, content, image, author (a User),
                      reactions
                    </td>
                  </tr>
                  <tr>
                    <td>Server</td>
                    <td>Feed</td>
                    <td>Feed UI</td>
                    <td>
                      posts (list of Posts), pagination (pagination metadata)
                    </td>
                  </tr>
                  <tr>
                    <td>Server</td>
                    <td>User</td>
                    <td>Client Store</td>
                    <td>id, name, profile_photo_url</td>
                  </tr>
                  <tr>
                    <td>User input (client)</td>
                    <td>NewPost</td>
                    <td>Feed Composer UI</td>
                    <td>message, image</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Depending on how far you progress along in the question and how
              the requirements have evolved and grown during the interview, you
              might need to add more fields. It's a dynamic and iterative
              process.
            </p>

            <p>
              You might want to write these fields near the components which
              owns them in your architecture diagram.
            </p>
          </section>

          <section>
            <h2>Interface definition (API)</h2>

            <p>
              <strong>Objective:</strong> Define the interface between
              components in the product, functionality of the various APIs,
              their parameters and responses.
            </p>

            <p>
              <strong>Recommended duration:</strong> Roughly 15% of the session.
            </p>

            <p>
              With the components and data within each components, we can move
              on to discuss the interface (APIs) between the components. API is
              an overloaded term and generally refer to the protocol which
              software components communicate and request/send data between
              components. Client and server communicate via network layer APIs
              (HTTP/WebSockets). Client components generally communicate via
              functions in the browser runtime. All APIs have three things in
              common whether they are between the server and the client or
              between client components:
            </p>

            <div class="api-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Server-Client</th>
                    <th>Client-Client</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name and functionality</td>
                    <td>HTTP path</td>
                    <td>JavaScript function</td>
                  </tr>
                  <tr>
                    <td>Parameters</td>
                    <td>HTTP GET query and POST parameters</td>
                    <td>Function parameters</td>
                  </tr>
                  <tr>
                    <td>Return Value</td>
                    <td>HTTP response, typically JSON format</td>
                    <td>Function return value</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Server-client API example</h3>

            <p>
              Using the News Feed system design example yet again, we have a
              server API that allows the client to fetch the latest feed posts.
            </p>

            <div class="api-spec">
              <table>
                <tbody>
                  <tr>
                    <td><strong>HTTP Method</strong></td>
                    <td>GET</td>
                  </tr>
                  <tr>
                    <td><strong>Path</strong></td>
                    <td>/feed</td>
                  </tr>
                  <tr>
                    <td><strong>Description</strong></td>
                    <td>Fetches the feed results for a user.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>Parameters</h4>

            <p>
              A feed response is a paginated list so the API expects pagination
              parameters.
            </p>

            <div class="code-example">
              <pre><code>{
  "size": 10,
  "cursor": "=dXNlcjpXMDdRQ1JQQTQ"
}</code></pre>
            </div>

            <h4>Response</h4>

            <div class="code-example">
              <pre><code>{
  "pagination": {
    "size": 10,
    "next_cursor": "=dXNlcjpVMEc5V0ZYTlo"
  },
  "results": [
    {
      "id": "123",
      "author": {
        "id": "456",
        "name": "John Doe"
      },
      "content": "Hello world",
      "image": "https://www.example.com/feed-images.jpg",
      "reactions": {
        "likes": 20,
        "haha": 15
      },
      "created_time": 1620639583
    }
    // ... More posts.
  ]
}</code></pre>
            </div>

            <h3>Client-client API example</h3>

            <p>
              The client-client API can be written in a similar fashion as the
              server-client API, main difference being they are JavaScript
              functions, or events that are being listened to. The most
              important parts to describe are the functionality of the API, the
              parameters and the return/response value.
            </p>

            <h3>API for UI component system design</h3>

            <p>
              If you're asked to design a UI component, for the "Interface"
              section, discuss the customization options for the component,
              similar to the props of a React component.
            </p>
          </section>

          <section>
            <h2>Optimizations and deep dive</h2>

            <p>
              <strong>Objective:</strong> Discuss about possible optimization
              opportunities and specific areas of interest when building the
              product.
            </p>

            <p>
              <strong>Recommended duration:</strong> Roughly 40% of the session.
            </p>

            <p>
              There's no fixed way to go about the optimization and deep dive
              section and you are free to focus on different areas of the
              product. There will not be sufficient time to cover every area, so
              select how you want to spend your time carefully according to
              these guidelines:
            </p>

            <ul>
              <li>
                <strong>Focus on the important areas of the product:</strong>
                For e-commerce websites, performance is crucial and you'd want
                to spend the bulk of your time diving into the various
                performance optimizations that can be done. For collaborative
                editors, the complexity is in how to handle race conditions and
                concurrent modifications, so you'd want to focus on explaining
                that.
              </li>
              <li>
                <strong>Focus on your strengths:</strong> Showcase your domain
                knowledge. If you are well-versed in accessibility, talk about
                the various accessibility pitfalls that can occur in the product
                and how to address them. Impress the interviewer with your
                knowledge. If you are a performance guru, explain the various
                performance optimization opportunities that can provide a
                buttery smooth user experience.
              </li>
            </ul>

            <h3>General optimization / Deep dive areas</h3>

            <p>
              Here's a list of topics you can talk about for this section. Bear
              in mind that the importance of a topic depends on the product and
              some topics are entirely irrelevant to certain products (possible
              but unlikely).
            </p>

            <ul>
              <li>Performance</li>
              <li>User Experience</li>
              <li>Network</li>
              <li>Accessibility (a11y)</li>
              <li>Multilingual Support</li>
              <li>Multi-device Support</li>
              <li>Security</li>
            </ul>

            <p>
              Refer to our Best Practices for Building User Interfaces Guide for
              details on each topic.
            </p>
          </section>

          <section>
            <h2>Summary</h2>

            <div class="summary-table">
              <table>
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>Description</th>
                    <th>Time Allocation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Requirements exploration</strong></td>
                    <td>
                      Understand the problem thoroughly and determine the scope
                      by asking a number of clarifying questions.
                    </td>
                    <td>&lt;15%</td>
                  </tr>
                  <tr>
                    <td><strong>Architecture / High-level design</strong></td>
                    <td>
                      Identify the key components of the product and how they
                      are related to each other.
                    </td>
                    <td>~20%</td>
                  </tr>
                  <tr>
                    <td><strong>Data model</strong></td>
                    <td>
                      Describe the various data entities, the fields they
                      contain and which component(s) they belong to.
                    </td>
                    <td>~10%</td>
                  </tr>
                  <tr>
                    <td><strong>Interface definition (API)</strong></td>
                    <td>
                      Define the interface (API) between components in the
                      product, functionality of each APIs, their parameters and
                      responses.
                    </td>
                    <td>~15%</td>
                  </tr>
                  <tr>
                    <td><strong>Optimizations and deep dive</strong></td>
                    <td>
                      Discuss about possible optimization opportunities and
                      specific areas of interest when building the product.
                    </td>
                    <td>~40%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </article>
        <nav class="article-navigation">
          <router-link
            to="/interviews/system-design/types-of-questions"
            class="nav-link prev"
          >
            <span class="nav-arrow">←</span>
            <div>
              <span class="nav-label">Previous</span>
              <span class="nav-title">Types of Questions</span>
            </div>
          </router-link>
          <router-link
            to="/interviews/system-design/evaluation-axes"
            class="nav-link next"
          >
            <div>
              <span class="nav-label">Next</span>
              <span class="nav-title">Evaluation Criteria</span>
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

.architecture-diagram {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 2rem;
  margin: 1.5rem 0;
  text-align: center;
  color: #9ca3af;
  font-style: italic;
}

.data-model-table,
.api-table,
.summary-table {
  margin: 2rem 0;
  overflow-x: auto;
}

.data-model-table table,
.api-table table,
.summary-table table {
  width: 100%;
  border-collapse: collapse;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.data-model-table th,
.data-model-table td,
.api-table th,
.api-table td,
.summary-table th,
.summary-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #374151;
  vertical-align: top;
}

.data-model-table th,
.api-table th,
.summary-table th {
  background: #374151;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
}

.data-model-table td,
.api-table td,
.summary-table td {
  color: #d1d5db;
  font-size: 0.875rem;
}

.data-model-table tr:nth-child(even),
.api-table tr:nth-child(even),
.summary-table tr:nth-child(even) {
  background: #2a2a2e;
}

.data-model-table tr:hover,
.api-table tr:hover,
.summary-table tr:hover {
  background: #374151;
}

.api-spec {
  margin: 1.5rem 0;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #374151;
}

.api-spec table {
  width: 100%;
  border-collapse: collapse;
}

.api-spec td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #374151;
}

.api-spec td:first-child {
  background: #374151;
  color: #ffffff;
  font-weight: 600;
  width: 30%;
}

.api-spec td:last-child {
  color: #d1d5db;
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
