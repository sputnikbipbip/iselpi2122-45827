const part1 = require('./../part1.js')

const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}
const props = ['b', 'd', 'g', 'a']

const objs = [
    {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
    {b: 'Hulk', a: [1,2,3], d: {x: 10}, g: false}, 
    {x: 'Vision', y: false}
]

const array = [
    'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
    'https://www.npmjs.com/package/node-fetch',
    'www.google.pt']


test('Filter properties - ex1', () => {
    const oFiltered = part1.filterProperties(props, o)
    const expectedObject = {a: 1, b: 'Thor', d: {x: 10}}
    expect(expectedObject).toMatchObject(oFiltered)
})

test('Filter n properties - ex2', () => {
    const oFiltered = part1.filterPropertiesN(props, objs)
    const expectedObject = [
        {a: 1, b: 'Thor', d: {x: 10}},
        {b: 'Hulk', a: [1,2,3], d: {x: 10}, g: false}, 
        { }]
    expect(expectedObject).toMatchObject(oFiltered)
})

test('Array zip - ex3', () => {
    expect([1,2,3].zip([4,5,6], function(left, right) { return left + right})).toMatchObject([5,7,9])
    expect([1,2,3].zip([4,5,6,7,8], (left, right) => left + right)).toMatchObject([5,7,9])
    expect([1,2,3].zip([4,5], (left, right) => left + right)).toMatchObject([5,7])
    expect([1,2,3].zip([], (left, right) => left + right)).toMatchObject([])
    expect([].zip([1,2,3], (left, right) => left + right)).toMatchObject([]) 
})