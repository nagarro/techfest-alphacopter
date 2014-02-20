/************************************************************************************/
// Author 		: Inderpreet Singh Bindra
// ProjectName 	: Alpha Copter
/************************** Author : Inderpreet Singh Bindra ************************/

var express = require("express");
var arDrone = require("ar-drone");
var AlphaA = require("./AlphaA");
var AlphaI = require("./AlphaI");
var AlphaT = require("./AlphaT");

var app = express();
var client = arDrone.createClient();
console.log("Drone Client Created");

var response = null;

app.get('/AlphaCopter', function(req, res)
{
	//client = arDrone.createClient();
	
	if(req.query.txtAlphabet && req.query.txtAlphabet == "A")
	{
		console.log("Get Request : " +  req.query.txtAlphabet);
		AlphaA(client);			
		response = req.query.txtAlphabet;
	}
	else if(req.query.txtAlphabet && req.query.txtAlphabet == "I")
	{
		console.log("Get Request : " +  req.query.txtAlphabet);
		AlphaI(client);			
		response = req.query.txtAlphabet;
	}
	else if(req.query.txtAlphabet && req.query.txtAlphabet == "T")
	{
		console.log("Get Request : " +  req.query.txtAlphabet);
		AlphaT(client);			
		response = req.query.txtAlphabet;
	}
	else if(req.query.direction && req.query.speed)
	{
		if(req.query.direction == "UP")
		{
			client.up(req.query.speed);
			response = "Direction = " + req.query.direction + " & Speed = " + req.query.speed;
		}
		else if(req.query.direction == "DOWN")
		{
			client.down(req.query.speed);
			response = "Direction = " + req.query.direction + " & Speed = " + req.query.speed;
		}
		else if(req.query.direction == "LEFT")
		{
			client.left(req.query.speed);
			response = "Direction = " + req.query.direction + " & Speed = " + req.query.speed;
		}
		else if(req.query.direction == "RIGHT")
		{
			client.right(req.query.speed);
			response = "Direction = " + req.query.direction + " & Speed = " + req.query.speed;
		}
		else if(req.query.direction == "FRONT")
		{
			client.front(req.query.speed);
			response = "Direction = " + req.query.direction + " & Speed = " + req.query.speed;
		}
		else if(req.query.direction == "BACK")
		{
			client.back(req.query.speed);
			response = "Direction = " + req.query.direction + " Speed = " + req.query.speed;
		}
		else if(req.query.direction == "STOP")
		{
			client.stop();
			response = "Command = " + req.query.direction;
		}
		else if(req.query.direction == "TAKEOFF")
		{
			client.takeoff();
			response = "Command = " + req.query.direction;
		}
		else if(req.query.direction == "LAND")
		{
			client.land();
			response = "Command = " + req.query.direction;
		}
		else if(req.query.direction == "DE")
		{
			client.disableEmergency();
			response = "Command = " + req.query.direction;
		}
		
		console.log(response);
	}
	
	res.send(response);
});

app.use(express.static(__dirname + "/public"));

app.listen(4000);