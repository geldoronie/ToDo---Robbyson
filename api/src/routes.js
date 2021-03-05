const routes = require('express').Router();

const { json } = require('express');

var isodate = new Date().toISOString()

routes.get('/getToDo', (req, res) => {
    return res.json({
        "_id": "ObjectID()",
        "description": 'Modelar Arquitetura de Software',
        "duedate": isodate,
        "done": false,
        "hide": false
    });
});

routes.post('/findToDo', (req, res) => {
    return res.json({ });
});

routes.put('/updateToDo', (req, res) => {
    return res.json({ "_id": 200, response: 'MCI-API', error: "" });
});

routes.put('/deleteToDo', (req, res) => {
    return res.json({ "_id": 200, response: 'MCI-API', error: "" });
});



module.exports = routes;