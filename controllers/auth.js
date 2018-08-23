// Require express
var express = require('express');
var passport = require('../config/passportConfig');

// Include the models
var db = require('../models');

// Declare a new router
var router = express.Router();

// Define routes
router.get('/login', function(req, res){
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  successFlash: 'Yay, login successful! :D',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid Credentials'
}));

router.get('/signup', function(req, res){
  res.render('auth/signup');
});

router.post('/signup', function(req, res){
  console.log(req.body);
  req.body.admin = false;
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: req.body
  }).spread(function(user, wasCreated){
    if(wasCreated){ // This is expected behavior!
      // Automatically log the user in!
      passport.authenticate('local', {
        successRedirect: '/profile',
        successFlash: 'Successfully logged in!',
        failureRedirect: '/',
        failureFlash: 'Oh Noes?'
      })(req, res);
    }
    else { // User messed up, they already have a login
      // TODO: Send the user some sort of error message!
      res.redirect('/auth/login');
    }
  }).catch(function(err){
    console.log(err);
    res.send(err);
  });
});

router.get('/logout', function(req, res){
  res.send('Logout route');
});

module.exports = router;
