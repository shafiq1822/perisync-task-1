import React from 'react'
import "./navbar.css"
import "../../App.css"
import { RiSearchLine } from "react-icons/ri"
import { BiCategory } from "react-icons/bi"
import { MdOutlineShoppingCart } from "react-icons/md"
import { RiChat3Line } from "react-icons/ri"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="top-bar">
        <p>Are you having any problems <strong><a href="">Call us now</a></strong></p>
      </div>
      <div className="main-container">
        <div className="navbar-content">
          <h1>PENCIL</h1>
          <div className="navbar-items">
            <div className="categories-container">
              <BiCategory className='category-icon' />
              <h3>Categories</h3>
            </div>
            <span className='input-container'>
              <RiSearchLine className='search-icons' />
              <input type="text" placeholder='Search your course' />
            </span>
            <h4>Track with us</h4>
            <div className="navbar-icons">
              <MdOutlineShoppingCart className='icon' />
              <RiChat3Line className='icon' />
            </div>
            <button className='login-button'>Login</button>
            <button className='signin-button'>Sign In</button>
            <select name="" id="">
              <option value="Select"> English</option>
              <option value="Select">Hindi</option>
              <option value="Select">Espanol</option>
              <option value="Select">French</option>
              <option value="Select">Arabic</option>
            </select>
          </div>
          <input type="checkbox" id='checkbox' className='check'/>
          <label htmlFor="checkbox">
            <FiMenu className='menu-bar' />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Navbar