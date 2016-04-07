function runQuery(sqlQuery) {
	var mysql = require('mysql');

	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'rhfksl',
	  database : 'mintonz'
	});

	connection.connect();
	
	connection.query('SELECT * FROM tournament', function(err, rows, fields) {
	  if (err) throw err;
	  connection.end();
	});
}