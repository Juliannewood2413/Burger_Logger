
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


const routes = require('./burger/controllers/burgers_controller.js');

app.use(routes);

//Start server
app.listen(PORT, () => 
    console.log(`Listening on: http://localhost:${PORT}`)
);



