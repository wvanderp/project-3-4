//static vars
//vars for pinInVullen
var atempts = 0;
//var for load pass
var pasNr;
//var for other api calls
var validateCode = null;
//var for geldvragen
var amount = 0;

var state = "startMenu";
var h = {};


$(document).ready(function () {
	// printBon();
	// loadView("mainMenu");
	loadView("startMenu");
	// loadCard(1);
});