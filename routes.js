const express = require('express')
const app = express();
const path = require('path')

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

require('./routes/transfer.routes.js')(app);

module.exports = app;