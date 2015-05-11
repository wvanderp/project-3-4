window.onkeydown = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;
	// console.log(code);
	switch(code) {
		case 48: // key: 0
				console.log("key: 0");
				h[state].zeroKeyHand();
			break;
		case 49: // key: 1
				console.log("key: 1");
				h[state].oneKeyHand();
			break;
		case 50: // key: 2
				console.log("key: 2");
				h[state].twoKeyHand();
			break;
		case 51: // key: 3
				console.log("key: 3");
				h[state].treeKeyHand();
			break;
		case 52: // key: 4
				console.log("key: 4");
				h[state].fourKeyHand();
			break;
		case 53: // key: 5
				console.log("key: 5");
				h[state].fiveKeyHand();
			break;
		case 54: // key: 6
				console.log("key: 6");
				h[state].sixKeyHand();
			break;
		case 55: // key: 7
				console.log("key: 7");
				h[state].sevenKeyHand();
			break;
		case 56: // key: 8
				console.log("key: 8");
				h[state].eightKeyHand();
			break;
		case 57: // key: 9
				console.log("key: 9");
				h[state].nineKeyHand();
			break;
		case 65: // key: A
				console.log("key: A");
				h[state].aKeyHand();
			break;
		case 66: // key: B
				console.log("key: B");
				h[state].bKeyHand();
			break;
		case 67: // key: C
				console.log("key: C");
				h[state].cKeyHand();
			break;
		case 68: // key: D
				console.log("key: D");
				h[state].dKeyHand();
			break;
		case 72: // key: #(HASH) or H
				//it isnt Hasj
				console.log("key: #");
				h[state].hashKeyHand();
			break;
		case 83: // key: *(STAR) or S
				console.log("key: J");
				starHand();
			break;
		case 74: // key: #
				//it isnt Hasj
				console.log("key: #");
				h[state].hashKeyHand();
			break;
		case 78: // key: *
				console.log("key: *");
				h[state].starKeyHand();
			break;
		case 76: // key: L (for loading card) 
				console.log("key: load");
				loadCard(1);
			break;
	    default:
	        
	}
}