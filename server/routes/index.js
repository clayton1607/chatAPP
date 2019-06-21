var express = require('express');
var router = express.Router();
var {users}= require('../db/users');
router.post('/login',(req,res)=>{
    console.log(req.body)
    let stmt = 'SELECT * from users where username=$1 and password=$2';
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
    console.log(req.body);
    let stmt = `INSERT into users(username,password) VALUES ($1,$2) RETURNING *`;
    let values= [req.body.username,req.body.password];
    users.query(stmt,values,(err, result)=>{
        if (err){console.log(err);
        res.sendStatus(400)}
        else{   
            res.sendStatus(200);
        }
    });
});
module.exports = router;


