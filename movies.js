// work on send/retrieve line 45

$(document).ready(function(){
	
	var baseUrl = "https://my.api.mockaroo.com/boxoffice.json?key=9ab79ee0";
	
	$.getJSON(baseUrl, function(data){
		$("#product-list").empty();
		$.each(data, function(i, e){
			var $gross = $("<p></p>");
			var $a = $("<a href='#'></a>");
			var $li =$("<li></li>");
			
			$a.text(e.movie_name);
			$gross.text(e.worldwide);
			
			$a.append($gross);
			$li.append($a);
			$("#movie-list").append($li);	

			$a.click(createClickHandler(e));

		});		
	});

	function createClickHandler(e) {
		return function onClick() {
			let name = "";
			name = e.movie_name;
			let worldwide = "";
			worldwide = e.worldwide;
			let domestic = "";
			domestic = e.domestic;
			let overseas = "";
			overseas = e.overseas;
			let genre = "";
			genre = e.genre;
			$("#movie-details").show();
			$("#movie-name").text(name);
			$("#worldwide").text(worldwide);
			$("#domestic").text(domestic);
			$("#overseas").text(overseas);
			$("#genre").text(genre);
		}
	}
});
