function calculator(arg1, action, arg2) {
	if (arg1 === null || arg1 === undefined || action === null || action === undefined || arg2 === null || arg2 === undefined) {
		return "INVALID";
	} else if (isNaN(arg1) || isNaN(arg2)) {
		return "INVALID";
	} else if (action !== "add" && action !== "subtract" && action !== "multiply" && action !== "divide") {
		return "INVALID";
	}

	if (action === "add") {
		return arg1 + arg2;
	} else if (action === "subtract") {
		return arg1 - arg2;
	} else if (action === "multiply") {
		return arg1 * arg2;
	} else if (action === "divide") {
		return arg1 / arg2;
	}
}

function calcTest() {
	var a = calculator(2, "add", 2);
	console.log(a === "INVALID" ? "INVALID" : "The result is '" + a + "'");
	var b = calculator("a", "add", "0");
	console.log(b === "INVALID" ? "INVALID" : "The result is '" + b + "'");
	var c = calculator(10, "divide", 2);
	console.log(c === "INVALID" ? "INVALID" : "The result is '" + c + "'");
	var d = calculator(3, "multiply", 3);
	console.log(d === "INVALID" ? "INVALID" : "The result is '" + d + "'");
}

function objectCalculator(calcArgs) {
	if (calcArgs.arg1 === null || calcArgs["action"] === null || calcArgs["action"] === undefined || calcArgs.arg2 === null) {
		return "INVALID";
	} else if (isNaN(calcArgs.arg1) || isNaN(calcArgs.arg2)) {
		return "INVALID";
	} else if (calcArgs["action"] !== "add" && calcArgs["action"] !== "subtract" && calcArgs["action"] !== "multiply" && calcArgs["action"] !== "divide") {
		return "INVALID";
	}

	if (calcArgs["action"] === "add") {
		return calcArgs.arg1 + calcArgs.arg2;
	} else if (calcArgs["action"] === "subtract") {
		return calcArgs.arg1 - calcArgs.arg2;
	} else if (calcArgs["action"] === "multiply") {
		return calcArgs.arg1 * calcArgs.arg2;
	} else if (calcArgs["action"] === "divide") {
		return calcArgs.arg1 / calcArgs.arg2;
	}
}

function calcTest2() {
	var testData = [{arg1: 2, action: "add", arg2: 2},
					{arg1: "a", action: "add", arg2: "0"},
					{arg1: 10, action: "divide", arg2: 2},
					{arg1: 3, action: "multiply", arg2: 3}];

	for (var element in testData) {
		var result = objectCalculator(testData[element]);
		console.log(result === "INVALID" ? "INVALID" : "The result is '" + result + "'");
	}
}