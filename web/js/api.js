var token = null;
var bank = null;

var atempts = 0;

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
		"ip": "http://145.24.222.177/"
	},
	"copo":{
		"name": "Bank CorruptCo.",
		"ip": "http://145.24.222.150/"
	}
};

function login (pasNr, pin) {
	console.log("new login api");
	bank = pasNr.substring(0,4).toLowerCase();
	
	console.log(bank+" selected");
	console.log("pas: '"+pasNr+"' pin: '"+pin+"'");

	$.ajax({
		url: ips[bank].ip+"login",
		data: {"cardId": pasNr, "pin": pin},
		success: function (data){loginHand(data);},
		error: function( jqXHR, textStatus, errorThrown ){
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
			loadView("foutMelding")
		},
		method: "POST",
		async: false,
		dataType: "json"
		// dataType: "text"

	});
}

function loginHand(data){
	if($.isEmptyObject(data.error)){
		console.log("success")
		// console.log(data);
		window.token = data.success.token;
		loadView("mainMenu");
	}else{
		console.log("error");
		console.log(data.error);
		//als de pincode gewoon fout is
		if (data.error.code == 15) {
			console.log("pincode fout");
			atempts = data.error.failedAttempts;
			loadPinVragenMsg("pinInVullen");
			return
		};

		//als je geblokeerd bent.
		if (data.error.code == 16) {
			console.log("geblokeerd");
			loadView("pincodeFout");
			return
		};
		
		loadView("foutMelding")
	}
}

function balance () {
	console.log("new balance api");
	console.log("token: '"+token+"'");

	var resp = null

	$.ajax({
		url: ips[bank].ip+"balance",
		beforeSend: function(xhr){xhr.setRequestHeader('token', token);},
		success: function (data){resp = balanceHand(data);},
		error: function( jqXHR, textStatus, errorThrown ){
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
		},
		method: "POST",
		async: false,
		dataType: "json"
	});

	return resp;
}

function balanceHand(data){
	if($.isEmptyObject(data.error)){
		console.log("success");
		console.log("data");
		return data.success.balance;
	}else{
		console.log("error");
		console.log(data.error);
		loadView("foutMelding");
	}
}

function withdraw (amount, klein, middel, groot) {
	console.log("new withdraw api");
	console.log("token: '"+token+"' amount: '"+amount+"'");

	var resp = null

	$.ajax({
		url: ips[bank].ip+"withdraw",
		data: {"amount": amount},
		beforeSend: function(xhr){xhr.setRequestHeader('token', token);},
		success: function (data){resp = withdrawHand(data, amount, klein, middel, groot);},
		error: function( jqXHR, textStatus, errorThrown ){
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
		},
		method: "POST",
		async: false,
		dataType: "json"
	});

	return resp;
}

function withdrawHand(data, amount, klein, middel, groot){
	if($.isEmptyObject(data.error)){
		console.log("success");
		dispence (amount, klein, middel, groot);
		loadView("bonVragen");
	}else{
		console.log("error");
		if(data.error.code == 32){	
			loadWitdrawError();
		}else{
			console.log(data.error);
			loadView("foutMelding");
		}
	}
}

function logout () {
	console.log("new logout api");
	console.log("token: '"+token+"'");

	var resp = null

	$.ajax({
		url: ips[bank].ip+"logout",
		beforeSend: function(xhr){xhr.setRequestHeader('token', token);},
		success: function (data){resp = logoutHand(data);},
		error: function( jqXHR, textStatus, errorThrown ){
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
		},
		method: "POST",
		async: false,
		dataType: "json"
	});

	return resp;
}

function logouteHand(data){
	if($.isEmptyObject(data.error)){
		console.log("success");
	}else{
		console.log("error");	
		console.log(data.error);
		loadView("foutMelding");
	}
}