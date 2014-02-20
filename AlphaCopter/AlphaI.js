module.exports = function AlphabetI(client)
{
	console.log("Start Animating Alphabet : I");

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
			console.log("Stop");
			this.stop();
		})
		
		.after(1000, function()
		{
			this.down(0.7);
		})
		.after(2800, function()
		{
			console.log("Stop");
			this.stop();
		})
		//Down
		.after(2500, function()
		{
			this.left(0.1);	
		})
		.after(1800, function()
		{
			console.log("Stop");
			this.stop();
		})
		.after(2000, function()
		{
			this.right(0.1);
		})
		.after(2800, function()
		{
			console.log("Stop");
			this.stop();
		})
		.after(2000, function()
		{	
			// 45200 - 45.2 sec
			// 46000 - 46 sec
			// 42100 - 42.1 sec - Final
			console.log("Land");
			this.land();
		});
}