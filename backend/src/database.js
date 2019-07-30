const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/ibm-auto-manager',{ useNewUrlParser: true })
  .then(db => console.log(' [DB] is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;