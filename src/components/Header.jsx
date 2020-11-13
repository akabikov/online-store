import React from "react";
import "./Header.scss";

export default function Header({ openCloseMenu, openCloseCart }) {
  return (
    <header className='Header'>
      <button
        aria-label='Menu'
        aria-controls='navigation'
        onClick={openCloseMenu}
      >
        <svg viewBox='0 0 100 80' width='1.5rem' height='1.5rem'>
          <rect width='100' height='15' rx='8'></rect>
          <rect y='30' width='100' height='15' rx='8'></rect>
          <rect y='60' width='100' height='15' rx='8'></rect>
        </svg>
      </button>
      <div>
        <span>Tech </span>
        <span>Store</span>
      </div>
      <button onClick={openCloseCart}>
        <svg width='1.5rem' height='1.5rem' viewBox='0 0 24 24'>
          <path
            d='M20.756 5.345A1.003 1.003 0 0 0 20 5H6.181l-.195-1.164A1 1 0 0 0 5 3H2.75a1 1 0 1 0 0 2h1.403l1.86 11.164l.045.124l.054.151l.12.179l.095.112l.193.13l.112.065a.97.97 0 0 0 .367.075H18a1 1 0 1 0 0-2H7.847l-.166-1H19a1 1 0 0 0 .99-.858l1-7a1.002 1.002 0 0 0-.234-.797zM18.847 7l-.285 2H15V7h3.847zM14 7v2h-3V7h3zm0 3v2h-3v-2h3zm-4-3v2H7l-.148.03L6.514 7H10zm-2.986 3H10v2H7.347l-.333-2zM15 12v-2h3.418l-.285 2H15z'
            fill='#333'
          />
          <circle cx='8.5' cy='19.5' r='1.5' fill='#333' />
          <circle cx='17.5' cy='19.5' r='1.5' fill='#333' />
        </svg>
      </button>
    </header>
  );
}
