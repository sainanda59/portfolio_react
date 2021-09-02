import React, { useState } from 'react'
import Web from './web';
import Mobile from './mobile'
import ('./header.css');
function Header() {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">
                SSN
            </div>
            <div className="menu">
               <div className="web-menu">
                     <Web />
               </div>
               <div className="mobile-menu">
                     <div>
                     <i onClick={()=> setIsOpen(!isOpen)} class="fi-rr-apps menu-icon"></i>
                     </div>
                     {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
               </div>
            </div>
        </div>
    )
}

export default Header;
