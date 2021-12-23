const mysql = require('mysql');

const conn = mysql.createConnection(config: {
	host: "localhost",
	user: "root",
	database: "yii2basic",
	Password: ""
});
conn.connect (options: err => {
	if (err) {
		console.log(err);
		return err;
	}
	else {
		console.log('Database ----OK');
	}
});
	