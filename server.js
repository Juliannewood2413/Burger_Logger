const mysql = require('mysql');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//PORT
const PORT = process.env.PORT || 8080;

//Tells express to serve content from public directory   
app.use(express.static('public'));

//Express - data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('handlebars', exphbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'A55hole!',
    database: 'burgers_db'
});

//sends index.handlebars to the root route
app.get('/', (req, res) => {
    connection.query('SELECT * FROM burgers', (err, data) => {
        if (err) {
            return res.status(500).end();
        }

        res.render('index', {burgers: data});
    });
});

//add post, put and delete here




//Start server
app.listen(PORT, () => 
    console.log(`Listening on: http://localhost:${PORT}`)
);



