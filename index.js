var express = require("express");
// Import Body parser
let bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000 ;

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//importing route
var routes = require('./src/routes/user.routes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

// app.listen(3000, () => {
//  console.log("Server running on port 3000");
// });


