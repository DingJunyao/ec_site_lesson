var express = require('express');
var mysql = require('mysql')
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
      return console.error('Insert error: '+ err.stack);
    }
    return 0;
  });
  if(insertUser() == 0) {
    res.redirect('/', { user: req.body.phone });
  } else {
    res.end("<h1>注册失败</h1>");
  }
});

module.exports = router;
