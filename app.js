var express    = require("express"),
    bodyParser = require("body-parser"),
    app        = express();
    
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");