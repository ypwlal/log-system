var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('./src/database/mysql/index.js').db;


const defaultJson = {
    "status": 200,
    "code": 0,
    "message": "success"
}

router.get('/*', function(req, res, next) {
    console.log(req.url)

    if (req.url.split('/')[1] == 'api') {
        next();
    } else if (req.url.split('/')[1] == 'dist') {
        res.sendFile(path.join(__dirname, './src/' + req.url));
    } else if (req.url.split('/')[1] == 'img') {
        next();
    } else {
        res.sendFile(path.join(__dirname, './src/index.html'));
    } 
})
.get('/api/log', function(req, res) {
    var query = req.query;
    console.log(query);
    db.insert({user_id: 123, line:query.line, column: query.column, navigator: query.navigator, message: query.message, url:query.url}, 
        function(err, rows, fields){  
            if (err) {  
                console.log(err);  
                res.json(defaultJson)
                return;  
            }  
            console.log(rows);  
            console.log(fields); 
            res.json(defaultJson) 
        });
    // return res.json(defaultJson)
})

module.exports = router;
