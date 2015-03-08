var express = require('express');
var User = require('./../models/User');
var passport = require('passport');
var router = express.Router();


router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile',   // redirect to the secure profile section
        failureRedirect : '/',          // redirect back to the signup page if there is an error
        failureFlash : true             // allow flash messages
}));


router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile',   // redirect to the secure profile section
    failureRedirect : '/',          // redirect back to the signup page if there is an error
    failureFlash : true             // allow flash messages
}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
