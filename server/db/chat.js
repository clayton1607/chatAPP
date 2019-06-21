var {client}=require('../db/pgsql');
var chat=client;

let sql = "CREATE TABLE IF NOT EXISTS chat(room_id varchar(255) primary key,from_user varchar(255),message varchar(256),timeframe varchar(255));"
chat.query(sql, function (err, result) {
  if (err) throw err;
  console.log("CHat Table Ready");
});


module.exports={chat};