var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form');
  console.log("get 들어옴");
});
router.post('/', function(req,res,next){
  console.log(JSON.stringify(req.body));
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'withstartup1@gmail.com',
      pass: ''
    }
  }));
  var mailOptions = {
    from: 'no-reply@',
    to: 'info@platcube.com',
    subject: '[WITH START-UP 문의 메일',
    text: JSON.stringify(req.body)
  };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
})
module.exports = router;
