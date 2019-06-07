const requireLogin = require("../middlewares/requireLogin.js");

module.export = app => {
  app.post("api/surveys", requireLogin, (req, res) => {});
};
