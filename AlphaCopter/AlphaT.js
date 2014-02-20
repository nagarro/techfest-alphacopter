module.exports = function AlphabetT(client)
{
	console.log("Start Animating Alphabet : T");

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
			console.log("Calibrate Drone");
			this.calibrate(0);
		})
	// Up
		.after(5000, function()
		{
			// 14000 - 14 sec
			// Animation Time - 12100 - 12.1 sec
			this.up(0.7);
		})
		.after(2800, function()
		{
			console.log("Stop");
			this.stop();
		})
		.after(1500, function()
		{
			this.left(0.1);	
		})
		.after(2200, function()
		{
			console.log("Stop");
			this.stop();
		})
		.after(2000, function()
		{
			this.right(0.1);
		})
		.after(2700, function()
		{
			console.log("Stop");
			this.stop();
		})
		.after(1500, function()
		{
			this.left(0.1);
		})
		.after(2000, function()
		{
			// 28200 - 28.2 sec
			console.log("Stop");
			this.stop();
		})
		
		.after(1000, function()
		{
			this.down(0.7);
		})
		.after(2800, function()
		{
			console.log("Stop Animation");
			this.stop();
		})
		.after(2000, function()
		{	
			// 19900 - 19.9 sec
			// 20200 - 20.2 sec
			// 34200 - 34.2 sec
			// 33600 - 33.6 sec - Final
			console.log("Land");
			this.land();
		});
}