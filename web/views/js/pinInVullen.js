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
		// console.log(CheckPinCode(pasNr, pin));
		// var login = CheckPinCode(pasNr, pin);
		// if (login == -1) {
		// 	console.log("corect");
		// 	console.log("pin was: "+pin);
		// 	atempts = 0;
		// 	loadView("mainMenu");
		// }else{
		// 	console.log("incorect")
		// 	console.log("pin was: "+pin);
		// 	atempts++;
		// 	if (atempts < 3) {
		// 		loadPinVragenMsg("pinInVullen");
		// 	}else{
		// 		loadView("pincodeFout");
		// 	};
		// }
		var good = CheckPinCode(pasNr, pin);
		if (good) {
			console.log("corect");
			console.log("pin was: "+pin);
			atempts = 0;
			loadView("mainMenu");
		}else{
			console.log("incorect")
			console.log("pin was: "+pin);
			atempts++;
			if (atempts < 3) {
				loadPinVragenMsg("pinInVullen");
			}else{
				loadView("pincodeFout");
			};
		}
	}
}

  //-----------------------------------------\\
 //-after tis line you only find key handlers-\\
//---------------------------------------------\\
h.pinInVullen = {};
h.pinInVullen.zeroKeyHand = function () {
	allHand(0);	
}

h.pinInVullen.oneKeyHand = function () {
	allHand(1);	
}

h.pinInVullen.twoKeyHand = function () {
	allHand(2);	
}

h.pinInVullen.treeKeyHand = function () {
	allHand(3);	
}

h.pinInVullen.fourKeyHand = function () {
	allHand(4);	
}

h.pinInVullen.fiveKeyHand = function () {
	allHand(5);	
}

h.pinInVullen.sixKeyHand = function () {
	allHand(6);	
}

h.pinInVullen.sevenKeyHand = function () {
	allHand(7);	
}

h.pinInVullen.eightKeyHand = function () {
	allHand(8);	
}

h.pinInVullen.nineKeyHand = function () {
	allHand(9);	
}

h.pinInVullen.aKeyHand = function (){
	
}
h.pinInVullen.bKeyHand = function (){
	
}
h.pinInVullen.cKeyHand = function (){
	
}
h.pinInVullen.dKeyHand = function (){
	
}
h.pinInVullen.hashKeyHand = function (){
	
}
function starHand(){
	
}