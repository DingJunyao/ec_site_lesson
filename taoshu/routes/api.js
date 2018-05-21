var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'taoshu'
});

// router.post('/register', function(req, res, next) {
//   var postInfo = {fldName: req.body.phone, fldPassword: req.body.password}
//   var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'taoshu'
//   });
//   var insertUser = connection.query('INSERT INTO tbluser SET ?', postInfo, function(err, result) {
//     if(err) {
//       console.error('Insert error: '+ err.stack);
//       res.end('Insert error: '+ err.stack);
//     }
//     res.redirect('/');
//   });
// });

router.post('/register', function(req, res, next) {
  var postInfo = {fldName: req.body.phone, fldPassword: req.body.password}
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

})

module.exports = router;
