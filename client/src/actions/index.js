import axios from 'axios';
import { FETCH_CONTACTS, ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from './types';

export const fetchContacts = () => async dispatch => {
    const res = await axios.get('/api/contacts');
    dispatch({ type: FETCH_CONTACTS, payload: res.data });
}

export const addContact = (contact) => async dispatch => {
    const res = await axios.post('/api/contacts', contact);
    dispatch({ type: ADD_CONTACT, payload: res.data });
}

export const updateContact = (contact) => async dispatch => {
    const res = await axios.patch(`/api/contacts/${contact._id}`, contact);
    dispatch({ type: UPDATE_CONTACT, payload: res.data });
}

export const deleteContact = (id) => async dispatch => {
    const res = await axios.delete(`/api/contacts/${id}`);
    dispatch({ type: DELETE_CONTACT, payload: res.data });
}