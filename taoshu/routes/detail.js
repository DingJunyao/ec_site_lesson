var express = require('express');
var pool = require('./mysql_pool');
var moment = require('moment');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('detail', {search: '', rows: ''});
});

router.get('/:bookid', function(req, res, next) {
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM tblbook WHERE fldID = ?', req.params.bookid, function(err, rows) {
      if(err){
         res.render('detail', {title: '出错', search: '', book: ''});
      } else {
        if(rows[0] !== undefined) {
          rows[0].fldDate = moment(rows[0].fldDate).format('YYYY-MM-DD');
          res.render('detail', {title: '《' + rows[0].fldBName + '》的详细信息', search: '', book: rows[0]});
        } else {
          res.render('detail', {title: '该书籍不存在', search: '', book: ''});
        }
      }
      connection.release();
    });
  });
})

module.exports = router;
