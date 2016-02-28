<<<<<<< Updated upstream
/**---------------------------------------------------------------
 * Author: Ricardo Guntur <ricardo.guntur@nyu.edu>
 * Course: Applied Internet Technology w/ Joe Versoza
 *
 * Description: Simulates pythons range function. Will produce an Array of numbers
 * based on the arguments passed into it.
 *
 *
 * @param p1 - Start number
 * @param p2 - End number
 * @param p3 - Number to increment or decrement by
 * @returns {Array}
 * ---------------------------------------------------------------
 */

function range(p1, p2, p3) {
    var numArray = new Array();

    //If there is one argument
    if (arguments.length === 1) {
        for (i = 0; i < p1; i++) {
            numArray.push(i);
        }
    }

    //If there are two arguments
    else if (arguments.length === 2) {
        for (i = p1; i < p2; i++) {
            numArray.push(i);
        }
    }

    //If there are three arguments and incrementing
    else if (arguments.length === 3 && p3 > 0) {
        for (i = p1; i < p2; i+=p3) {
            numArray.push(i);
        }
    }

    //If there are three arguments and decrementing
    else if (arguments.length === 3 && p3 < 0) {
        for (i = p1; i > p2; i+=p3) {
            numArray.push(i);
        }
    }

    return numArray;
}

//Tests
console.log(range(5));
console.log(range(2, 5));
console.log(range(2, 9, 2));
console.log(range(5, 0, -1));
console.log(range(6, -1, -2));
console.log(range(6, -1, 1));
=======
console.log("test");
>>>>>>> Stashed changes
