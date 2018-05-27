import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav-logo">
                    <Link to="/">Contact List App</Link>
                </div>
                <div className="nav-links">
                    <Link className="nav-link" to="/form"><i className="fas fa-plus-circle nav-item__icon"></i></Link>
                </div>
            </div>
        );
    }
}

export default Nav;