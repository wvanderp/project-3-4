function resetAll () {
	console.log("full reset");
	 i = 0;
	 pin = 0;
	 pinFactor = 1000;
	 interval = null;
	 amount;

	 bankrekening = null;
	 saldo = null;

	 afInterval = null;

	 last = null;
	 intervalId = null;

	//static s
	//s for pinInVullen
	 atempts = 0;
	// for load pass
	 pasNr;
	// for other api calls
	 validateCode = null;
	// for geldvragen
	 amount = 0;

	loadView("startMenu");
}