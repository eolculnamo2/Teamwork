var express = require('express');
var app = express();
var index = require('./routes/index')
var path = require('path');

//middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use("/", index)

app.listen(3000,()=>{
  console.log("xXx Server 3000 xXx");
})
