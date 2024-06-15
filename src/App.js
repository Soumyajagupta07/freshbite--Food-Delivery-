
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header'; // Correct path
import Body from './components/Body'; // Correct path
import resData from './components/ResData'; // Correct path

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body resObj={resData} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;
