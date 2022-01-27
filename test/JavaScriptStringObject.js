var readlineSync = require("readline-sync");
console.log("Welcome to Calculations 101");

var num1 = readlineSync.questionInt("Please enter your first number:");
var num2 = readlineSync.questionInt("Please enter your second number:");
var userOperation = readlineSync.question("Please enter the operation to perform: (add, sub, mul, div)");

function myAddition(numm1, numm2){
    return numm1 + numm2;

    
}
function mySubtraction(numm1, numm2){
    return numm1 - numm2;

}
function myMultiplication(numm1, numm2){

    return numm1 * numm2;

}
function myDivision(numm1, numm2){
    return numm1 / numm2;

}

