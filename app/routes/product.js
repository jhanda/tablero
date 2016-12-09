var express = require('express');  
var router = express.Router();

/* GET all Projects */
router.get('/', function (req, res, next) {  

    res.json({'project':'project 1'});

});


module.exports = router;