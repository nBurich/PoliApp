var db = require("../models");

module.exports = function(app) {
    app.get("/api/user", function(req, res) {
        db.user.findAll({}).then(function(Data) {
            res.json(Data);
        });
    });

    app.post("/api/user", function(req, res) {
        // var info = req.body;
        db.Trip.create({
          fullname: req.body.fullname,
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          image: req.body.image,
        }).then(function(tripData) {
          res.json(tripData);
        });
      });
};