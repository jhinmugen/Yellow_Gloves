var express = require("express");
var nodeMailer = require('nodemailer');
var router = express.Router();
var port = 3000;   
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

router.post("/contact",function(req,res){
   var name = req.body.name;
   var surname = req.body.surname;
   var email = req.body.email;
   var phone = req.body.phone;
   var text = req.body.text;
   // let transporter = nodeMailer.createTransport({
   //        host: 'smtp.gmail.com',
   //        port: 465,
   //        secure: true,
   //        auth: {
   //           user: 'xxx@xx.com',
   //           pass: 'xxxx'
   //        }
   //    });
   //    let mailOptions = {
   //        from: '"Krunal Lathiya" <xx@gmail.com>', // sender address
   //        to: req.body.to, // list of receivers
   //        subject: req.body.subject, // Subject line
   //        text: req.body.body, // plain text body
   //        html: '<b>NodeJS Email Tutorial</b>' // html body
   //    };

   //    transporter.sendMail(mailOptions, (error, info) => {
   //        if (error) {
   //           return console.log(error);
   //        }
   //        console.log('Message %s sent: %s', info.messageId, info.response);
   //           res.render('index');
   //        });
   
   res.redirect("/");
   
});



module.exports = router;