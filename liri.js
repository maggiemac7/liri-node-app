require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require('fs');

var commandFromTerminal = process.argv[2];
var searchTermFromTerminal = process.argv[3];
commandHandler(commandFromTerminal, searchTermFromTerminal);
function commandHandler(command, searchTerm){
if (command === "concert-this"){
    axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp")
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  })
}

if (command === "do-what-it-says"){
    //we read file random.txt
    fs.readFile('random.txt', 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data.split(','));
        //parse string into command and value
        
        //invokde function with variables
        commandHandler(data.split(',')[0], data.split(',')[1]);
      });
}

if (command === "spotify-this-song"){
    spotify.search({ type: 'track', query: searchTerm })
    .then(function(response) {
        //[{name: 'someone'}, {name:'someone else'}].map(function(artist) {
           // return artist.name
        //}) [someone, someone lese].join(',') => someone one, someone else
      console.log(
     
      "\n Artist: ", response.tracks.items[0].artists.map(function(artist){
          return artist.name;
      }).join(', ') +
      "\n Song Name: ", response.tracks.items[0].name +
      "\n Preview Link: ", response.tracks.items[0].preview_url +
      "\n Album: ", response.tracks.items[0].album.name
      );
    })
}


if (command === "movie-this"){
    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + (searchTerm || 'Elf'))
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  })
}
}
