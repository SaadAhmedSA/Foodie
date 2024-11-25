import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonial"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
  path :"/",
  element:<App/>,
  children:[{
    path:"",
    element:<Home/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"contact",
    element:<Contact/>
  },
  {
    path:"testimonials",
    element:<Testimonials/>
  },
  
]
}])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>

  </RouterProvider>
);
