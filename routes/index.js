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
//employees page
router.get("/employees", function(req,res){
   res.render("employees"); 
});
//contact page
router.get("/contact", function(req,res){
   res.render("contact"); 
});



module.exports = router;