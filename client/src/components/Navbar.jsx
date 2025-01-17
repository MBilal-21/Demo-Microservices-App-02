import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
 
 const Navbar = () =>{

    return (
        <>
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      
    </div>
    
    <ul className="nav navbar-nav" >
      <li className="active">
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/login">Login</Link>
      </li>
      <li>
      <Link to="/register">Register</Link>
      </li>
      <li>
      <Link to="/placeorder">placeorder</Link>
      </li>
     
    </ul>
  </div>
</nav>
</>
    )
}

export default Navbar;