var io = require("socket.io")(1234);

io.on("connect", function (socket) {
	console.log("Socket connected");
	socket.on("keystroke", function (stroke){
		console.log(stroke);
		keypad(stroke);
	})
	socket.on("card", function (card) {
		console.log(card);
		loadCard(card);
	})
});
