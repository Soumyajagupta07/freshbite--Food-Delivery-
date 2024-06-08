import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const Header = () => {
  return (
    <div className="header">
      <div className='logo-container'>
        <img className="logo" src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png" alt="logo"/>
        <h1 className='fresh'>FreshBite</h1>
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

const RestroCard = () => {
  return(
    <div className='res-card'>
      <h3> Biryani </h3>
      </div>
  )
}
const Body = () => {
  return(
    <div>
      <div className='Search'>Search</div>
      <div className='res-container'>
        <RestroCard/>
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
}
export default AppLayout;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
