var express = require("express");
var router = express.Router();
    
//Landing page
router.get("/", function(req,res){
   res.render("landing"); 
});
//menu page
router.get("/menu", function(req,res){
   res.render("menu"); 
});
//restaurant page
router.get("/restaurant", function(req,res){
   res.render("restaurant"); 
});


//contact page
router.get("/contact", function(req,res){
   res.render("contact"); 
});



module.exports = router;