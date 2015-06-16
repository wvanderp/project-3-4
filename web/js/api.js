var token = null;
var bank = null;

function login (pasNr, pin) {
	var bank = pasNr.substring(0,3);

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


	var ret = 0;
	$.ajax({
		url: ips[bank]+"login",
		data: {"pasNr": pasNr, "pin": pin},
		success: function (data) {
			if(data.error === {}){
				token = data.success.token;
				bank =  ips[bank];
				ret = -1
			}else{
				console.log(data.error)
				res = data.error.code;
			}
		},
		method: "POST",
		async: false,
		dataType: "json"
	});

	return ret;
}