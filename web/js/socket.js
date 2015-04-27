var io = require("socket.io")(1234);

var last = null;
var intervalId = null;

io.on("connect", function (socket) {
	console.log("Socket connected");
	socket.on("keystroke", function (stroke){
		if (stroke !== last) {
			last = stroke;
			intervalId = setInterval(resetLast, 300);
			console.log(stroke);
			keypad(stroke);
		};
	})
	socket.on("card", function (card) {
		if (card !== last) {
			last = card;
			intervalId = setInterval(resetLast, 300);
			console.log(card);
			loadCard(card);
		}
	})
});


function resetLast () {
	last = null;
	clearInterval(intervalId);	
}