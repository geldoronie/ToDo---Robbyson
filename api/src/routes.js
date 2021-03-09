const routes = require('express').Router();
const Tasks = require('../src/schema/task');

routes.post('/addtask', (req, res) => {
    const task = new Tasks({
        _id: req.body._id,
        description: req.body.description,
        duedate: req.body.duedate,
        done: req.body.done,
        hide: req.body.hide
    });

    task.save().then(result => {

        return res.status(200).json(result);
    }).catch(error => {
        return res.status(500).json(error);
    });

});


routes.get('/alltask', (req, res) => {
    Tasks.find({}).then(function (tasks) {
        return res.status(200).send(tasks);
    });

});

routes.delete('/deleteTask', (req, res) => {

    Tasks.findOneAndDelete({ _id: req.body._id }, function (err, docs) {
        if (err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(docs);
        }
    });

});

routes.post('/findTask', (req, res) => {
    Tasks.find({ description: { $regex: req.body.description, $options: "i" } }, function (err, docs) {

        if (err) {
            return res.status(500).send(err);
        } else {
            return res.status(200).send(docs);
        }
    })


});

routes.put('/updateTask', (req, res) => {
    Tasks.findOneAndUpdate({ _id: req.body._id }, {
        description: req.body.description,
        duedate: req.body.duedate,
        done: req.body.done,
        hide: req.body.hide
    }, { new: true }, (err, data) => {
        if (err) {
            return res.status(500).send(error);
        }

        return res.status(200).send(data);
    });


})


module.exports = routes;