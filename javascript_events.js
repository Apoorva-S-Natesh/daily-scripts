//MOUSE EVENTS

//Single mouse click
document.getElementById('myBtn').addEventListener('click' , () => {
	alert("Button Clicked");
});

//Double click
document.querySelector('#myBtn').addEventListener('dbclick' , () => {
	alert("Button DOUBLE Clicked");
});

//Mouse over
document.querySelector('#myBtn').addEventListener('mouseover' , () => {
	alert("MOUSE over the element");
});

//mouse out
document.querySelector('#myBtn').addEventListener('mouseout' , () => {
	alert("MOUSE left the element");
});

//mouse move
document.querySelector('#myBtn').addEventListener('mousemove' , () => {
	alert(`mouse position: (${event.clientX}, ${event.clientY})`);
});

//KEYBOARD EVENTS

//Keydown - when a key is pressed down
document.addEventListener('keydown', (event) => {
	alert(`Key pressed: ${event.key}`);
});


//keyup - when a key is released
document.addEventListener('keyup', (event) => {
	alert(`Key released: ${event.key}`);
});

//FORM EVENTS

// submit - triggered when form is submitted
document.querySelector('#myForm').addEventListener('submit', (event) => {
	event.preventDefault(); // Prevents page refresh
	alert('Form submitted!');
});

// change - triggered when the value of an input changes
document.querySelector('#name').addEventListener('change', (event) => {
	alert(`Input changed to: ${event.target.value}`);
});

// focus - triggered when an element gains focus(like an input field)
document.querySelector('#age').addEventListener('focus', () => {
	console.log(`Input age field foused`);
});

// blur - Triggered when an element loses focus
document.querySelector('#age').addEventListener('blur', () => {
	alert(`Name field lost foused`);
});

// input - Triggered every time a user types in an input field
document.querySelector('#name').addEventListener('input',(event) => {
	console.log(`Current value: ${event.target.value}`);
});

//WINDOW EVENTS

//DOMContentLoaded - triggered when the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', ()=>{
	alert('DOM fully loaded and parsed');
});

//resize - Triggerd when the browser window is resized
window.addEventListener('resize', ()=> alert('window resized'));

//scroll - triggered when the user scrolls
window.addEventListener('scroll', ()=> alert('User is scrolling'));