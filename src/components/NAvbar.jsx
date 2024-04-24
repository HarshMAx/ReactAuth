import React from 'react';
import { NavLink } from "react-router-dom";
import './NAvbar.css'


const NAvbar = () => {
    return(
        <>
            <nav className="NavbarItems">
                <h1 className='logo'>
                React <i className="fab fa-react"></i>
                </h1>
                <ul className='nav-menu'>
                    <li className='nav-links'><NavLink to='/'><i className="fa-solid fa-house-user"></i>Home</NavLink></li>
                    <li className='nav-links'><NavLink to='/about'><i className="fa-solid fa-circle-info"></i>About</NavLink></li>
                    <li className='nav-links'><NavLink to='/service'><i className="fa-solid fa-briefcase"></i>Service</NavLink></li>
                    <li className='nav-links'><NavLink to='/signup'><i className="fa-solid fa-right-to-bracket"></i>Signup</NavLink></li>
                    {/* <button className='nav-links'>Login</button> */}
                    <li className='nav-linkss'><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </>
    );
}



export default NAvbar;