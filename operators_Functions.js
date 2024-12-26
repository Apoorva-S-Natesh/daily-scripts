var a=2;
console.log(2 ** 3); //exponential opreator
//to run javascript on terminal run: node javscriptFileName
console.log(10 == 10);
console.log(10 == '10');
console.log(10 === 10);
console.log(10 ==='10');

//Function without parameters and without return
function add() {
	let a = 10;
	let b = 20;
	console.log("Addition is: ",a+b);
}
add();

//Function with parameters and without return
function sub(x,y) {
	console.log("Subtraction is: ",x-y);
}
sub(200, 60);

//Function without parameters and with return
function prod() {
	let a = 15;
	let b = 9;
	return (a * b);
}
let result = prod();
console.log("Product is: ",result);

//Function with parameters and with return
function div(x, y) {
	return(x/y);
}
console.log("Quotient is: ",div(50, 5));


///types of functions

//Funtion delaration : hoisted
function greet1(name) {
	return `hello,${name}`
}

console.log(greet1('Apoorva'))


//function expression : not hoisted
let greet2 = function(name) {
	return `hello,${name}`
}
console.log(greet2('Jayanth'))

//arrow function : used for callback
let greet3 = (name)=>{
	return `hello,${name}`
}
console.log(greet3('gubbi mari'))


////DIFFERENT WAYS OF FUNCTION DECLARATION

//FUNCTION declaration
function add(a,b) {
	console.log(a+b);
}
add(100, 200);

//function expression
const sub1 = function(a,b) {
	console.log(a-b);
}
sub1(200, 100);
//console.log(sub1);

//Arrow function
const mul1 = (a,b)=>{
	console.log(a*b);
}
mul1(5, 9);

//arrow funtcion when onlty one expression can be written in one line without {}
const mul2 = (a,b)=>console.log(a*b);
mul2(4, 9);

const msg = ()=>"hello world";
let h=msg();
console.log(h);