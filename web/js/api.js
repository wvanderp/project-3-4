var apiUrl = "http://hro.cwms.cc/api/";

function CheckPinCode (pasNr, pinCode) {
	var result = null;
	console.log(apiUrl+"CheckPinCode.php?pasNr="+pasNr+"&pinCode="+pinCode);
	$.ajax({
		url: apiUrl+"CheckPinCode.php",
		data: {"pasNr": pasNr, "pinCode": pinCode},
		success: function (data) {
			// console.log(data);
			// console.log("url data: "+data)
			result = data;
		},
		async: false,
		dataType: "json"
	});
	return result;
}

function pas2bankrekening (pasNr) {
	var result = null;
	console.log(apiUrl+"pas2bankrekening.php?pasNr="+pasNr);
	$.ajax({
		url: apiUrl+"CheckPinCode.php",
		data: {"pasNr": pasNr},
		success: function (data) {
			console.log(data);
			// console.log("url data: "+data)
			result = data;
		},
		async: false,
		dataType: "json"
	});
	return result;
}