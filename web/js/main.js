//static vars
//var for load pass
var pasNr;


var state = "startMenu";
var h = {};


$(document).ready(function () {
	// printBon();
	// loadView("mainMenu");
	loadView("startMenu");
	// loadCard(1);
	sendWithdrawReq(2, 1)
});