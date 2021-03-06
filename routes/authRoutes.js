const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      console.log("/auth/google/callback ===> req.user", req.user);
      res.redirect("/surveys");
    }
  );

  app.get("/api/current_user", (req, res) => {
    console.log("/api/current_user", req.user);
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
    // res.send(req.user);
  });

  // app.get("/", (req, res) => {
  //   console.log(req.user);
  //   res.send({
  //     hi: "❤️wendy❤️wendy❤️❤️"
  //   });
  // });

  // app.get('/auth/google/callback', (req, res) => {
  //   res.send({
  //     hi: '❤️❤️❤️'
  //   });
  // });
};
