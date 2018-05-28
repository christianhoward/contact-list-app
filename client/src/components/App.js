import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from './Nav';
import Dashboard from './Dashboard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            specificContact: ''
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    componentDidMount() {
        this.props.fetchContacts();
    }
    toggleModal(id) {
        this.setState({ isModalOpen: !this.state.isModalOpen, specificContact: id !== '' ? this.props.contacts.find(contact => contact._id === id) : '' });
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Nav toggleModal={this.toggleModal}/>
                        <div className="container">
                            <Route exact path="/" render={(props) => <Dashboard {...this.state} contacts={this.props.contacts} toggleModal={this.toggleModal} />} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps({ contacts }) {
    return { contacts };
}

export default connect(mapStateToProps, actions )(App);
