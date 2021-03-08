const routes = require('express').Router();
const Tasks = require('../src/schema/task');
const { json } = require('express');

routes.post('/addtask', (req, res) => {
    const task = new Tasks({
        _id: req.body._id,
        description: req.body.description,
        duedate: req.body.duedate,
        done: req.body.done,
        hide: req.body.hide
    });

    task.save().then(result => {
        console.log(result);
        console.log("teste - ok");
        return res.json(result);
    }).catch(error => {
        console.log(error);
    });

});


routes.get('/alltask', (req, res) => {
    Tasks.find({}).then(function (tasks) {
        res.send(tasks);
    });

});

routes.delete('/deleteTask', (req, res) => {
    console.log(req.body);

    Tasks.findOneAndDelete({ _id: req.body._id }, function (err, docs) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(docs);
        }
    });

});

routes.put('/updateTask', (req, res) => {
    console.log("doc");
    Tasks.findOneAndUpdate({ _id: req.body._id }, {
        description: req.body.description,
        duedate: req.body.duedate,
        done: req.body.done,
        hide: req.body.hide
    }, { new: true }, (err, doc) => {
        if (err) {
            res.send(error);
        }

        res.send(doc);
    });


})


module.exports = routes;