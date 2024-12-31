//if-else
var age = 15;
if (age > 18) {
	console.log("Age is Greater than 18")
} else {
	console.log('Age is not geater then 18')
}

// SWITCH control construct
let day = "Wednesday";

switch(day) {
	case "Monday":
		console.log('Start of the work week!');
		break;
	case 'Tuesday':
		console.log("it's Tuesday!");
		break;
	case "Friday":
		console.log('Almost weekend!');
		break;
	default:
		console.log("just another day");
}

//LOOPING constructs
//for loop
for (var i=0; i<=10; i++) {
	console.log(i);
}

//while loop
let count = 1;
while (count <= 5) {
	console.log("COunt is:", count);
	count++;
}

//do while loop
let number = 1;
do {
	console.log("Number :" , number);
	number++;
} while (number <= 3);


//for..of loop
//for..of loop iterates over iterable objects like arrays and returns the values of each item
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
	console.log(fruit);
}

//for...in loop
//for...in loop iterates over the properties of an object and returns each key

let person = { name:"Apoorva", age: 27};
for (let key in person) {
	console.log(key + ": " + person[key]);
}

//forEach loop
//iterates over each item in an array and applies a function to each element.
//array.forEach(function(element, index, array) {code to execute});
//element: the current element being processed in the array
//index(optional) : The index of the current element.
//array(optional) : The array that forEach is called on.

let colors = ["red", "blue", "green", "yellow"];
colors.forEach(function(color, index) {
	console.log(`color at index ${index} is ${color}`);
});

let arr1 = [10, 20, 30, 40, 50];
arr1.forEach((ele, index, complete_Array)=>console.log(ele, index, complete_Array));

//control flow modifiers
//break statement - exit loop early
for (let i=1; i <= 5; i++) {
	if (i === 3)
		break;
	console.log(i);
}

//continue statement - skip current iteration
for (let i = 1; i <= 5; i++) {
	if (i === 3) continue;
	console.log(i);
}