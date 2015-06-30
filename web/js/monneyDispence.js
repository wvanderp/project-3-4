function dispence (ammount, klein, middel, groot) {
	console.log("monney word uitgegeven");		

	// var cmd = 'java Main'+ text;
	// var cmd = 'java -classpath java/ Main "' + text + '"';
	
	var cmd = 'java -classpath "../lego" Money' + ammount +" " + groot + " " + middel + " " + klein;
	// var cmd = 'dir "../lego"';


	exec(cmd, function(error, stdout, stderr) {
	  // command output is in stdout
	  console.log('stdout: ' + stdout);
	});
}