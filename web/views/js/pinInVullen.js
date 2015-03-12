var i = 0;
var pin = 0;
var pinFactor = 1000;
var atemps = 0;
function allHand(num){
	//you can only enter in 4 digits
	//and the last has to submit the form so the loop is 3 +1
	console.log(atemps);
	if(i < 3){
		//make the next field a star for user feedback
		$(".pinField:eq("+i+")").text("*");
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
	$.post("/api/pinvalidate.php",{"cardNum": cardNum,"pin": pin}, function(data){
		if (data == true) {
			loadGeldVragen(); 
		}else{
			if (atemps == 3) {
				console.log("ban");
				loadPinFout();
			}
		}
	});
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
