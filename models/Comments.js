const mongoose = require("mongoose");

const Comments = mongoose.model('Comments', {
    name: Integer,
    comment: String,
    date: Date
})

module.exports = Comments;