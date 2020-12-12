import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import "./style.scss";

export default function ContactPage() {
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    history.push("/success");
  };

  return (
    <section className='ContactPage'>
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
    </section>
  );
}
