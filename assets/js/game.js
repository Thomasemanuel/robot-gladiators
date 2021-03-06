
// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

<<<<<<< HEAD


=======
//player name input
var getPlayerName = function() {
  var name ="";
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};

//player info 
>>>>>>> develop
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};
var fightOrSkip =function(){
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
      //if null is entry the function will be returned
      var promptFight= promptFight.toLowerCase();
      if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
      }  
    // if player chooses to skip
      if (promptFight === "skip" || promptFight === "SKIP"){
        // confirm player wants to skip
        var confirmSkip= window.confirm("Are you sure you'd like to quit?");
        
        //if yes true then leave fight
        if (confirmSkip){
           window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
           // subtract money from playerInfo.money for skipping but dont let go below zero
           playerInfo.money = Math.max(0, playerInfo.money - 10);
           console.log ("player money" + playerInfo.money );
           return true;   
        }
     }
    return false;
}

// log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14
  }
];



var fight = function(enemy) { //enemy.name = enemy.names[i]
// keep track of who goes first
var isPlayerTurn = true;
//should be false half the time
if (Math.random() > 0.5) {
  isPlayerTurn = false;
}
// repeat and execute fight while enemy is alive
while(playerInfo.health >0 && enemy.health > 0){
if (isPlayerTurn){
   //ask player if theyd like to skip or fight
  if (fightOrSkip()){
  break;
  } 
  //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  //remove enemys health
    enemy.health = Math.max(0, enemy.health - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(playerInfo.name +" has attacked " + enemy.name +". " +enemy.name + " now has " +enemy.health + " health remaining.");
    //check enemys health
    if (enemy.health <=0){
        window.alert(enemy.name + " has died!");
        //award player money for winning
        playerInfo.money= playerInfo.money +20;
        break;
    }else{
        window.alert(enemy.name + " still has " + enemy.health+ " health remaining.");
    } 
    // enemy attacks firt close if 
    // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
  }else{
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(enemy.name +" has attacked " + playerInfo.name +". " + playerInfo.name + " now has " +playerInfo.health + " health remaining.");
    // check player's health
    if (playerInfo.health <= 0) {
     window.alert(playerInfo.name + " has died!");
     break;
    } else{
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
    //swithc turn order for next round
    isPlayerTurn= !isPlayerTurn;

}//end while loop
};// end fight function

var startGame = function() {
  // reset player stats
  playerInfo.reset();
  

  //fight eac enemy robot
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0){
      //let player know they are in what round and reset enemy health
      window.alert("Welcome to Robot Gladiators! Round "+ (i+1));
      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);

    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      } 
    }
    //if player isnt alive still
    else {
      window.alert("You've lost your robot in battle.");
      break;
    }
  }

   // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
   endGame();
};

  // function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  //check local storage for high score if it s not ther, use 0
  var highScore= localStorage.getItem("highscore");
  if (highScore === null){
    highScore=0;
  }
  //if player has more money than the high score the platyer has new highscore
  if(playerInfo.money> highScore){
    localStorage.setItem("highscore", playerInfo.money);
    localStorage.setItem("name", playerInfo.name)
    alert(playerInfo.name +" now has the highscore of "+ playerInfo.money +"!");
  }
  else {
    alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Robot Gladiators! Come back soon!');
  }
};

// go to shop between battles function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "You have" + playerInfo.money + " dollars. Would you like to REFILL your health by 20 for $7, UPGRADE your attack by 6 for $7, or LEAVE the store? Please enter '1' to REFILL, '2' to UPGRADE, or '3' to LEAVE"
  );
  //convert string to interger with parseInt
  shopOptionPrompt = parseInt(shopOptionPrompt);
    // use switch case to carry out action
    switch (shopOptionPrompt) {
      case 1:
        playerInfo.refillHealth();
        break;
      case 2:
        playerInfo.upgradeAttack();
        break;
      case 3:
        window.alert("Leaving the store.");
        break;
      default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
    }
};

//start first game when page loads
startGame();

 


