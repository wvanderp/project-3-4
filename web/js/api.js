var apiUrl = "http://hro.cwms.cc/api/";
var api = {
	bankRekening: {
		getTypeUrl:apiUrl+"type.php",
		getType: function (br) {
			$.post(api.bankRekening.getTypeUrl+"?br="+br, {}, function (data) {
				if (true) {};
			});
		}
	},
	validatieToken: "",

}
