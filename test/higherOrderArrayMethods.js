function fiveAndGreaterOnly(arr)
{
const result = arr.filter(function(num){
 if (num >= 5)
 return true;
})
 return result
}

console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));  // Output: [6, 8]


function evensOnly(arr)
{    const result = arr.filter(function(num){
        if (num % 2 == 0)
        return true;
    })
    return result
} 
console.log("--- Array Filter #2 ---");
console.log(evensOnly([3, 6, 8, 2]));  // Output: [6, 8, 2]

function ofAge(arr){
    {    const result = arr.filter(function(num){
        if (num(age) >= 17)
        return true;
    })
    return name + result
} 
    
}

console.log("--- Extra Credit for .filter() Method ---");
console.log(ofAge[
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])
// I could not figure out the output for the multidimension array with the . filter method

function doubleNumbers(arr)
{
    const result = arr.map(function(num){
        return num * 2;
        });
 return result;
 }

console.log("---  Array Map #1 ---");
console.log(doubleNumbers([2, 5, 100]));  // Output: [4, 10, 200]

function stringItUp(arr){
     
    arr.map(function(num){
        return num.toString(); 
    })
}
console.log("---  Array Map #2 ---");
console.log(stringItUp([2, 5, 100]));  // Output: ["2", "5", "100"]


function capitalizeNames(arr){
    // your code here
    
}

console.log("---  Array Map #3 ---"); 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//Output: ["John", "Jacob", "Jingleheimer", "Schmidt"]