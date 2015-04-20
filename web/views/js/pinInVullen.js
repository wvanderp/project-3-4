var i = 0;
var pin = 0;
var pinFactor = 1000;

function allHand(num){
	//you can only enter in 4 digits
	//and the last has to submit the form so the loop is 3 +1
	if(i < 3){
		//make the next field a star for user feedback
		$(".pinField:eq("+i+")").text("*");i
		//add the number to the pin with a factor for position
		pin += num*pinFactor;

		//decrese the factor of 10;
		pinFactor = pinFactor/10;

		// i++ for next field 
		i++
	}else{
		//making the last field a star
		$(".pinField:eq("+i+")").text("*");

		//adding the last number to the pin
		pin += num*pinFactor;

		//submit function
		checkPin();
	}
}


function checkPin(){
	//check the pin that is entered
	//the function is in /js/api.js
	console.log(CheckPinCode(pasNr, pin));
	if (CheckPinCode(pasNr, pin)) {
		console.log("corect");
		atempts = 0;
		loadGeldVraag();
	}else{
		console.log("incorect")
		atempts++;
		$(".pinField").text("");
		factor = 1000;
		i = 0;
		pin = 0;
	}
}

  //-----------------------------------------\\
 //-after tis line you only find key handlers-\\
//---------------------------------------------\\

function zeroKeyHand() {
	allHand(0);	
}

function oneKeyHand() {
	allHand(1);	
}

function twoKeyHand() {
	allHand(2);	
}

function treeKeyHand() {
	allHand(3);	
}

function fourKeyHand() {
	allHand(4);	
}

function fiveKeyHand() {
	allHand(5);	
}

function sixKeyHand() {
	allHand(6);	
}

function sevenKeyHand() {
	allHand(7);	
}

function eightKeyHand() {
	allHand(8);	
}

function nineKeyHand() {
	allHand(9);	
}
