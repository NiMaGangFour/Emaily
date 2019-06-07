const requireLogin = require("../middlewares/requireLogin.js");
const requireCredits = require("../middlewares/requireCredits");
module.exports = app => {
  app.post("api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
  });
};
