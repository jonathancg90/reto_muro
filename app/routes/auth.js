var express = require('express');
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

router.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile', {
        user : req.user
    });
});

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    req.flash('message', 'Usted no tiene permiso de acceder')
    res.redirect('/');
}

module.exports = router;
