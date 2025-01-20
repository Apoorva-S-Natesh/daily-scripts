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
*/