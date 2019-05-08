var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form');
  console.log("get 들어옴");
});
router.post('/', function(req,res,next){

  console.log(req.body);
})
module.exports = router;
