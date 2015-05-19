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
	if(saldo < 5){
		$(".moneylist ol li:eq(0)").css("text-decoration","line-through");
	}
	if(saldo < 10){
		$(".moneylist ol li:eq(1)").css("text-decoration","line-through");
	}
	if(saldo < 20){
		$(".moneylist ol li:eq(2)").css("text-decoration","line-through");
	}
	if(saldo < 50){
		$(".moneylist ol li:eq(3)").css("text-decoration","line-through");
	}
	if(saldo < 100){
		$(".moneylist ol li:eq(4)").css("text-decoration","line-through");
	}
	if(saldo < 200){
		$(".moneylist ol li:eq(5)").css("text-decoration","line-through");
	}
	if(saldo < 500){
		$(".moneylist ol li:eq(6)").css("text-decoration","line-through");
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
	allHand(5);	
}

h.geldVragen.twoKeyHand = function () {
	allHand(10);	
}

h.geldVragen.treeKeyHand = function () {
	allHand(20);	
}

h.geldVragen.fourKeyHand = function () {
	allHand(50);	
}

h.geldVragen.fiveKeyHand = function () {
	allHand(100);	
}

h.geldVragen.sixKeyHand = function () {
	allHand(200);	
}

h.geldVragen.sevenKeyHand = function () {
	allHand(500);	
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
	console.log("no no");
}

h.geldVragen.aKeyHand = function (){}
h.geldVragen.bKeyHand = function (){}
h.geldVragen.cKeyHand = function (){}
h.geldVragen.dKeyHand = function (){}