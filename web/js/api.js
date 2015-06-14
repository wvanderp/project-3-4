var token = null;

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

	$.ajax({
		url: ips[bank]+"login",
		data: {"pasNr": pasNr, "pin": pin},
		success: function (data) {
			if(data.error === {}){
				data.success.token = token;
			}else{
				console.log(data.error)
			}
		},
		method: "POST",
		async: false,
		dataType: "json"
	});

}