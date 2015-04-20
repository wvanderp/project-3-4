var apiUrl = "http://hro.cwms.cc/api/";

function CheckPinCode (pasNr, pinCode) {
	var ret = false;
	console.log(apiUrl+"CheckPinCode.php?pasNr="+pasNr+"&pinCode="+pinCode);
	return $.post(apiUrl+"CheckPinCode.php?pasNr="+pasNr+"&pinCode="+pinCode, {}, function (data) {
		console.log("url data: "+data)
		ret = data
		return data;
	});
	// return ret;
}