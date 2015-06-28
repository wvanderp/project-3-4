// var printer = require("printer");
// var util = require('util');

function printBon() {
		console.log("bon word geprint server")
		var newsaldo = saldo - amount;
		var print = "De Skere Bank\n Transactiebon\n\n Opgenomen:"+amount+"\n van rekening "+pasNr+"\n Huidig saldo:"+newsaldo+"\n\n Dank voor uw bezoek\n en tot ziens!";
		
		io.on("connect", function (socket) {
			io.emit("print", text);
		});
}