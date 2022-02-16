const readlineSync = require('readline-sync');
const name = readlineSync.question("What's Your name?");
readlineSync.question("Hello" + " "  + name + " " + "Welcome to SLAY press Enter to Start");
const badGuys = ['Zombie', 'Robot', 'Evil Penguin', 'Raptor'];
const treasure = ['Syringe', 'Alcohol', 'Gauze', 'Tape'];
var prize = [];
let userHealth = 50;
const options = ['Walk', 'Exit', 'Print'];
let pickup =  treasure[Math.floor(Math.random() * treasure.length)];

function game(){
const attackAchieved = Math.floor(Math.random() * (6 - 5 + 1) + 0);
const badGuy = badGuys [Math.floor(Math.random() * badGuys.length)];
const badGuysPower = Math.floor(Math.random() * (6 - 5 + 2) + 1);
let badGuysHealth = 50;
const index = readlineSync.keyInSelect(options, 'What will your next action be?');

if(options[index] == 'Exit'){
    return userHealth = 0;

} else if (options[index] == 'Print'){
    console.log(name + ': \n' + userHealth + '\nTreasure:' + pickup);

 } else (options[index] == 'Walk')
    
 let key = Math.random();
if (key <= .3) {
        console.log('Walking . . .');
}else if (key >= .3){
    console.log(badGuy + ' ' + 'Showed up');

    while (badGuysHealth > 0 && userHealth > 0){
      
      const user = readlineSync.question('Whats your next move "r" to run or "a" to attack');
    
        switch (user){
            case "r":
                const run = Math.random();
                if (run < .5){
                    console.log('Before running away' + ' ' + badGuy + ' ' + 'attacks with' + ' ' + badGuysPower);

                }else {
                    console.log("You got away!");
                     break;
                    }  
            case 'a':
            badGuysHealth -= attackAchieved;
            console.log('You attacked' + ' ' + badGuy + ' ' + attackAchieved + ' ' + 'hitpoints');

            userHealth -= badGuysPower;
            console.log('Enemy just attacked you with' + ' ' + badGuysPower + ' ' + 'attack power');
           
            if (badGuysHealth <= 0);{
                console.log('You killed' + ' ' + badGuy + ' ' + ' He dropped:' + pickup);
                let loot = Math.random();
               
             if (loot <= .3){
                    prize.push(pickup);
                }
            
              else if(userHealth <=0){
                console.log(badGuy + ' ' + "Has KILLED you. ");
                     
                        }
                     }
                }
            }
        }
    }
game();
