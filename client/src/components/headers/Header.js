import React from 'react';
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const Header = () => {
  return (
    <header>
        <div className='menu'>
            <FaBars />
        </div>

        <div className='logo'>
            <h1>
                <Link to='/'>Shiv Shop</Link>
            </h1>
        </div>
        <ul>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/login'>Login or Register</Link></li>
            <li className='menu'>
                <MdClose size={40}/>
            </li>
        </ul>
        <div className='cart-icon'>
            <span>0</span>
            <Link to=''> <MdOutlineAddShoppingCart/> </Link>
        </div>
    </header>
  )
}

export default Header
