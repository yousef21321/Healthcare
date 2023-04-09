import "../style/Header.css";
import React from "react";
import myImage from './lo.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (<header>
    <img src={myImage} alt="My Image" class= "logo"  />

    <nav className="navbar">
    <Link to="/">Home</Link>
    
    <Link to="/Admin">Admin Logo</Link>
    <Link to="/login">Patient Login</Link>
    <Link to="/signup">SignUp</Link>
    <Link to="/about">About</Link>


      {/* <a className="" href="http://localhost:3000/">
        home
      </a>
      <a className=""href="#prevent">prevent</a>
      <a className="" href="#symptoms">symptoms</a>
      <a className="" href="http://localhost:3000/about">Search</a>
      <a className="" href="http://localhost:3000/about">Admin Logo</a>
      <a className="" href="doctorlogin.php">doctors Login</a>
      <a className="" href="http://localhost:3000/login">Patient Login</a>
      <a className="" href="http://localhost:3000/signup">SignUp</a> */}
    </nav>
  </header>
  );
};
export default Header;
