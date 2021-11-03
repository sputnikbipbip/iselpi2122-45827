
const fetch = require("node-fetch")

const client_id = process.env.ATLAS_CLIENT_ID;
const URL = `https://api.boardgameatlas.com/api/lists?username=trentellingsen&client_id=${client_id}`

const result = []

fetch(URL)                                              
    .then(rsp => rsp.json())  
    .then(data => console.log(data))                         
    .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });




