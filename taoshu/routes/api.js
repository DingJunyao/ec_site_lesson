var express = require('express');
var pool = require('./mysql_pool')
var router = express.Router();

router.post('/register', function(req, res, next) {
  var postInfo = {fldName: req.body.phone, fldPassword: req.body.password};
  pool.getConnection(function(err, connection){
    connection.query('INSERT INTO tbluser SET ?', postInfo, function(err, rows) {
      if(err){
         res.end("1");
      } else {
         res.end("0");
      }
      connection.release();
    });
  });
});

router.post('/login', function (req, res, next) {
  var postInfo = [req.body.username, req.body.password]
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM tbluser WHERE fldName = ? AND fldPassword = ?', postInfo, function(err, rows) {
      if(err){
         res.end("1");
      } else {
        if(rows[0] !== undefined) {
          res.end("0");
        } else {
          res.end("-1");
        }
      }
      connection.release();
    });
  });
});

module.exports = router;
