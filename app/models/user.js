var WeDeploy 		= require('wedeploy').WeDeploy;
var dataService 	= WeDeploy.data('http://data.tablero.wedeploy.io');


function getUsers(callback) {  

	dataService.get('users')
    	.then(function(users) {
           	return callback(users);
    });
}

exports.getUsers = getUsers;

function createUser(user, callback){
	
//TODO:  Validate the user data
   
	dataService.create('users', user)
		.then(function(response) {
			return callback(response);
		})
		.catch(function(error) {
			console.error(error);
			//TODO:  Send back response in case of an error
		});	
	
}

exports.createUser = createUser;
