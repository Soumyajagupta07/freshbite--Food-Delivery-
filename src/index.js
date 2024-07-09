import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import './index.css';
import resData from './components/ResData';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Contact from './components/Contact';
import ResMenu from './components/ResMenu';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error/>,
      // >,
      children: [
        { path: "/", element: <Body />},
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/restaurant/:resid", element: <ResMenu /> }      //: make this url dynamic for different resIds
      ],
    }
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
