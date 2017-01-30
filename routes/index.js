// Import express module
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
//render the index.ejs
  res.render('index');
});

module.exports = router;
