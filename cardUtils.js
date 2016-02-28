/**---------------------------------------------------------------
 * Author: Ricardo Guntur <ricardo.guntur@nyu.edu>
 * Course: Applied Internet Technology w/ Joe Versoza
 * File: cardUtils.js
 *
 * Description: Contains functions that are used in game.js
 * which runs a game of black jack!
 *
 * @param player1
 * @param player2
 * @returns
 * ---------------------------------------------------------------
 */


/**
 * Description: Determine the winner based on the totals passed in, and
 * return the string representation of the winner
 *
 * @param player - player1's score
 * @param computer - player2's score
 */
function determineWinner(player, computer) {

    winningNum = 21;
    console.log("Player: ", player);
    console.log("Computer: ", computer);

    if (player === winningNum && computer === winningNum) {
        console.log("Player and Computer tied with 21!");
    }

    else if (player > winningNum && computer > winningNum) {
        console.log("Player and Computer both busted over 21");
    }

    else if (player === computer ) {
        console.log("Player and Computer tied!");
    }

    else if (player === winningNum) {
        console.log("Player won with 21!");
    }

    else if (computer === winningNum) {
        console.log("Computer won with 21!");
    }

    else if (player > winningNum) {
        console.log("Computer Won!")
    }

    else if (computer > winningNum) {
        console.log("Player Won!")
    }

    else if (player > computer) {
        console.log("Player won!");
    }

    else if (player < computer) {
        console.log("Computer won!");
    }

}

//Card object made of value and suit
function card(value, suit) {
    this.value = value;
    this.suit = suit;
}

/**
 *
 * Description: Generates a deck of cards using card object that consists of
 * value and suit.
 *
 * IE. {1, ♠}
 * @returns {cards}
 */
function generateCards() {

    var cards = [];
    this.value = ['1', '2', '3', '4' ,'5' ,'6' ,'7' ,'8' ,'9', '10', 'J', 'Q', 'K'];
    this.suits = ['♠', '♥', '♦', '♣'];

    for (i = 0; i < this.suits.length; i++) {
        for(j = 0; j < this.value.length; j++) {
            cards.push(new card(this.value[j], this.suits[i]));
        }
    }

    return cards;
}

/**
 * Description: Shuffles a 52 card deck by creating a new array and copying the original
 * array by using a random index.
 *
 * @param cards - the deck of 52 sorted cards
 * @returns shuffledCards - the unsorts and shuffle deck of cards
 */
function shuffle(cards) {

    var shuffledCards = [];

    while (cards.length > 0) {

        randomIndex = Math.floor((Math.random() * cards.length - 1) + 1);

        //Add random card into new array
        shuffledCards.push(cards[randomIndex]);

        //Remove card from original deck
        cards.splice(randomIndex, 1);

    }

    return shuffledCards;
}

/**
 * Description: Calculates the numeric total of all the cards in one players hand.
 * Jack(J), Queen(Q), King(K) are all worth 10.
 *
 * @param handArray
 */
function calculateHandArray(handArray) {

    var totalValue = 0;

    for (i = 0; i < handArray.length; i++) {

        if (handArray[i].value === 'J') {
            totalValue += 10;
        }

        else if (handArray[i].value === 'Q') {
            totalValue += 10;
        }

        else if (handArray[i].value === 'K') {
            totalValue += 10;
        }

        else if (handArray[i].value > 0) {
            totalValue += +handArray[i].value;
        }

    }

    return totalValue;
}

//Export functions that will be used by game
exports.determineWinner = determineWinner;
exports.generateCards = generateCards;
exports.shuffle = shuffle;
exports.calculateHandArray = calculateHandArray;