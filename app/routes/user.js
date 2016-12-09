var express = require('express');  
var router = express.Router();

/* GET all Projects */
router.get('/', function (req, res, next) {  

    res.json({'user':'user 1'});

});


module.exports = router;