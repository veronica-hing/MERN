const Author = require('../models/author.model');

module.exports.findAllAuthors = (req, res) =>{
    Author.find()
    .then(allAuthors =>{
        res.json(allAuthors)
    })
    .catch(err=>{
        res.json(err)
    })
}
module.exports.createNewAuthor = (req, res) =>{
    Author.create(req.body)
    .then(newlyCreatedAuthor =>{
        res.json(newlyCreatedAuthor)
    })
    .catch(err=>{
        res.json(err)
    })
}
module.exports.findOneAuthor = (req, res) =>{
    Author.findOne({_id: req.params.id})
    .then( author =>{
        res.json(author)
    })
    .catch(err=>{
        res.json(err)
    })
}
module.exports.updateOneAuthor = (req, res) =>{
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedAuthor =>{
        res.json(updatedAuthor)
    })
    .catch(err=>{
        res.json(err)
    })
}
module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({_id: req.params.id})
    .then(author =>{
        res.json(author)
    })
    .catch(err=>{
        res.json(err)
    })
}