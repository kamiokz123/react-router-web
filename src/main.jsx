import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RootLayout from './layouts/RootLayout.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import User from './components/user/User.jsx';
import Github , {getString,githubApiLoader} from './components/github/Github.jsx';
const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout />,
    children:[
      {
        path:"",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"user/:username",
        element: <User />
      },
      {
        
        path:"user-github",
        element:<Github />,
        loader:async ()=>{
          const data = await  githubApiLoader();
          return data;
        }
      }
    ]
  }
])

console.log(getString);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
