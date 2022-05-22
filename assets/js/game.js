
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
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
//health reset
        enemyHealth = 50

        debugger

        fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost the robot gladiator battle! Game Over!");
        break
    }
}
