import React from "react";
import Button from "../../components/Button";
import "./style.scss";

function NotFound() {
  return (
    <section className='NotFoundPage'>
      <div className='wrapper'>
        <div className='main'>
          <p className='error-code'>404</p>
          <p className='error'>Oops! Page not found</p>
          <div className='error-message'>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <p>If you think something is broking, report a problem.</p>
          </div>
        </div>
        <div className='footer'>
          <Button text='Return home' link='/' />
          <Button text='Report problem' link='/contact' inverted />
        </div>
      </div>
    </section>
  );
}

export default NotFound;
