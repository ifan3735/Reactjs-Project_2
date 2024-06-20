// import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Blogr</div>
      <nav>
        <ul>
          <li><a href="#">Product</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Connect</a></li>
          <li><a href="#">Login</a></li>
          <li><button className="sign-up">Sign Up</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
