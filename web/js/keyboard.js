window.onkeydown = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;
	// console.log(code);
	switch(code) {
		case 48: // key: 0
				console.log("key: 0");
				zeroKeyHand();
			break;
		case 49: // key: 1
				console.log("key: 1");
				oneKeyHand();
			break;
		case 50: // key: 2
				console.log("key: 2");
				twoKeyHand();
			break;
		case 51: // key: 3
				console.log("key: 3");
				treeKeyHand();
			break;
		case 52: // key: 4
				console.log("key: 4");
				fourKeyHand();
			break;
		case 53: // key: 5
				console.log("key: 5");
				fiveKeyHand();
			break;
		case 54: // key: 6
				console.log("key: 6");
				sixKeyHand();
			break;
		case 55: // key: 7
				console.log("key: 7");
				sevenKeyHand();
			break;
		case 56: // key: 8
				console.log("key: 8");
				eightKeyHand();
			break;
		case 57: // key: 9
				console.log("key: 9");
				nineKeyHand();
			break;
		case 65: // key: A
				console.log("key: A");
				aKeyHand();
			break;
		case 66: // key: B
				console.log("key: B");
				bKeyHand();
			break;
		case 67: // key: C
				console.log("key: C");
				cKeyHand();
			break;
		case 68: // key: D
				console.log("key: D");
				dKeyHand();
			break;
		case 72: // key: #(HASH) or H
				//it isnt Hasj
				console.log("key: #");
				hashKeyHand();
			break;
		case 83: // key: *(STAR) or S
				console.log("key: *");
				starHand();
			break;
		case 74: // key: j
				//it isnt Hasj
				console.log("key: #");
				hashKeyHand();
			break;
		case 78: // key: n
				console.log("key: *");
				starHand();
			break;
		case 76: // key: L (for loading card) 
				console.log("key: load");
				loadCard(1);
			break;
	    default:
	        
	}
}