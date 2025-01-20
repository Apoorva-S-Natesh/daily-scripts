/*
Promise - an object in JS that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
Promises allow to handel asynchronous operations in a more structured eay, avoiding the complexities and callback hell of traditional JS.

Promise - states: Pending, Resolved, Rejected

new Promise (executor_function(resolve_function, reject_function))
resolve_function - a function used to indicate that Promise has been successfully resloved
reject_function - a function used to indicate that the promise has failed
.then() runs when promise is resolved
.catch() runs when promise is rejected
 
promise {
 resolve: then
 reject: catch
 }
*/

let p1 = new Promise((resolve, reject) => {
	setTimeout(()=>{
		console.log('logic to fetch the data');
		//resolve('Apoo: 1234')
		reject(); // manually I've changed to reject state since I dont have any API yet , API would return the promise either resolve or reject
	}, 5000)
});

// then() will be called when promise is resolved
p1.then((data) => {
	console.log('Process the recieved data: ', data) .then() 
}) .catch(() => {
	console.log('Error occured while fetching the data')
}) // catch() will be called when promise is resolved

////////////// example 2 ////////////////
let p2 = new Promise((resolve, reject) => {
	setTimeout(()=>{
		console.log('Some task or data to be fetched and took 3 seconds');
		resolve();
		//reject();
	}, 3000)
})
p2.then(() =>console.log('task completed'))
.catch(() => console.log('task failed to complete'));