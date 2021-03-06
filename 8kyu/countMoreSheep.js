/*

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

// forEach with condition if (sum === true) sum++

function countSheeps(arrayOfSheep) {
    let sum = 0
    arrayOfSheep.forEach (e => {
        if (e == 'true') {
            sum++
        } 
    })
    return sum
  }

// A smart way would be to filter the array by booleans and return the length

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}