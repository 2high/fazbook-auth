const passport = require('passport');
//assport recognizes that each application has unique authentication requirements.
// Authentication mechanisms, known as strategies, are packaged as individual modules.
// Applications can choose which strategies to employ,
// without creating unnecessary dependencies.
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');

const options = {};

init();
//The user will log in with a username and password.
//if found , return user details
// if don't, it will return false or null
passport.use(new LocalStrategy(options, (username, password, done) => {
  // check to see if the username exists
  models.User.findAll({
    //check if the username exist
    where: {
      username
    }
  })
  .then((user) => {
    if (user[0] === undefined) {
      return done(null, false);
    }
    if (!authHelpers.comparePass(password, user[0].dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, user[0].dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;
