/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './Sidebar.css';

export default props => {
    return (
        <Menu {...props} >
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/">
                Statistics
            </a>
            <a className="menu-item" href="/">
                Help
            </a>
            <a className="menu-item" href="/">
                Complete Form
            </a>
            <a className="menu-item" href="/">
                My Profile
            </a>
        </Menu>
    );
};