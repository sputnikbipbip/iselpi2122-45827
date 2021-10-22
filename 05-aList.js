function arrayToList (array) {
    let list = {}
    if (array.length > 0) {
        list.value = array[0]
        list.rest = null
    }
    let previousRest = list
    for (let i = 1; i < array.length; i++) {
        previousRest.rest = {
            value : array[i],
            rest : null
        }
        previousRest = previousRest.rest
    }
    return list
}

function listToArray (list) {
    let array = []
    let dummy = list
    while (dummy != null) {
        array.push(dummy.value)
        dummy = dummy.rest
    }
    return array
} 

function prepend() {
    
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}