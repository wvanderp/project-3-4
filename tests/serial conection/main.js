var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var serialPort = new SerialPort("/dev/tty.usbmodemfa131", {
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
		console.log('data received: ' + result);
	});

	serialPort.on('error', function (err) {
		console.error("error", err);
	});
});