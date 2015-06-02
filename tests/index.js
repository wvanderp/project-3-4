var request = require("sync-request");
var fs = require("fs");

var ips = {
			0:{
				"name": "ProjectHeist",
				"ip": "145.24.222.156", 
				"port": 80,
				"end": "/"
			},
			1:{
				"name": "illumiNatedGroup",
				"ip": "145.24.222.103",
				"port":  8080,
				"end":  "/"
			},
			2:{
				"name": "ATM bank",
				"ip": "145.24.222.217",
				"port":  8080,
				"end":  "/"
			},
			3:{
				"name": "Skerebank",
				"ip": "hro.cwms.cc",
				"port":  80,
				"end":  "api/"
			},
			4:{
				"name": "MLB INC.",
				"ip": "145.24.222.177",
				"port":  443,
				"end":  "/"
			},
			5:{
				"name": "Bank CorruptCo.",
				"ip": "145.24.222.150",
				"port":  80,
				"end":  "/"
			}
		};


	for (i in ips) {
		hosts = ips[i];
		hosts.report = {};
		try{
			var res = request('POST', "http://"+hosts.ip+":"+hosts.port+hosts.end);
		}catch(err){
			hosts.report.ping = false;
			continue;
		}
		hosts.report.ping = true;

		//testing the login endpoint
		login(hosts)

		//testing the balance endpoint
		balance(hosts)

		//testing the withdraw endpoint
		withdraw(hosts)

		//testing the logout endpoint
		logout(hosts)


	};

//write file to comandline and file
console.log(ips);
fs.writeFileSync("./data.json", JSON.stringify(ips), 'utf-8');

function login (hosts) {
	var base = "http://"+hosts.ip+":"+hosts.port+hosts.end;
	var report = hosts.report;
	var test404 = request('POST', base+"login");
	if(test404.statusCode !== 200){
		report.login = false;
	}
}

function balance (hosts) {
	var base = "http://"+hosts.ip+":"+hosts.port+hosts.end;
	var report = hosts.report;
	var test404 = request('POST', base+"balance");
	if(test404.statusCode !== 200){
		report.balance = false;
	}
}

function withdraw (hosts) {
	var base = "http://"+hosts.ip+":"+hosts.port+hosts.end;
	var report = hosts.report;
	var test404 = request('POST', base+"withdraw");
	if(test404.statusCode !== 200){
		report.withdraw = false;
	}
}

function logout (hosts) {
	var base = "http://"+hosts.ip+":"+hosts.port+hosts.end;
	var report = hosts.report;
	var test404 = request('POST', base+"logout");
	if(test404.statusCode !== 200){
		report.logout = false;
	}
}