const mongoose = require("mongoose");

const Comments = mongoose.model('Comments', {
    name: Number,
    comment: String,
    date: Date
})

module.exports = Comments;