var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var port = "COM3";

var serialPort = new SerialPort(port , {
	baudrate: 9600,
	dataBits: 8,
	parity: 'none',
	stopBits: 1,
	flowControl: false,
	parser: serialport.parsers.readline("\r")
});

serialPort.on("open", function () {
	console.log('open serial port');
	serialPort.on('data', function(data) {
		result = data.trim();
		console.log(result.substring(0,6));
		if (result.substring(0,6) == "card: ") {
			console.log(result.substring(6)+" card found");
			// loadCard(result);
		}else{
			console.log("keypad: '"+result+"'");
			// keypad(result);
		}
	});

	serialPort.on('error', function (err) {
		console.log("Serial Error: "+err);
	});
});