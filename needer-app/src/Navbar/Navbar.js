import React from 'react';
import "./Navbar.css";
import Hamburger from '../hamburger/Hamburger';
function Navbar() {
    return (
        <div className="Navbar">
            <div class="firstSide"> 
                  
            </div>
            <div class="secondSide">
               <Hamburger/>
            </div>
            
        </div>
    );
}

export default Navbar;