var {client}=require('../db/pgsql');
var rooms=client;

let sql = "CREATE TABLE IF NOT EXISTS rooms(room_name varchar(256),room_id varchar(255) primary key,users varchar(1000));"
rooms.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Rooms Table Ready");
});


module.exports={rooms};