import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactList from './ContactList';
import { fetchContacts } from '../actions';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            isModalOpen: false,
            specificContact: []
        } 
        this.filterContacts = this.filterContacts.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    componentDidMount() {
        this.props.fetchContacts();
    }
    filterContacts(e) {
        this.setState({ searchText: e.target.value})
    }
    toggleModal(id) {
        this.setState({ isModalOpen: !this.state.isModalOpen, specificContact: id !== '' ? this.props.contacts.find(contact => contact._id === id) : [] });
    }
    render() {
        return (
            <div className="container">
                <input type="search" value={this.state.searchText} onChange={this.filterContacts} placeholder="Search Contacts..." />
                <ContactList 
                    contacts={this.props.contacts}
                    searchText={this.state.searchText} 
                    toggleModal={this.toggleModal} 
                    isModalOpen={this.state.isModalOpen} 
                    specificContact={this.state.specificContact} 
                />
            </div>
        );
    }
}

function mapStateToProps({ contacts }) {
    return { contacts };
}

export default connect(mapStateToProps, { fetchContacts })(Dashboard);