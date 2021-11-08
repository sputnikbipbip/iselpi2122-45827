'use strict'

const fs = require('fs').promises
const fetch = require("node-fetch")
const client_id = process.env.ATLAS_CLIENT_ID;

/*
let promises = fs.readFile('./id.txt', 'utf8')
    .then(data => data.split("\r\n")
    .map(function(line) {
        const url = `https://api.boardgameatlas.com/api/search?ids=${line}&client_id=${client_id}`
        console.log(`url is : ${url}`)
        fetch(url)
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
            .then(filteredGame => console.log(filteredGame))                         
            .catch(function(error) {
                handleError(error);
        })
    }))

Promise.all(promises)
*/

async function fetchGamesInfo() {
    try {
        const gamesIds = (await fs.readFile('./id.txt', 'utf8')).split("\r\n")
        const urls = gamesIds.map(gameId => {
            return `https://api.boardgameatlas.com/api/search?ids=${gameId}&client_id=${client_id}`
        })
        console.log(urls)
        let filteredGames = await Promise.all(
            urls.map(async url => {
                let response = await fetch(url)
                let responseJSON = await response.json()
                return responseJSON.games.map((game) => {
                    console.log(`\nsingle fetch :
                        gameId ${game.id}
                        gameName ${game.name}
                        gameUrl ${game.url}`
                        )
                    return {
                        id : game.id,
                        name : game.name,
                        url : game.url
                    } 
                })
            })
        )
        console.log(filteredGames)
    } catch (err) {
        handleError(err) 
    }
}

fetchGamesInfo()