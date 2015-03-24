//static vars
var apiUrl = "http://hro.cwms.cc/api";
//vars for pinInVullen
var atempts = 0;
//var for load pass
var pasNr;
//var for other api calls
var validateCode = null;
//var for geldvragen
var amount = 0;

$(document).ready(function (argument) {
	// loadView("mainMenu");
	loadCard(1);
});