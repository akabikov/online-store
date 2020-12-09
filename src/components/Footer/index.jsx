import React from "react";
import "./style.scss";

export default function Footer(props) {
  return (
    <footer className='Footer'>
      <div>Copyleft Tech Store 2020. All Wrongs Reserved</div>
      <div className='social-media'>
        <a href='https://www.facebook.com/'>
          <i className='zmdi zmdi-facebook-box'></i>
        </a>
        <a href='https://twitter.com/'>
          <i className='zmdi zmdi-twitter-box'></i>
        </a>
        <a href='https://www.linkedin.com/'>
          <i className='zmdi zmdi-linkedin-box'></i>
        </a>
      </div>
    </footer>
  );
}
