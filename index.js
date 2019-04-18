const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Stategy;

const app = express();

passprot.use(new GoogleStrategy())


app.get('/', (req, res) => {
  res.send({
    hi: 'wendywendy 小鸡鸡❤️'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);