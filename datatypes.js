//Primitive datatypes

let a=8.909090
console.log(a, typeof a);

a=10;
console.log(a, typeof a);

a = 10/0;
console.log(a, typeof a);

let d="string is here";
console.log(d, typeof d);

d=true;
console.log(d, typeof d);

d=null; //null is an object or type of data
console.log(d, typeof d);

//non relational database
//Javascript object Notaiton - JSON format of storing objects in key value pairs

const s1 = {
	Name : "Apoo",
	Age : 28,
}
const s2 = {
	Name : "Jay",
	Occupation : "SCientist",
}

const s3 = {
	Name : "gubbi mari",
	Work_Experience : {
		XYZ : '3 months',
		ABC : '1 year',
	}
}

//Different objects in Javascript
//Objects //JSON objects
//Data types: Object, String, number, boolean, null, undefined
//objects types: 
// 1. JSON object{key: value pair}, 
// 2. Array object[element, element2, ..]
// 3. Functions

//Example

const s4 = {
	Name : 'Gubbi mari',
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