
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

//question responses
var fightOrSkip = function () {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "Fight" or "SKIP" to choose.');

    //conditional statement for invalid answers.
    if (promptFight === '' || promptFight === null) {
        window.alert('You need to provide a valid answer! Please try again.');
        return fightOrSkip();
    }
    //to lower case
    promptFight = promptFight.toLocaleLowerCase();

    if (promptFight === "skip") {
        var confirmSkip = window.confirm('Are you sure you do not wish to Gladiate??')
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to run from glory. Goodluck next battle!")
            //subtract skip money
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo money", playerInfo.money);


            //return true if player wants to leave
            return true;
        }
    }
    return false;
};


//define the fight function
var fight = function (enemy) {
    //who goes first
    var isPlayerTurn = true;

    //randomly change order
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            if (fightOrSkip()) {
                break;
            }
            // player attack phase
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
                playerInfo.name + " attacked " + enemy.name + ".  " + enemy.name + " now has " + enemy.health + " health remaining. "
            )
            // enemy health check
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!!!")

                //winner award 
                playerInfo.money = playerInfo.money + 20
                //end fight because enemy is dead
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " heath left.")
            }
        }
        else {
            //enemy attack phase
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);

            console.log(enemy.name + " attacked " + playerInfo.name + "." + playerInfo.name + " now has " + playerInfo.health + " health remaining. "
            );
            //player health check
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!!")
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.")
            }
        }
        isPlayerTurn = !isPlayerTurn
    }
};//fight function ended

//start game function
var startGame = function () {
    //player stats reset

    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        //check player stats
        console.log(playerInfo);

        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];
            //health reset
            pickedEnemyObj.health = randomNumber(40, 60);

            console.log(pickedEnemyObj);

            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // after each fight ask the player if they want to visit store
                var storeConfirm = window.confirm("The fight is over, congratulations visit the store before the next round?");

                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost the robot gladiator battle! Game Over!");
            break;
        }
    }
    endGame();
};
//endgame function
var endGame = function () {
    window.alert("The fights are over lets see what the legions thought!");
    //use local storage to check for highscore if there isnt one use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }
    //if player has a new better highscore, record it
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " survived and gained you much glory and now has a highscore of " + highScore + "!");
    }
    else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!!");
    }
    //play again??
    var playAgainConfirm = window.confirm("Would you like to assemble a new robot??");

    if (playAgainConfirm) {
        //game restart
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiator!! Come play again soon!!")
    }
};

//shop between battles
var shop = function () {

    //asking player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health? UPGRADE your attack? or LEAVE the store? Please enter one 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice"
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);

    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.")
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            //retry the shop option to pick a valid option
            shop();
            break;
    }
};
var getPlayerName = function () {
    var name = "";

    while (name === "" || name === "null") {
        name = prompt("What is your robot's name?")
    }

    console.log("Your robot's name is " + name);
    return name;
};
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling your robot's health by 20 for 7 gold pieces.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You do not have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Reinforcing your robot's attack power by 6 for 7 gold.")
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You do not have enough coin!");
        }
    }
};

var enemyInfo = [
    {
        name: "DoctorRobuttnick",
        attack: randomNumber(10, 12)
    },
    {
        name: "Master Mitch Osterich",
        attack: randomNumber(10, 15)
    },
    {
        name: "Demigod Dan",
        attack: randomNumber(12, 15)
    }
];
//info stats
//run start  games
startGame();