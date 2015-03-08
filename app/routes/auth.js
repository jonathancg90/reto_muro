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

router.get('/profile/:user_id?', isLoggedIn, function(req, res) {
    var user_id = req.params.user_id;
    if(!user_id){
        res.render('profile', {
            user : req.user,
            profile : req.user
        });
    } else {
        User.findById(req.params.user_id, function(err, user) {
            if (err){
                req.flash('message', 'No se pudo acceder al perfil')
                res.redirect('/');
            }
            res.render('profile', {
                user : req.user,
                profile : user
            });
        });
    }
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
