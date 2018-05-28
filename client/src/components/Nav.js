import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ toggleModal }) => (
    <div className="nav">
        <div className="nav-logo">
            <Link to="/">Contact List App</Link>
        </div>
        <div className="nav-links">
            <i className="fas fa-plus-circle nav-item__icon" onClick={() => toggleModal('')}></i>
        </div>
    </div>
);
export default Nav;