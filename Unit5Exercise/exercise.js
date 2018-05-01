// #1
function average(num1, num2) {
	return (num1 + num2) / 2;
}

// #2
function squareArray1(arr) {
	var result = [];
	for (i = 0; i < arr.length; i += 1) {
		result[i] = arr[i] * arr[i];
	}
	return result;
}

function squareArray2(arr) {
	for (i = 0; i < arr.length; i += 1) {
		arr[i] = arr[i] * arr[i];
	}
}

// #3
function fibonacci(num) {
	var f = [0, 1];

    for (var i = 3; i <= num; i += 1) {
        f.push(f[f.length - 1] + f[f.length - 2]);
    }
    return f;
}

// #4
// a) -4
// b) 3
// c) 5
// d) f (x,y) { this.x = x; this.y = y;}

// #5
// a) a Date object is created
// b) a date object is created with a year of 2017, a month of 0 (January) and a day of 20
// c) The number of milliseconds between the two dates

// #6
function again(f, x) {
	return f(x);
}

// #7
var square = function(x) {
	return x * x;
}

function toTheEighthPower(x) {
	return again(square, again(square, again(square, x)));
}