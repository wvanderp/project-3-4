var amount;

var bankrekening = pas2bankrekening(pasNr);
var saldo = getSaldo(bankrekening);
style();

function allHand (numer) {
	if (numer < saldo) {	
		$("#geldMsg").empty();
		amount = numer;
		$(".moneybox").html("&euro;"+numer+",-");
	}else{
		$("#geldMsg").text("U beschikt niet over genoeg saldo. Kies een ander bedrag.");
	}
}

function getPaid(){
	console.log("get paid")
	transactie(bankrekening, amount)
	loadView("bonVragen");
}

function style () {
	if(saldo < 10){
		$(".moneyImg:eq(0)").attr("src", "images/10EuroGray.png");
	}
	if(saldo < 20){
		$(".moneyImg:eq(1)").attr("src", "images/20EuroGray.png");
	}
	if(saldo < 50){
		$(".moneyImg:eq(2)").attr("src", "images/50EuroGray.png");
	}
}

  //-----------------------------------------\\
 //-after tis line you only find key handlers-\\
//---------------------------------------------\\
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
		
}

h.geldVragen.sixKeyHand = function () {
		
}

h.geldVragen.sevenKeyHand = function () {
		
}

h.geldVragen.eightKeyHand = function () {
	
}

h.geldVragen.nineKeyHand = function () {
	console.log("no nine function")
}

h.geldVragen.hashKeyHand = function (){
	getPaid();
}

h.geldVragen.starKeyHand = function (){
	loadView("mainMenu");
}

h.geldVragen.aKeyHand = function (){}
h.geldVragen.bKeyHand = function (){}
h.geldVragen.cKeyHand = function (){}
h.geldVragen.dKeyHand = function (){}