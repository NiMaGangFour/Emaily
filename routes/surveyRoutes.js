const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin.js");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer.js");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate.js");
//create model of survey and update it
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thans for voting!");
    // res.sendFile("../services/emailTemplates/RedirectDomainTemplate.js", {
    //   root: __dirname
    // });
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    // is user logged in requireLogin
    // has enough credits requireCredits
    //pass these properties from front end
    console.log("/api/surveys ===> req.body", req.body);
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    //send email (data, template)
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
