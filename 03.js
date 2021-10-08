function min(v1, v2) {
    return v1 < v2 ? v1 : v2
}


console.log(min(0, -10))
console.log(min(0, 10))
console.log('------------------')

function isEven (value) {
    //this way it also works for negative values
    if(value < 2) 
        return value === 0 ? true : false
    return isEven(value % 2) 
}   

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

console.log('------------------')

function countBs(myString) {
    let counter = 0
    for (let i = 0; i < myString.length - 1; i++) {
        //not obliged to check for empty space
        if(myString[i] >= 'A' && myString[i] <= 'Z' )
            ++counter
    }
    return counter
}
console.log('------------------')

function countChar (stringValue, letter) {
    let counter = 0
    for (let i = 0; i < stringValue.length; i++) {
        if(stringValue[i] === letter) {
            counter++
        } 
    }
    return counter
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4