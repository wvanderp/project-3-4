function loadCard (_pasNr) {
	if (state == "startMenu") {	
		pasNr = _pasNr;
		loadView("pinInVullen");
	};
}

function loadGeldVraagMsg (msg) {
	$("#geldMsg").text("U beschikt niet over genoeg saldo.");
}

function loadPinVragenMsg () {
	//laad hel pin invullen view en voegt er dan een bericht aan de view.
	loadView("pinInVullen");
	$("#errorbox").html("U heeft uw pincode verkeerd ingevuld.<br> Herpoging "+atempts);
}

function loadWitdrawError () {
	if (monneyMethode == "vragen") {
		loadView("geldVragen");
		$("#geldMsg").text("U beschikt niet over genoeg saldo.");
	};

	if (monneyMethode == "custom") {
		loadView("customBedrag");
		$("#wrongCustomBox").text("U beschikt niet over genoeg saldo.");
	};
}