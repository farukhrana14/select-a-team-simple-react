import React from 'react';
import './Header.css';
import logo from '../../images/header-logo.png'


const Header = () => {
    
    return (
        <div className='Header'>
            <nav>
                <div>
                    <a href="./home">Home</a>
                    <a href="./blog">Blog</a>
                    <a href="./teams">Teams</a>
                    <a href="./about">About us</a>
                    <img src={logo} alt="" />
                </div>

                <h3>Select your Team!</h3>
                
            </nav>
        </div>
    );
};

export default Header;