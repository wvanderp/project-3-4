// var printer = require("printer");
// var util = require('util');

function printBon() {
		console.log("bon word geprint server")
		var newsaldo = saldo - amount;
		var print = "skere bank\n rekening: "+bankrekening+"\n saldo: "+newsaldo+"\n afgenomen: "+amount+"\n Bedankt en tot ziens";
		// emintbon(print);
		io.on("connect", function (socket) {
			io.emit("print", text);
		});
}