var express = require('express');
var router = express.Router();
var path = require('path');

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
    var querry = req.query;
    console.log(querry);
    return res.json(defaultJson)
})

module.exports = router;
