import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/SixFourDev">
          <i className="fab fa-github footer-icon"></i>
        </a>
        <a href="https://linkedin.com/in/shane-browning-58a58a270/">
          <i className="fab fa-linkedin footer-icon"></i>
        </a>
        <a href="https://twitter.com/SixFourDev">
          <i className="fab fa-twitter footer-icon"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
