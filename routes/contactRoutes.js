const mongoose = require('mongoose');
const _ = require('lodash');

const Contact = mongoose.model('contacts');

exports.allContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
}

exports.specificContact = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    contact ? res.send(contact) : res.status(404).send(res.err);
}

exports.addContact = async (req, res) => {
    const { firstname, lastname, email, phone, status } = req.body;
    const contact = new Contact({
        firstname,
        lastname,
        email,
        phone,
        status
    });
    try {
        await contact.save();
        res.send(contact);
    } catch (err) {
        res.status(422).send(err);
    }
}

exports.updateContact = async (req, res) => {
    const id = req.params.id;
    const { firstname, lastname, email, phone, status } = req.body;
    const contact = { firstname, lastname, email, phone, status };
    try {
        await Contact.findByIdAndUpdate(id, {$set: contact}, {new: true});
        res.send(contact);
    } catch (err) {
        res.status(422).send(err);
    }
}

exports.deleteContact = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findByIdAndRemove(id);
    if (contact) {
        res.send(contact);
    } else {
        res.status(422).send(res.err);
    }
}