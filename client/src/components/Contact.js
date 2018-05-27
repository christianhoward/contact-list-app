import React from 'react';

import Button from './Button';

const Contact = ({ contact, deleteContact, editContact, toggleModal }) => (
    <div className="contact" data-id={contact._id} onClick={() => toggleModal(contact._id)}>
        <div>{contact.firstname} {contact.lastname}</div>
        <div>email: {contact.email}</div>
        <div>phone number: {contact.phone}</div>
        <div>Status: {contact.status}</div>
        <div>
            <Button value={'Edit'} onClick={() => editContact(contact._id)} />
            <Button value={'Delete'} onClick={() => deleteContact(contact._id)} />
        </div>
    </div>
);

export default Contact;