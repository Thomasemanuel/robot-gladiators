var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney= 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;   
   /* for(var i = 0; i < enemyNames.length; i++) {
        var pickedenemyName= enemyNames[i]
        enemyHealth = 50;
        fight(pickedenemyName);
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
*/

var fight = function(enemyName) { //enemyName = enemyNames[i];
// repeat and execute fight while enemy is alive
while(playerHealth >0 && enemyHealth > 0){
// Alert players that they are starting the round
 //window.alert("Welcome to Robot Gladiators!");
 var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
       // if player chooses to skip
       if (promptFight === "skip" || promptFight === "SKIP"){
        // confirm player wants to skip
        var confirmSkip= window.confirm("Are you sure you'd like to quit?");
        //if yes true then leave fight
        if (confirmSkip){
           window.alert(playerName + " has decided to skip this fight. Goodbye!");
           // subtract money from playerMoney for skipping
           playerMoney = playerMoney - 10;
           console.log ("player money" + playerMoney );
           break;
        }
      }
        

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth= enemyHealth- playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName +" has attacked " + enemyName +". " +enemyName + " now has " +enemyHealth + " health remaining.");
    //check enemys health
    if (enemyHealth <=0){
        window.alert(enemyName + " has died!");
        //award player money for winning
        playerMoney= playerMoney +20;
        break;
    }else{
        window.alert(enemyName + " still has " + enemyHealth+ " health remaining.");
    } 
    
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth= playerHealth -enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName +" has attacked " + playerName +". " + playerName + " now has " +playerHealth + " health remaining.");
    // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
     break;

    } else{
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
}//end while loop
}// end fight function
  //execute function
  for(var i = 0; i < enemyNames.length; i++){
      debugger;
    fight(enemyNames[i]);
  }
