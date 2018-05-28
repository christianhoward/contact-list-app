import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Contact from './Contact';
import Modal from './Modal';
import ContactForm from './ContactForm'
import { deleteContact } from '../actions';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
        this.handleEditContact = this.handleEditContact.bind(this);
        this.handleDeleteContact = this.handleDeleteContact.bind(this);
    }
    handleEditContact(bool) {
        this.setState({ edit: bool });
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
                    { this.state.edit ? 
                        <ContactForm 
                            {...this.props} 
                            toggleModal={this.props.toggleModal} 
                            editContact={this.handleEditContact}
                        /> : 
                        (this.props.specificContact.length === 0 ? 
                            <ContactForm {...this.props} toggleModal={this.props.toggleModal} /> : 
                            <Contact
                                specificContact={this.props.specificContact} 
                                deleteContact={this.handleDeleteContact}
                                editContact={this.handleEditContact}
                            /> 
                        )
                    }
                </Modal>
                <div className={coverClass} onClick={() => {this.props.toggleModal(''); this.handleEditContact(false);}}></div>
            </div>
        );
    }
}

export default withRouter(connect(null, { deleteContact })(ContactList));