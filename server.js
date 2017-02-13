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
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
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
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/ychoy/express_self_api/README.md",
    baseUrl: "http://powerful-hollows-02954.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"}, // show
      {method: "GET", path: "/api/profile", description: "Data about me"}, //
      {method: "GET", path: "/api/camping", description: "Show all my favorite camping spots"},
      {method: "POST", path: "/api/camping", description: "Create a new camping spot"},
      {method: "GET", path: "/api/camping/search", description: "Return search results for camping spots from query in the request"},
      {method: "GET", path: "/api/camping/:id", description: "Find a camping spot"},
      {method: "PUT", path: "/api/camping/:id", description: "Update a camping spot"},
      {method: "DELETE", path: "/api/camping/:id", description: "Delete a camping spot"}
      /* add later
      {method: "GET", path: "/api/projects", description: "Show all my coding projects"},
      {method: "POST", path: "/api/projects", description: "Create a new project"},
      {method: "GET", path: "/api/projects/:id", description: "Find a project"},
      {method: "PUT", path: "/api/projects/:id", description: "Updated a project"},
      {method: "GET", path: "/api/projects/search", description: "Search all projects to find projects that match the query "},
      {method: "DELETE", path: "/api/projects/:id", description: "Delete a project"},
      */
    ],
  })
});

app.get('/api/profile', function profile(req,res){
  res.json({
    name: 'Yan Yin Choy',
    githubLink: 'http://github.com/ychoy',
    githubProfileImage: 'https://avatars1.githubusercontent.com/u/20962963?v=3&s=460',
    personalSite: 'http://ychoy.github.io',
    currentCity: 'San Jose',
    pets: false,
    interests: ['hiking', 'painting', 'camping', 'local small businesses', 'live music', 'civic innovation', 'developing new leaders', 'sustainability', 'affordable housing' ]
  });
});

// get all camping
app.get('/api/camping', function (req, res) {
    // send all camping as JSON response
    db.Camping.find()
      // populate fills in the camping feature id with all the camping feature data
      .populate('campingfeatures')
      .exec(function(err, campingResults){
        if (err) {
					status(500).send(err);
					return;
				}
        res.json(campingResults);
      });
});

// create new camping
app.post('/api/camping', function (req, res) {
    // create new camping with form data
    var newCamping = new db.Camping({
      id: camping.id,
      title: camping.title,
      park: camping.park,
      description: camping.description,
      trail: camping.trail,
      images: camping.images,
      features: camping.features,
      coordinates: camping.coordinates
    });

   db.CampingFeatures.find({name: req.body.features}, function(err, campingFeatures){
      // if the feature exists then add feature to camping
			if (features.length !== 0) {
      	newCampingFeatures.features = campingFeatures;
				newCampingFeatures.save(function(err,campingResults){
        	if (err) {return console.log("error:" + err);}
						console.log("new camping:" + camping.title);
						res.json(campingResults);
					})
			} else {   //create new camping and add camping features to database
				var newCampingFeatures = new db.CampingFeatures({   //add new feature
					features: req.body.features,
				});
				newCampingFeatures.save(function(err, campingFeatures) {  //save new feature
        	console.log("new author:" + campingFeatures);
					newCampingFeatures.features = campingFeatures;

      // add new camping to database
     			newCamping.save(function(err, campingResults){  //save camping with features attribute
        		if (err) {
          		return console.log("create error: " + err);
        		}
        		console.log("created ", camping.title);
        		res.json(campingResults);    // send camping to the view
      		});
				});
			}
   });

});

// Find camping by its id
app.get('/api/camping/:id', function (req, res) {
  db.Camping.findById(req.params.id)
    // populate the features
    .populate('campingfeatures')
    .exec(function(err, campingResults){
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(campingResults);
    });
});

//search for camping
app.get('/api/camping/search', function search(req, res) {
  /* This endpoint responds with the search results from query in request. */

  var campingTitle = (req.query.q);

  // filter todos array for query.   
	var campingToSearch = camping.filter(function(camping){
	  console.log(camping.title);
	  // check specific property of the object
    return camping.title == campingTitle;
  });   // if there is a match return match

 res.json({ data: campingToSearch });  // respond with the search results from the query
});



//updates camping except for features
app.put("/api/camping/:_id", function(req, res){
  var bookId = req.params._id;

  db.Camping.findOne({_id: campingId}, function(err, updatedCamping){
		console.log(updatedCamping);
		if (err) {
		 res.status(500).send(err);
		}
      updatedCamping.id = req.body.id,
      updatedCamping.title = req.body.title,
      updatedCamping.park = req.body.park,
      updatedCamping.description = req.body.description,
      updatedCamping.trail = req.body.trail,
      updatedCamping.images = req.body.images,
      updatedCamping.features = req.body.features,
      updatedCamping.coordinates = req.body.coordinates,
			updatedCamping.save(function(err,saved){ //save updated attributes
				if (err) {
					return console.log("update error: " + err);
				}
				res.send(updatedCamping);
			});
    });
});

/* Delete camping listing */
app.delete('/api/camping/:id', function destroy(req, res) {
  // get camping id from url params (`req.params`)
  var campingId = req.params.id;
  // find camping listing in db by id and remove
  db.Camping.findOneAndRemove({ _id: campingId }, function (err, deletedCamping) {
    res.json(deletedCamping);
  });
});



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
