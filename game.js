/**---------------------------------------------------------------
 * Author: Ricardo Guntur <ricardo.guntur@nyu.edu>
 * Course: Applied Internet Technology w/ Joe Versoza
 * File: game.js
 *
 * Description: Runs a game of black jack. Each player (player vs computer)
 * is dealt cards from a deck of 52 shuffled cards. The player can
 * choose to be dealt more cards or stop being dealt cards. The
 * sum of the numeric value of the cards in a player's hand determines if
 * they have won.
 *
 * Hands are compared after the player and computer finishes. A hand
 * worth over 21 is a bust. Else, the player with the hand closest to 21 wins.
 * Ties are possible.
 *
 * @param num1
 * @returns
 * ---------------------------------------------------------------
 */

    //Files that contain necessary functions
var cardUtils = require('./cardUtils');
var readlineSync = require('readline-sync');

//If a desk was passed using command line, then set cards to that deck
if (process.argv[2]) {
    cards = JSON.parse(process.argv[2]);
}

//Generate a sorted deck of cards -- value, suit and shuffle
else {
    var cards = cardUtils.generateCards();
    cards = cardUtils.shuffle(cards);

}

/**
 * Description: Runs the game of black jack utilizing the functions
 * in <cardUtils.js>. See above for a full description.
 *
 * @param cards
 */
function runGame(cards) {

    console.log("-------------------Starting a game of Blackjack!-------------------")

    //Local Variables
    var player = [];
    var computer = [];
    var playerTotal = 0;
    var computerTotal = 0;

    //Deal first card to player
    player.push(cards[0]);
    cards.splice(0, 1);

    console.log("You first card is ", player[0].value, player[0].suit);
    var letter = readlineSync.question('Type h to (h)it or s to (s)tay: ');

    //While user continues to press h, we play!
    while (letter === 'h') {

        player.push(cards[0]);
        cards.splice(0, 1);

        console.log("Your hand is:");

        //Loop through players hand
        for (i = 0; i < player.length; i++) {
            console.log(player[i].value, player[i].suit);
        }

        //Get player's hand's total value
        playerTotal = cardUtils.calculateHandArray(player);

        console.log("Total: ", playerTotal);
        console.log("\nThere are ", cards.length, " left in the deck");

        //IF players total is over 21, BREAK out of loop
        if (playerTotal > 21) {
            console.log("You hit over 21! with ", playerTotal);
            console.log("-----------------------------------------------");
            break;
        }

        console.log("-----------------------------------------------");
        letter = readlineSync.question('(h)it or (s)tay: ');
    }

    //Handle computer's turn -- Keep looping until computer's total is over 17
    while (computerTotal < 17) {
        computer.push(cards[0]);
        cards.splice(0, 1);

        console.log("Computer's hand is:");
        for (i = 0; i < computer.length; i++) {
            console.log(computer[i].value, computer[i].suit);
        }

        computerTotal = cardUtils.calculateHandArray(computer);
        console.log("Total: ", computerTotal);
        console.log("\nThere are ", cards.length, " left in the deck");
        console.log("-----------------------------------------------");
    }

    console.log("\n---------Results!---------")
    cardUtils.determineWinner(playerTotal, computerTotal);

    //If there are 26 or more cards you can play again
    if (cards.length >= 26) {

        //Ask if user wants to go another round with the SAME deck!
        var response = readlineSync.question('\nDo you want to be dealt another hand (y)es or (n)o? ');

        if (response === 'y') {
            runGame(cards);
        }

        else {
            console.log("You chose to end the game early!");
        }
    }

    else {
        console.log("There are less than 26 cards left. Game Over!");
    }
}

//Start initial game
runGame(cards);