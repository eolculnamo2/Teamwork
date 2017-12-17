var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var Team = require('../models/team');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser')
var express = require('express');
var router = express.Router();
 var Strategy = require('passport-local').Strategy;

router.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [process.env.COOKIEKEY]
}))

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(passport.initialize());
router.use(passport.session());

//will likely either change from team or add a separate for other users
passport.use(new LocalStrategy(Team.authenticate()));
passport.serializeUser(Team.serializeUser());
passport.deserializeUser(Team.deserializeUser());

//Register New Team and Team Leader
router.post('/newTeam', (req, res)=>{
  
  if(req.body.password === req.body.confirmPassword){
    Team.register(new Team({ username : req.body.username, authority: true, teamName: req.body.teamName }), req.body.password, (err, account)=>{
        if (err) {
            console.log(err)
        }
        passport.authenticate('local')(req, res, ()=>{
            res.redirect('/dashboard');
        });
    });
  }
  else{
    res.send("Passwords Do Not Match");
  }
});

//Register New Team Member
router.post('/addTeamMember', (req, res)=>{
  
  if(req.body.password === req.body.confirmPassword){
    Team.register(new Team({ username : req.body.username, authority: false, teamName: req.user.teamName }), req.body.password, (err, account)=>{
        if (err) {
            console.log(err)
        }
        passport.authenticate('local')(req, res, ()=>{
            res.redirect('/dashboard');
        });
    });
  }
  else{
    res.send("Passwords Do Not Match");
  }
});


//Login
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/dashboard');
});

//Logout
router.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
});

//settings: Update Contact Info
router.post('/updateProfile',(req,res)=>{
  var update = {
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address
  }
  
  Team.findOneAndUpdate({_id: req.user.id},
                       {$set: {profileInfo: update}},{new:true}, (err,result)=>{
    if(err) throw err;
     res.redirect('/dashboard')
  });
});
//settings: Update Password
router.post('/changePassword',(req,res)=>{
  var newPass = req.body.password;
  
  Team.findOne({_id: req.user.id}).then(function(user){
    if(newPass === req.body.confirmPassword){
      user.setPassword(newPass,()=>{
        user.save();
        res.redirect('/');
      })
    }
    else{
      res.send("Passwords Do Not Match");
    }
  });
})

module.exports= router;