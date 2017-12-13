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

router.post('/newTeam', (req, res)=>{
  
  if(req.body.password === req.body.confirmPassword){
    Team.register(new Team({ username : req.body.username }), req.body.password, (err, account)=>{
        if (err) {
            console.log(err)
        }
        passport.authenticate('local')(req, res, ()=>{
            //res.redirect('/dashboard');
          res.send("logged in")
        });
    });
  }
  else{
    res.send("Passwords Do Not Match")
  }
});


module.exports= router;