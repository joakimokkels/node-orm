'use strict';

const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');

const HOST = '0.0.0.0'; // Listen on all network interfaces, including localHOST
const PORT = 3000; // You can change this to any PORT you prefer
const app = express();

// Middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// View engine setup
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/',
  helpers: {
    eq: function(a, b) { return a === b },
  },
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Routes
app.use('/', routes());

// Initialize the server
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
