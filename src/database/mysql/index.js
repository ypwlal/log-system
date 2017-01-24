var mysql = require('mysql');
var db = {};

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ypwlal0217',
    database: 'nodejs'
});


db.query = function(sql, callback){  
  
    if (!sql) {  
        callback();  
        return;  
    }  
    pool.query(sql, function(err, rows, fields) {  
      if (err) {  
        console.log(err);  
        callback(err, null);  
        return;  
      };  
  
      callback(null, rows, fields);  
    });  
}  

db.insert = function(data, callback) {
    if (!data) {  
        callback();  
        return;  
    }  
    
    var _data = [data.line, data.column, data.navigator, data.message, data.url];
    console.log(_data)
    pool.query('INSERT INTO log(user_id, err_line, err_column, navigator, event_id, msg, err_url) VALUES(1,?,?,?, 1, ?,?)', _data, function(err, rows, fields) {  
      if (err) {  
        console.log(err);  
        callback(err, null);  
        return;  
      };  
  
      callback(null, rows, fields);  
    });
}


exports.db = db;