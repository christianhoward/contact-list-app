import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Contact from './Contact';
import { fetchContacts, deleteContact } from '../actions';

class ContactList extends Component {
    componentDidMount() {
        this.props.fetchContacts();
    }
    handleEditContact(id) {
        this.props.history.push(`/form/${id}`);
    }
    handleDeleteContact(id) {
        this.props.deleteContact(id);
    }
    render() {
        return (
            <div>
                {this.props.contacts.sort(function(a,b) {
                    if (a.lastname === b.lastname) {
                        if (a.firstname > b.firstname) {
                            return 1;
                        } else {
                            return -1;
                        }
                    } else {
                        if (a.lastname > b.lastname) {
                            return 1;
                        } else {
                            return -1;
                        }
                    }
                }).map(contact => {
                    return (
                        <div key={contact._id}>
                            <Contact 
                                deleteContact={this.handleDeleteContact.bind(this)}
                                editContact={this.handleEditContact.bind(this)}
                                contact={contact} 
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps({ contacts }) {
    return { contacts };
}

export default connect(mapStateToProps, { fetchContacts, deleteContact })(ContactList);