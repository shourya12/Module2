//normal function
function sayHello()
{
    console.log("hi from function");
}

sayHello();

//function with argument
function sum (num1,num2)
{
    let sum=num1+num2;
    console.log("sum = "+sum)
}

sum(10,20);

//function with return type

function multiply(num1,num2)
{
    return num1*num2;
}

let ans=multiply(10,40);
console.log("multiplication = "+ans);

//Storing a function in variable ---->> *****That's why function are called --"First class citizen in javaScript"

let a=function div(num1,num2){
    return num1/num2;
}

console.log("Division = "+a(10,2));

// IIFE --> Immediately Invoked Function Expression

(function(){
    console.log("hi there");
})();

// IIFE --> With parameter

(function(num){
    console.log("hi "+num);
})("shourya");