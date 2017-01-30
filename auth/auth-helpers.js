//function that will use bcrypt to compare passwords
const bcrypt = require('bcryptjs');
const models = require('../db/models/index');

//THis functionc check if the password is the same on the DB
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}
// If the user try to log in again will show a message
//This will redirect a logged in user to their user profile
// page if they're already logged
function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json(
    { status: 'You are already logged in' }
  );

  return next();
}
// Create an user and save the password with bycrypt
//This function enable to create the info for the user
// and then redirect to the index page
function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  return models.User.create({
    username: req.body.username,
    password: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob
  }).then(() => {
    res.redirect('/');
  });
}



// if the user try to have access to a pge that he doesn't have authorization
// he will receive a message to log in
function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({ status: 'Please log in' });

  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createUser
}
