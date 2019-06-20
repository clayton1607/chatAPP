var {client}=require('./pgsql');
var users=client;

let sql = "CREATE TABLE IF NOT EXISTS users2(username varchar(255) primary key,password varchar(255));"
users.query(sql, function (err, result) {
  if (err) throw err;
  console.log("User Table Ready");
});


module.exports={users};