var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user.js');
var path = require('path');


// Handles request for HTML file
router.get('/', function(req, res, next) {
  console.log('get /register route');
  res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
  console.log('post /register route');
  /*
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  recipes: {type: Array}
  */
    var userToSave = {
      username : req.body.username,
      password : req.body.password
    };


    Users.create(userToSave, function(err, post) {
      console.log('post /register -- User.create');
         if(err) {
           console.log('post /register -- User.create -- failure');
           // next() here would continue on and route to routes/index.js
           next(err);
         } else {
           console.log('post /register -- User.create -- success');
          // route a new express request for GET '/'
          res.redirect('/');
         }
    });
});


module.exports = router;
