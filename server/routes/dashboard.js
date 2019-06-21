var express = require('express');
var router = express.Router();
var { chatList }= require('../db/chatList');
var { chat }= require('../db/chat');

router.post('/chatlist',(req,res)=>{
    console.log('Im in chatList');
    let stmt = 'SELECT * from chatList where user_id=$1';
    chatList.query(stmt,[req.body.username],function(err,result){
        if(err){
            console.log(err);
            res.sendStatus(400);
        }
        else{
            console.log(result.rows)
            res.send(result.rows)
        }
  });
});
router.post('/chathistory',(req,res)=>{
    console.log('Im in chathistory');
    let stmt = 'SELECT * from chat where room_id=$1';
    chatList.query(stmt,[req.body.roomid],function(err,result){
        if(err){
            console.log(err);
            res.sendStatus(400);
        }
        else{
            console.log(result.rows);
            res.send(result.rows);
        }
  });
});
router.post('/sendmessage',(req,res)=>{
    console.log('Im in /sendmessage');
    var d= new Date();
    let stmt = 'INSERT into chat(room_id,from_user,message,timeframe) VALUES ($1,$2,$3,$4) RETURNING *';
    chat.query(stmt,[req.body.roomid,req.body.username,req.body.message,d],function(err,result){
        if(err){
            console.log(err);
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
  });
});
module.exports = router;