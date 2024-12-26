//Array objects
/* The Array object, enables storing a collection of multiple items under a single 
variable name,(not continuous memory location on heap) and has members for performing common array operations. */

var arr1 = [10, 20, 30, 40];

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

////////////////////////////////////////////////////////////////////////////////
//JSON object
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

////////////////////////////////////////////////////////////////////////////////
//function object
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
