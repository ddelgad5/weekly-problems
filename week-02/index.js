// TODO: Read the contents of `README.md` before hacking on this file

// Require the file system
const fs = require('fs');
// Require the request-promise-native package
const req = require('request-promise-native');

const options = {
  // TODO: Create an object literal to hit your account on the GitHub API,
  // and pass any other information the API requires (you should not have
  // to authenticate for this, however)
  url:"https://api.github.com/users/ddelgad5",
  headers:  {
    'User-Agent': 'Request-Promise'
  }
};

req(options) // Github API Call
  .then(
    // TODO: Handle the returned JSON data and write it to a file called
    // `response.json` in your `week-two/` directory
    function(results) {
      fs.writeFile('response.json', results, (err) => {
        if (err) {
          throw err;
        }
      });
      console.log('Github request successful!');
    }
  )
  .catch(function(err) {
    console.log(err);
  });

const dOptions = {
  // TODO: Create an object literal to hit your account on the GitHub API,
  // and pass any other information the API requires (you should not have
  // to authenticate for this, however)
  url:"https://feeds.divvybikes.com/stations/stations.json",
  headers:  {
    'User-Agent': 'Request-Promise'
  }
};

req(dOptions) // Divvy API call
  .then(
    // TODO: Handle the returned JSON data and write it to a file called
    // `response.json` in your `week-two/` directory
    function(results) {
      fs.writeFile('divvy.json', results, (err) => {
        if (err) {
          throw err;
        }
      });
      console.log('Divvy request successful!');
    }
  )
  .catch(function(err) {
    console.log(err);
  });
