var interval = null;

$(document).ready(function () {
	interval = setInterval(reload, 10000);
	console.log("brouser will reload in 10 sec");
});

function reload () {
	clearInterval(interval);
	location.reload();
}