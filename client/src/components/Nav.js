import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ toggleModal }) => (
    <div className="nav">
        <div className="nav-logo">
            <Link to="/">Contact List App</Link>
        </div>
        <div className="nav-links">
            <Link to={{pathname: `/form`,
          // this is the trick!
          state: { modal: true }}}><i className="fas fa-plus-circle nav-item__icon"></i></Link>
        </div>
    </div>
);
export default Nav;