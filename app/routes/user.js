var express 		= require('express');  
var WeDeploy 		= require('wedeploy').WeDeploy;
var router 			= express.Router();
var dataService 	= WeDeploy.data('http://data.tablero.wedeploy.io');
var User 			= require('../models/user.js')

/* GET all Users */
router.get('/', function (req, res, next) {  
	
	User.getUsers(function(users) {
			res.setHeader('Content-Type', 'application/json');
           	res.json(users);
    });

});

// POST a new user
router.post('/', function (req, res){
	
	var user = req.body;
	
	User.createUser(user, function(response){
		res.setHeader('Content-Type', 'application/json');
        res.json(response);
	});
});


module.exports = router;