var express    = require("express"),
    bodyParser = require("body-parser"),
    app        = express();

//requiring routes
var indexRoutes = require("./routes/index.js");
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//use routes
app.use(indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Kitrina Gantia Server Has Started!");
});