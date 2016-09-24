var express = require('express');
var router= express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
var _ = require('underscore');
var User = require('../models/user');

router.post('/login', function (req, res, next) {
    var body = _.pick(req.body, 'email', 'password');
    User.authenticate(body, function (err, user) {
        if (err) {
            return res.status(401).json({
                error: err,
                message: err.message
            });
        }
        var token = jwt.sign({user: user}, 'tokenEncodingSecret');
        res.status(200).json({
            message: 'Success',
            token: token,
            userId: user.id,
            userRole: user.role
        });
    });
});
/**
 * All upcoming routes require authentication and authorization
 */
router.post('/', function (req, res, next) {
    if(!req.body.firstName || !req.body.lastName || !req.body.password || !req.body.email || !req.body.role){
        return res.status(400).json({
            error: 'Can not add user',
            message: 'User required field is missing'
        }).send();
    }
    var newUser = _.pick(req.body, 'firstName', 'lastName', 'password', 'email', 'role');
    User.create(newUser, function (err, user) {
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