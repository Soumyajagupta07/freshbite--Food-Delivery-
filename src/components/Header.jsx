import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png" alt="logo" />
        <h1 className="fresh">FreshBite</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;