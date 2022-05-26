
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

//define the fight function
var fight = function (enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        //Fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose!")
        //if you dont want to gladiate
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === 'Skip') {
            var confirmSkip = window.confirm('Are you sure you do not wish to Gladiate??')
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to run from glory. Goodluck next battle!")
                //subtract skip money
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo money", playerInfo.money);
                break;
            }
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
    }//end while
};//fight function ended

//start game function
var startGame = function () {
    //player stats reset

    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            //health reset
            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyinfo.length - 1) {
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
}
//endgame function
var endGame = function () {
    window.alert("The fights are over lets see what the legions thought!")

    if (playerInfo.health > 0) {
        window.alert("Your robot survived and gained you much glory and " + playerInfo.money + ".")
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
    else {
        window.alert("Thank you for playing Robot Gladiator!! Come play again soon!!")
    }
    endGame();
};

//shop between battles
var shop = function () {
    //asking player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health? UPGRADE your attack? or LEAVE the store? Please enter one 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice"
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "Refill":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "Upgrade":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "Leave":
        case "leave":
            window.alert("Leaving the store.")
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            //retry the shop option to pick a valid option
            shop();
            break;
    }
};

var playerInfo = {
    name: window.prompt("What is your robot gladiator's name?"),
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
console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name)
console.log(enemyInfo[0]["attack"]);
//info stats
//run start  games
startGame()