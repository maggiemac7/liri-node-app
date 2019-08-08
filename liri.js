require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var concertThis = require("concert-this");
var spotifyThis = require("spotify-this-song");
var movieThis = require("movie-this");
var doThis = require("do-whay-it-says");
