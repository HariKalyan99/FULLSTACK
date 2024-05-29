const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    userId: {type: Number}
})

const feedSchema = new mongoose.Schema({
    title: {type: String, required: true, maxlength: 100},
    author: {type: [authorSchema]},
    userName: {type: String, unique: true},
    tags: {type: [String]},
    reactions: {type: Number, default: 0}
}, {timestamps: true})

const feedModel = new mongoose.model("Feeds", feedSchema, "feed");

module.exports = feedModel;