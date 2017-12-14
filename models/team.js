var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var uri = "mongodb://"+process.env.MONGO_USER+":"+process.env.MONGO_PASS+"@ds137256.mlab.com:37256/"+process.env.MONGO_DB;
mongoose.connect(uri);

var team = new Schema({
  username: String,
  password: String,
  teamName: String,
  //teammates: Array,
  authority: Boolean,
  schedules: Array
})

team.plugin(passportLocalMongoose);

module.exports = mongoose.model("TeamworkTeams", team);
