var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    userName: 'Eric Luo'
  });
});

module.exports = router;
