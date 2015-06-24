var token = null;
var bank = null;

var ips = {
	"proh":{
		"name": "ProjectHeist",
		"ip": "http://145.24.222.156/"
	},
	"ilmg":{
		"name": "illumiNatedGroup",
		"ip": "http://145.24.222.103:8080/"
	},
	"atmb":{
		"name": "ATM bank",
		"ip": "http://145.24.222.217:8080/"
	},
	"sker":{
		"name": "Skerebank",
		"ip": "http://hro.cwms.cc/api/",
	},
	"mlbi":{
		"name": "MLB INC.",
		"ip": "https://145.24.222.177/"
	},
	"copo":{
		"name": "Bank CorruptCo.",
		"ip": "http://145.24.222.150/"
	}
};

function login (pasNr, pin) {
	console.log("new login api");
	var bank = pasNr.substring(0,4);

	console.log(bank+" selected");

	$.ajax({
		url: ips[bank].ip+"login",
		data: {"pasNr": pasNr, "pin": pin},
		success: function (data){console.log("in ajax");loginHand(data);},
		error: function( jqXHR, textStatus, errorThrown ){
			console.log(textStatus);
		},
		method: "POST",
		async: false,
		dataType: "json"
	});
	console.log("after ajax");
}

function loginHand(data){
	console.log("login hand")
	if(data.error === {}){
		console.log("success")
		token = data.success.token;
		bank =  ips[bank];
	}else{
		console.log(data.error)
	}
}