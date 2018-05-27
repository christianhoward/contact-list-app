import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className="nav">
        <div className="nav-logo">
            <Link to="/">Contact List App</Link>
        </div>
        <div className="nav-links">
            <Link to="/form"><i className="fas fa-plus-circle nav-item__icon"></i></Link>
        </div>
    </div>
);
export default Nav;