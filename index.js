const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User.js');
require('./services/passport.js');

const keys = require('./config/keys.js');
const mongoose = require('mongoose');

const app = express();



app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes.js')(app);


mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
