// can handle multiple .then() methods to handle sequnetial asynchronous operations.
// Each .then() receives the result from the previous one

let myPromise = new Promise((resolve, reject) => {
	let success = true;

	if (success) {
		resolve('First step complete.');
	} else {
		reject('Something went wrong.');
	}
});

myPromise.then(function(result) {
	console.log(result);
	return "Next step complete." // Returns a new promise.
})
.then(function(nextResult) { //this then wont be called until previous then is finished
	console.log(nextResult); //Outputs: next step complete.
}) 
.catch(function(error) {
	console.log(error); // Handles any error in the chain
});
