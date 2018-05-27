import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contact from './Contact';
import Modal from './Modal';
import { deleteContact } from '../actions';

class ContactList extends Component {
    handleEditContact(id) {
        this.props.history.push(`/form/${id}`);
    }
    handleDeleteContact(id) {
        this.props.deleteContact(id);
    }
    render() {
        const coverClass = this.props.isModalOpen ? 'modal-cover modal-cover-active' : 'modal-cover';
        // const containerClass = this.props.isModalOpen ? 'modal-container modal-container-active' : 'modal-container';
        return (
            <div>
                {this.props.contacts.filter(contact => {
                   return contact.firstname.concat(` ${contact.lastname}`).toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1;
                }).sort(function(a,b) {
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
                                toggleModal={this.props.toggleModal}
                                deleteContact={this.handleDeleteContact.bind(this)}
                                editContact={this.handleEditContact.bind(this)}
                                contact={contact} 
                            />
                        </div>
                    );
                })}
                <Modal
                    isModalOpen={this.props.isModalOpen} 
                    specificContact={this.props.specificContact} 
                    toggleModal={this.props.toggleModal}
                />
                <div className={coverClass} onClick={() => this.props.toggleModal('')}></div>
            </div>
        );
    }
}

export default connect(null, { deleteContact })(ContactList);