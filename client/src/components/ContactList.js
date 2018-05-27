import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Contact from './Contact';
import Modal from './Modal';
import { deleteContact } from '../actions';

class ContactList extends Component {
    handleEditContact(id) {
        this.props.history.push(`/form/${id}`);
    }
    handleDeleteContact(id) {
        this.props.deleteContact(id);
        this.props.toggleModal('');
    }
    render() {
        const coverClass = this.props.isModalOpen ? 'modal-cover modal-cover-active' : 'modal-cover';
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
                            <div className="contact" data-id={contact._id} onClick={() => this.props.toggleModal(contact._id)}>
                                <div>{contact.firstname} {contact.lastname}</div>
                            </div>
                        </div>
                    );
                })}
                <Modal isModalOpen={this.props.isModalOpen}>
                    <Contact
                        specificContact={this.props.specificContact} 
                        deleteContact={this.handleDeleteContact.bind(this)}
                        editContact={this.handleEditContact.bind(this)}
                    />
                </Modal>
                <div className={coverClass} onClick={() => this.props.toggleModal('')}></div>
            </div>
        );
    }
}

export default withRouter(connect(null, { deleteContact })(ContactList));