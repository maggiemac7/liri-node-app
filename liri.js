require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var searchTerm = process.argv[3];
if (command === "concert-this"){
    axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp")
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  })
}

if (command === "spotify-this-song"){
    spotify.search({ type: 'track', query: searchTerm })
    .then(function(response) {
      console.log(
        response.tracks); 
    //   "\n Artist: ", response.artist.name[0] +
    //   "\n Song Name: ", response.tracks.items[0] +
    //   "\n Preview Link: ", response.tracks.items[0] +
    //   "\n Album: ", response.tracks.items[0]; 
    })
}

