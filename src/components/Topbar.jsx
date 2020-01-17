import React, { Component } from 'react';
import { IoMdPizza, IoIosTv, IoIosBody, IoIosBasket } from "react-icons/io";
import './Topbar.css'

class Topbar extends Component {
    render() {
        return (
            <div className='top-bar'>
                <div className='top-bar-item'> <IoIosTv /> Electronics</div>
                <div className='top-bar-item'> <IoMdPizza /> Food</div>
                <div className='top-bar-item'> <IoIosBody/> Fashion</div>
                <div className='top-bar-item'><IoIosBasket/> Groceries</div>
            </div>
        );
    }
}

export default Topbar;