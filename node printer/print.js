var printer = require("printer");
var util = require('util');

// var print = 'CutePDF Writer'; //for test purpusus
var print = 'DYMO LabelWriter 400'; // for some real printing

// console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));

printer.printDirect({data:" print from  Node.JS buffer" // or simple String: "some text"
	, printer: print // printer name, if missing then will print to default printer
	, type: 'TEXT' // type: RAW, TEXT, PDF, JPEG, .. depends on platform
	, success:function(jobID){
		console.log("sent to printer with ID: "+jobID);
	}
	, error:function(err){console.log(err);}
});