var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.cookies
  res.render('index', { user: '' });
});

module.exports = router;
