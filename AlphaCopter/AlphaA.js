module.exports = function AlphabetA(client)
{
	console.log("Start Animating Alphabet : A");

	client.stop();
	client
		.after(1000, function()
		{
			this.land();
		})
		.after(2000, function()
		{
			this.disableEmergency();
		})
		.after(2000, function()
		{
			console.log("Drone TakeOff");
			this.takeoff();
		})
		.after(2000, function(){
			this.stop();
		})
		.after(2000, function()
		{
			this.calibrate(0);
		})
		.after(5000, function()
		{
			// 14000 - 14 sec
			// Animation Time - 12100 - 12.1 sec
			this.right(0.05)
			this.up(0.7);
			
		})
		.after(2800, function()
		{
			console.log("Stop");
			this.stop();
		})
		.after(1000, function()
		{
			console.log("Right & Down");
			//this.left(0.03)
			this.right(0.05)
			this.down(0.7);
			
		})
	   	.after(2800, function()
		{
			console.log("Stop");
			this.stop();
		})
	
		.after(1000, function()
		{
			console.log("Up & Left");
			//this.up(0.6)
			//this.left(0.09);

			this.up(0.4)
			this.left(0.1);
		})
		
		.after(1800, function()
		{
			console.log("Stop");
			this.stop();
		})
		.after(1000, function()
		{
			console.log("Left");
			this.left(0.2);
			
		})
	    .after(1800, function()
		{
			console.log("Left Stop");
			this.stop();
		})
		.after(1000, function()
		{
			//27100 - 27.1 sec
			//26400 - 26.4 sec - Final
			//26600 - 26.6 sec
			//27200
			console.log("Down");
			this.down(0.05);
		})
		.after(1000, function()
		{
			console.log("Stop");
			this.stop();
		})
		.after(1500, function()
		{
			console.log("Land");
			this.land();
			// 29600 - 29.6 sec
			// 28900 - 28.6 sec
		});

}