//import express
const express = require('express');
//create a new variable to set express router
const router = express.Router();
// import auth-helpers.js file from the directory auth
const authHelpers = require('../auth/auth-helpers');

/* GET user profile page. */
// add route here
//user profile page
router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues
  });
});



module.exports = router;
