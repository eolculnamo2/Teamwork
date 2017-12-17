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
    teamInfo.findOne({_id: req.user.id},(err2,result2)=>{
    console.log(req.user.hash)
    var profile;
    var teammates = [];
    var fill = {
      phone: "none",
      email: "none",
      address: "none"
    }
    //fill is a filler for profiles without profile info. Code below checks for profile info
      result2.profileInfo[0] ? profile = result2.profileInfo[0] : profile = fill;

        result.forEach((x)=>{
          teammates.push(x)
        });
    
      res.render("dashboard",{
        team: teammates,
        profileInfo: profile
        });
    
         });
      });
    }) 


module.exports = router;
