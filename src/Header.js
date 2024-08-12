import React from 'react';
import logo from './logo/logo.png';
import './styles.css'; // Ensure the CSS file is imported

function Header() {
  const navigateTo = (section) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      const headerOffset = 30; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

    return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="title">
          <h1>EasyEats</h1>
        </div>
        <nav>
          <ul>
            <li><button onClick={() => navigateTo('Hero')}>Home</button></li>
            <li><button onClick={() => navigateTo('How It Works')}>How It Works</button></li>
            <li><button onClick={() => navigateTo('Input')}>Cook up a Storm</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;