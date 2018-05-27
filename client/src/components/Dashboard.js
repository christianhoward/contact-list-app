import React, { Component } from 'react';

import ContactList from './ContactList';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        } 
    }
    filterContacts(e) {
        this.setState({ searchText: e.target.value})
    }
    render() {
        return (
            <div className="container">
                <input type="search" value={this.state.searchText} onChange={this.filterContacts.bind(this)} placeholder="Search Contacts..." />
                <ContactList searchText={this.state.searchText} />
            </div>
        );
    }
}

export default Dashboard;