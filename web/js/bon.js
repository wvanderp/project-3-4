// var printer = require("printer");
// var util = require('util');

function printBon() {
		var newsaldo = saldo - amount;
		var print = "skere bank\n rekening: "+bankrekening+"\n saldo: "+newsaldo+"\n afgenomen: "+amount+"\n Bedankt en tot ziens";

		io.on("connect", function (socket) {
			io.emit("card", result.substring(6));
		});
}