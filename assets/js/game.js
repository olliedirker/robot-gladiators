
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["DoctorRobuttnick", "Master Mitch Osterich", "Demigod Dan"];
console.log(enemyNames)
console.log(enemyNames.length)
for(var i = 0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
}
var enemyHealth = 50;
var enemyAttack = 12;


//fighting time
var fight = function(enemyNames) {
    window.alert("Welcome to Robot Gladiators!");
};
//Fight or run
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose!")
if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
// player attack phase
enemyHealth = enemyHealth - playerAttack;
console.log(
playerName + " attacked " + enemyNames[0] + ".  " + enemyNames[0] + " now has " + enemyHealth + " health remaining. "
);
// enemy health check
if (enemyHealth <= 0) {
    window.alert(enemyNames[0] + " has died!!!")
} else {
    window.alert(enemyNames[0] + " still has " + enemyHealth + " heath left.")
}
//enemy attack phase
playerHealth = playerHealth - enemyAttack
console.log(enemyNames[0] + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining. "
);
//player health check
if (playerHealth <= 0) {
    window.alert(playerName + " has died!!")
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.")
};
//if you dont want to gladiate
}else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === 'Skip'){
    var confirmSkip = window.confirm('Are you sure you do not wish to Gladiate??')
    if(confirmSkip){
        window.alert(playerName + " has decided to run from glory. Goodluck next battle!")
        playerMoney = playerMoney - 2;
    }
    // if they want to fight instead run fight function
    else{fight();}
} else{
    window.alert("You must choose a valid option. Please try again!");
}
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);