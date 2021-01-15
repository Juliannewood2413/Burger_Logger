//Routes
const express = require('express');

const router = express.Router();
//uses db functions from burger.js
const burger = require('../models/burger.js');

//Main page / all burgers
router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {  //creating handlebars object
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject) //render handlebars object to index.handlebars
    });
});

router.post('/api/burgers/create', (req, res) => {
    burger.create(req.body.burger_name, (result) => {
        console.log(result);
        res.redirect('/');
    });
});

router.put('/burgers/:id', (req, res) => {
    burger.update(req.params.id, (result) => {
        console.log(result);
        res.sendStatus(200);
    })
});

router.delete('/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    burger.delete(condition, (result) => {
        if(result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports = router;

