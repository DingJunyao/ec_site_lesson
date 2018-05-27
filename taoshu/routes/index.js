var express = require('express');
var pool = require('./mysql_pool');
var crypto = require('crypto');
var router = express.Router();

function searchToken(user, token) {
  pool.getConnection(function(err, connection){
    connection.query('SELECT fldPassword FROM tbluser WHERE fldName = ?', user, function(err, rows) {
      if(err){
        return 1;
      } else {
        if(rows[0] !== undefined) {
          var hash_pw = crypto.createHash('sha256');
          hash_pw.update(user);
          hash_pw.update(';');
          hash_pw.update(rows[0].fldPassword);
          var hash_pw_result = hash_pw.digest('hex');
          if(token == hash_pw_result) {
            return 0;
          } else {
            return -1;
          }
        } else {
          return -2;
        }
      }
      connection.release();
    });
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection){
    connection.query('SELECT fldPassword FROM tbluser WHERE fldName = ?', req.cookies.taoshu_user, function(err, rows) {
      if(err){
        res.render('index', { user: '' });
      } else {
        if(rows[0] !== undefined) {
          var hash_pw = crypto.createHash('sha256');
          hash_pw.update(req.cookies.taoshu_user);
          hash_pw.update(';');
          hash_pw.update(rows[0].fldPassword);
          var hash_pw_result = hash_pw.digest('hex');
          if(req.cookies.taoshu_token == hash_pw_result) {
            res.render('index', { user: req.cookies.taoshu_user });
          } else {
            res.render('index', { user: '' });
          }
        } else {
          res.render('index', { user: '' });
        }
      }
      connection.release();
    });
  });

});

module.exports = router;
