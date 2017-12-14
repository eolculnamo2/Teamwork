var express = require('express');
var mongoose = require('mongoose');
var teamInfo = require('../models/team');
var users = require('./users')
var app = express();
var router = express.Router();

router.use("/", users)
router.get("/",(req,res)=>{
  res.render("index");
});

//finds info from matchig teammates, pushes relevant info into array and sends via ejs
router.get("/dashboard", (req,res)=>{
  teamInfo.find({teamName: req.user.teamName}, (err, result)=>{
      var teammates = [];
        result.forEach((x)=>{
          teammates.push(x)
        })
    console.log(teammates);
      res.render("dashboard",{
        team: teammates
        });
      });
    })


module.exports = router;
