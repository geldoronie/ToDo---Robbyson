const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    _id: String,
    description: String,
    duedate: Date,
    done: Boolean,
    hide: Boolean
})

module.exports = mongoose.model('Tasks',taskSchema)