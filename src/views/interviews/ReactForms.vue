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
            Guide to building interactive React forms, covering controlled vs
            uncontrolled components, diverse input types, complex state
            management, and robust error handling and validation strategies.
          </p>
        </header>

        <article class="article-content">
          <p class="intro-text">
            Forms in React are a crucial part of building interactive
            applications, allowing users to input and submit data. In React, it
            is common to control form elements using state, making them dynamic
            yet predictable.
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
              <pre><code>{{ examples.controlled }}</code></pre>
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
              <pre><code>{{ examples.uncontrolled }}</code></pre>
            </div>
            <p>
              In uncontrolled components, the input value is not stored in React
              state. To access the form data upon submission, we can either:
            </p>
            <ol>
              <li>
                <strong>Use FormData:</strong> Access the form element directly
                from <code>event.target</code>, create a
                <code>FormData</code> instance from the form, and retrieve
                values using <code>formData.get('name')</code> (corresponds to
                the <code>name</code> attribute on <code>&lt;input&gt;</code>)
              </li>
              <li>
                <strong>Use refs:</strong> Use <code>useRef()</code> to
                reference the <code>&lt;input&gt;</code> field directly. The
                input value can be accessed via
                <code>nameRef.current.value</code>
              </li>
            </ol>

            <h3>When to use which?</h3>
            <div class="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Controlled</th>
                    <th>Uncontrolled</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Where state is stored</strong></td>
                    <td>React state (useState)</td>
                    <td>Native DOM</td>
                  </tr>
                  <tr>
                    <td><strong>Performance</strong></td>
                    <td>
                      Re-rendering needed on update, might cause issues in large
                      forms
                    </td>
                    <td>More performant for simple use cases</td>
                  </tr>
                  <tr>
                    <td><strong>Validation</strong></td>
                    <td>Easy to implement</td>
                    <td>Requires manual validation</td>
                  </tr>
                  <tr>
                    <td><strong>Form reset</strong></td>
                    <td>Easy (setState(""))</td>
                    <td>
                      Needs ref.current.value = "" or trigger a 'reset' event
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Use case</strong></td>
                    <td>Dynamic forms, validation, real-time updates</td>
                    <td>
                      Simple forms, file uploads, or integrating non-React code
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul>
              <li>
                Use <strong>controlled form components</strong> when you need to
                validate, manipulate, or track user input dynamically (e.g.
                toggling visibility of certain form fields based on previous
                responses) or nested form state
              </li>
              <li>
                Use <strong>uncontrolled form components</strong> when working
                with large forms, integrating with non-React code, or optimizing
                performance
              </li>
            </ul>
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
              <pre><code>{{ examples.textInput }}</code></pre>
            </div>
            <ul>
              <li>
                The input field's value is controlled by React state
                (<code>text</code>)
              </li>
              <li>
                The <code>onChange</code> event updates state with
                <code>setText(event.target.value)</code>
              </li>
              <li>This ensures React manages the input value dynamically</li>
            </ul>
            <p>
              There are many other text-based values for the
              <code>type</code> attribute, each with various purposes:
            </p>
            <div class="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Purpose</th>
                    <th>Built-in Validation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>text</code></td>
                    <td>General text input</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><code>number</code></td>
                    <td>Numerical text input</td>
                    <td>
                      Yes, only numbers allowed. Additional validation via
                      min/max attributes
                    </td>
                  </tr>
                  <tr>
                    <td><code>email</code></td>
                    <td>Email addresses</td>
                    <td>Yes, must contain @</td>
                  </tr>
                  <tr>
                    <td><code>password</code></td>
                    <td>Secure password input</td>
                    <td>No, but input is masked</td>
                  </tr>
                  <tr>
                    <td><code>search</code></td>
                    <td>Search field with a clear button</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><code>tel</code></td>
                    <td>Telephone numbers</td>
                    <td>No. Additional validation via pattern attribute</td>
                  </tr>
                  <tr>
                    <td><code>url</code></td>
                    <td>URLs</td>
                    <td>Yes, must start with http:// or https://</td>
                  </tr>
                  <tr>
                    <td><code>datetime-local</code></td>
                    <td>Date and time selection</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td><code>color</code></td>
                    <td>Color picker</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Checkbox input</h3>
            <p>A checkbox is a boolean value (checked or unchecked).</p>
            <div class="code-block">
              <pre><code>{{ examples.checkbox }}</code></pre>
            </div>
            <ul>
              <li>
                The <code>checked</code> attribute is bound to
                <code>isChecked</code> state
              </li>
              <li>
                The <code>onChange</code> event updates state with
                <code>setIsChecked(event.target.checked)</code>
              </li>
              <li>This allows React to track the checkbox's checked status</li>
            </ul>

            <h3>Radio group</h3>
            <p>
              Radio buttons are used when selecting one option from multiple
              choices.
            </p>
            <div class="code-block">
              <pre><code>{{ examples.radioGroup }}</code></pre>
            </div>
            <ul>
              <li>
                The <code>name="gender"</code> ensures only one option can be
                selected
              </li>
              <li>
                The <code>checked</code> attribute checks if the current value
                matches the state (<code>gender === "male"</code> or
                <code>"female"</code>)
              </li>
              <li>
                The <code>onChange</code> updates state with the selected value
              </li>
            </ul>

            <h3>Textarea</h3>
            <p>A <code>textarea</code> is used for multi-line text input.</p>
            <div class="code-block">
              <pre><code>{{ examples.textarea }}</code></pre>
            </div>
            <ul>
              <li>
                Unlike HTML, React uses <code>value</code> instead of setting
                text inside <code>&lt;textarea&gt;</code>
              </li>
              <li>
                The <code>onChange</code> updates the state with
                <code>setBio(event.target.value)</code>, ensuring React controls
                the input
              </li>
            </ul>

            <h3>Select dropdown</h3>
            <p>
              A <code>&lt;select&gt;</code> dropdown allows users to choose one
              option.
            </p>
            <div class="code-block">
              <pre><code>{{ examples.selectDropdown }}</code></pre>
            </div>
            <ul>
              <li>
                The <code>value</code> attribute is bound to the state
                (<code>fruit</code>)
              </li>
              <li>
                The <code>onChange</code> updates the state when the user
                selects an option
              </li>
              <li>This ensures the dropdown value is controlled by React</li>
            </ul>

            <h3>Summary</h3>
            <div class="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Input Type</th>
                    <th>Element</th>
                    <th>Attribute</th>
                    <th>Handler</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Text input</td>
                    <td><code>&lt;input&gt;</code></td>
                    <td><code>value</code></td>
                    <td><code>setState(event.target.value)</code></td>
                  </tr>
                  <tr>
                    <td>Checkbox input</td>
                    <td><code>&lt;input&gt;</code></td>
                    <td><code>checked</code></td>
                    <td><code>setState(event.target.checked)</code></td>
                  </tr>
                  <tr>
                    <td>Radio group</td>
                    <td><code>&lt;input&gt;</code></td>
                    <td><code>checked</code></td>
                    <td><code>setState(event.target.value)</code></td>
                  </tr>
                  <tr>
                    <td>Textarea</td>
                    <td><code>&lt;textarea&gt;</code></td>
                    <td><code>value</code></td>
                    <td><code>setState(event.target.value)</code></td>
                  </tr>
                  <tr>
                    <td>Select dropdown</td>
                    <td><code>&lt;select&gt;</code></td>
                    <td><code>value</code></td>
                    <td><code>setState(event.target.value)</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>Handling complex form state</h2>
            <p>
              When working with complex forms in React, managing state
              efficiently is crucial to ensure good performance and
              maintainability. Forms become complex when they include multiple
              input fields, dynamic field additions, nested structures, or
              advanced validation. Below are some strategies to handle complex
              form state effectively.
            </p>

            <h3>Using useReducer for complex forms</h3>
            <p>
              For forms with multiple fields and state dependencies,
              <code>useReducer</code> provides a structured way to manage state
              updates.
            </p>
            <div class="code-block">
              <pre><code>{{ examples.useReducer }}</code></pre>
            </div>
            <ul>
              <li>Keeps state updates predictable and centralized</li>
              <li>Useful for forms with conditional logic and dependencies</li>
              <li>
                Prevents unnecessary re-renders compared to
                <code>useState</code>
              </li>
            </ul>

            <h3>Handling dynamic fields</h3>
            <p>
              When a form allows users to add or remove fields dynamically
              (e.g., multiple email inputs), state should be an array.
            </p>
            <div class="code-block">
              <pre><code>{{ examples.dynamicFields }}</code></pre>
            </div>
            <ul>
              <li>
                Useful for forms where users can add multiple entries (e.g.,
                multiple email addresses)
              </li>
              <li>Keeps UI flexible without unnecessary predefined fields</li>
            </ul>

            <h3>Using form libraries for complex forms</h3>
            <p>
              Instead of managing everything manually, libraries like
              <a
                href="https://react-hook-form.com/"
                target="_blank"
                rel="noopener noreferrer"
                >React Hook Form</a
              >
              and
              <a
                href="https://formik.org/"
                target="_blank"
                rel="noopener noreferrer"
                >Formik</a
              >
              (unmaintained) simplify complex form state handling.
            </p>
            <div class="code-block">
              <pre><code>{{ examples.reactHookForm }}</code></pre>
            </div>
            <ul>
              <li>Reduces re-renders by using refs instead of state</li>
              <li>
                Easy validation with built-in support for validation libraries
                like Zod, Yup, and Joi
              </li>
              <li>
                Handles dynamic fields efficiently with
                <code>useFieldArray</code>
              </li>
            </ul>

            <h3>Handling nested form structures</h3>
            <p>
              Sometimes, forms have nested objects (e.g., address with street,
              city, and zip code).
            </p>
            <div class="code-block">
              <pre><code>{{ examples.nestedForms }}</code></pre>
            </div>
            <ul>
              <li>Helps manage related data cleanly in a single object</li>
              <li>Useful for address, profile, or nested form sections</li>
            </ul>

            <h3>Best practices for complex form state</h3>
            <ul>
              <li>Use <code>useReducer</code> for structured state updates</li>
              <li>Use dynamic fields for flexible input handling</li>
              <li>
                Leverage form libraries like React Hook Form or Formik to
                simplify validation and state management
              </li>
              <li>Use nested objects when dealing with grouped form data</li>
            </ul>
          </section>

          <section>
            <h2>Error handling and validation strategies</h2>
            <p>
              Handling errors and validating user input is essential for
              creating a smooth user experience in React forms. Validation
              ensures that users enter the correct data before submission,
              preventing invalid entries and reducing backend errors. Below are
              various strategies to handle validation and errors efficiently.
            </p>

            <h3>Basic client-side validation with useState</h3>
            <p>
              For simple forms, you can use state-based validation to check user
              input before submission.
            </p>
            <div class="code-block">
              <pre><code>{{ examples.basicValidation }}</code></pre>
            </div>
            <ul>
              <li>Uses local state to track errors</li>
              <li>Displays error messages when validation fails</li>
              <li>Simple but sufficient for basic validation needs</li>
            </ul>

            <h3>Validate input fields with regular expressions</h3>
            <p>
              For structured input fields like emails, phone numbers, or
              passwords, regex-based validation is useful.
            </p>
            <div class="code-block">
              <pre><code>{{ examples.regexValidation }}</code></pre>
            </div>
            <ul>
              <li>Uses regex to check if an email follows a valid format</li>
              <li>Provides real-time feedback to users</li>
            </ul>

            <h3>Browser built-in HTML5 validation</h3>
            <p>
              Modern browsers provide built-in validation for certain input
              types.
            </p>
            <div class="code-block">
              <pre><code>{{ examples.html5Validation }}</code></pre>
            </div>
            <ul>
              <li><code>required</code>: Ensures the field is filled</li>
              <li><code>minLength</code>: Restricts input length</li>
              <li><code>pattern</code>: Uses regex directly in HTML</li>
              <li>Works without JavaScript, improving performance</li>
            </ul>

            <h3>React Hook Form for efficient validation</h3>
            <p>
              For complex forms, React Hook Form provides optimized validation
              with minimal re-renders.
            </p>
            <div class="code-block">
              <pre><code>{{ examples.hookFormValidation }}</code></pre>
            </div>
            <ul>
              <li>Uses refs instead of state, minimizing re-renders</li>
              <li>Better performance for large forms</li>
              <li>
                Built-in error handling with <code>formState.errors</code>
              </li>
            </ul>

            <h3>Handle server-side validation</h3>
            <p>
              Even with client-side validation, backend validation is necessary.
              You need to know how to display error messages from API responses.
            </p>
            <div class="code-block">
              <pre><code>{{ examples.serverValidation }}</code></pre>
            </div>
            <ul>
              <li>
                Uses <code>fetch()</code> to validate email on the server side
              </li>
              <li>Displays API error messages if validation fails</li>
              <li>
                Prevents security risks (e.g., hackers bypassing client-side
                validation)
              </li>
            </ul>
          </section>

          <section>
            <h2>Best practices for interviews</h2>
            <ul>
              <li>
                For simple forms, both controlled and uncontrolled inputs are
                viable
              </li>
              <li>
                Wrap in <code>&lt;form&gt;</code> and leverage the browser form
                submit events
              </li>
              <li>
                Use HTML5 validation where possible to reduce re-renders for
                better performance
              </li>
              <li>
                Display clear error messages that guide users on how to fix
                their inputs
              </li>
              <li>
                Merely client-side validation is insufficient. Server-side
                validation is also required to prevent security loopholes
              </li>
              <li>
                If 3rd party libraries are allowed (e.g. in take home
                assignments), React Hook Form is a great addition that provides
                many useful features helps you achieve better performance at the
                same time
              </li>
            </ul>
          </section>

          <section>
            <h2>What you need to know for interviews</h2>
            <ul>
              <li>
                <strong>Uncontrolled and controlled forms:</strong> What's the
                difference, how to use either, and when to use
              </li>
              <li>
                <strong>Form controls:</strong> Be able to build forms that use
                the various input types
              </li>
              <li>
                <strong>Complex forms:</strong> How to build complex forms and
                the best practices
              </li>
              <li>
                <strong>Error handling and validation:</strong> How to validate
                forms and show errors using native browser approaches and React
                approaches
              </li>
            </ul>
          </section>

          <nav class="article-navigation">
            <router-link
              to="/interviews/playbook/react/event-handling"
              class="nav-link prev"
              >← Previous: Event Handling</router-link
            >
            <router-link
              to="/interviews/playbook/react/data-fetching"
              class="nav-link next"
              >Next: Data Fetching →</router-link
            >
          </nav>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import ReactPlaybookSidebar from "@/components/ReactPlaybookSidebar.vue";

const examples = reactive({
  controlled: `import { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(\`Submitted Name: \${name}\`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`,

  uncontrolled: `import { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    // Access form values using FormData
    const formData = new FormData(event.target);
    console.log('Name:', formData.get('name'));

    // Alternatively, access the <input> via a ref
    console.log('Name:', nameRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" ref={nameRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`,

  textInput: `import { useState } from 'react';

function TextInputExample() {
  const [text, setText] = useState('');

  return (
    <div>
      <label htmlFor="name-input">Name</label>
      <input
        id="name-input"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <p>Entered Text: {text}</p>
    </div>
  );
}`,

  checkbox: `import { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <input
        id="checkbox-input"
        type="checkbox"
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}
      />
      <label htmlFor="checkbox-input">Agree to terms and conditions</label>
      <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
}`,

  radioGroup: `import { useState } from 'react';

function RadioGroupExample() {
  const [gender, setGender] = useState('');

  return (
    <div>
      <div>
        <input
          id="radio-male"
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="radio-male">Male</label>
      </div>
      <div>
        <input
          id="radio-female"
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="radio-female">Female</label>
      </div>
      <p>Selected gender: {gender}</p>
    </div>
  );
}`,

  textarea: `import { useState } from 'react';

function TextAreaExample() {
  const [bio, setBio] = useState('');

  return (
    <div>
      <label htmlFor="bio-input">Bio:</label>
      <textarea
        id="bio-input"
        value={bio}
        onChange={(event) => setBio(event.target.value)}
      />
      <p>Bio Preview: {bio}</p>
    </div>
  );
}`,

  selectDropdown: `import { useState } from 'react';

function SelectExample() {
  const [fruit, setFruit] = useState('apple');

  return (
    <div>
      <label htmlFor="favorite-fruit">Favorite fruit</label>
      <select
        id="favorite-fruit"
        value={fruit}
        onChange={(event) => setFruit(event.target.value)}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <p>Selected fruit: {fruit}</p>
    </div>
  );
}`,

  useReducer: `import { useReducer } from 'react';

// Define reducer function
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

// Initial form state
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

  function handleReset() {
    return dispatch({ type: 'RESET' });
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="number"
        name="age"
        value={state.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}`,

  dynamicFields: `import { useState } from 'react';

function DynamicForm() {
  const [fields, setFields] = useState([{ id: 1, value: '' }]);

  function addField() {
    setFields([...fields, { id: fields.length + 1, value: '' }]);
  }

  function removeField(id) {
    setFields(fields.filter((field) => field.id !== id));
  }

  function handleChange(id, event) {
    const newFields = fields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field,
    );
    setFields(newFields);
  }

  return (
    <form>
      {fields.map((field) => (
        <div key={field.id}>
          <input
            type="text"
            value={field.value}
            onChange={(event) => handleChange(field.id, event)}
            placeholder="Enter value"
          />
          <button type="button" onClick={() => removeField(field.id)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addField}>
        Add Field
      </button>
    </form>
  );
}`,

  reactHookForm: `import { useForm, useFieldArray } from 'react-hook-form';

function FormWithReactHookForm() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: { emails: [{ value: '' }] },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'emails' });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(\`emails.\${index}.value\`)} placeholder="Email" />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ value: '' })}>
        Add Email
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}`,

  nestedForms: `import { useState } from 'react';

function NestedForm() {
  const [form, setForm] = useState({
    name: '',
    address: { street: '', city: '', zip: '' },
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={(event) => setForm({ ...form, name: event.target.value })}
      />
      <input
        type="text"
        name="street"
        placeholder="Street"
        value={form.address.street}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={form.address.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="zip"
        placeholder="ZIP Code"
        value={form.address.zip}
        onChange={handleChange}
      />
    </form>
  );
}`,

  basicValidation: `import { useState } from 'react';

function BasicValidationForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!email) {
      setError('Email is required');
      return;
    }

    setError(''); // Clear error if validation passes
    alert(\`Submitted: \${email}\`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}`,

  regexValidation: `function EmailValidationForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    alert(\`Valid Email: \${email}\`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}`,

  html5Validation: `function HTML5ValidationForm() {
  return (
    <form>
      <label>
        Email:
        <input type="email" required />
      </label>
      <br />
      <label>
        Password (Min 6 characters):
        <input type="password" minLength="6" required />
      </label>
      <br />
      <label>
        Phone (Numbers only):
        <input type="tel" pattern="[0-9]{10}" required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}`,

  hookFormValidation: `import { useForm } from 'react-hook-form';

function HookFormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
      </label>
      {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      <label>
        Password:
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
        />
      </label>
      {errors.password && (
        <p style={{ color: 'red' }}>{errors.password.message}</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}`,

  serverValidation: `import { useState } from 'react';

function ServerErrorHandlingForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError(null);

      const response = await fetch('/api/validate-email', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      alert('Submission successful!');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}`,
});
</script>

<style scoped>
.intro-text {
  font-size: 1.05rem;
  color: #d1d5db;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.code-block {
  margin: 1.5rem 0;
}

.code-block pre {
  background: #0f1724;
  color: #e6eef8;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid #263145;
  line-height: 1.6;
  font-size: 0.9rem;
}

.code-block code {
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  white-space: pre;
}

.comparison-table {
  margin: 1.5rem 0;
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: #111827;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #1f2937;
}

.comparison-table th {
  background: #1f2937;
  font-weight: 600;
  color: #f3f4f6;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.comparison-table td {
  color: #d1d5db;
}

.comparison-table tbody tr:last-child td {
  border-bottom: none;
}

.comparison-table tbody tr:hover {
  background: #1f2937;
}

.comparison-table code {
  background: #0f1724;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #60a5fa;
}

section {
  margin-bottom: 3rem;
}

section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #f9fafb;
  margin: 2.5rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #374151;
}

section h3 {
  font-size: 1.35rem;
  font-weight: 600;
  color: #f3f4f6;
  margin: 2rem 0 1rem 0;
}

section p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 1rem;
}

section ul,
section ol {
  color: #d1d5db;
  line-height: 1.8;
  margin: 1rem 0 1rem 1.5rem;
}

section li {
  margin-bottom: 0.5rem;
}

section li strong {
  color: #f3f4f6;
}

section code {
  background: #1f2937;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #60a5fa;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
}

section a {
  color: #60a5fa;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

section a:hover {
  border-bottom-color: #60a5fa;
}

.article-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 16px;
  padding-top: 2rem;
  border-top: 1px solid #374151;
}

.nav-link {
  padding: 12px 20px;
  background: #111827;
  color: #d1d5db;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #374151;
  transition: all 0.2s;
  font-weight: 500;
}

.nav-link:hover {
  background: #1f2937;
  border-color: #60a5fa;
  color: #f9fafb;
}

.nav-link.prev::before {
  content: "←";
  margin-right: 8px;
}

.nav-link.next::after {
  content: "→";
  margin-left: 8px;
}

@media (max-width: 768px) {
  .article-navigation {
    flex-direction: column;
  }

  .comparison-table {
    font-size: 0.85rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 8px 12px;
  }
}
</style>
