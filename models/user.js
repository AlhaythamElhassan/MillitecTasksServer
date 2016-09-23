var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        requierd: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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

module.exports = mongoose.model('User', schema);