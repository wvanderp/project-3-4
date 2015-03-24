function loadCard (_pasNr) {
	pasNr = _pasNr;
	loadView("pinInVullen");
}

function loadGeldVraag () {
	loadView("geldVragen");
}

function loadGeldVraagMsg (msg) {
	$("#geldMsg").text("je hebt niet genoeg geld");
}