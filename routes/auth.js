//Registration form and a register rout
const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');
//provide a page to register
// Calls authHelpers if the user is did the loginRedirect
// If the user is not log, then render auth/register
router.get('/register', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/register');
});

//will then create a new user with that data
router.post('/register', (req, res, next)  => {
  // Return function createUser for new user
  return authHelpers.createUser(req, res)
  .then((response) => {
    console.log('registration successful');
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});

//provide a page to log in
router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/login');
});

//check to see if the user is already logged in.
//If they are they go to their profile page.
//If they aren't, they get to the log in page.
router.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);
//Express logout method
//Logging out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
