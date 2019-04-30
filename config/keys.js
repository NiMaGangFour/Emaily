//key.js - figure out what set of credentials to returen
if (process.env.NODE_ENV === 'production'){
  // In production - return the prod set of keys
  module.exports = require('./prod.js');
} else {
  //In development - return the dev keys
  module.exports = require('./dev.js');
}
