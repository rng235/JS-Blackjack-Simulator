/**---------------------------------------------------------------
 * Author: Ricardo Guntur <ricardo.guntur@nyu.edu>
 * Course: Applied Internet Technology w/ Joe Versoza
 * File: linkedList.js
 *
 * Description: Objects, as generic blobs of values, can be used to build all sorts of data
 * structures. A common data structure is the list (not to be confused with
 * the array). A list is a nested set of objects, with the first object holding
 * a reference to the second, the second to the third, and so on.
 *
 * This program implements that data structure and contains an prepend
 * function to add a new element to the front and a nth function to
 * find an element recursively in a list.
 * ---------------------------------------------------------------*/


var array = [1, 2, 3];

//Convert array to a linked list
function arrayToList(array) {

    var list = null;

    for (i = array.length-1; i >= 0; i--) {

        list = { value:array[i], rest:list};

        //1sts iteration
        //{ value: 3, rest: null }

        //2nd iteration
        //New thing points to ------> old thing
        //{ value: 2, rest: { value: 3, rest: null } }

        //3rd iteration
        //New thing points to ---> old thing points to -----> older thing
        //{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
    }
    return list;
}

//Convert a linked list to an array
function listToArray(list) {
    var array = [];
    var node = list;

    while(node) {

        //Place value into array
        array.push(node.value);

        //Go to next node that points to next value
        node = node.rest;

        //1st iteration
        //[ 1 ]

        //2nd iteration
        //[ 1, 2 ]

        //3rd iteration
        //[ 1, 2, 3 ]
    }

    return array;
}

//Add an element to the front of a given list
function prepend(element, list) {

    //new list
    var newList = null;
    var node = list;

    //Copies old list to new list
    while(node) {

        newList = {value: node.value, rest: newList};

        node = node.rest;
    }

    //Add new element to the front of new list
    newList = {value: element, rest: newList};

    return newList;
}

//Look for an element in a given list recursively
function nth(list, key) {

    //ya found it
    if(key === 0) {

        return list.value;
    }

    //ya haven't found it so go to the next pointed object
    else {

        return(nth(list.rest, key-1));
    }

}

//Test cases for HW 1
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
