import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import formFields from './formFields';
import ContactField from './ContactField';
import { addContact, updateContact } from '../actions';
import Button from './Button';

class ContactForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name, type, options, placeholder, pattern }) => {
            return (
                <Field key={name} component={ContactField} label={label} name={name} type={type} options={options} placeholder={placeholder} pattern={pattern} />
            );
        });
    }
    onSubmit(contact) {
        if (contact._id) {
            this.props.updateContact(contact);
            this.props.toggleModal('');
            this.props.editContact(false);
        } else {
            this.props.addContact(contact);
            this.props.toggleModal('');
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(props => this.onSubmit(props))}>
                    <div className="modal-container__demo">
                        <input type="hidden" name="_id" />
                        {this.renderFields()}
                    </div>
                    <div className="modal-container__buttons">
                        <Button value={'Submit'} onClick={null} />
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    const { firstname, lastname, email, phone, status } = values;
    if (!firstname || firstname.trim() === '') {
        errors.firstname = 'Enter a first name.'
    }
    if (!lastname || lastname.trim() === '') {
        errors.lastname = 'Enter a last name.'
    }
    if (!email || email.trim() === '') {
        errors.email = 'Enter an e-mail address.'
    }
    if (!phone || phone.trim() === '') {
        errors.phone = 'Enter a phone number.'
    }
    if (!status || status.trim() === '') {
        errors.status = 'Enter a status.'
    }
    return errors;
}

function mapStateToProps(state, props) {
    return {
        initialValues: state.contacts.find(contact => contact._id === props.specificContact._id)
    }
}

export default connect(mapStateToProps, { addContact, updateContact })(reduxForm({
    validate,
    form: 'contactForm'
})(ContactForm));