import React, { useEffect, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PlaceOrder from './components/PlaceOrder';

function App() {
  const [user, setUser] = useState({id:"",name:"",password:""});
  const Layout = () =>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      </>
    )
  }
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
        path: "/",
        element: <Home />,
      },
        {
        path: "/placeorder",
        element:  <PlaceOrder user={user} />,
      },
        {
        path: "/login",
        element: <LoginForm setUser={setUser}/>,
      },
       {
        path: "/register",
        element: <RegisterForm />,
      },
    ]
      
  }
   
  ]);
  return (
    <div className="container">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
