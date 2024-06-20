// import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h1>Blogr</h1>
      <div className="footer-column">
        <h3>Product</h3>
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Intergrations</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Connect</h3>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
