var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var port = "/dev/tty.usbmodemfa131";

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
		if (result.substring(1,4) == "card") {
			loadCard(result);
		}else{
			keypad(result);
		}
	});

	serialPort.on('error', function (err) {
		console.log("Serial Error: "+err);
	});
});