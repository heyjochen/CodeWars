//Create a function that takes in an array of numbers. Return a new array containing every odd number from the original array (do not use map or filter)

function oddNmbs (arr) {
    let odds = []
    arr.forEach((element) => {
        if (!(element % 2 === 0)) {
            odds.push(element)

        }
    })
    return odds
    }

oddNmbs([1, 2, 3, 4, 5])




function oddNumbers (arr) {
    let newArray = []

    arr.forEach (element  => {
        if (!(element % 2 === 0)) {
            newArray.push(element)
        }
    })
    return newArray
}
oddNumbers ([1, 2, 3, 4, 5])