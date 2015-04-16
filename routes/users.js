var express	= require('express');
var url 	= require('url');

// Models
var User = require('../models/userModel.js');

var router 	= express.Router();

router.get('/', function(req, res) {
	res.json(req.query);
});

module.exports = router;