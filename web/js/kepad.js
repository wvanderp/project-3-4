function keypad (code){
		switch(code) {
			case "0": // key: 0
					console.log("key: 0");
					zeroKeyHand();
				break;
			case "1": // key: 1
					console.log("key: 1");
					oneKeyHand();
				break;
			case "2": // key: 2
					console.log("key: 2");
					twoKeyHand();
				break;
			case "3": // key: 3
					console.log("key: 3");
					treeKeyHand();
				break;
			case "4": // key: 4
					console.log("key: 4");
					fourKeyHand();
				break;
			case "5": // key: 5
					console.log("key: 5");
					fiveKeyHand();
				break;
			case "6": // key: 6
					console.log("key: 6");
					sixKeyHand();
				break;
			case "7": // key: 7
					console.log("key: 7");
					sevenKeyHand();
				break;
			case "8": // key: 8
					console.log("key: 8");
					eightKeyHand();
				break;
			case "9": // key: 9
					console.log("key: 9");
					nineKeyHand();
				break;
			case "a": // key: A
					console.log("key: A");
					aKeyHand();
				break;
			case "b": // key: B
					console.log("key: B");
					bKeyHand();
				break;
			case "c": // key: C
					console.log("key: C");
					cKeyHand();
				break;
			case "d": // key: D
					console.log("key: D");
					dKeyHand();
				break;
			case "#": // key: #(HASH) or H
					//it isnt Hasj
					console.log("key: #");
					hashKeyHand();
				break;
			case "*": // key: *(STAR) or S
					console.log("key: *");
					starHand();
				break;
		    default:
		        
		}
	}
}