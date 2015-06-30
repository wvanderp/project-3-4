var amount;

function allHandCustom(num){
	console.log("allHandCustom num: "+num);
	$(".customMoney").val($(".customMoney").val()+num);
	amount = $(".customMoney").val();
	check();

}

function backspace () {
	var val = $(".customMoney").val();
	var newVal = val.substring(0, val.length -1 );
	amount = $(".customMoney").val();
	$(".customMoney").val(newVal);
	check();
}

function check(){
	if ($(".customMoney").val() > 500) {
		$("#wrongCustomBox").text("Het gekozen bedrag is hoger dan €500,-. Kies een lager bedrag");
	}else{
		$("#wrongCustomBox").text("");
	};

	if ($(".customMoney").val()%10 != 0) {
		$("#wrongCustomBox").text("Het gekozen bedrag is geen veelvoud van 10,-. Kies een ander bedrag");
	}else{
		$("#wrongCustomBox").text("");
	};
}

h.customBedrag = {};

h.customBedrag.zeroKeyHand = function (){
	allHandCustom(0);
}
h.customBedrag.oneKeyHand = function (){
	allHandCustom(1);
}
h.customBedrag.twoKeyHand = function (){
	allHandCustom(2);
}
h.customBedrag.treeKeyHand = function (){
	allHandCustom(3);
}
h.customBedrag.fourKeyHand = function (){
	allHandCustom(4);
}
h.customBedrag.fiveKeyHand = function (){
	allHandCustom(5);
}
h.customBedrag.sixKeyHand = function (){
	allHandCustom(6);
}
h.customBedrag.sevenKeyHand = function (){
	allHandCustom(7);
}
h.customBedrag.eightKeyHand = function (){
	allHandCustom(8);
}
h.customBedrag.nineKeyHand = function (){
	allHandCustom(9);
}
h.customBedrag.aKeyHand = function (){
	
}
h.customBedrag.bKeyHand = function (){
	
}
h.customBedrag.cKeyHand = function (){
	
}
h.customBedrag.dKeyHand = function (){
	backspace();
}
h.customBedrag.hashKeyHand = function (){
	console.log("get paid")
	monneyMethode = "custom";
	loadView("biljetKeuze");
}
h.customBedrag.starKeyHand = function (){
	loadView("geldVragen");
}