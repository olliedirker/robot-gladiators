
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["DoctorRobuttnick", "Master Mitch Osterich", "Demigod Dan"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length)
console.log(enemyNames[0])
console.log(enemyNames[3])

//define the fight function
var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        //Fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose!")
        //if you dont want to gladiate
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === 'Skip') {
            var confirmSkip = window.confirm('Are you sure you do not wish to Gladiate??')
            if (confirmSkip) {
                window.alert(playerName + " has decided to run from glory. Goodluck next battle!")
                //subtract skip money
                playerMoney = playerMoney - 10;
                console.log("Player money" + playerMoney);
                break;
            }
        }
        // player attack phase
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ".  " + enemyName + " now has " + enemyHealth + " health remaining. "
        )
        // enemy health check
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!!!")

            //winner award 
            playerMoney = playerMoney + 20
            //end fight because enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " heath left.")
        }
        //enemy attack phase
        playerHealth = playerHealth - enemyAttack
        console.log(enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining. "
        );
        //player health check
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!!")
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }
    }//end while
}//fight function ended
//start game function
var startGame = function () {
    //player stats reset
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            //health reset
            enemyHealth = 50

            //debugger

            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost the robot gladiator battle! Game Over!");
            break
        }
    };
}
//endgame function
var endGame = function () {
    window.alert("The fights are over lets see what the legions thought!")
    if (playerHealth > 0) {
        window.alert("Your robot survived and gained you much glory and gold!")
    }
    else {
        window.alert("Your Robot fell apart from the battle tear!")
    }
    //play again??
    var playAgainConfirm = window.confirm("Would you like to assemble a new robot??");
    if (playAgainConfirm) {
        //game restart
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiator!! Come play again soon!!")
    }
    endGame();
};
