var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.post('/register', function(req, res, next) {
  var postInfo = {fldName: req.body.phone, fldPassword: req.body.password}
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'taoshu'
  });
  var insertUser = connection.query('INSERT INTO tbluser SET ?', postInfo, function(err, result) {
    if(err) {
      console.error('Insert error: '+ err.stack);
      res.end('Insert error: '+ err.stack);
    }
    res.redirect('/');
  });
});

route.post('/login', function (req, res, next) {

})

module.exports = router;
