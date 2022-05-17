var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney= 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    
    for(var i = 0; i < enemyNames.length; i++) {
        console.log(enemyNames[i]);
        console.log(i);
        console.log(enemyNames[i] + " is at " + i + " index");
      }
var enemyHealth = 50;
var enemyAttack = 12;

//created function
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};

var fight = function(enemyName) {
// Alert players that they are starting the round
 window.alert("Welcome to Robot Gladiators!");
 var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
 console.log(promptFight);
if (promptFight === "fight" || promptFight === "FIGHT") {
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth= enemyHealth- playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName +" has attacked " + enemyName +". " +enemyName + " now has " +enemyHealth + " health remaining.");
    //check enemys health
    if (enemyHealth <=0){
        window.alert(enemyName + " has died!");}
    else{
        window.alert(enemyName + " still has " + enemyHealth+ " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth= playerHealth -enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName +" has attacked " + playerName +". " + playerName + " now has " +playerHealth + " health remaining.");
    // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
     } 
    else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
    }
} 
 // if player chooses to skip
else if (promptFight === "skip" || promptFight === "SKIP"){
    // confirm player wants to skip
    var confirmSkip= window.confirm("Are you sure you's like to quit?");
    //if yes true then leave fight
    if (confirmSkip=== true){
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
      }
        // if no (false), ask question again by running fight() again
    else {
    fight();
    }
}
    else{
    window.alert("You need to choose a valid option. Try again!");
    fight();
    }
}

  //execute function
  for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }