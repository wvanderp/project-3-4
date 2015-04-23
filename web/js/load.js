function loadView(page){
	$.ajax({
		url: "views/"+page+".html",
		data: {},
		success: function (data) {
			$("#viewer").empty();
			$("#viewer").html(data);
		},
		async: false,
		dataType: "html"
	});
}