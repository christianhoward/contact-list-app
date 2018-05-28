import React from 'react';

import Button from './Button';

const Contact = ({ specificContact, editContact, deleteContact }) => (
    <div>
        <div className="modal-container__image">
            <img src="http://via.placeholder.com/200x200" className="prof" alt={`${specificContact.firstname} ${specificContact.lastname}`} />
            <div className="modal-container__image-headline">{specificContact.firstname} {specificContact.lastname}</div>
        </div>
        <div className="modal-container__demo">
            <div><i className="fas fa-envelope"></i> <a href={`mailto:${specificContact.email}`}>{specificContact.email}</a></div>
            <div><i className="fas fa-mobile-alt"></i>  {specificContact.phone}</div>
            <div>Status: {specificContact.status}</div>
        </div>
        <div className="modal-container__buttons">
            <Button value={'Edit'} onClick={() => editContact(true)} />
            <Button value={'Delete'} onClick={() => deleteContact(specificContact._id)} />
        </div>
    </div>
);

export default Contact;