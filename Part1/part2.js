'use strict'

const fs = require('fs')
const fetch = require("node-fetch")
const client_id = process.env.ATLAS_CLIENT_ID;

/*

function urlBuilder () {
    return new Promise((resolve, reject) => {
        fs.readFile('./id.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            const gamesIds = data.split("\r\n")
            resolve(`https://api.boardgameatlas.com/api/search?ids=${gamesIds.join(",")}&client_id=${client_id}`)
        })
    }) 
}

urlBuilder()
    .then(url => {
        console.log(`url is : ${url}`)
        return fetch(url)}
    )
    .then(data => data.json())
    .then(
        data => data.games.map(function(game) {
            return {
                id : game.id,
                name : game.name,
                url : game.url
            }
        })
    )
    .then(array => console.log(array))                         
    .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
})
*/

async function inspectorGadget () {
    try {
        const url = await fs.promises.readFile('./id.txt', 'utf8', (err, data) => {
            if (err) {
                return console.log(err)
            }
            const gamesIds = data.split("\r\n")
            return `https://api.boardgameatlas.com/api/search?ids=${gamesIds.join(",")}&client_id=${client_id}`
        })
        const data = await fetch(url)
        const parsedData = await data.json()
        const array = parsedData.games.map((game) => {
            return {
                id : game.id,
                name : game.name,
                url : game.url
            }
        })
        console.log(array)
    } catch (err) {
        console.log(err)
    }
}

inspectorGadget()


