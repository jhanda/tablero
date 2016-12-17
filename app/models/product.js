var WeDeploy 		= require('wedeploy').WeDeploy;
var dataService 	= WeDeploy.data('http://data.tablero.wedeploy.io');


function getProducts(callback) {  

	dataService.get('products')
    	.then(function(products) {
           	return callback(products);
    });
}

exports.getProducts = getProducts;

function createProduct(product, callback){
	
//TODO:  Validate the product data
   
	dataService.create('products', product)
		.then(function(response) {
			return callback(response);
		})
		.catch(function(error) {
			console.error(error);
			//TODO:  Send back response in case of an error
		});	
}

exports.createProduct = createProduct;
