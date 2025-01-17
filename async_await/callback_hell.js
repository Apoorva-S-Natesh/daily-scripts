//CALLBACK HELL
	//callback hell occurs when we have multiple asynchrous tasks and are dependent on each other and nesting of callbacks becomes too deep and hard to arrange.

function placeOrder(item, callback) {
	setTimeout(()=> {
		console.log("order placed for ", item)
		callback();
	}, 3000)
};
//placeOrder('Pants');

function makePayment(amount, callback) {
	setTimeout(() => {
		console.log("Payment success of Amount : Rs", amount)
		callback();
	}, 4000)
}
//makePayment(2500);

function confirmOrder(callback) {
	setTimeout(() => {
		console.log('Order COnfirmed...!!')
		callback();
	}, 1000)
}
//confirmOrder();

function sendEmail() {
	setTimeout(() => {
		console.log('Successfully order placed mail sent to customer')
	}, 1000)
}

/*
//call all the asynchronous functions
placeOrder('Pant') //Pending --Completed (5)
makePayment(2300)  //Pending --Completed (6)
confirmOrder()     //Pending --Completed (3)
sendEmail()        //Pending --Completed (4)
*/

//Some other tasks which are not dependent on placeOrder(), makePayment(), confirmOrder(), sendEmail()
console.log('Task next 1') //Pending --Completed (1)
console.log('Task next 2') //Pending --Completed (2)

//call all the asynchronous functions to follow synchronous like behaviour
//callback hell or Pyramid of doom
placeOrder("Pant", ()=> {
	makePayment(2500, ()=> {
		confirmOrder(()=> {
			sendEmail()
		})
	})
})
