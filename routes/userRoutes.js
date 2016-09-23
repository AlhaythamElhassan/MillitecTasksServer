var express = require('express');
var router= express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err, user) {
        if (err) { // an error occurred
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) { // user not found
            return res.status(404).json({
                title: 'No user found',
                error: {message: 'User not found'}
            });
        }
        if (!passwordHash.verify(req.body.password, user.password)){
            return res.status(404).json({
                title: 'Could not sign you in',
                error: {message: 'Invalid username or password'}
            });
        }
        var token = jwt.sign({user: user}, 'tokenEncodingSecret', {expeiresIn: 7200}); // token will expired in 3 hrs
        res.status(200).json({
            message: 'Success',
            token: token,
            userId: user.id
        }).send();
    });
});

/**
 * All upcoming routes require authentication and authorization
 */
router.post('/', function (req, res, next) {
    if(!req.firstName || !req.lastName || !req.password || !req.email || !req.role){
        return res.status(400).json({
            error: 'Can not add user',
            message: 'User required field is missing'
        }).send();
    }
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passwordHash.generate(req.body.password),
        email: req.body.email,
        role: req.body.role
    });
    user.save(function (err, user) {
        if (err) {
            return res.status(404).json({
                title: 'user is not added due to an error please try again',
                error: err
            });
        }
        res.status(201).json({
            message: 'User added successfully',
            obj: user
        }).send();
    });
});

module.exports = router;