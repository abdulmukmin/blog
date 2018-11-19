const   User = require('../models/user.js'),
        mailer = require('../helpers/mailer.js'),
        HashToken = require('../helpers/HashToken'),
        jwt = require('jsonwebtoken');

class UserController{

    static register(req, res){
        console.log(`masuk register`)
        let regexUsername = /^([a-zA-Z0-9_-]){4,20}$/,
            isUsernameValid = regexUsername.test(req.body.username);

        let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            isEmailValid = emailRegex.test(req.body.email);
        
        if (!req.body.username || (isUsernameValid === false) || !req.body.email || (isEmailValid === false) ) {
            res.status(400).json({ 'message' : 'Invalid input'})
        }
        else {
            User.findOne({username: req.body.username})
            .then( user => {
                if (user){
                    res.status(400).json({ 'message' : 'Try another username'})
                }
                else {
                    User.findOne({email: req.body.email})
                    .then( user => {
                        if (user){
                            let subject = `Seseorang mencoba mendaftar menggunakan email anda!`
                            let resultText = `Apakah anda yang mencoba melakukan register kembali di poll tutorPoint? tetapi anda sudah terdaftar! Silahkan masuk melalui link ini`
                            mailer ( user.email, subject, resultText, (err ) => {
                                if ( err) res.status(500).json({'found error':err})
                                else res.status(200).json( {'message':'To complete the sign up process, you need to check your emails and click a link'} )
                            })
                        }
                        else {
                            let randomPassword = Math.random().toString(36).slice(-8);
                            let user = new User({
                                username: req.body.username,
                                email: req.body.email,
                                password: randomPassword,
                                role: req.body.role || 'notAdmin'
                            })
                            user.save( (err, data) => {
                                console.log(data)
                                if (err) {
                                    res.status(500).json({'found error':err})
                                }
                                else {
                                    let subject = `password poll tutorialPoint anda`
                                    let resultText = `password poll tutorPoint adalah ${randomPassword} , silahkan lakukan perubahan untuk keamanan akun anda`
                                    mailer ( data.email, subject, resultText, (err ) => {
                                        console.log(`masuk mailer send password`)
                                        console.log(err)
                                        if ( err) res.status(500).json({'found error':err})
                                        else res.status(200).json( data )
                                    })
                                }
                            })
                        }
                    })
                }
            })
            
        }
    }

    static signIn(req, res){

        if (!req.body.username || !req.body.password) {
            res.status(400).json({ 'message' : 'Invalid input'})
        } else {

            User.findOne({username: req.body.username})
            .populate('author')
            .then( user => {
                console.log(`masuk findOne`)
                if (user){
                    let hash = HashToken.encryp( req.body.password, user.salt)
                    if ( user.password === hash ){
                        console.log(`masuk hasil find one dan telah di hash`)
                        console.log(user)
                        
                        let data = { id : user._id, role : user.role},
                            jToken = jwt.sign( data, process.env.jSecret),
                            myId = user._id,
                            myRole = user.role;
                        res.status(200).json( {jToken, myRole, myId} )
                    }
                    else {
                        res.status(400).json({ 'message' : 'your username or password is incorrect'})    
                    }
                }
                else {
                    res.status(400).json({ 'message' : 'your username or password is incorrect'})
                }
            })
        }
    }

    static editProfile(req, res){
        let regexUsername = /^([a-zA-Z0-9_-]){4,20}$/,
            isUsernameValid = regexUsername.test(req.body.username);

        let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            isEmailValid = emailRegex.test(req.body.email);

        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            isPasswordStrong = passwordRegex.test(req.body.password);
        
        if (!req.body.username || (isUsernameValid === false) || !req.body.role || !req.body.password || !req.body.email || (isEmailValid===false) || (isPasswordStrong === false)){
            res.status(400).json({ 'message': 'Invalid input', test: req.body})
        }
        else {
            res.status(200).json({'message': 'Success'})
        }
    }

    static deleteProfile(req, res){
        
    }

    static listUser(req, res){
        
    }

    static editUser(req, res){
        
    }

}

module.exports = UserController