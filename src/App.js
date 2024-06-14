import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import resData from './components/ResData';  // Correctly import resData

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body resObj={resData} /> {/* Pass resData as a prop to Body */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;
