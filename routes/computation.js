var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.floor(Math.random()*10);
    var a = Math.abs(x);
    var b = Math.acos(x);
    var c = Math.sin(x);
    var d = Math.sinh(x);
  res.render('computation', { title: 'Bonus Computation', x:x, a:a, b:b, c:c, d:d });
});

module.exports = router;
