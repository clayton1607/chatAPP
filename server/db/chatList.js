var {client}=require('../db/pgsql');
var chatList=client;

let sql = "CREATE TABLE IF NOT EXISTS chatList(user_id varchar(255), room_id varchar(256));"
chatList.query(sql, function (err, result) {
  if (err) throw err;
  console.log("ChatList Table Ready");
});


module.exports={chatList};