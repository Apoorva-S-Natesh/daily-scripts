//Synchronous porgramming
// tasks are executed in sequential order, tasks are excuted one after the other 
//tasks are executed one at a time, in the order they are written. Each task must finish before the next one starts.

console.log("task1");
console.log("task2");
console.log("task3");

// task 2 starts only after task1 is complete and task3 waits for task2.
// non technical example: getting fuel filled in a gas station, can fill only one after the other. or stading in the line at a bank

//Asynchronous Programming - making a non-blocking, responsive application/webpage
//allows tasks to be executed without waiting for other tasks to finish.
//tasks can start and continue running in the background, without waiting for wach other. when task is completed, its result is handed.

console.log("start task");
setTimeout(()=>{ 
	console.log("long task finished");
}, 2000); // time in mili-seconds // setTimeout(task, delay) //scheduled to run after 2 seconds

console.log("end task");

//// JS uses a single-threaded model, but with the help of its event loop and callback queue, it can manage ansynchronous operations effeciently.
//JS places asychronous tasks (like setTimeout) in a callback queue. One the synchronous tasks are done, the event loop picks tasks from the callback queue and executes them.