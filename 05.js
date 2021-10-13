function arrayToList (array) {
    //refazer tudo
    array.foreach(elem => {
        list.value = elem
        list.rest = {
            value : i+1,
            rest : null
        }
    })
}

function listToArray () {

}

console.log(arrayToList([10, 20]))