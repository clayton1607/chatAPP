var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://ssutcpkn:2f6E-tSvdGt9k_5HOwo60KsS_2OY9Sk-@satao.db.elephantsql.com:5432/ssutcpkn" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  
});
module.exports={client};
