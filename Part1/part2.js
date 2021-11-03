'use strict'

const fs = require('fs')
const fetch = require("node-fetch")

let gamesIds
let idsString

const client_id = process.env.ATLAS_CLIENT_ID;
const URL = `https://api.boardgameatlas.com/api/search?ids=${idsString}&client_id=${client_id}`



fs.readFile('./id.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    gamesIds = data.split("\n")
    gamesIds.forEach(id => {
        idsString += `${id},`
    })
    idsString.slice(-1)
    console.log(gamesIds)
    console.log(idsString)
})


fetch(URL)                                              
    .then(rsp => rsp.json())  
    .then(data => console.log(data))                         
    .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });



