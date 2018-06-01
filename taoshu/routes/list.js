var express = require('express');
var pool = require('./mysql_pool')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('list', {search: '', rows: ''});
});

router.get('/type/:type', function(req, res, next) {
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM tblbook WHERE fldType = ?', req.params.type, function(err, rows) {
      if(err){
         res.end("1");
      } else {
        if(rows[0] !== undefined) {
          res.render('list', {search: '', rows: rows});
        } else {
          res.render('list', {search: '', rows: ''});
        }
      }
      connection.release();
    });
  });
});

router.get('/author/:author', function(req, res, next) {
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM tblbook WHERE fldAuthor = ?', req.params.author, function(err, rows) {
      if(err){
         res.end("1");
      } else {
        if(rows[0] !== undefined) {
          res.render('list', {search: '', rows: rows});
        } else {
          res.render('list', {search: '', rows: ''});
        }
      }
      connection.release();
    });
  });
});

router.get('/press/:press', function(req, res, next) {
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM tblbook WHERE fldPress = ?', req.params.press, function(err, rows) {
      if(err){
         res.end("1");
      } else {
        if(rows[0] !== undefined) {
          res.render('list', {search: '', rows: rows});
        } else {
          res.render('list', {search: '', rows: ''});
        }
      }
      connection.release();
    });
  });
});

module.exports = router;
