// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/ychoy/express_self_api/README.md",
    baseUrl: "http://powerful-hollows-02954.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"}, // show
      {method: "GET", path: "/api/profile", description: "Data about me"}, //
      {method: "GET", path: "/api/projects", description: "Show all my coding projects"},
      {method: "POST", path: "/api/projects", description: "Create a new project"},
      {method: "GET", path: "/api/projects/:id", description: "Find a project"},
      {method: "PUT", path: "/api/projects/:id", description: "Updated a project"},
      {method: "GET", path: "/api/projects/search", description: "Search all projects to find projects that match the query "},
      {method: "DELETE", path: "/api/projects/:id", description: "Delete a project"},
      {method: "GET", path: "/api/camping", description: "Show all my favorite camp sites "},
      {method: "GET", path: "/api/camping/search", description: "Return search results for camping from query in the request"},
      {method: "GET", path: "/api/camping/:id", description: "Find a campsite"},
      {method: "PUT", path: "/api/camping/:id", description: "Update a campsite"},
      {method: "DELETE", path: "/api/camping/:id", description: "Delete a campsite"}
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
