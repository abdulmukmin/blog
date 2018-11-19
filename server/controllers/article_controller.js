const   Article = require('../models/article.js');

class ArticleController{

    static create(req, res){
        console.log(`masuk create article`)
        console.log(req.body)
        console.log(req.headers)
        if (!req.body.title || !req.body.description || !req.headers.myid){
            res.status(400).json({'message':'Invalid input'})
        }
        else {
            let article = new Article({
                title: req.body.title,
                description: req.body.description,
                author: req.headers.myid,
            })
            article.save((err, data)=> {
                if (err){
                    res.status(400).json({'error found':'call developer!'})
                }
                else {
                    res.status(200).json({data})
                }
            })
        }
    }

    static readOwnArticle(req, res){
        console.log(`masuk readown  article`)
        console.log(req.headers.myid)
        Article.find({author: req.headers.myid})
        .then( articles => {
            res.status(200).json( {articles} )
        })
        .catch( err => {
            res.status(200).json( {'error found':'call developer!'} )
        })

    }

    static readAll(req, res){
        console.log(`hasil read all`)
        Article.find()
        .then( articles => {
            console.log(`hasil read all`)
            console.log(articles)
            res.status(200).json( {articles} )
        })
        .catch( err => {
            res.status(200).json( {'error found':'call developer!'} )
        })

    }

    static update ( req, res ) {
        console.log(`masuk update`)
        Article.updateOne({_id: req.params.id},{
            title: req.body.title,
            description: req.body.description,
            author: req.headers.myid,
        })
            .then( article => {
                console.log( `masuk user`)
                console.log(article)
                res.status(200).json( article )
            })
            .catch( err => {
                console.log( err )
                res.status(500).json( err )
            })
    }

    static delete ( req, res ) {
        console.log(`masuk delete`)
        Article.deleteOne({_id: req.params.id})
            .then( result => {
                res.status(200).json( result )
            })
            .catch( err => {
                res.status(500).json( err )
            })
    }
}

module.exports = ArticleController