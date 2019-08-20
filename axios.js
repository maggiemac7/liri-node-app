var axios = require("axios");
var moment = require("moment");
// The axios.get function takes in a URL and returns a promise (just like $.ajax)

axios.get("https://www.npmjs.com/package/axios").then(
  function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  }); 