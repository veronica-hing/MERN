const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokesAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the Jokes database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
