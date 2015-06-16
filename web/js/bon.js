// var printer = require("printer");
// var util = require('util');

function printBon() {
		var newsaldo = saldo - amount;
		var print = "De Skere Bank\n Transactiebon\n\n Opgenomen:"+amount+"\n van rekening "+bankrekening+"\n Huidig saldo:"+newsaldo+"\n\n Dank voor uw bezoek\n en tot ziens!";

		io.on("connect", function (socket) {
			io.emit("card", result.substring(6));
		});
}