import React from 'react';
import "./Navbar.css";
import logoSirena from './Siren1.gif';
import Hamburger from '../hamburger/Hamburger';
function Navbar() {
    return (
        <div className="Navbar">
            <div class="firstSide"> 
                <img src={logoSirena} alt=""/>
            </div>
            <div class="secondSide">
               <Hamburger/>
            </div>
            
        </div>
    );
}

export default Navbar;