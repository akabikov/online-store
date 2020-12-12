import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/actions";
import Button from "../../components/Button";
import "./style.scss";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const checkout = (e) => {
    e.preventDefault();
    dispatch(clear());
    history.push("/success");
  };

  return (
    <section className='CheckoutPage'>
      <form className='CheckoutPage__contact-form' onSubmit={checkout}>
        <input type='text' name='name' placeholder='Name' />
        <input type='tel' name='tel' required placeholder='Phone' />
        <input type='email' name='email' placeholder='Email' />
        <input type='text' name='address' placeholder='Address' />
        <textarea
          name='comments'
          rows='10'
          placeholder='Comments...'
        ></textarea>
        <Button type='submit' text='Checkout' />
      </form>
    </section>
  );
}
