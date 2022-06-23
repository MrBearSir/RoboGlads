
// adding values to robot
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Fight!");

var fight = function(enemyName) {
  // Prompt player if he waant's to skip or play
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

  // Function to handle fight loop
  if (promptFight === "fight" || promptFight ==="FIGHT"){
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack

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

    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // verify if player health is in live range
    if (playerHealth <= 0) {
        console.log(playerName + " has died!");
    }

    else {
        console.log(playerName + " still has " + playerHealth + " health left.");
        fight();
    }
}

// If player desidetd to skip
else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");

      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }

    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  }

  // If input is invalid
  else {
      window.alert("You need to choose avalid option. Try once again");
      fight();
  } 
  console.log("Player " + playerName, "got " + playerHealth + " HP,", "his attack is " + playerAttack + "dmg, ", "money in wallet is " + playerMoney + " coins.");   
};

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}