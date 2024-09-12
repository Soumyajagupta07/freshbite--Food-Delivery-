import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import resData from './components/ResData'; 
import OnlineStatus from './components/OnlineStatus';
import ResMenu from './components/ResMenu';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div className="app">
      <Header />
      <OnlineStatus />
      {/* <Body resObj={resData} /> */}
      <Outlet/>
      
    </div>
  );
}

export default App;
