var express = require('express');
var pool = require('./mysql_pool');
var moment = require('moment');
var router = express.Router();

router.get('/:search', function(req, res, next) {
  var like = ['%' + req.params.search + '%', '%' + req.params.search + '%', '%' + req.params.search + '%'];
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM tblbook WHERE fldBName LIKE(?) OR fldAuthor LIKE(?) OR fldPress LIKE(?);', like, function(err, rows) {
      if(err){
         res.render('list', {title: '出错', search: req.params.search, rows: ''});
      } else {
        if(rows[0] !== undefined) {
          rows.forEach(function(book){
            book.fldDate = moment(book.fldDate).format('YYYY-MM-DD');
          });
          res.render('list', {title: '“' + req.params.search + '”的搜索结果', search: req.params.search, rows: rows});
        } else {
          res.render('list', {title: '“' + req.params.search + '”的搜索结果', search: req.params.search, rows: ''});
        }
      }
      connection.release();
    });
  });
});

module.exports = router;
