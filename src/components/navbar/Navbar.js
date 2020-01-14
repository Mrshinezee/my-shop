import React from 'react';
import './Navbar.css';
import { FaUser } from 'react-icons/fa';


function Navbar() {
  return (
    <div className="nav_wrapper">
      <div className="shop_name">
            MY-SHOP
      </div>
      <div className="search_bar">
          <input/>
      </div>
      <div>
        {/* <ion-icon name="person"></ion-icon>
         */}
          <FaUser />
      </div>
    </div>
  );
}

export default Navbar;