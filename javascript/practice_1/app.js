//import { apiKey } from "./util.js"; //shloud have used tupe="module" while linking this script in html
//import apiKey from "./util.js"; -When impoting a default export no need of {} but still needs a name
//import { apiKey, anotherKey } from "./util.js" // multiple not default imports or 
//import * as util from "./util.js" // could create a javascript object, everything that util gives is grouped into util.
//import {apiKey, anotherKey as key} from "./util.js"

//console.log(apiKey);
//console.log(util.apiKey); - when importing multiple things that are grouped using javascript object

// function greet(userName, message="Hello") { //Hello is the default parameter, can be overridden
// 	console.log(userName +" "+ message);
// 	return "Hi, I am " + userName + "." + message;
// }

//greet('Apoorva','Welcome');
//greet('World');
// const greeting = greet("world","hey");
// console.log(greeting);

/*
Arrow Funtions
1. If exactly one parameter then no neet wrapping paranthesis ()
usename => { ... } 
if no parameter or more than one then cannot omit () => { ... } or (userName, message) => { ... }
2.  omitting function body curly braces if no other logic other than a return statement inside the function
 number => number * 3;
3.if using the above shorter alternative and want to return a javascript object then need to wrap the object in extra pair of paranthesis
number => ({age:number});

*/

document.addEventListener('DOMContentLoaded', function() {
    const functionsItem = document.getElementById('functionsItem');
    const functionsContent = document.getElementById('functionsContent');

    functionsItem.addEventListener('mouseenter', function() {
        functionsContent.style.display = 'block';
    });

    functionsItem.addEventListener('mouseleave', function() {
        setTimeout(() => {
            functionsContent.style.display = 'none'; // Delay hiding to see transition
        }, 300); // Delay in ms
    });
});

//objects

// const user = {
// 	name: "Osativa",
// 	age:10,
// };

// console.log(user.name);