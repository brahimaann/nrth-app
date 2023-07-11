import React, {useState} from 'react';

import './Navbar.css';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (<nav>
            <div className="menu-icon" onClick={handleMenuClick}>
                <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
              //  <li>
                //    <a href="/projects">Projects</a>
               // </li>
            </ul>
        </nav>);
}

export default Navbar;
