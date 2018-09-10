// Require modules
var express = require('express');

// Global variables
var db = require('../models');
var router = express.Router();

// Define routes 
router.get('/', function(req, res){
		db.fruit.findAll().then(function(f){
		res.render('fruit/index', {fruit: f});
	}).catch(function(err){
		res.render('404');
	});
});

router.get('/new', function(req, res){
	res.render('fruit/new');
});

router.post('/', function(req, res){
	db.fruit.create(req.body).then(function(createdFruit){
		res.redirect('/fruit');
	}).catch(function(err){
		res.render('404');
	});
});

router.get('/update', function(req, res){
	res.render('fruit/update');
});

router.get('/:id', function(req, res){
	db.fruit.findById(req.params.id).then(function(m){
			res.send(m);
	}).catch(function(err){
		res.render('404');
	});
});

// router.get('/update', function(req, res){
// 	res.render('fruit/update');
// });
router.get('/update/:id', function(req, res){
	// console.log(req.params.id);
	db.fruit.findById(req.params.id).then(function(m){
	// console.log(m);
			res.render('fruit/update', {fruit: m});
	}).catch(function(err){
		res.render('404');
	});
});

router.put('/update/:id', function(req, res){
	console.log('try to listen from controllers');
  	db.fruit.findOne({
  		where: {id: req.params.id}
  	}).then(function(m){
	console.log(m);  
  	console.log(req.body);
  	m.update(req.body);
  	res.send('success');
  }).catch(function(err){
  	console.log(err);
  	res.render('404');
  })
});

router.delete('/:id', function(req, res){
	db.fruit.destroy({
		where: {id: req.params.id}
	}).then(function(recentfruit){
		res.send('sucessfully deleted!');
	}).catch(function(e){
		res.send('sad fail');
	});
});

module.exports = router;