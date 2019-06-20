var express = require('express');
var router = express.Router();
var {users}= require('../db/users');
router.post('/login',(req,res)=>{
    console.log(req.body)
    let stmt = 'SELECT * from users2 where username=$1 and password=$2';
    users.query(stmt,[req.body.username,req.body.password],function(err,result){
        console.log(result.rows.length)
        if(err){
            console.log(err);
            res.sendStatus(400);
        }
        else{
            if (result.rows.length!=0){
                res.sendStatus(200);
            }
            else
                res.sendStatus(401);
        }
  });
  });



router.post('/signup',(req,res)=>{
    console.log(req.body.username);
    let stmt = `INSERT into users2(username,password) VALUES ($1,$2) RETURNING *`;
    let values= [req.body.username,req.body.password];
    users.query(stmt,values,(err, result)=>{
        console.log(req.body)
        if (err){console.log(err);
        res.sendStatus(400)}
        console.log("1 record inserted");
        res.sendStatus(200);
    });
    res.send("Hello");
});
module.exports = router;


