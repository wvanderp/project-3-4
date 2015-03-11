function loadView(page){
	$.get("views/"+page+".html",function(data){
		// console.log(data);
		$("#viewer").empty();
		$("#viewer").html(data);
	});
}