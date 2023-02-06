import React from "react";
import './styles.css'
import { FiShoppingCart } from 'react-icons/fi';
// import {Navbar, Container, Nav, NavDropdown, Form, Badge, } from 'react-bootstrap'
import { useSelector } from "react-redux";


function MainNavbar() {

  const counter = useSelector(state => state.changeNumber);

  return (
    <div className="Navbar">
     <h1 className="logo-name">E-Commerce</h1>
     <div className="cart-box">
      <p><FiShoppingCart/></p> 
      <p >{counter}</p>
     </div>
    </div>
  );
}

export default MainNavbar;
