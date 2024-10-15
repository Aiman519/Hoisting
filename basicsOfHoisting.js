// var 

var i= 10;
console.log(i);  // print 10;


console.log(value);
var value=15;  // print undefined

// how javascript sees it after hoisting code(7-8)

// var value ;     here js initialiazed the var variable with undefined
//console.log(value);
//value = 10;


//let
let j = 4;
console.log(j); // print 4

console.log(val);  //Referror:cannot  access varaible before initialization TDZ
let val = 19;


const k = 4;
console.log(k) //print 4;

console.log(num)  // syntx error: missing initialization inconst variable;
const num =6;

// const and let both are same in the TDZ before initialization but in const we have to do both initialization and declaration  at the ame time ;
// let car = "BMW";


//function declaration
console.log(greet());
function greet(){
    cout<<"Helllo!"
}


// How JavaScript sees it after hoisting:
//function greet() { // Function declaration is fully hoisted
  //  return "Hello!";
 // }
 // console.log(greet()); // "Hello!"




 // Function Expression hoisting
 console.log(sayHello()); // TypeError: sayHello is not a function
var sayHello = function() {
  return "Hello World!";
};


//  JavaScript sees it after hoisting:
var sayHello; // Declaration hoisted to the top of scope(like with var)
console.log(sayHello()); // Error:  sayhello() is not  a function
sayHello = function() {   //initialization
  return "Hello World!";
};
