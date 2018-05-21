var express = require('express');
var pool = require('./mysql_pool');
const crypo = require('crypto');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.cookies);
  console.log(req.cookies.taoshu_user);
  console.log(req.cookies.taoshu_token);
  const hash = crypto.createHash('sha256');
  //TODO
  res.render('index', { user: '' });
});

module.exports = router;
