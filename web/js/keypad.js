function keypad (code){
	switch(code) {
		case "0": // key: 0
				console.log("key: 0");
				h[state].zeroKeyHand();
			break;
		case "1": // key: 1
				console.log("key: 1");
				h[state].oneKeyHand();
			break;
		case "2": // key: 2
				console.log("key: 2");
				h[state].twoKeyHand();
			break;
		case "3": // key: 3
				console.log("key: 3");
				h[state].treeKeyHand();
			break;
		case "4": // key: 4
				console.log("key: 4");
				h[state].fourKeyHand();
			break;
		case "5": // key: 5
				console.log("key: 5");
				h[state].fiveKeyHand();
			break;
		case "6": // key: 6
				console.log("key: 6");
				h[state].sixKeyHand();
			break;
		case "7": // key: 7
				console.log("key: 7");
				h[state].sevenKeyHand();
			break;
		case "8": // key: 8
				console.log("key: 8");
				h[state].eightKeyHand();
			break;
		case "9": // key: 9
				console.log("key: 9");
				h[state].nineKeyHand();
			break;
		case "A": // key: A
				console.log("key: A");
				h[state].aKeyHand();
			break;
		case "B": // key: B
				console.log("key: B");
				h[state].bKeyHand();
			break;
		case "C": // key: C
				console.log("key: C");
				h[state].cKeyHand();
		break;
		case "D": // key: D
				console.log("key: D");
				h[state].dKeyHand();
			break;
		case "#": // key: #(HASH) or H
				//it isnt Hasj
				console.log("key: #");
				h[state].hashKeyHand();
			break;
		case "*": // key: *(STAR) or S
				console.log("key: *");
				h[state].starKeyHand();
			break;
		case "J": // key: #(HASH) or H
				//it isnt Hasj
				console.log("key: J");
				h[state].hashKeyHand();
			break;
		case "N": // key: *(STAR) or S
				console.log("key: N");
				h[state].starKeyHand();
			break;
	    default:
	        
	}
}