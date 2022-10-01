const express = require('express')
const app = express()
const port = 3002
const routes = require('./routes')
const bodyParser = require('body-parser')
const dbConfig = require('./config.js');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(cors())

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('/api', routes)

app.get('/', (req, res) => res.redirect('/api'))

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))