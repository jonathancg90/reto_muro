var express = require('express');
var User = require('./../models/User');
var router = express.Router();

router.get('/:user_id?', function(req, res) {
    var user_id = req.params.user_id;

    if(!user_id) {
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

router.post('/comment', function(req, res) {
    var user_id = req.body.to_id; 
    var comment = req.body.comment; 

    User.findById(user_id, function(err, user) {
        if (err)
            return res.send(err);


        User.update({_id: user_id}, {$push: {"comments": {
            from: req.user._id,
            comment: comment,
            view: false
        }}}, function(err, numAffected, rawResponse) {
          if (err) 
            return res.send("contact addMsg error: " + err);
        });
    });
    return res.sendStatus(200);
});

router.get('/comment/users', function(req, res) {
    var emails = [],
        ids = [];
    for(var i=0; i< req.user.comments.length;i++){
        ids.push(req.user.comments[i].from)
    }

    User.find({
    '_id': { $in: ids}
    }, function(err, users){
        if (err)
            return res.send(err);
        emails.push(users);
        return res.json(emails);
    });


                   
    // return JSON.stringify(emails);
    // console.log("SALIO");
    // return res.json(emails);
});

module.exports = router;