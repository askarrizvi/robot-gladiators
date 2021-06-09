var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy", "Robo"];
var enemyHealth = 50;
var enemyAttack = 12;

function startGame() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);

            //If player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //Ask if player wants to use the store before next round
                var storeConfirm = window.confirm("Would you like to visit the store?");

                //If yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //Play again
    endGame();
};

// function to end the entire game
function endGame() {
    //If player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you won! Your score: " + playerMoney + ".");
    } else {
        window.alert("You lost!");
    }
    //Ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //Restart the game
        startGame();
    } else {
        window.alert("Thank you for playing!");
    }

};

function shop() {
    //Ask player what they want to do
    var shopOptionPrompt = window.prompt("REFILL health, UPGRADE attack, or LEAVE?");

    //Use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //New case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refill 20 health for $7");

                //Increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for $7");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money");
            }
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");

            //Break to end the function
            break;

        default:
            window.alert("Not a valid option, pick again");

            //Call shop() again
            shop();
            break;
    }
};

function fight(enemyName) {
    //Repeat while enemy is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        //window.alert("Welcome to Robot Gladiators!");
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //If player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //Confirm skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            //if yes/true leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //Subtract money
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        //Check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

//Start the game when the page loads
startGame();


/*
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}*/