function inspect(obj) {
    if(typeof obj == 'function') {
        console.log(obj())
    }
    for (var prop in obj) {
        console.log(`${prop} = ${obj[prop]}`)
    } 
}

function functionType () {
    console.log('function call was a success')
}

const obj = {
    name: 'jorge mendes',
    id: '12343332',
    class: 'D'
}

inspect(obj)
inspect(functionType)

//Testing type of types
console.log(typeof example)