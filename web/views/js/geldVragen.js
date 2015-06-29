var amount;

function allHand (numer) {	
	$("#geldMsg").empty();
	amount = numer;
	$(".moneybox").html("&euro;"+numer+",-");
}

function getPaid(){
	console.log("get paid")
	monneyMethode = "vragen";
	loadView("biljetKeuze");
}


  //------------------------------------------\\
 //-after this line you only find key handlers-\\
//----------------------------------------------\\

h.geldVragen = {};
h.geldVragen.zeroKeyHand = function () {
	console.log("no zero function")
}

h.geldVragen.oneKeyHand = function () {
	allHand(10);	
}

h.geldVragen.twoKeyHand = function () {
	allHand(20);	
}

h.geldVragen.treeKeyHand = function () {
	allHand(50);	
}

h.geldVragen.fourKeyHand = function () {
	loadView("customBedrag");	
}

h.geldVragen.fiveKeyHand = function () {
	console.log("no five function")
		
}

h.geldVragen.sixKeyHand = function () {
	console.log("no six function")
		
}

h.geldVragen.sevenKeyHand = function () {
	console.log("no seven function")
		
}

h.geldVragen.eightKeyHand = function () {
	console.log("no eight function")
}

h.geldVragen.nineKeyHand = function () {
	console.log("no nine function")
}

h.geldVragen.hashKeyHand = function (){
	getPaid();
}

h.geldVragen.starKeyHand = function (){
	//terug
	loadView("mainMenu");
}

h.geldVragen.aKeyHand = function (){}
h.geldVragen.bKeyHand = function (){}
h.geldVragen.cKeyHand = function (){}
h.geldVragen.dKeyHand = function (){}