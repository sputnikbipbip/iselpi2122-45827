function deepEqual (o1, o2) {
    if (typeof o1 != 'object' || o1 == null)
        return o1 === o2 ? true : false
    let oneKeys = Object.keys(o1)
    let sizeCheck = Object.keys(o2).length
    if (sizeCheck !== oneKeys.length)
        return false
    for (key of oneKeys) {
        if (o1[key] != o2[key]) {
            return false
        }
    }
    return true 
} 


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true