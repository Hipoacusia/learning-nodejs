const mysql = require('mysql');

module.exports= () =>{
  return mysql.createConnection({
	 host: 'localhost',
	 user: 'root',
	 password: '25798552Jose',
	 database: 'news_portal'

  });
}

