var COMMON = require('./common');

function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable : true,
    });
}

define("HOST_URL",  'localhost');
define("HOST_ID",  'root');
define("HOST_PASSWORD",  'rhfksl');
define("HOST_DATABASE",  'mintonz');

module.exports = {    
    
    getConnection : function ()
    {
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
          host     : COMMON.HOST_URL ,
          user     : COMMON.HOST_ID,
          password : COMMON.HOST_PASSWORD,
          database : COMMON.HOST_DATABASE
        });
        return connection;
    }
}