window.onkeydown = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;

	switch(code) {
		case 48: // key: 0
				console.log(code);
			break;
		case 49: // key: 1
				console.log(code);
			break;
		case 50: // key: 2
				console.log(code);
			break;
		case 51: // key: 3
				console.log(code);
			break;
		case 52: // key: 4
				console.log(code);
			break;
		case 53: // key: 5
				console.log(code);
			break;
		case 54: // key: 6
				console.log(code);
			break;
		case 55: // key: 7
				console.log(code);
			break;
		case 56: // key: 8
				console.log(code);
			break;
		case 57: // key: 9
				console.log(code);
			break;
		case 65: // key: A
				console.log(code);
			break;
		case 66: // key: B
				console.log(code);
			break;
		case 67: // key: C
				console.log(code);
			break;
		case 68: // key: D
				console.log(code);
			break;
		case 72: // key: #(HASH) or H
				console.log(code);
			break;
		case 83: // key: *(STAR) or S
				console.log(code);
			break;
		case 76: // key: L (for loading card) 
				loadCard(1);
			break;
	    default:
	        
	}
}