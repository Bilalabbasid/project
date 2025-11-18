<template>
  <div class="playbook-article-page">
    <div class="article-layout">
      <ReactPlaybookSidebar />
      <div class="article-main">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-number">9</span>
            <span class="reading-time">15 min read</span>
          </div>
          <h1>Forms in React Interviews</h1>
          <p class="article-subtitle">
            Comprehensive guide to building interactive React forms, covering
            controlled vs uncontrolled components, various input types, complex
            state management, and validation strategies
          </p>
        </header>
        <article class="article-content">
          <p class="lead-paragraph">
            In React, form inputs can be managed in two primary ways: controlled
            and uncontrolled. Understanding when and how to use each approach is
            essential for React interviews and building production applications.
          </p>

          <section>
            <h2>Controlled vs uncontrolled form components</h2>

            <p>
              In React, form inputs can be managed in two ways: controlled and
              uncontrolled. The main difference lies in how the form data is
              handled.
            </p>

            <h3>Controlled form components</h3>
            <p>
              In a controlled form component, React manages the form element's
              state. The value of the input is stored in a state variable and
              updated via an <code>onChange</code> handler.
            </p>

            <div class="code-block">
              <pre><code>import { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Submitted Name: ${name}`);
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;label&gt;
        Name:
        &lt;input type="text" value={name} onChange={handleChange} /&gt;
      &lt;/label&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
            </div>

            <p>
              In controlled components, the input value is stored in React state
              (<code>name</code>). The <code>onChange</code> handler updates the
              state as the user types. This ensures the value is always
              controlled by React.
            </p>

            <h3>Uncontrolled form components</h3>
            <p>
              In an uncontrolled form component, the form element's value is
              managed by the DOM itself rather than React state.
            </p>

            <div class="code-block">
              <pre><code>import { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    
    // Access form values using FormData
    const formData = new FormData(event.target);
    console.log('Name:', formData.get('name'));
    
    // Alternatively, access the input via a ref
    console.log('Name:', nameRef.current.value);
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;label&gt;
        Name:
        &lt;input type="text" name="name" ref={nameRef} /&gt;
      &lt;/label&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
            </div>

            <p>
              In uncontrolled components, the input value is not stored in React
              state. To access the form data upon submission, we can either:
            </p>
            <ul>
              <li>
                Use <code>FormData</code>: Access the form element directly from
                <code>event.target</code>, create a
                <code>FormData</code> instance, and retrieve values using
                <code>formData.get('name')</code>
              </li>
              <li>
                Use refs: Use <code>useRef()</code> to reference the input field
                directly and access the value via
                <code>nameRef.current.value</code>
              </li>
            </ul>

            <h3>When to use which?</h3>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Controlled</th>
                  <th>Uncontrolled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Where state is stored</td>
                  <td>React state (useState)</td>
                  <td>Native DOM</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>
                    Re-rendering needed on update, might cause issues in large
                    forms
                  </td>
                  <td>More performant for simple use cases</td>
                </tr>
                <tr>
                  <td>Validation</td>
                  <td>Easy to implement</td>
                  <td>Requires manual validation</td>
                </tr>
                <tr>
                  <td>Form reset</td>
                  <td>Easy (setState(""))</td>
                  <td>
                    Needs ref.current.value = "" or trigger a 'reset' event
                  </td>
                </tr>
                <tr>
                  <td>Use case</td>
                  <td>Dynamic forms, validation, real-time updates</td>
                  <td>
                    Simple forms, file uploads, or integrating non-React code
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              • Use controlled form components when you need to validate,
              manipulate, or track user input dynamically
            </p>
            <p>
              • Use uncontrolled form components when working with large forms,
              integrating with non-React code, or optimizing performance
            </p>
            <p>
              In interviews, considering the forms usually do not have many
              fields, both controlled components and uncontrolled approaches are
              viable. Personally, we'd lean towards controlled components since
              you might be asked to reset the values, add validation-on-typing,
              etc and it'd be easier to implement.
            </p>
          </section>

          <section>
            <h2>Handling different input types</h2>
            <p>
              The following are code examples for various input types using the
              controlled approach, meaning their values are stored in state and
              updated via <code>onChange</code> handlers.
            </p>

            <h3>Text input</h3>
            <p>
              A controlled text input updates its value in state as the user
              types.
            </p>

            <div class="code-block">
              <pre><code>import { useState } from 'react';

function TextInputExample() {
  const [text, setText] = useState('');

  return (
    &lt;div&gt;
      &lt;label htmlFor="name-input"&gt;Name&lt;/label&gt;
      &lt;input
        id="name-input"
        type="text"
        value={text}
        onChange={(event) =&gt; setText(event.target.value)}
      /&gt;
      &lt;p&gt;Entered Text: {text}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
            </div>

            <p>
              • The input field's value is controlled by React state
              (<code>text</code>)
            </p>
            <p>
              • The <code>onChange</code> event updates state with
              <code>setText(event.target.value)</code>
            </p>
            <p>• This ensures React manages the input value dynamically</p>

            <h3>Checkbox input</h3>
            <p>A checkbox is a boolean value (checked or unchecked).</p>

            <div class="code-block">
              <pre><code>import { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    &lt;div&gt;
      &lt;input
        id="checkbox-input"
        type="checkbox"
        checked={isChecked}
        onChange={(event) =&gt; setIsChecked(event.target.checked)}
      /&gt;
      &lt;label htmlFor="checkbox-input"&gt;Agree to terms&lt;/label&gt;
      &lt;p&gt;Checkbox is {isChecked ? 'checked' : 'unchecked'}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
            </div>

            <h3>Radio group</h3>
            <p>
              Radio buttons are used when selecting one option from multiple
              choices.
            </p>

            <div class="code-block">
              <pre><code>import { useState } from 'react';

function RadioGroupExample() {
  const [gender, setGender] = useState('');

  return (
    &lt;div&gt;
      &lt;div&gt;
        &lt;input
          id="radio-male"
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(event) =&gt; setGender(event.target.value)}
        /&gt;
        &lt;label htmlFor="radio-male"&gt;Male&lt;/label&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;input
          id="radio-female"
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(event) =&gt; setGender(event.target.value)}
        /&gt;
        &lt;label htmlFor="radio-female"&gt;Female&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}</code></pre>
            </div>

            <h3>Select dropdown</h3>
            <p>A select dropdown allows users to choose one option.</p>

            <div class="code-block">
              <pre><code>import { useState } from 'react';

function SelectExample() {
  const [fruit, setFruit] = useState('apple');

  return (
    &lt;div&gt;
      &lt;label htmlFor="favorite-fruit"&gt;Favorite fruit&lt;/label&gt;
      &lt;select
        id="favorite-fruit"
        value={fruit}
        onChange={(event) =&gt; setFruit(event.target.value)}&gt;
        &lt;option value="apple"&gt;Apple&lt;/option&gt;
        &lt;option value="banana"&gt;Banana&lt;/option&gt;
        &lt;option value="orange"&gt;Orange&lt;/option&gt;
      &lt;/select&gt;
      &lt;p&gt;Selected fruit: {fruit}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
            </div>
          </section>

          <section>
            <h2>Handling complex form state</h2>
            <p>
              When working with complex forms in React, managing state
              efficiently is crucial to ensure good performance and
              maintainability.
            </p>

            <h3>Using useReducer for complex forms</h3>
            <p>
              For forms with multiple fields and state dependencies,
              <code>useReducer</code> provides a structured way to manage state
              updates.
            </p>

            <div class="code-block">
              <pre><code>import { useReducer } from 'react';

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const initialState = {
  name: '',
  email: '',
  age: '',
};

function ComplexFormWithReducer() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChange(event) {
    dispatch({
      type: 'UPDATE_FIELD',
      field: event.target.name,
      value: event.target.value,
    });
  }

  return (
    &lt;form&gt;
      &lt;input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      /&gt;
      &lt;input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      /&gt;
    &lt;/form&gt;
  );
}</code></pre>
            </div>

            <h3>Using form libraries</h3>
            <p>
              Instead of managing everything manually, libraries like React Hook
              Form simplify complex form state handling.
            </p>

            <div class="code-block">
              <pre><code>import { useForm } from 'react-hook-form';

function FormWithReactHookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) =&gt; alert(JSON.stringify(data));

  return (
    &lt;form onSubmit={handleSubmit(onSubmit)}&gt;
      &lt;input
        type="email"
        {...register('email', { required: 'Email is required' })}
      /&gt;
      {errors.email &amp;&amp; &lt;p&gt;{errors.email.message}&lt;/p&gt;}
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
            </div>
          </section>

          <section>
            <h2>Error handling and validation strategies</h2>

            <h3>Basic client-side validation</h3>
            <p>
              For simple forms, you can use state-based validation to check user
              input before submission.
            </p>

            <div class="code-block">
              <pre><code>import { useState } from 'react';

function BasicValidationForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    setError('');
    alert(`Submitted: ${email}`);
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        type="email"
        value={email}
        onChange={(e) =&gt; setEmail(e.target.value)}
      /&gt;
      {error &amp;&amp; &lt;p style={{ color: 'red' }}&gt;{error}&lt;/p&gt;}
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
            </div>

            <h3>HTML5 validation</h3>
            <p>
              Modern browsers provide built-in validation for certain input
              types.
            </p>

            <div class="code-block">
              <pre><code>function HTML5ValidationForm() {
  return (
    &lt;form&gt;
      &lt;input type="email" required /&gt;
      &lt;input type="password" minLength="6" required /&gt;
      &lt;input type="tel" pattern="[0-9]{10}" required /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
            </div>
          </section>

          <section>
            <h2>Best practices for interviews</h2>
            <ul>
              <li>
                For simple forms, both controlled and uncontrolled inputs are
                viable
              </li>
              <li>
                Wrap forms in <code>&lt;form&gt;</code> and leverage browser
                form submit events
              </li>
              <li>Use HTML5 validation where possible to reduce re-renders</li>
              <li>Display clear error messages that guide users</li>
              <li>
                Client-side validation alone is insufficient - always validate
                server-side too
              </li>
              <li>
                React Hook Form is a great library for production applications
              </li>
            </ul>
          </section>

          <section>
            <h2>What you need to know for interviews</h2>
            <ul>
              <li>
                Uncontrolled vs controlled forms: differences, usage, and when
                to use each
              </li>
              <li>Form controls: Building forms with various input types</li>
              <li>Complex forms: Managing complex state and best practices</li>
              <li>
                Error handling and validation: Client-side and server-side
                approaches
              </li>
            </ul>
          </section>

          <section>
            <h2>Practice questions</h2>
            <p><strong>Coding:</strong></p>
            <ul>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/generate-table/react"
                  target="_blank"
                  >Generate Table</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/contact-form/react"
                  target="_blank"
                  >Contact Form</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/mortgage-calculator/react"
                  target="_blank"
                  >Mortgage Calculator</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/temperature-converter/react"
                  target="_blank"
                  >Temperature Converter</a
                >
              </li>
              <li>
                <a
                  href="https://www.greatfrontend.com/questions/user-interface/flight-booker/react"
                  target="_blank"
                  >Flight Booker</a
                >
              </li>
            </ul>
          </section>

          <nav class="article-navigation">
            <router-link
              to="/interviews/playbook/react/event-handling"
              class="nav-link prev"
            >
              <span>← Previous</span>
              <span class="nav-title">Event Handling</span>
            </router-link>
            <router-link
              to="/interviews/playbook/react/data-fetching"
              class="nav-link next"
            >
              <span class="nav-title">Data Fetching</span>
              <span>Next →</span>
            </router-link>
          </nav>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import ReactPlaybookSidebar from "@/components/ReactPlaybookSidebar.vue";
</script>

<style scoped>
/* Inherits global playbook styles */
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #374151;
}

.comparison-table th {
  background: #111827;
  font-weight: 600;
  color: #dcee77;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.comparison-table tr:hover {
  background: #374151;
}

.comparison-table td:first-child {
  font-weight: 600;
  color: #ffffff;
}

.lead-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 2rem;
}
</style>
