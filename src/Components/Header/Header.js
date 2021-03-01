import React from 'react';
import './Header.css';
import logo from '../../images/header-logo.png'

const Header = () => {
    
    return (
        <div className='Header'>
            <nav>
                <div>
                    <img src={logo} alt="" />
                    <a href="">Home</a>
                </div>
                <hr />

                
            </nav>
        </div>
    );
};

export default Header;