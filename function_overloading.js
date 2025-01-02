//JAvascript doesnt support function overloading

add(10,20); //NaN
add(10,20,30); //NaN
add(10,20,30,40); //100

function add(a,b){
	console.log(a+b);
}

function add(a,b,c){
	console.log(a+b+c);
}

function add(a,b,c,d){
	console.log(a+b+c+d);
}

//Function overloading : In JavaScript, if two or more functions share the same name, the last 
// defined function will overwrite the previous ones. This is because JavaScript treats functions as objects, 
// and a subsequent function with the same name simply reassigns the function reference.