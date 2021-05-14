/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './Sidebar.css';
import {Link} from 'react-router-dom';



export default props => {
    let userName = localStorage.getItem('user');
    return (
        <Menu right >
            <Link className="menu-item" to="/">
                Home
            </Link>
            <Link className="menu-item" to="/">
                Statistics
            </Link>
            <Link className="menu-item" to="/help">
                Help
            </Link>
            <Link className="menu-item" to="/form">
                Complete Form
            </Link>
            <Link className="menu-item" to="/">
                My Profile
            </Link>
            <p> Hello, {userName}</p>   
        </Menu>        
    );
};