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

function loadPinVragenMsg () {
	//laad hel pin invullen view en voegt er dan een bericht aan de view.
	loadView("pinInVullen");
	$("#errorbox").text("U heeft uw pin code verkeerd ingevult.");
}