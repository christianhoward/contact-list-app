import { FETCH_CONTACTS, ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../actions/types';

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_CONTACTS:
            return action.payload;
        case ADD_CONTACT:
            return [...state, action.payload];
        case UPDATE_CONTACT:
            return state.map(contact => {
                if (contact._id === action.payload._id) {
                    return [...contact, ...action.payload];
                } else {
                    return contact;
                }
            });
        case DELETE_CONTACT:
            return state.filter(contact => contact._id !== action.payload._id);
        default:
            return state;
    }
}