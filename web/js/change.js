function loadCard (_pasNr) {
	if (state == "startMenu") {	
		pasNr = _pasNr;
		loadView("pinInVullen");
	};
}

function loadGeldVraagMsg (msg) {
	$("#geldMsg").text("je hebt niet genoeg geld");
}

function loadPinVragenMsg () {
	//laad hel pin invullen view en voegt er dan een bericht aan de view.
	loadView("pinInVullen");
	$("#errorbox").html("U heeft uw pin code verkeerd ingevult.<br>poging "+atempts);
}