import React from 'react';
import './Nav.css';
import { NavLink, withRouter } from 'react-router-dom';

const Nav = ()=>{
    return(
        <div>
            <nav className={'orange accent-4'}>
                <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo right">Home</NavLink>
                <ul id="nav-mobile" className="left">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Nav);