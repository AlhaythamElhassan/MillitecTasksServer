var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');
var myValidator = require('validator');

var schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    salt:{
        type: String
    },
    hash_password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return myValidator.isEmail(value);
            }
        }
    },
    role: { // this can be in a separate table and connected to the user
        type: String,
        required: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
});

schema.plugin(mongooseUniqueValidator);

schema.method('setPassword', function(value) {
    var salt = bcrypt.genSaltSync(10); // generate salt
    var hashedPassword = bcrypt.hashSync(value, salt); // create hash password
    this.set('salt', salt);
    this.set('hash_password', hashedPassword);
});

schema.virtual('password').set(function(password){
    this.setPassword(password);
    this._password = password;
}).get(function(){
    return this._password;
});

var user = mongoose.model('User', schema);
module.exports = user;
