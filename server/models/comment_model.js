const mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    likes: {type: Number, default:0,},
    
    
}, {timestamps: true})

mongoose.model('Comment', CommentSchema)
module.exports =  CommentSchema;