function loadview(page){
	$.get("views/"+page+".html",function(data){
		$("#viewer").empty();
		$("#viewer").text(data);
	});
}