var express = require('express');
var router = express.Router();
var rpn = require('request-promise-native');

const options = {
  url:"https://api.github.com/users/ddelgad5",
  headers:  {
    'User-Agent': 'Request-Promise'
  },
  json: true
};

/* GET home page. */
router.get('/', function(req, res, next) {
  rpn(options).then( function(results) {
    console.log("Github profile", results.login, "called");
    res.render('index', { title: 'Github', name: results.name, avatar: results.avatar_url, repos: results.public_repos, updated_at: Date(results.updated_at) });
  });
});

module.exports = router;
