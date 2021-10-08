function loopingTriangle() {
    for (let i = 1; i <= 8; i++) {
        //attention if asterisk declared empty undefined is added at the start
        let asterisk = '#'
        for (let j = 1; j < i; j++) {
            asterisk += '#'
        }
        console.log(`${asterisk}`)
    }
}

loopingTriangle()
console.log('-----------------------')

function fizzBuzz() {
    for (let i = 0; i < 100; i++) { 
        if (i % 3 !== 0 && i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    } 
}

fizzBuzz()
console.log('-----------------------')

function chessBoard(size) {
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            console.log(' # # # #')
        } else {
            console.log('# # # #')
        }
    } 
}

chessBoard(8)