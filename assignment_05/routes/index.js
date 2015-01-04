var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var List = mongoose.model('List');

// Redirect Homepage To Lists Page
// Not necessary but its a bonus
router.get('/', function(req, res){
	res.redirect('/list');
});

// Get All Grocery List through the List model
router.get('/list', function(req, res){
	List.find(function(err,list,count){res.render('list',{main_title:'Shoppy Shoperson',title:'Grocery Lists',list:list});});
});

// Render the create handlebars file, which includes a form to enter
// Basic information about a list.
router.get('/list/create', function(req, res){
	res.render('create');
});

// Retreiving that information that is submitted in the create
// a grocery list and saving that information and adding it
// to the List collection.
router.post('/list/create', function(req, res){
	new List({
  	name: req.body.list_name,
	created: req.body.created_by,
	items: []
	}).save(function(err, list, count){
		res.redirect('/list');
	});
});

// Retrieve a specific grocery list
router.get('/list/:slug', function(req, res){
	List.findOne({slug: req.params.slug}, function(err, list, count){res.render('items', {list_name: list.name, created_by: list.created, list_items: list.items});});
});

// Add items to that grocery list
router.post('/list/:slug', function(req, res){
	req.body.slug = req.params.slug;
	List.findOneAndUpdate(
		{slug: req.body.slug},
		{$push:{items:new Item({name: req.body.name,quantity: req.body.quantity,checked: false,slug: req.body.slug})}},
		function(err, list, count){res.redirect('/list/'+req.body.slug);});
});

// Part 5: Deals with checking off items.
router.post('/item/', function(req, res){
	// Gets current list's slug.
	var slug = req.body.slug[0];

	var removed_items = [];

	// If one item is removed then it will just return a string.
	// If you call .length it will return the length of the string
	// Therefore you have to deal with this single case differently.
	if(typeof(req.body.itemCheckbox) === 'string'){
		removed_items.push(req.body.itemCheckbox);
	}
	// If there is more than one item being removed then
	// an array of strings will be found in req.body.itemCheckbox
	else{
		for(var i = 0; i < req.body.itemCheckbox.length; i++){
			removed_items.push(req.body.itemCheckbox[i]);
		}
	}

	// Look for items that have been removed and save their checked state
	// as true.
	List.findOne({slug: slug}, function(err, list, count){
		for(var i = 0; i < list.items.length; i++){
			for(var j = 0; j < removed_items.length; j++){
				if(list.items[i].name === removed_items[j]){
					list.items[i].checked = true;
					list.save(function(saveErr, saveList, saveCount){});
				}
			}
		}
		res.redirect('/list/'+slug);
	});
});
module.exports = router;
