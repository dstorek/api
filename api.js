var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 1337; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	// res.json({ message: 'hooray! welcome to our api!' });
	res.json({ 

		email: "my email",
		firstname : "my firstname",
		lastname : "my lastname",
		passTypeId : "my passTypeId",  
		balance : "my balance"
	});	
});

// more routes for our API will happen here

// on routes that end in /passes/:email_address
router.route('/passes/email/:email_address')

    // get passes associated with this email_address
    .get(function(req, res){
        res.json({
        	serialNumber : "pass serialNumber",
        	passTypeId : "pass passTypeId"
        });
    });

// on routes that end in /passes/:serial_number
router.route('/passes/serial/:serial_number')

    // get passes associated with this serial_number
    .get(function(req, res){
       res.json({
       		balance : "my pass balance",
       		passTypeId : "my passTypeId",
       		serialNUmber : "my serialNumber"
       });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);