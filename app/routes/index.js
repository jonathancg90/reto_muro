var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res){
	res.render('index', {partials: {header: 'header'}});
});

router.post('/login', function(req, res){
	// var parameters = req.query;
	res.send({
		'status': 'fail',
		'message': 'login incorrect'
	});
});

router.get('/profile/:id', function(req, res){
	console.log(req.params);
	res.send(200);
});

module.exports = router;
