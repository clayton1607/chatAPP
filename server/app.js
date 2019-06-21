//require the express module
const express = require("express");
const app = express();
const {users} = require('./db/users');
// const {chat} = require('./tables/chat');
//bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var cors = require('cors')
var index=require('./routes/index');
var dashboard= require('./routes/dashboard');
app.use(cors())
//set the express.static middleware

// const http = require("http").Server(app);

// // require the socket.io module
// const io = require("socket.io");

//bodyparser middleware
app.use(bodyParser.json());
app.use('/',index);
app.use('/',dashboard);        
const port = 5000;
app.listen(port, () => {
    console.log("Running on Port: " + port);
  });
  