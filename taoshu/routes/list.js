var express = require('express');
var pool = require('./mysql_pool');
var moment = require('moment');
var router = express.Router();

router.get('/type/:type', function(req, res, next) {
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM tblbook WHERE fldType = ?;SELECT fldType FROM tblbooktype WHERE fldId = ?;', [req.params.type, req.params.type], function(err, rows) {
      if(err){
         res.render('list', {title: '出错', search: '', rows: ''});
      } else {
        if(rows[0][0] !== undefined && rows[1][0] !== undefined) {
          rows[0].forEach(function(book){
            book.fldDate = moment(book.fldDate).format('YYYY-MM-DD');
          });
          res.render('list', {title: '类别为“' + rows[1][0].fldType + '”的书籍列表', search: '', rows: rows[0]});
        } else {
          res.render('list', {title: '书籍列表', search: '', rows: ''});
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
         res.render('list', {title: '出错', search: '', rows: ''});
      } else {
        if(rows[0] !== undefined) {
          rows.forEach(function(book){
            book.fldDate = moment(book.fldDate).format('YYYY-MM-DD');
          });
          res.render('list', {title: '作者为“' + req.params.author + '”的书籍列表', search: '', rows: rows});
        } else {
          res.render('list', {title: '作者为“' + req.params.author + '”的书籍列表', search: '', rows: ''});
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
         res.render('list', {title: '出错', search: '', rows: ''});
      } else {
        if(rows[0] !== undefined) {
          rows.forEach(function(book){
            book.fldDate = moment(book.fldDate).format('YYYY-MM-DD');
          });
          res.render('list', {title: '出版社为“' + req.params.press + '”的书籍列表', search: '', rows: rows});
        } else {
          res.render('list', {title: '出版社为“' + req.params.press + '”的书籍列表', search: '', rows: ''});
        }
      }
      connection.release();
    });
  });
});


module.exports = router;
