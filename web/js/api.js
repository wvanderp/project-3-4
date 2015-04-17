var apiUrl = "http://hro.cwms.cc/api/";
var api = {
	pincode: {
		checkPinUrl: apiUrl+"CheckPinCode.php",
		checkPin: function (pasNr, pinCode) {
			var ret = false;
			$.post(api.PinCode.checkPinUrl+"?pasNr="+pasNr+"&pinCode="+pinCode, {}, function (data) {
				ret = data
			});
			return ret;
		}
	},
	bankRekening: {
		getTypeUrl: apiUrl+"type.php",
		getType: function (br) {
			$.post(api.bankRekening.getTypeUrl+"?br="+br, {}, function (data) {
				if (true) {
					
				};
			});
		}
	},
	validatieToken: "",

}
