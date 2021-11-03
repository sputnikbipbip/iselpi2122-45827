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

Array.prototype.zip = function (a, combiner) {
    let size = 0
    let res = []
    this.length >= a.length ? size = a.length : size = this.length
    for(let i = 0; i < size; i++) {
        res.push(combiner(this[i], a[i]))
    }
    return res; 
}


console.log([1,2,3].zip([4,5,6], function(left, right) { return left + right})) // [5,7,9]

console.log([1,2,3].zip([4,5,6,7,8], (left, right) => left + right)) // [5,7,9]

console.log([1,2,3].zip([4,5], (left, right) => left + right))// [5,7]

console.log([1,2,3].zip([], (left, right) => left + right)) // []

console.log([].zip([1,2,3], (left, right) => left + right)) // []

'use strict'


const fetch = require('node-fetch')
const reducer = (prev, curr) => prev + curr

function sumBodiesSize(... urls) {
    return urls.forEach(url => fetch(url))
        .then(res => {
            const body = res.text()
            return body
        })
        .map(body => body)
        .reduce((reducer))
}




const array = [
'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
'https://www.npmjs.com/package/node-fetch',
'www.google.pt']

console.log(sumBodiesSize(array))