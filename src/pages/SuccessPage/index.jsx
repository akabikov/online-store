import React from "react";
import Button from "../../components/Button";
import "./style.scss";

export default function SuccessPage() {
  return (
    <section className='SuccessPage'>
      <div>
        <p>Thank you for getting in touch!</p>
        <p>One of our colleagues will get back in touch with you soon!</p>
        <p>Have a great day!</p>
      </div>
      <Button text='Go to home page' link='/' />
    </section>
  );
}
