var request = new Request();

///////////////////////////
//Do things on document load
$( document ).ready(function() {

});

//Sign Up
$("#up").click(function() {
	//prevent PHP from being called
	event.preventDefault();

	//If password textbox is empty then don't attemp to log in
	if($("#Pass").val() == "")
	{
		console.log("Please enter password");
		return;
	}

	var parameters = {
		username: $("#User").val(),
		password: $("#Pass").val()
	};

	request.send({
		method: "POST",
		url: "http://localhost:3000/api/users",
		data: parameters
	},function(error,user){
		if (error){
			console.log(error);
			return;
		}
		console.log("Sign up successful");
	});
});

/////////////////////////
//Sign in
$("#in").click(function() {
	var parameters = {
		username: $("#User").val(),
		password: $("#Pass").val()
	};

	request.send({
		method: 'POST',
		url: 'http://localhost:3000/api/users/'
		+ $("#User").val(),
		data: parameters
	}, function(err, user) {
		if (err) {
			console.log(err);
		}
		//Send error to console and delete cookies
		else if(user.errormsg != undefined)
		{
			console.log(user.errormsg);
		}
		//Create cookies for user session
		else if(user != undefined) {
			$("#confirmation").html("Logged in as " + $("#User").val());
		}
	});
});