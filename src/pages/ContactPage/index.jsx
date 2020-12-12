import React from "react";
import useToggleState from "../../hooks/useToggleState";
import Button from "../../components/Button";
import "./style.scss";

export default function ContactPage() {
  const [isSubmitted, submit] = useToggleState();

  return (
    <section className='ContactPage'>
      {isSubmitted ? (
        <div className='ContactPage__success-message'>
          <p>Thank you for getting in touch!</p>
          <p>One of our colleagues will get back in touch with you soon!</p>
          <p>Have a great day!</p>
        </div>
      ) : (
        <form className='ContactPage__contact-form' onSubmit={submit}>
          <input type='text' name='name' placeholder='Name' />
          <input type='email' name='email' required placeholder='Email' />
          <input type='text' name='subject' placeholder='Subject' />
          <textarea
            name='message'
            required
            rows='10'
            placeholder='Your message...'
          ></textarea>
          <Button type='submit' text='Send' />
        </form>
      )}
    </section>
  );
}
