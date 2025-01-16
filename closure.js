/*
Closure: A closure in JS is created when a function 'remembers' the variable from its outer scope(surrounding lexicL Scope), 
even after the outer function has finished execution.
*/

function outerFunction() {
	let count = 0;
	return function() {
		count++;
		console.log(count);
	}
}

res = outerFunction()
console.log(res); // Output: [Function (anonymous)]
res(); // output: 1
res(); //output: 2

/* while returning the function to res, control doesnt enter the return funcion, 
Its important to think of this: when control leaves the outerFuntion() the execution contecxt of 
outerFuntion is removed, then how is 'res' accessing count (a variable declared in outerFunction)
* At the time of global code exectuion 'res' holds the complete return function.
* then every time 'res()' is called, execution record of res() is created.
* the ref variable that was pointing to the parent, when parent execution is done, holds the property of parent scope. It holds the parent variables. 
*/

// RETURNING MULTIPLE FUNCTIONS
function outerFunction1() {
	let count = 0;
	return {
		increase: function() {
		count++;
		console.log(count);
	},
	decrease: function() {
		count--;
		console.log(count);
	},
	reset: function() {
		count = 0;
		console.log(count);
	}
}
}
counter = outerFunction1() // its alomost like creating an object of outerFuntcion1 and then calling the return functions through that object
counter.increase(); // 1
counter.increase(); // 2
counter.decrease(); // 1
counter. reset(); // 0
/* counter holds the entire return code block, which is a key value pair and when a key is called that function is invoked*/
//data hiding and enapsulation

function createBankAccount(initialBalance) {
	let balance = initialBalance;

	return {
		deposit: function (amount) {
			balance += amount;
			console.log(`Deposited: ${amount}, Balance: ${balance}`);
		},
		withdraw: function (amount) {
			if (amount > balance) {
				console.log('Insufficient funds');
			} else {
				balance -= amount;
				console.log(`withdrew: ${amount}, Balance: ${balance}`);
			}
		}
	};
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500); //Output: Deposited: 500, Balance: 1500
myAccount.withdraw(300); //Output: withdrew: 300, Balance: 1200

// cannot access balance from outside! the variable 'balance' acts as a private variable

// RETURNING MULTIPLE FUNCTIONS
function outerFunction2() {
	let count = 0;
	return {
		increase() {
		count++;
		console.log(count);
	},
	decrease() {
		count--;
		console.log(count);
	},
	reset() {
		count = 0;
		console.log(count);
	}
}
}
counter = outerFunction2() // its alomost like creating an object of outerFuntcion1 and then calling the return functions through that object
counter.increase(); // 1
counter.increase(); // 2
counter.decrease(); // 1
counter. reset(); // 0