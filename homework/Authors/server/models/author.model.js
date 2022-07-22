const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be 3 characters long!"]
    }
    // age: {
    //     type: Number;
    //     required: [true, "Age is required!"],
    //     min: [0, "0 is the least you can have."]
    // },
    // email: { type: String, required: [true, "Email is required"]},
    
    // // optional data
    // Date: {
    //     type: Date
    // },
    // Boolean: {
    //     type: Boolean
    // }
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;