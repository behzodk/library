import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <header className="header">
        <div className="header-1">
            <a href="#" className='logo'><i className='fas fa-book'></i>JizzakhPS Library</a>
            
            <form action="" className="sear-form">
                <input type="search" name="" placeholder='search-here...' id="search-box" />
                <label htmlFor="search-box" className='fas fa-search'></label>
            </form>

            <div className="icons">
                <div id="search-btn" className="fas fa-search"></div>
                <a href="#" className='fas fa-heart'></a>
                <a href="#" className='fas fa-shopping-cart'></a>
                <div id="login-btn" className="fas fa-user"></div>
            </div>
        </div>
    </header>
  )
}

export default Navbar