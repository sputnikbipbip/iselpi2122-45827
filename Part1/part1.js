'use strict'

const fetch = require('node-fetch')
const reducer = (prev, curr) => prev + curr

module.exports = {
    filterProperties,
    filterPropertiesN,
}

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

function filterPropertiesN(propNames, objs) {
    return objs
    .map(object => {
        return filterProperties(propNames, object)
    })
}

Array.prototype.zip = function (a, combiner) {
    let size = 0
    let res = []
    this.length >= a.length ? size = a.length : size = this.length
    for(let i = 0; i < size; i++) {
        res.push(combiner(this[i], a[i]))
    }
    return res; 
}