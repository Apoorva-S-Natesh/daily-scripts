//Array objects
/* The Array object, enables storing a collection of multiple items under a single 
variable name,(not continuous memory location on heap) and has members for performing common array operations. */

var arr1 = [10, 21, 30, 43, 50];

// console.log("Element at 0th Index: ", arr1[0]);
// console.log("Element at 2nd Index: ", arr1[2]);
for (var i=0; i < arr1.length; i++)
	console.log(`Element at index ${i} : `, arr1[i]);
console.log("Index of 0 in array : ", arr1.indexOf("0"));
console.log("Index of 10 in array : ", arr1.indexOf(10));
console.log(typeof arr1);

//In JS arrays can store homegenous and heterogenous data(data with different datatypes)
var arr2 = [10, 40.450498, 'App', true, {name: 'development', code: 20}, ()=>console.log("Can store any type"), ['a', 'b', 'c']];
for (var i=0; i < arr2.length; i++)
	console.log(`Element at index ${i} : `, arr2[i]);

/////////////////////////////  JSON object  ////////////////////////////////////

const s4 = {
	Name : 'I have no name',
	Age : 21,
	Fees_Paid : 2001.095,
	Work_Experience : {
		ABC: '2 years',
		LMN: '1 year'
	},
	Marks : {
		Maths:99,
		Science: 100,
	},
	Percentage:['Sem I: 89', 'Sem II: 85', 'Sem III: 88'],
	Performance: ()=>console.log('Good'),
}

console.log(s4 ,typeof s4);
console.log(s4.Age, typeof s4.Age)
console.log(s4.Name, typeof s4.Name)
console.log(s4.Marks, typeof s4.Marks)
console.log("Science marks", s4.Marks.Science);
console.log("percentage", s4.Percentage[2])

////////////////////////////  function object  /////////////////////////////////

//functions also occupy space in heap memory in js hence a function is also an object

function greet(){ //greet is the reference variable //pointing to the function
	console.log("Hello");
}
greet(); //need not write greet. , can directly invoke using greet()
console.log(greet);
console.log(greet, typeof greet); //function is the type of this object.


function identifyDataTye(value) {
	if (value === null) return "Null"; //because null is an object an want to return that its null
	if (Array.isArray(value)) return "Array"; //we want to return that its an array and not object
	return typeof value; //for other datatypes returns its type
}

console.log(identifyDataTye(null));
console.log(identifyDataTye(arr1));
console.log(identifyDataTye(70));

/////////////////////////  ARRAY METHODS IN JS   //////////////////////////////
// for (var i=0; i < arr1.length; i++) {
// 	if (arr1[i] % 2 == 1)
// 		console.log(arr1[i]);
// }

arr1.push(55); //Append element at the end of the array
console.log(arr1);

arr1.unshift(3); //Append element at the 0th index
console.log(arr1);

//pop() -removes last element
console.log("Removed element is: ", arr1.pop()); //Removes the last element from array and returns it
console.log(arr1);

//shift() - removes first element
console.log("Removed element by shift", arr1.shift())//Removes element from 0th index (first element)
console.log(arr1);

////Modifying and accessing elements
//splice(startIndex, deleteCount, item1,item2 ...)
//item1,item2 are optional, elements to add into the array at the start position

let colors = new Array("red", "green", "blue", "yellow", "purple", "orange"); // another way of declaring array using Array constructor
console.log(colors);
colors.splice(1, 2, "pink", "black"); // [green, blue] replaced with [pink, black]
console.log(colors);

arr1.push(70, 98, 6);
console.log(arr1); //[10, 21, 30, 43, 50, 70, 80, 90]
console.log("deleted elemnts are: ",arr1.splice(3, 2)); //[43, 50] removed could also give what elements should replace these elements
console.log(arr1); //[10, 21, 30, 70, 80, 90]

/////slice() - returns a shallow copy of a portion of an array witout modifying the original array. Extracts sub part of array
console.log(arr1.slice(1,3)); // slice(startIndex, endIndex(exclusive)), emdIndex is not included
console.log(arr1);

//indexOf() - returns index of specific element
//In case not present gives -1, in case 2 are present gives the index of the first occurance
console.log(arr1.indexOf(70));

//// includes() - checks if an element is present or not - returns true or false
console.log(arr1.includes(300));

/// sort() - sorts elements in place as strings by default
let letters = ["c", "e", "d", "a", "b"];
letters.sort();
console.log(letters);
arr1.sort();
console.log(arr1); // Since everything is considered as string it compares the characters like string so doesnt sort numbers

//// reverse() - reverse the order of elements // not reverse sorting just reversing the characters
letters.reverse();
console.log(letters);
arr1.reverse();
console.log(arr1); 

///concat() - combines two or more arrays and returns a new array
let arr4 = [100, 200];
let combined = arr1.concat(arr4);
console.log(combined);

//// join() - joins all the elements of an array into a string, with or without separator
let words =["Hell", "O", "WOrld", "!!"];
let sentence = words.join(""); // HellOWOrld!!
//let sentence = words.join("-"); // Hell-O-WOrld-!!
console.log(sentence);

/// Destrcturing array /
// array unpacking - way to unpack values from arrays into distinct variables (separate variables, not array)
let fruits = ['apple', 'banana', 'grape', 'guava', 'nut'];
let [fruit1, fruit2] = fruits;
console.log(fruit1); //apple
console.log(fruit2); //banana
console.log(fruits); //Original array not changed and still contains these elements

///////////////////   Array Iteration Methods  ///////////////////////////////////

// forEach() - iterate though the array, forEach accepts a function as the parameter
//executes a function once for each array element.

arr1.forEach(function(element, index){ //first parameter of function is each element of array, second parameter is index of the element
	console.log("element is", element,'Index is', index);
});

fruits.forEach(function(fruit){
	console.log(fruit+'s'); //concat an 's' for each fruit
});

//// filter() - creates a new array with elements that pass the test
let even = [];
for (var i=0; i< arr1.length; i++)
	if(arr1[i] % 2 === 0)
		even.push(arr1[i]);
console.log("even array using the normal for loop : ", even);

///now using filter(function)
let divTen = arr1.filter((ele)=> ele%10 === 0);
console.log("divisible by 10 array using filter : ", divTen);

//filter(function), here using the arrow function and for each element of the array check something so (ele)
//array.fiter((each_ele)=>{function block});
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

////  map() - creates a new array by applying a specified function to each element of an existing array
// Does not modify the original array but instead returns a new array with transformed values.

//array.map((element, index, array) => {return newElement;});
//find square of all elements in array
var sq_arr = array.map(function(ele){
	return ele * ele;
})
console.log("square array: ", sq_arr);
//same thing using arrow function
//sq_arr = array.map((ele)=>ele*ele)

//Assignment:
//WAP to to find and print all even numbers from an array
let numbers = [1,2,3,4,5];
//numbers.filter(function(){}) //filter accepts a function as parameter, so write it this way and start
var newArr = numbers.filter(function(ele){
	if (ele%2 === 0)
		return ele; //where should it return? so make use of another variable and assign this whole thing to it
})
//using arrow function
//var newArr = numbers.filter((ele)=>ele%2===0);
console.log('Original Array: ', numbers);
console.log('Even Array: ', newArr);

//WAP to find and add all odd elements from an array into new array.
let numbers1 =[1,2,3,4,5,6];
let newArr1 = numbers.filter(function(ele){
	if(ele%2 === 1)
		return (ele);
})
console.log('Original Array: ', numbers1);
console.log('odd Array: ', newArr1);

//// reduce() - it reduces the output to a single value by applying a funciton
//reduce(function(acc,ele){code})
//WAP to find sum of all elements present in an array
let sum = numbers1.reduce((accumulator, ele)=>accumulator+ele, 0) // 0 is the initial value of the accumulator
console.log('Original Arrat: ', numbers1);
console.log('Reduced array, sum of numbers: ', sum);

//WAP to find Product of all elements present in an array.
let product = numbers1.reduce((acc,ele)=>acc*ele, 1);
console.log('Reduced array, product of numbers: ', product);
//WAP to add +5 to each element of an array and print it.
let numbers4 = [1, 2,3,4];
let newArr4 = numbers4.map((ele)=>ele+5);
//WAP to find squuare of each element present in an array
let numbers5 = [1,2,3,4,5];
let newArr5 = numbers5.map((ele)=>ele*ele);
//WAP tp find all leap years in an array
let years=[1996, 2000, 1997, 1994];
let leapYear = years.filter(function(year){
	if (year % 4 === 0) {
		if (year % 400 === 0 && year % 100 === 0)
			return(year);
		return(year);
	}
})
console.log(leapYear);

/// A FUNCTION BEING PASSED AS AN ARGUMENT IS CALLED CALLBACK FUNCTION (most of the time arrow fuction)
/* 	let array = [10,11,12,13]
	new Array = array.filter(we are sending funtcion as argument, callback function name is not required)
	new Array = array.filter((ele)=>{code block} or one line expression) 
	if callback function has only one expression, then return is by default so we dont have to mention retrun.
	if {} is used then we need to add the return keyword.
	newArray = array.filter((ele)=>ele%2===0)*/
