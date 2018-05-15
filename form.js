$(document).ready(function() {
	$(":text, :password").after("<span></span>");
	
	$("#email").focus();
	
	var today = new Date();
	var month = today.getMonth() + 1; // Add 1 since months start at 0
	var day = today.getDate();
	var year = today.getFullYear();
	var dateText = ((month < 10) ? "0" + month : month) + "/"; // Pad month
	dateText += ((day < 10) ? "0" + day : day) + "/"; // Pad date
	dateText += year;
	$("#movie_date").val(dateText);
	
	$("#movie_form").submit(
		function(event) {
			var isValid = true;
			
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			} 

			var firstName = $("#first_name").val().trim();
			if (firstName == "") {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#first_name").val(firstName);
				$("#first_name").next().text("");
			}

			var lastName = $("#last_name").val().trim();
			if (lastName == "") {
				$("#last_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#last_name").val(lastName);
				$("#last_name").next().text("");
			}

			$("#movie_date").next().text("");
			
			if (isValid == false) {
				event.preventDefault();				
			}
		} // end function
	);	// end submit
}); // end ready