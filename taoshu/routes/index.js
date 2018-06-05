var express = require('express');
var pool = require('./mysql_pool');
var crypto = require('crypto');
var router = express.Router();

router.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection){
    connection.query('SELECT fldPassword FROM tbluser WHERE fldName = ?', req.cookies.taoshu_user, function(err, rows) {
      if(err){
        res.render('index', { search: '', user: '' });
      } else {
        if(rows[0] !== undefined) {
          var hash_pw = crypto.createHash('sha256');
          hash_pw.update(req.cookies.taoshu_user);
          hash_pw.update(';');
          hash_pw.update(rows[0].fldPassword);
          var hash_pw_result = hash_pw.digest('hex');
          if(req.cookies.taoshu_token == hash_pw_result) {
            res.render('index', { search: '', user: req.cookies.taoshu_user });
          } else {
            res.render('index', { search: '', user: '' });
          }
        } else {
          res.render('index', { search: '', user: '' });
        }
      }
      connection.release();
    });
  });

});

module.exports = router;
