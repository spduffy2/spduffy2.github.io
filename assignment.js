
function problemOne(){
	
	console.log("This is" + "a concatenated" + "string" + "!");
	
}

/*=============================================================================*/
function problemTwo(){
	
	var fruits = ["bananas", "apples", "oranges", "kiwis", "lemons"];
	
	for(var i = 0; i < fruits.length; i++){
		
		var element = fruits[i];
		
		for(var j = 0; j < element.length; j++){
			console.log(element[j]);
		}
	}
}

/*=============================================================================*/
var hidden = false;
function problemThree(){
	if(hidden === false){
		$("#purple-box").hide();
		hidden = true;
	}
	else {
		$("#purple-box").show();
		hidden = false;
	}
}

/*=============================================================================*/
var ctr = 0;
function problemFour(){

	var txt = "The # of clicks is: ";
	ctr = ctr + 1;
	txt = txt + ctr;
	
	console.log(txt);
}

/*=============================================================================*/
var car = {
	make: "Chevrolet",
	year: 2008,
	model: "Silverado",
	trimPackage: null
};

function problemFive(){
	
	$.each(car, function(key, val){
		console.log("the property '" + key + "' has the value: " + val);
	})
	
}

/*=============================================================================*/
$(document).ready(function(){
	
	problemOne();
	problemTwo();
	
	$("#btn1").click(problemThree);
	$("#btn2").click(problemFour);
	$("#btn3").on("click", problemFive);
});