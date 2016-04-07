var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('./game/createGame');
	res.end();
});

module.exports = router;