const mongoose = require('mongoose');
const CommentSchema = require('./comment_model')
var PetSchema = new mongoose.Schema({
    name: { type: String, 
        required: [true, "Name is required "],
         minlength: [2, "Name should be more the 1 character"] },
    type: { type: String,
        required: [true, "Type is required "],
        minlength: [2, "Type should be more the 1 character"] },
    description: { type: String},
    skill1: { type: String },
    skill2: { type: String },
    skill3: { type: String },
    likes: {type: Array},
}, {timestamps: true})

mongoose.model('Pet', PetSchema)