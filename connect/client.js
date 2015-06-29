
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var io = require("socket.io-client")('http://localhost:1234');

var port = "COM3";

var serialPort = new SerialPort(port , {
	baudrate: 115200,
	dataBits: 8,
	parity: 'none',
	stopBits: 1,
	flowControl: false,
	parser: serialport.parsers.readline("\r")
});


serialPort.on("open", function () {
	console.log('open serial port');
	io.on("connect", function() {
		console.log('open socket port');
		serialPort.on('data', function(data) {
			result = data.trim();
			// console.log(result.substring(0,4));
			if (result.substring(0,5) == "Card:") {
				console.log(result.substring(5)+" card found");
				io.emit("card", result.substring(5));
				// loadCard(result);
			}else if(result.substring(0,4) == "Scan"){
				console.log(result);
			}else{
				console.log("keypad: '"+result+"'");
				io.emit("keystroke", result);
			}
		});

		serialPort.on('error', function (err) {
			console.log("Serial Error: "+err);
		});
	});
	// io.on('disconnect', function () {
	// 	console.log('disconnect client event....');
	// 	// io.reconnect();
	// });
	console.log("close sirial port");
});