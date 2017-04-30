var path = require('path');
var router = require('express').Router();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

router.route('/')
	.get(function (req, res) {
		res.sendFile(path.join(__dirname, '../../client/index.html'));
	})
	.post(jsonParser, function(req, res) {
		console.log(req.body);
	});

module.exports = router;