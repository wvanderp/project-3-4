
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var io = require("socket.io")(1234);


var port = "COM8";

// var serialPort = new SerialPort(port , {
// 	baudrate: 9600,
// 	dataBits: 8,
// 	parity: 'none',
// 	stopBits: 1,
// 	flowControl: false,
// 	parser: serialport.parsers.readline("\r")
// });



io.on("connect", function(socket) {
	
	console.log('open socket port');
	// serialPort.on("open", function () {
	// 	console.log('open serial port');
	// 	serialPort.on('data', function(data) {
	// 		result = data.trim();
	// 		// console.log(result.substring(0,4));
	// 		if (result.substring(0,5) == "Card:") {
	// 			console.log(result.substring(6)+" card found");
	// 			io.emit("card", result.substring(6));
	// 			// loadCard(result);
	// 		}else if(result.substring(0,4) == "Scan"){
	// 			console.log(result);
	// 		}else{
	// 			console.log("keypad: '"+result+"'");
	// 			io.emit("keystroke", result);
	// 		}
	// 	});

	// 	serialPort.on('error', function (err) {
	// 		console.log("Serial Error: "+err);
	// 	});
	// });
	
	io.on("print", function (text){
		console.log("bon word geprint - client");


		// var print = 'CutePDF Writer'; //for test purpusus
		var print = 'DYMO LabelWriter 400'; // for some real printing

		// console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));


		printer.printDirect({data: print // or simple String: "some text"
			, printer: print // printer name, if missing then will print to default printer
			, type: 'TEXT' // type: RAW, TEXT, PDF, JPEG, .. depends on platform
			, success:function(jobID){
				console.log("sent to printer with ID: "+jobID);
			}
			, error:function(err){console.log(err);}
		});
	})
	// io.on('disconnect', function () {
	// 	console.log('disconnect client event....');
	// 	// io.reconnect();
	// });
});