window.onkeydown = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;
	console.log(code);
	switch(code) {
		case 48: // key: 0
				zeroKeyHand();
			break;
		case 49: // key: 1
				oneKeyHand();
			break;
		case 50: // key: 2
				twoKeyHand();
			break;
		case 51: // key: 3
				treeKeyHand();
			break;
		case 52: // key: 4
				fourKeyHand();
			break;
		case 53: // key: 5
				fiveKeyHand();
			break;
		case 54: // key: 6
				sixKeyHand();
			break;
		case 55: // key: 7
				sevenKeyHand();
			break;
		case 56: // key: 8
				eightKeyHand();
			break;
		case 57: // key: 9
				nineKeyHand();
			break;
		case 65: // key: A
				aKeyHand();
			break;
		case 66: // key: B
				bKeyHand();
			break;
		case 67: // key: C
				cKeyHand();
			break;
		case 68: // key: D
				dKeyHand();
			break;
		case 72: // key: #(HASH) or H
				//it isnt Hasj
				hashKeyHand();
			break;
		case 83: // key: *(STAR) or S
				starHand();;
			break;
		case 76: // key: L (for loading card) 
				loadCard(1);
			break;
	    default:
	        
	}
}