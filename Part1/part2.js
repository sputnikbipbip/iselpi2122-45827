'use strict'

const fs = require('fs').promises
const fetch = require("node-fetch")
const client_id = process.env.ATLAS_CLIENT_ID;

/*
fs.readFile('./id.txt', 'utf8')
    .then(data => data.split("\r\n"))
    .then(gamesIds => `https://api.boardgameatlas.com/api/search?ids=${gamesIds.join(",")}&client_id=${client_id}`)
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
    .then(filteredArray => console.log(filteredArray))                         
    .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
})
*/

async function fetchGamesInfo () {
    try {
        const gamesIds = await (await fs.readFile('./id.txt', 'utf8')).split("\r\n")
        const data = await fetch(`https://api.boardgameatlas.com/api/search?ids=${gamesIds.join(",")}&client_id=${client_id}`)
        const parsedData = await data.json()
        const filteredArray = parsedData.games.map((game) => {
            return {
                id : game.id,
                name : game.name,
                url : game.url
            }
        })
        console.log(filteredArray)
    } catch (err) {
        console.log(err)
    }
}

fetchGamesInfo()