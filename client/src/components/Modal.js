import React from 'react';

const Modal = ({ specificContact, isModalOpen, toggleModal }) => (
    // <div className={ isModalOpen ? '' : 'inactive'}>
    <div className={isModalOpen ? 'modal-container modal-container-active' : 'modal-container'}>
        <div>{specificContact.firstname} {specificContact.lastname}</div>
        <div>email: {specificContact.email}</div>
        <div>phone number: {specificContact.phone}</div>
        <div>Status: {specificContact.status}</div>
    </div>
);

export default Modal;