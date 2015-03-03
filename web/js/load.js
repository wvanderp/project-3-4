function loadView(page){
	$.get("views/"+page+".html",function(data){
		$("#viewer").empty();
		$("#viewer").html(data);
	});
}