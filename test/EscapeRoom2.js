// Tell the user their options:

// Put hand in hole
// Find the key, or
// Open the door
// They can't open the door unless they find the key first.

// They die if they put their hand in the hole.
const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(`Welcome ${name} to No Escape!`);


let isAlive = true;
let hasKey = false;

while (isAlive == true){
    const menuOptions = readline.keyIn(`Press 1 to put hand in hole, Press 2 to find the key, or Press 3 to open the door`, {limit: '$<1-3>'});
    
    switch(menuOptions){
      
        case "menuOptions == 1": 
        console.log(`${name}, You have put hand in the hole. You are DEAD. GAMEOVER`);
         isAlive = false
    break; 
        case "menuOptions == 2 && hasKey == false":
        console.log(`${name} You have found the key successfully! PLease proceed to next menu option to ESCAPE!`);
        hasKey = true;
    break;
        case "menuOptions == 2 && hasKey == true":
        console.log(` ${name} Key has already been found procceed to menu to exit.`);
    break;
    
        case "menuOptions == 3 && hasKey == false":
        console.log(`${name} Key has not been found. Look for the key!`);
    break;
     
        case "menuOptions == 3 && hasKey == true":
        console.log(` ${name} congratulations, you have ESCAPED!`);
        isAlive = false;
    break;
       
        default: console.log("incorrect output");
        isAlive = false;
    }
}










