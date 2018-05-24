import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    renderLinks() {
        return [
            <li className="nav-item" key={1}><Link className="nav-link" to="/">Contact List</Link></li>,
            <li className="nav-item" key={2}><Link className="nav-link" to="/form">Contact Form</Link></li>
        ];
    }
    render() {
        return (
            <div className="nav">
                <div className="nav-logo">
                    <Link to="/">Contact List App</Link>
                </div>
                <ul className="nav-links">
                    {this.renderLinks()}
                </ul>
            </div>
        );
    }
}

export default Nav;