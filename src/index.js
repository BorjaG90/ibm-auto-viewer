const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Init
const app = express();
require("./database");

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes 
app.use('/api/profile', require('./routes/profile.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), ()=>{
  console.log(`[Server Init] Server on port ${app.get('port')}`);
  console.log('public url: ', process.env.PUBLIC_URL)
})