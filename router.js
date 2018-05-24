const bodyParser = require('body-parser');

// Controller Files
const Contacts = require('./routes/contactRoutes');

module.exports = function(app) {
    app.use(bodyParser.json());
    // Contact Routes
    app.get('/api/contacts', Contacts.allContacts);
    app.get('/api/contacts/:id', Contacts.specificContact);
    app.post('/api/contacts', Contacts.addContact);
    app.patch('/api/contacts/:id', Contacts.updateContact);
    app.delete('/api/contacts/:id', Contacts.deleteContact);
}