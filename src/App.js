import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import resData from './components/ResData'; 
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body resObj={resData} /> */}
      <Outlet/>
    </div>
  );
}

export default App;
