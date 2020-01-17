import React from 'react';
import './Navbar.css';
import { FaUser } from 'react-icons/fa';
import { IoIosCart } from "react-icons/io";
import { Button } from 'react-bootstrap';




function Navbar() {
  return (
  <div className="nav_wrapper">
  <div className="shop_name">
     MY-SHOP
  </div>
  <div className="search_bar">
  <input/><Button variant="success" size="sm">Search</Button>
  </div>
  <div >Sign in/Register<FaUser /></div>
  <div className='cart'><IoIosCart size="25"/></div>
  </div>
  );
 }

export default Navbar;