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
        return _.map(formFields, ({ label, name, type, options, placeholder }) => {
            return (
                <Field key={name} component={ContactField} label={label} name={name} type={type} options={options} placeholder={placeholder} />
            );
        })
    }
    onSubmit(contact) {
        if (contact._id) {
            this.props.updateContact(contact);
            this.props.history.push('/');
        } else {
            this.props.addContact(contact);
            this.props.history.push('/');
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(props => this.onSubmit(props))}>
                    <input type="hidden" name="_id" />
                    {this.renderFields()}
                    <Button value={'Submit'} onClick={null} />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        initialValues: state.contacts.find(contact => contact._id === props.match.params.id)
    }
}

export default connect(mapStateToProps, { addContact, updateContact })(reduxForm({
    form: 'contactForm'
})(ContactForm));