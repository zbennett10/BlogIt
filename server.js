require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes");
var bodyParser = require('body-parser');

//bootstrap our application
var app = express();

//coonnecting to mongo
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/blogit`, function(error) {
    if(error) console.log(error);
    else console.log('connected to mongo');
});


////////MIDDLEWARE//////////////

//configured our app to return json easily
app.use(bodyParser.json());

//installed our routes
routes(app);

//---------------------------------------------------------------------------------------------------------

//start server
app.listen(4040, function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log('server is running on port 4040');
    }
});


//export app
module.exports = app;