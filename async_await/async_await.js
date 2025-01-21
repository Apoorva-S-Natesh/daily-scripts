let p1 = new Promise((resolve, reject) => {
	setTimeout(()=> {
		resolve();
	}, 4000)
})
function process() {
	console.log('Task 1');
	p1.then(() => console.log('Task 2')) ; // displayed after 4 seconds
	console.log('Task 3 depends on Task 2(executed before task 3)')
}
process();
console.log('Some other independent Tasks');

/*Output
Task 1
Task 3 depends on Task 2(executed before task 3)
Some other independent Tasks
Task 2

always synchronours tasks are executed first
console.log('task1');
setTimeout(()=>console.log('task2'));
console.log('task3');
task1
task3
task2
*/

// All instructions inside function process() and after promise need to be executed synchronously, they should wait for promise to resolve to reject
//but the instrurctions outside the functions should not wait for promise to resolve or reject

let p2 = new Promise((resolve, reject) => {
	setTimeout(()=> {
		console.log('Task 2');
		resolve();
	}, 4000)
})
async function process1() { // async keyword declares a function as asynhronous, and it always returns a promise
	console.log('Task 1');
	await p2; //Pauses the execution of an async functionuntil promise resolves
	console.log('Task 3 depends on Task 2(executed before task 3)')
}
process1();
console.log('Some other independent Tasks');