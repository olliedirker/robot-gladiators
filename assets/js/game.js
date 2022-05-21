
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
console.log(enemynames[0])
console.log(enemynames[3])

//define the fight function
var fight = function (enemyNames) {
    while (playerHealth > 0 && enemyHealth > 0) {
    //Fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose!")
    //if you dont want to gladiate
    if (promptFight === "skip" || promptFight === "SKIP" || promptFight === 'Skip') {
        var confirmSkip = window.confirm('Are you sure you do not wish to Gladiate??')
        if (confirmSkip) {
            window.alert(playerName + " has decided to run from glory. Goodluck next battle!")
            playerMoney = playerMoney - 10;
            console.log("Player money" + playerMoney);
            break;
        }
    }
        else (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
            // player attack phase
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ".  " + enemyName + " now has " + enemyHealth + " health remaining. "
            )
            // enemy health check
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!!!")
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
}

