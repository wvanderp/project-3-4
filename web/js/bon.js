// var printer = require("printer");
// var util = require('util');
var exec = require('child_process').exec;


function printBon() {
	console.log("bon word geprint server")
	// var newsaldo = saldo - amount;
	var amount, pasNr, newsaldo = 1;
	// var text = "De Skere Bank\n Transactiebon\n\n Opgenomen:"+amount+"\n van rekening "+pasNr+"\n Huidig saldo:"+newsaldo+"\n\n Dank voor uw bezoek\n en tot ziens!";
	var text = "De Skere Bank Transactiebon Opgenomen:"+amount+" van rekening "+pasNr+" Huidig saldo:"+newsaldo+" Dank voor uw bezoek en tot ziens!";
		

	// var cmd = 'java Main'+ text;
	// var cmd = 'java -classpath java/ Main "' + text + '"';
	var cmd = 'java -classpath java Main "' + text + '"';
	// var cmd = 'dir';


	exec(cmd, function(error, stdout, stderr) {
	  // command output is in stdout
	  console.log('stdout: ' + stdout);
	});
}