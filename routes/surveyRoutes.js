const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin.js");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer.js");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate.js");
//create model of survey and update it
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thans for voting!");
    // res.sendFile("../services/emailTemplates/RedirectDomainTemplate.js", {
    //   root: __dirname
    // });
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice"); //p is a Matcher
    const events = _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname); //use P as a Mather to extra surveyId and choice from pathname
        if (match)
          return {
            email: email,
            surveyId: match.surveyId,
            choice: match.choice
          };
      })
      .compact() //remove all element(s) which is undefined
      .uniqBy("email", "surveyId") // get only one unique element by unique email and unique surveyId
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true }
          }
        ).exec();
      })
      .value();

    console.log(events);

    res.send({}); //tell sendfrid everything is go ok
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
