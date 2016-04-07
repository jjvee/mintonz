var express = require('express');
var router = express.Router();
var tourname = "";
/* GET home page. */
router.get('/', function(req, res, next) {
	var mysql      = require('mysql');
	
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'rhfksl',
	  database : 'mintonz'
	});

	connection.connect();
	
	connection.query('SELECT * FROM tournament', function(err, rows, fields) {
	  if (err) throw err;

	  tourname = rows[0].tourname;
	  console.log('hey' + tourname);
	  res.render('index', { title: tourname });
	  connection.end();
	});
	
});

module.exports = router;