import React from 'react';

const Modal = ({ isModalOpen, children }) => (
    <div className={isModalOpen ? 'modal-container modal-container-active' : 'modal-container'}>
        {children}
    </div>
);

export default Modal;