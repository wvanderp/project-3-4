var amount;

function allHand (numer) {
	amount = numer;
	$(".moneybox").html("&euro;"+numer);
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

function zeroKeyHand() {
	console.log("no zero function")
}

function oneKeyHand() {
	allHand(5);	
}

function twoKeyHand() {
	allHand(10);	
}

function treeKeyHand() {
	allHand(20);	
}

function fourKeyHand() {
	allHand(50);	
}

function fiveKeyHand() {
	allHand(100);	
}

function sixKeyHand() {
	allHand(200);	
}

function sevenKeyHand() {
	allHand(500);	
}

function eightKeyHand() {
	console.log("no eight function")
}

function nineKeyHand() {
	console.log("no nine function")
}

function hashKeyHand(){
	accept(amount);
}

function starHand(){
	console.log("no no");
}
