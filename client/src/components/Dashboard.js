import React, { Component } from 'react';

import ContactList from './ContactList';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        } 
        this.filterContacts = this.filterContacts.bind(this);
    }
    filterContacts(e) {
        this.setState({ searchText: e.target.value})
    }
    render() {
        return (
            <div className="container">
                <input type="search" value={this.state.searchText} onChange={this.filterContacts} placeholder="Search Contacts..." />
                <ContactList 
                    contacts={this.props.contacts}
                    searchText={this.state.searchText} 
                    toggleModal={this.props.toggleModal} 
                    isModalOpen={this.props.isModalOpen} 
                    specificContact={this.props.specificContact} 
                />
            </div>
        );
    }
}

export default Dashboard;