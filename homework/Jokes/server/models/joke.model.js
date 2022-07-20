const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: 'Please provide a setup',
        minlength: 10
    },
    punchline: {
        type: String,
        required: 'Please provide a punchline',
        minlength: 3
    }
})

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;