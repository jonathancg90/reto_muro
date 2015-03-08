var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('index', {
		partials: {header: 'header'},
		message: req.flash("message")
	});
});


// router.get('/profile/:id', function(req, res){
// 	console.log(req.params);
// 	res.send(200);
// });


module.exports = router;
