console.log(a); // outputs undefined when a is declared as var
var a = 10;
console.log(a);

//As soon as JS in loaded or executed then global execution record/context will be created.
//1. Global execution record will be divided into 2 parts - memory allocation phase and code execution phase.
//2. The variables declared using var will be initialized with undefined at the time of memory allocation phase, 
//3. In memory allocation phase all the variable declaration, object declaration(array, JSON, functions) and function declaration are allocated memory.

//TDZ- Temporal Dead Zone
//hoisting - is the behaviour where function and variablr declarations are moved to the top of their scope during memory allocation phase.

//console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 30;
console.log(b);
//1. Variables declared using let or const will be inside temporal dead zone at during the memory allocation phase.
//2. Variables present inside TDZ cannot be accessed.
//3. if we try to access the vaiabeles inside TDZ, we get ReferenceError: Cannot access 'a' before initialization
//4. let and const are hoisted in a way, but they're placed in the TDZ until the code reaches the line where they're declared. So they arent accessible before that point.

///////////////////////////////////////// 	Hoisting ///////////////////////////
add();
function add() {
	console.log(10+20); //30
}

//Gobal Execution Context
// 1. Memory allocation - line one is not a declaration so no memory allocation for line1.
//						  line two is declaration so add variable holds the complete function expression.
// 2. Code execution - calling of add(). Control comes inside add function. Execution record of add fucntion is created and it also has two parts (memory allocation phase of add and code execution phase of add fucntion)
// function declarations are hoisted at the top of its declaration.


//gobal scope 
//these functions are in global scope, not inside any class or code
add1(); //NaN
sub(); // 90
function sub() {
	//the code below are in function scope - sub scope
	//console.log(x+y); //ReferenceError: Cannot access 'x' before initialization
	let x = 40;
	var y = 50;
	console.log(x+y);
}
function add1(){
	//add scope
	console.log(a+b);//NaN
	var a = 50;
	var b = 60;
	console.log(a+b);//110
}

//Function hoisting is the process where functions are hoised at the top of their declaration so that we can access functions before its declaration so that it can be accessed anywhere in the program.

//GLoBAL EXECUTION RECORD
//1. global memory allocation phase. 
	//1. add1() is not declaration
	//2. sub() is not declaration
	//3. sub = function(){ sub identifier holds the function
		// let x = 40;
		// var y = 50;
		// console.log(x+y);} sub variable will hold the entire function
	//4. add1 = the entire function will be inside add1, memory allocated to add1.(not to the variables declared inside the funtcion)
//2. global memory execution phase.
	//1.Checks if in there is variable add1 in global scope, finds the add1 and control is now in add function
		//Execution record for add1 function will be created. memory allocation phase of add1 and code execution phase of add1 fucntion
		// a = undefined and b = undefined
		// a+b //not a number NaN
		// a =50 , b = 60
		// a+b // 110
	//2.Control will go back to the add1() statment - execution record will be removed
	//3. Checks if in there is variable sub in global scope, finds the sub and control is now in sub function
		//Execution record for sub function will be created. memory allocation phase of sub and code execution phase of sub fucntion
		// x is kept inside TDZ and y = initialized with undefined 
		// x+y //x is uninitialized so we get reference error
		// x = initialized with 40 , y = 50
		// log(x+y) // 90
	//4.Control will go back to the sub() statment - execution record of sub will be removed