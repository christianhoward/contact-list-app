import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from './Nav';
import ContactList from './ContactList';
import ContactForm from './ContactForm';


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Nav />
                        <Route exact path="/" component={ContactList} />
                        <Route exact path="/form" component={ContactForm} />
                        <Route path="/form/:id" component={ContactForm} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
