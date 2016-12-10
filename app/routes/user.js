var express 		= require('express');  
var WeDeploy 		= require('wedeploy').WeDeploy;
var router 			= express.Router();
var dataService 	= WeDeploy.data('http://data.tablero.wedeploy.io');

/* GET all Users */
router.get('/', function (req, res, next) {  
	dataService.get('users')
    	.then(function(users) {
			res.setHeader('Content-Type', 'application/json');
           	res.json(users);
    });
});

// POST a new user
router.post('/', function (req, res){
	
	var user = req.body;
	
	//TODO:  Validate the user data
   
	dataService.create('users', user)
		.then(function(response) {
			res.setHeader('Content-Type', 'application/json');
           	res.json(response);
		})
		.catch(function(error) {
			console.error(error);
			//TODO:  Send back response in case of an error
		});
	
});


module.exports = router;