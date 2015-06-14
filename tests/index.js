var request = require("sync-request");
var fs = require("fs");

var ips = {
			0:{
				"http": "http://",
				"name": "ProjectHeist",
				"ip": "145.24.222.156", 
				"port": 80,
				"end": "/"
			},
			1:{
				"http": "http://",
				"name": "illumiNatedGroup",
				"ip": "145.24.222.103",
				"port":  8080,
				"end":  "/"
			},
			2:{
				"http": "http://",
				"name": "ATM bank",
				"ip": "145.24.222.217",
				"port":  8080,
				"end":  "/"
			},
			3:{
				"http": "http://",
				"name": "Skerebank",
				"ip": "hro.cwms.cc",
				"port":  80,
				"end":  "/api/"
			},
			4:{
				"http": "https://",
				"name": "MLB INC.",
				"ip": "145.24.222.177",
				"port":  443,
				"end":  "/"
			},
			5:{
				"http": "http://",
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
			wget(hosts, "")
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
	var report = hosts.report;
	//404
	var test404 = wget(hosts, "login");
	if(test404.statusCode !== 200){
		report.login = false;
		return
	}else{
		report.login = {};
	}
	// no pas nummer
	var noPasReq = wget(hosts, "login", "pin=1234");
	console.log(noPasReq);
	//no pincode
	var test404 = wget(hosts, "login");
	//string to pas
	var test404 = wget(hosts, "login");
	//sting to pin
}

function balance (hosts) {
	var report = hosts.report;
	var test404 = wget(hosts, "balance");
	if(test404.statusCode !== 200){
		report.balance = false;
	}else{
		report.balance = {};
	}
}

function withdraw (hosts) {
	var report = hosts.report;
	var test404 = wget(hosts, "withdraw");
	if(test404.statusCode !== 200){
		report.withdraw = false;
	}else{
		report.withdraw = {};
	}
}

function logout (hosts) {
	var report = hosts.report;
	var test404 = wget(hosts, "logout");
	if(test404.statusCode !== 200){
		report.logout = false;
	}else{
		report.logout = {};
	}
}

function wget(hosts, url, post){

	var res;
	if (typeof post !== 'undefined') {
		if(hosts.port != 80 && hosts.port != 443) {
			console.log('POST', hosts.http+hosts.ip+":"+hosts.port+hosts.end+url, post);
			res = request('POST', hosts.http+hosts.ip+":"+hosts.port+hosts.end+url, {"body": post});
		}else {
			console.log('POST', hosts.http+hosts.ip+hosts.end+url, post);
			res = request('POST', hosts.http+hosts.ip+hosts.end+url, {"body": post});
		}
	}else{
		if(hosts.port != 80 && hosts.port != 443) {
			console.log('POST', hosts.http+hosts.ip+":"+hosts.port+hosts.end+url);
			res = request('POST', hosts.http+hosts.ip+":"+hosts.port+hosts.end+url);
		}else {
			console.log('POST', hosts.http+hosts.ip+hosts.end+url);
			res = request('POST', hosts.http+hosts.ip+hosts.end+url);
		}
	}
	return res;
}