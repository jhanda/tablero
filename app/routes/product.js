var express 		= require('express');  
var WeDeploy 		= require('wedeploy').WeDeploy;
var router 			= express.Router();
var dataService 	= WeDeploy.data('http://data.tablero.wedeploy.io');
var Product			= require('../models/product.js')

/* GET all Product */
router.get('/', function (req, res, next) {  
	
	Product.getProducts(function(products) {
			res.setHeader('Content-Type', 'application/json');
           	res.json(products);
    });

});

// POST a new product
router.post('/', function (req, res){
	
	var product = req.body;
	
	Product.createProduct(product, function(response){
		res.setHeader('Content-Type', 'application/json');
        res.json(response);
	});
});


module.exports = router;