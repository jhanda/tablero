var WeDeploy 		= require('wedeploy').WeDeploy;
var dataService 	= WeDeploy.data('http://data.tablero.wedeploy.io');


function getTeams(callback) {  

	dataService.get('teams')
    	.then(function(teams) {
           	return callback(teams);
    });
}

exports.getTeams = getTeams;

function createTeam(team, callback){
	
	//TODO:  Validate the team data
   
	dataService.create('teams', team)
		.then(function(response) {
			return callback(response);
		})
		.catch(function(error) {
			console.error(error);
			//TODO:  Send back response in case of an error
		});	
	
}

exports.createTeam = createTeam;
