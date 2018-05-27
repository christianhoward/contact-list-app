import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from './Nav';
import Dashboard from './Dashboard';
import ContactForm from './ContactForm';


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Nav />
                        <div className="container">
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/form" component={ContactForm} />
                            <Route path="/form/:id" component={ContactForm} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
