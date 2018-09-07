// Require modules
var express = require('express');

// Global variables
var db = require('../models');
var router = express.Router();

router.get('/', function(req, res){
		db.cart2.findAll().then(function(f){
			// console.log(f);
		//	res.render('cart/index')
		 res.render('cart/index', {cart2: f});
	}).catch(function(err){
		res.render('404');
	});
});

router.post('/', function(req, res){
	//todo: want to post data name fruit and price
	db.cart2.create(req.body).then(function (checkout){
		res.send('success');
	}).catch(function(err){
		res.render('404');
	});
});

router.get('/payment', function(req,res){
	res.render('cart/payment');
});

router.get('/finish', function(req,res){
	res.render('cart/finish');
})
router.delete('/:id', function(req, res){
	db.cart2.destroy({
		where: {id: req.params.id}
	}).then(function(recentproduct){
		res.send('sucessfully deleted!');
	}).catch(function(e){
		res.send('sad fail');
	});
});

module.exports = router;