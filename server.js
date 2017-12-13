var express = require('express');
var app = express();
var index = require('./routes/index')
var users = require('./routes/users')
var path = require('path');

//middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use("/", index)
app.use("/", users)
app.listen(3000,()=>{
  console.log("server ON");
})
