const express = require('express');
const morgan = require('morgan');
const path = require('path');
var cors = require('cors');

// Init
const app = express();
const API_PORT = 4000;
require("./database");

// Settings
app.set('port', process.env.PORT || API_PORT);
app.use(cors());

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes 
app.use('/api/profile', require('./routes/profile.routes'));
app.use('/api/players', require('./routes/player.routes'));
app.use('/api/roster', require('./routes/roster.routes'));
app.use('/api/market', require('./routes/market.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), ()=>{
  console.log(`[Server Init] Server on port ${app.get('port')}`);
})