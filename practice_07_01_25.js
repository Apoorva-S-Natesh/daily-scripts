/*
 01. write a program to display addition of numbers (numbers will be passed to a 
 function as an argument at the time of calling)
 eg: add(10,20), add(50,60,40), add(), add(10)
 
*/

/*function add(...args) {
	if (args.length === 0)
		return 'Cannot perform addition';
	else if (args.length === 1)
		return args[0];
	else {
		let sum = 0;
		for (let i=0; i<args.length; i++)
			sum += args[i];
		return sum;
	}
}

console.log(add());
console.log(add(10));
console.log(add(10,20));
*/

let add = (...args)=> {
	if (args.length === 0){
		console.log('Invalid arguments');
	} else {
		var res = args.reduce((acc, ele)=>acc+ele, 0);
		console.log('Addition  is: ', res);
	}
}
add();
add(10);
add(10,20);

/*
 02. Write a program to find sum of array elements using reduce method and explain it.
*/
let array =[10,20,30,0];
let sum = array.reduce((acc, ele)=>acc+ele, 0);
console.log("sum of array elements: ", sum);

/*
 03. Write a program to add element at the end, beginning of an array, remove elemnts from start and end of an array,
 create sub array without changing original array,
 check index of specific value, checking wheter element is present in an array or not
*/

array.push(50);
array.unshift(60);
console.log(array);
array.pop();
array.shift();
console.log(array);
console.log(array.slice(0,3));
console.log(array.indexOf(50));
console.log(array.includes(60));
console.log(array);

/*
 04. Define lexical scope and explain it with the help of an example.
*/