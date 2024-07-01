import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  let[btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png" alt="logo" />
        <h1 className="fresh">FreshBite</h1>
      </div>
      <div className="nav-items">
        <ul>
        <Link to={"/"}><li>Home</li></Link>
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          <li>Cart</li>
          <button className='login' onClick={() => {
            btnName === "login" ? setbtnName ("logout") : setbtnName ("login");
          }}>{btnName}</button>

        </ul>
      </div>
    </div>
  );
}

export default Header;
