var express = require('express');
var body_parser = require('body-parser');
var handle_bars = require('express3-handlebars');
var session = require('express-session');
var app = express();

// Needed to grab body content.
app.use(body_parser.urlencoded({extended: false}));
//	Serve Static Content from this directory.
app.use('/public', express.static('public'));
//	Default Handlebars template.
app.engine('handlebars',handle_bars({defaultLayout: 'main'}));
//	Register Handlebars view engine.
app.set('view engine', 'handlebars');

// Given to us in assignment description.
var sessionOptions = {
	secret: 'secret cookie thang',
	resave: true,
	saveUninitialized: true
};
app.use(session(sessionOptions));

// Reverse URL lookup.
app.get('/',
	function(req, res){
			res.render('home',{
				settings: '/settings',
				list: '/birds'
			});
		}
	);

app.listen(3000);

// Birds Array
var all_birds = new Array(
	{"name":"Bald Eagle","amount":"3"},
	{"name":"Yellow Billed Duck","amount":"7"},
	{"name":"Great Cormorant","amount":"4"});

//	Pick Ones That Match The Amount Entered
function look_for_bids(birds_amt){
	var valid_vals = [];
	for(var i = 0; i< all_birds.length; i++){
		if(all_birds[i].amount >= birds_amt){
			valid_vals.push(all_birds[i]);
		}
	};
	return valid_vals;
};

// Checking if the bird name exists already. If so just increment the amount.
function filter_birds(input){
	var exists = false;
	for(var i = 0; i < all_birds.length; i++){
		if(all_birds[i].name === input ){
			all_birds[i].amount++;
			exists= true;
		}
	}
	if(exists === false){
		all_birds.push({"amount": '1', "name":input});
	}
}

// Deals with GET & POST for the birds page.
app.get('/birds', function(req, res){
	req.session.all_birds = look_for_bids(req.session.bare_min_filter);
	var birds = all_birds;
	if(req.session.all_birds.length != 0){
		birds=req.session.all_birds;
	}
	console.log("GET /birds");
	console.log("=====");
	console.log(req.body);
	if(req.session.bare_min_filter === undefined){
		console.log("minVal has not been defined yet.");
	}
	else{console.log("req.session.minVal: " + req.session.bare_min_filter)};
	res.render(
		'birds',
		{'birds':birds,'settings': '/settings'}
	);
});

app.post('/birds', function(req, res){
	filter_birds(req.body.birds);
	res.redirect('/birds');
	console.log("BLAH BLAH");
});

// Deals with GET & POST for the settings page.
app.get('/settings', function(req, res){
	res.render(
		'settings',
		{'bare_min_filter':req.session.bare_min_filter,list: '/birds', 'value':req.session.bare_min_filter});
	console.log("GET /settings");
	console.log("=====");
	console.log(req.body);
	if(req.session.bare_min_filter === undefined){
		console.log("minVal has not been defined yet.");
	}
	else{console.log(req.session.bare_min_filter)};
});

// Need to make sure the value entered remains there.
app.post('/settings', function(req, res) {
	req.session.bare_min_filter = req.body.bare_min_filter;
	res.redirect('/birds');
	console.log("POST /settings");
	console.log("=====");
	req.session.all_birds = look_for_bids(req.session.bare_min_filter);
	console.log(req.session.all_birds);
	if(req.session.bare_min_filter === undefined){
		console.log("minVal has not been defined yet.");
	}
	else{console.log(req.session.bare_min_filter)};
});




