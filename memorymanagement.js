console.log(a); // outputs undefined when a is declared as var
var a = 10;
console.log(a);

//As soon as JS in loaded or executed then global execution record/context will be created.
//1. Global execution record will be divided into 2 parts - memory allocation phase and code execution phase.
//2. The variables declared using var will be initialized with undefined at the time of memory allocation phase, 
//3. In memory allocation phase all the variable declaration, object declaration(array, JSON, functions) and function declaration are allocated memory.

//TDZ- Temporal Dead Zone
//hoisting - is the behaviour where function and variablr declarations are moved to the top of their scope during memory allocation phase.

console.log(b);
var b = 30;
console.log(b);
//1. Variables declared using let will be inside temporal dead zone at during the memory allocation phase.
//2. Variables present inside TDZ cannot be accessed.
//3. if we try to access the vaiabeles inside TDZ, we get ReferenceError: Cannot access 'a' before initialization
//4. let and const are hoisted in a way, but they're placed in the TDZ until the code reaches the line where they're declared. So they arent accessible before that point.

///// 	Hoisting ////////
add();
function add() {
	console.log(10+20); //30
}

//Gobal Execution Context
// 1. Memory allocation - line one is not a declaration so no memory allocation for line1.
//						  line two is declaration so add variable holds the complete function expression.
// 2. Code execution - calling of add(). Control comes inside add function. Execution record of add fucntion is created and it also has two parts (memory allocation phase of add and code execution phase of add fucntion)
// function declarations are hoisted at the top of its declaration.
