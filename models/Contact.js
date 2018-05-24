const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: Number,
    status: String
});

mongoose.model('contacts', contactSchema);