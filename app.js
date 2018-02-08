const express = require('express');
const path = require('path');
const route = require('./routes/users');

let app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.use(route);

module.exports = app;