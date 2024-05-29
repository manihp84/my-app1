import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './Pages/home-pages/Home';
import About from './Pages/about-us/About';
import Service from './Pages/service/Service';
import ErrorPage from './Pages/error/Error';
import Profile from './Pages/profile/Profile';
import Apidata from './Pages/api-page/Apidata';
import Hooksdata from './Pages/hooks-page/Hooksdata';
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
 {
    path: "/",
    element: <Homepage></Homepage>,
    errorElement: <ErrorPage></ErrorPage>,
 },
 {
    path:"/About",
    element: <About></About>,
 },
 {
    path:"/Service",
    element: <Service></Service>,
 },
 {
   path:"/Profile",
   element:<Profile></Profile>,
},
 {
    path:"/ApiData",
    element:<Apidata></Apidata>,
 },
 {
   path:"/Hooksdata",
   element:<Hooksdata></Hooksdata>,
},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
