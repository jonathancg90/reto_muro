var publicPaths = [
	'/login',
	'/logout',
    '/users',
	'/signup',
	'/'
];

module.exports = function() {
    return function(req, res, next) {
    	// if ( publicPaths.indexOf(req.path)>=0 || req.isAuthenticated() ) {
     //        res.locals.user = req.user || {};
    		return next();	
    	// } else { 
     //        req.flash('message', 'Usted no tiene permiso de acceder')
    	// 	res.redirect('/');
    	// }
    }
};