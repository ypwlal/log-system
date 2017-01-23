var app = require('../app').app;
var PORT = process.env.PORT || 8083;

var server = app.listen(PORT, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log(server.address())
        console.log('Listening %s on port %s. ', server.address().address, PORT);
    }
})
