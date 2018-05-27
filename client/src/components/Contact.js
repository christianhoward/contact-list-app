import React from 'react';

const Contact = ({ contact, toggleModal }) => (
    <div className="contact" data-id={contact._id} onClick={() => toggleModal(contact._id)}>
        <div>{contact.firstname} {contact.lastname}</div>
    </div>
);

export default Contact;