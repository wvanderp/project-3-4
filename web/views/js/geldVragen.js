var amount;

var bankrekening = pas2bankrekening(pasNr);
var saldo = getSaldo(bankrekening);

function allHand (numer) {
	amount = numer;
	$(".moneybox").html("&euro;"+numer+",-");
}

function accept(numer){
	if(validateAmount()){
		finnish();
	}else{
		console.log();
		loadGeldVraagMsg();
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
	accept(amount);
}

function starHand(){
	console.log("no no");
}

h.geldVragen.aKeyHand = function (){
	
}
h.geldVragen.bKeyHand = function (){
	
}
h.geldVragen.cKeyHand = function (){
	
}
h.geldVragen.dKeyHand = function (){
	
}
h.geldVragen.hashKeyHand = function (){
	
}
function starHand(){
	
}
