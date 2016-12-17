var express 		= require('express');  
var WeDeploy 		= require('wedeploy').WeDeploy;
var router 			= express.Router();
var dataService 	= WeDeploy.data('http://data.tablero.wedeploy.io');
var Team 			= require('../models/team.js')

/* GET all Teams */
router.get('/', function (req, res, next) {  
	
	Team.getTeams(function(teams) {
			res.setHeader('Content-Type', 'application/json');
           	res.json(teams);
    });

});

// POST a new team
router.post('/', function (req, res){
	
	var team = req.body;
	
	Team.createTeam(team, function(response){
		res.setHeader('Content-Type', 'application/json');
        res.json(response);
	});
});


module.exports = router;