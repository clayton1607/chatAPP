var express = require('express');
var router = express.Router();

router.post('/login',(req,res)=>{
    console.log(req.body);
    res.send("Hello");
});

router.post('/signup',(req,res)=>{
    console.log(req.body);
    res.send("Hello");
});
module.exports = router;


