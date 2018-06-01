var express = require('express');
var pool = require('./mysql_pool')
var router = express.Router();

router.get('/:search', function(req, res, next) {
  var like = ['%' + req.params.search + '%', '%' + req.params.search + '%', '%' + req.params.search + '%']
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM tblbook WHERE fldBName LIKE(?) OR fldAuthor LIKE(?) OR fldPress LIKE(?);', like, function(err, rows) {
      if(err){
         res.end("1");
      } else {
        if(rows[0] !== undefined) {
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
