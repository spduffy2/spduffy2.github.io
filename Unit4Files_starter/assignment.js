console.log("Hello World!")

// #5
var s = "Hello World!";
if (s.length != 16) {
	alert("s does not contain a string of length 16");
}

// #6
for(var i = 10; i >= 0; i--) {
	alert(i);
}

// #7
var product = 1;
for(var i = 2; i <= 20; i++) {
	product = product * i;
}

// #8
var dog = {name: 'Buster', breed: 'Chihuahua', birthday: '2002-10-13'};
for (var p in dog) {
    alert(dog[p]);
}

// #9
// x < y ? x : y can be used to get the smaller of two values

// #10
var numbers = prompt("Please enter a string containing numbers separated by spaces", "");
var nums = numbers.split(" ");
var minimum = parseInt(nums[0]);
var maximum = parseInt(nums[0]);
var sum = 0;
for (var i in nums) {
	var x = parseInt(nums[i]);
	minimum = x < minimum ? x : minimum;
	maximum = x > maximum ? x : maximum;
	sum += x;
}
alert("Minimum is " + minimum);
alert("Maximum is " + maximum);
alert("Sum is " + sum);

// #11
var picks = {
    Alice: [4, 52, 9, 1, 30, 2],
    Boris: [14, 9, 3, 6, 22, 40],
    Chi: [51, 53, 48, 21, 17, 8],
    Dinh: [1, 2, 3, 4, 5, 6],
};

var found = false;
var person;
Search: for (person in picks) {
    var choices = picks[person];
    for (var i = 0; i < choices.length; i += 1) {
        if (choices[i] === 51) {
            found = true;
            break Search;
        }
    }
    person = null;
}
alert(found);
alert(person);