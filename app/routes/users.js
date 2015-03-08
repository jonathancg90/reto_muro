var express = require('express');
var User = require('./../models/User');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  	User.find(function(err, bears) {
        if (err)
            res.send(err);

        res.json(bears);
    });
});

router.post('/', function(req, res) {
    var user = new User();    
    user.email = req.body.email; 

    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'User created!' });
    });
});

router.get('/:user_id', function(req, res) {
    var user = new User();    
    user.email = req.body.email; 

    User.findById(req.params.user_id, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
});

router.put('/:user_id', function(req, res) {
    User.findById(req.params.user_id, function(err, user) {

        if (err)
            res.send(err);

        user.email = req.body.email; 

        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User updated!' });
        });

    });
});

router.delete('/:user_id',function(req, res) {
    User.remove({
        _id: req.params.user_id
    }, function(err, user) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});

module.exports = router;
