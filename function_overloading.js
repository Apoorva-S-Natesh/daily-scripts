//Javascript doesnt support function overloading 

add(10,20); //NaN
add(10,20,30); //NaN
add(10,20,30,40); //100

function add(a,b){
	console.log(a+b);
}

function add(a,b,c){
	console.log(a+b+c);
}

function add(a,b,c,d){
	console.log(a+b+c+d);
}

//Function overloading : In JavaScript, if two or more functions share the same name, the last 
// defined function will overwrite the previous ones. This is because JavaScript treats functions as objects, 
// and a subsequent function with the same name simply reassigns the function reference.

//////////////////////////////////      SPREAD OPERATOR      ////////////////////

//1.Simulating function overloading with arguments object - arguments object is outdated

function mul() {
	console.log("inside mul function");
}
console.log(mul);
mul();
mul(10);
mul('hello');
//none of the above funcion calling will give an error! NO errors

function mul1() {
	console.log(arguments[0], arguments[1], arguments[2]);
}
mul1();//				--->arguments = []
mul1(10,20);// 			--->arguments = [10,20]
mul(1,2,3,4,5,6);//     --->arguments = [1,2,3,4,5,6]

function mul2() {
	if (arguments.length == 2)
		console.log(`multiplying ${arguments[0]} and ${arguments[1]}, result is:` , arguments[0] * arguments[1]);
	else if (arguments.length == 3)
		console.log(`multiplying ${arguments[0]}, ${arguments[1]} and ${arguments[2]}, result is:` , arguments[0] * arguments[1] * arguments[2]);
	else
		console.log('Invalid number of parameters');
}
mul2(1,3);
mul2(1,4,5,67);
mul2(0,5,6);
//above code has code redundancy, have to keep typing argiments[index] for every element

function mul3() {
	let res=1;
	for (let i=0; i<arguments.length; i++)
		res *= arguments[i];
	console.log('Multiplication result is: ', res);
}
mul3();
mul3(1,2,3);
mul3(1,2,3,4,2,1);

//initernally arguments array is created for every function call.

//arguments object is an array-like object available inside alll non-arrow functions. It contains all the 
// values passed to the function, regardless of the number of parameters defined in the function signature.
// This allows to access more aargumetns than you explicitly declare.
//Biggest disadvantage : cannot use in array methods.

//2.spread operator (...)
function multiply(...args) {
	if (args.length === 2)
		console.log('Multiplying 2 numbers', args[0] * args[1]);
	else if (args.length === 3)
		console.log('Multiplying 3 numbers', args[0] * args[1] * args[2]);
	else if (args.length === 4)
		console.log('Multiplying 4 numbers', args[0] * args[1] * args[2] * args[3]);
	else
		console.log('Invalid number of arguments');
}

multiply();
multiply(2,4);
multiply(2,4,2);

function add1(...args) {
	if (args.length === 2)
			return args[0] + args[1];
	else if (args.length === 3)
			return args[0] + args[1] + args[2];
	else
		return "Invalid number of arguments";
}
console.log(add1(1, 4));
console.log(add1(1,2,3));
console.log();
console.log(add1(1,3,4,5));
console.log(add1(1, 'hello'));

//can give any name for the args array and use inside arrow funtion and apply any array method
const add2 =(...nums)=>{
	let res = nums.reduce((acc,ele) => acc+ele, 0);
	console.log(res);
}
add2(); //nums[]
add2(100,1); //nums[100,1]
add2(500, 100, 100, 300); //nums[500,100,100,300]

//spread operator (...) collects all the argumetns passed to a function into an actual array.
//It is available for both regular and arrow functions.
//Can use array methods directly