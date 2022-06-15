// creating and prompting for robot name
var playerName = window.prompt("What is your robot's name?");

// adding values to robot
var playerHealth = 100;
var playerAttack = 10;


// creatin function called fight
var name = "your name";
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Angry Robot";
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Fight!");


var fight = function() {
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining " + ".");
  
// verify if enemy can fight
if (enemyHealth <= 0) {
    console.log(enemyName + " being defeted!");
}
else {
    window.alert(enemyName + " still has" + enemyHealth + " health left.");
}

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

// verify if player health is in live range
    if (playerHealth > 0) {
        console.log("You're still rolling");
    }

    else {
        console.log("Sorry but you don't look that good. Rest up!");
    }


// Log a resulting message to the console so we know that it worked.
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " life remaining" + ".");

    if (playerHealth > 0 && enemyHealth > 0) {
        fight();
    }
    else {
        window.alert(playerName + " have " + playerHealth + ". " + enemyName + " have " + enemyHealth + ".");
    };
};

fight();