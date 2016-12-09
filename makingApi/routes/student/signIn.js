
var mongoose = require("mongoose");

var User = require("../../models/User");

module.exports = function(router) {
	console.log('in 1 signin.js');
	router.post("/users/:username",function (request,response) {
		console.log('in 2 signin.js');
		//First paramenter to get User, Second to do all the code inside the function
		User.findOne({username:request.params.username},function(error,user) {
			console.log('in 3 signin.js');
			//sends back error if error
			if (error) {
				console.log(error);
				return response.send(error);
			}
			//makes sure user isn't empty
			else if (user == undefined) {
				var err = {
					'errormsg' : "no user of that name " + request.params.username
				};
				return response.send(err);
			}
			//checks if unhashed password is the same as hashed password in database
			else if (request.body.password.SameAsHash(user.password)) {
				return response.send(user);
			}
			//If the password is wrong then return false
			else {
				return response.send(false);
			}
		});
	});
}
