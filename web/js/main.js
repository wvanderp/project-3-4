//static vars
//vars for pinInVullen
var atempts = 0;
//var for load pass
var pasNr;
//var for other api calls
var validateCode = null;
//var for geldvragen
var amount = 0;

var state = "mainMenu";
var h = {};


$(document).ready(function () {
	loadView("mainMenu");
	// loadCard(1);
});
