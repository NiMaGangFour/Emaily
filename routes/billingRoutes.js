const keys = require('../config/keys.js');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', (req, res) => {
    console.log(req.body);
  });
};
