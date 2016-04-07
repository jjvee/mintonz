var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	console.log("createGameProc");
	console.log(req.body);
	res.end();
});

module.exports = router;