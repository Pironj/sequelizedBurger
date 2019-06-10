// require dependecies
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
// retrieve data from our database
router.get("/", function(req, res) {
  db.burger.findAll({attributes: ['id', 'burger_name', 'devoured']}).then(function(data) {
    var dataVal = [];
    for (var i = 0; i < data.length; i++) {
      dataVal.push(data[i].dataValues);
    }
    var hbsObject = { burgers: dataVal };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Store Input data into our Database.
router.post("/api/burgers", function(req, res) {
  db.burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(result) {
    res.json(result);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  db.burger.update(
    {
      devoured: req.body.devoured
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.render("index", result);
  });
});

// Export routes for server.js to use.
module.exports = router;