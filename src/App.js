import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header'; 
import Body from './components/Body'; 
import About from './components/About';
import resData from './components/ResData'; // Correct path
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body resObj={resData} />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
  },
  {
    path: "/about",
    element: <About/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default AppLayout;
