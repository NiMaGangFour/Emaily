const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("./models/User.js");
require("./models/Survey.js");
require("./services/passport.js");
mongoose.set("debug", true);

const keys = require("./config/keys.js");

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes.js")(app);
require("./routes/billingRoutes.js")(app);
require("./routes/surveyRoutes.js")(app);

if (process.env.NODE_ENV === "production") {
  //Express will serve up production assets
  //like our main.js file, or main.css profile
  app.use(express.static("client/build"));

  //Express will serve up the index.html file
  //if it doesn't recognize the route
  app.use("*", express.static("client/build"));
  // const path = require("path");
  // app.get("*", (req, res) => {
  //   res.sendFile(path, resolve(__dirname, "client", "build", "index.html"));
  // });
}
console.log("Environment is =====>", process.env.NODE_ENV);
mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
