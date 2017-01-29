//Two functions, one to serialize the user and one to deserialize the user
const passport = require('passport');
const models = require('../db/models/index');
//we take the user info
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
//Deserialization is when the user data is plucked out
//of the session memory and converted to something like a json object
//so the app can do stuff with the data.
//Get the user id
  passport.deserializeUser((id, done) => {
    models.User.findById(id)
    .then((user) => { done(null, user); })
    .catch((err) => { done(err, null); });
  });
};
