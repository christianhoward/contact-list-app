const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

require('./models/Contact');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const router = require('./router');

const app = express();
router(app);

// Part of Heroku Build Process for React/Node apps
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);