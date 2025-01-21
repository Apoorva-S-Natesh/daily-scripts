// Whenever we want synchronous like behavious in asynchronous program we either need to use callback hell(pyramid of doom) or promises

function placeOrder() {
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			console.log('Order Placed');
			resolve();
		}, 5000)
	})
}

function makePayment(amount) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Payment successful of: $',amount);
			resolve();
		}, 2000);
	})
}

function confirmOrder() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Order Confirmed...!');
			resolve();
		}, 1000)
	})
}

function sendemail() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Successfullt order placement mail sent to customer');
			resolve();
		}, 1000);
	})
}

// Method 1: Chaining promise using then  
	// placeOrder()
	// .then(() => makePayment())
	// .then(() => confirmOrder())
	// .then(() => sendemail())
	// .then(() => console.log('End of Process'))

// METHOD2 : USING ASYNC AND AWAIT
async function processOrder() {
	console.log('Process started')
	await placeOrder();
	await makePayment(12);
	await confirmOrder();
	await sendemail();
	console.log('End of Process');
}

processOrder();
console.log('Other independent task1');
console.log('Other independent task2')