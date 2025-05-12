'use client'

import React from 'react';
import {useForm, ValidationError} from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mwporezy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <br/>
        <div>
        <textarea
          id="message"
          name="message"
        />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <br/>
        <div>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}


export default ContactForm;