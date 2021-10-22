'use strict'

function filterProperties(propNames, obj) {
    let res = {}
    propNames.forEach(p => {
        let propValue = obj[p]
        if (propValue != undefined) {
            res[p] = propValue
        }
    }) 
    return res
}

const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}

const props = ['b', 'd', 'g', 'a']
const oFiltered = filterProperties(props, o)
//console.log(oFiltered)
// oFiltered: {a: 1, b: 'Thor', d: {x: 10}}

/*
    Exercise 2
*/

function filterPropertiesN(propNames, objs) {
    return objs
    .map(object => {
        return filterProperties(propNames, object)
    })
}

const objs = [
    {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
    {b: 'Hulk', a: [1,2,3], d: {x: 10}, g: false}, 
    {x: 'Vision', y: false}
]

const objsFiltered = filterPropertiesN(props, objs)
console.log(objsFiltered)
/*
 objsFiltered: [
   {a: 1, b: 'Thor', d: {x: 10}},
   {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
   { }
*/

function zip(a, combiner) {
    
}

[1,2,3].zip(
    [4,5,6], 
    function(left, right) { 
        return left + right
    }
) 
// [5,7,9]

[1,2,3].zip(
    [4,5,6,7,8],
    (left, right) => left + right
) 
// [5,7,9]

[1,2,3].zip(
    [4,5],
    (left, right) => left + right
)
// [5,7]

[1,2,3].zip(
    [],
    (left, right) => left + right
) 
// []

[''].zip(
    [1,2,3], 
    (left, right) => left + right
) 
// []


