const   mongoose = require('mongoose'),
        Schema = mongoose.Schema

const articleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
},{
    timestamps: true
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article