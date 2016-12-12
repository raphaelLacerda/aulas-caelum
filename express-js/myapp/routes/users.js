var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {

  console.log('login informado: '+req.body.login);
  res.json(req.body);

});

module.exports = router;
