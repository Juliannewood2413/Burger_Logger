const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: 'A55hole!',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        console.error(`Error in connecting: ${err.stack}`)
        return;
    }
    console.log(`Connected as id ${connection.threadId}`)
});

//export connection for ORM use
module.exports = connection;
