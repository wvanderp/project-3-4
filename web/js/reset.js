function resetAll () {
	console.log("full reset");
	//api.js
	token = null;
	bank = null;

	//main.js
	pasNr = 0;

	//socket.js
	last = null;
	intervalId = null;

	//saldovragen.js
	saldo = 0;

	//pinInVullen.js
	i = 0;
	pin = 0;
	pinFactor = 1000;

	//pincodeFout
	interval = null;

	//geldvragen
	amount = 0;

	//foutMelding.js
	//afInterfal.js
	afInterval = null;

	loadView("startMenu");
}