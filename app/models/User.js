var mongoose     = require('mongoose');
var bcrypt   	 = require('bcrypt-nodejs');
var Schema       = mongoose.Schema;

var UserSchema   = new mongoose.Schema({
    email: String,
    password: String,
    comments: [{
    	from: String,
		comment: String,
		like: [],
		view: Boolean
    }]
});

// methods ======================
// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
