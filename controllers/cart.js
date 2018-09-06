// Require modules
var express = require('express');

// Global variables
var db = require('../models');
var router = express.Router();

// Define routes 
router.get('/', function(req, res){
	res.render('cart/index');
});

router.post('/', function(req, res){
	//todo: want to post data name fruit and price
	console.log(req.body);
	res.send('success');
});
module.exports = router;