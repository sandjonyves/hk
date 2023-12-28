import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './page/About';
import ButtonGroup from './component/ButtonGroup/ButtonGroup';
import Service from './page/Service';
import Forms from './component/form/Forms';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:'#btnGroup',
    element:<ButtonGroup></ButtonGroup>
  },
  {
    path:'#service',
    element:<Service></Service>
  },
  {
    path:'/form',
    element:<Forms></Forms>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 

 <RouterProvider router={router} />

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
