
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);
var enemyName = "DoctorRobuttnick";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};
// player attack phase
enemyHealth = enemyHealth - playerAttack;
console.log(
playerName + " attacked " + enemyName + ".  " + enemyName + " now has " + enemyHealth + " health remaining. "
);
//health check
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!!!")
} else {
    window.alert(enemyName + " still has " + enemyHealth + " heath left.")
}
//enemy attack phase
playerHealth = playerHealth - enemyAttack
console.log(
    enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining. "
);
//enemy health check
if (playerHealth <= 0) {
    window.alert(playerName + " has died!!")
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.")
};
fight()