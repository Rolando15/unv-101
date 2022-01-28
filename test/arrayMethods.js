var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
function arrayExcersise(){

    vegetables.pop();
    
    fruit.shift();
    
    var indexOfOrange = fruit.indexOf("orange");
    
    
    
    fruit.push(indexOfOrange);
   
    vegetables.push(vegetables.length);


    var food = fruit.concat(vegetables);
  
// console.log(food)
  food.splice(4,2);
    food.reverse();
  console.log(food.toString());





//     Remove the last item from the vegetable array.
// Remove the first item from the fruit array.
// Find the index of "orange."
// Add that number to the end of the fruit array.
// Use the length property to find the length of the vegetable array.
// Add that number to the end of the vegetable array.
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
// Remove 2 elements from your new array starting at index 4 with one method.
// Reverse your array.
// Turn the array into a string and return it.

// console.log("food:", food);
// console.log("fruit:", fruit);
}
arrayExcersise();