h.biljetKeuze = {};

h.biljetKeuze.zeroKeyHand = function (){
	
}
h.biljetKeuze.oneKeyHand = function (){
	//minste biljetten
	withdraw(amount);
	dispence (amount, 0, 0, 1);
}
h.biljetKeuze.twoKeyHand = function (){
	//vooral 20
	withdraw(amount);
	dispence (amount, 0, 1, 0);
}
h.biljetKeuze.treeKeyHand = function (){
	//meeste aantal
	withdraw(amount);
	dispence (amount, 1, 0, 0);
}
h.biljetKeuze.fourKeyHand = function (){
	
}
h.biljetKeuze.fiveKeyHand = function (){
	
}
h.biljetKeuze.sixKeyHand = function (){
	
}
h.biljetKeuze.sevenKeyHand = function (){
	
}
h.biljetKeuze.eightKeyHand = function (){
	
}
h.biljetKeuze.nineKeyHand = function (){
	
}
h.biljetKeuze.aKeyHand = function (){
	
}
h.biljetKeuze.bKeyHand = function (){

}
h.biljetKeuze.cKeyHand = function (){
	
}
h.biljetKeuze.dKeyHand = function (){

}
h.biljetKeuze.hashKeyHand = function (){
	
}
h.biljetKeuze.starKeyHand = function (){
	//terug 
	loadView("mainMenu");
}